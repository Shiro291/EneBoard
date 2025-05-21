// Game state
let currentLevel = 1;
const board = document.getElementById('board');
const dice = document.getElementById('dice');
const nextBtn = document.getElementById('next-level');
const currentPlayerDisplay = document.getElementById('current-player');
const leaderboardList = document.getElementById('leaderboard-list');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const optionsContainer = document.getElementById('options-container');
const closeModalBtn = document.getElementById('close-modal');

let players = [0, 0, 0, 0]; // Player positions
let currentPlayer = 0;
let scores = [0, 0, 0, 0]; // Player scores
let finishedPlayers = []; // Track finished players

// Initialize game
updateBoard();
updateLeaderboard();

// Event Listeners
dice.addEventListener('click', rollDice);
nextBtn.addEventListener('click', goToNextLevel);
closeModalBtn.addEventListener('click', closeModal);

// Add debug button functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard shortcut for testing (press 1/2/3)
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '3') {
            setDebugLevel(parseInt(e.key));
        }
    });
});

function setDebugLevel(level) {
    const newLevel = typeof level === 'number' ? level : parseInt(document.getElementById('debug-level').value);
    
    if (isNaN(newLevel) || newLevel < 1 || newLevel > 3) return;
    
    currentLevel = newLevel;
    players = [0, 0, 0, 0];
    currentPlayer = 0;
    finishedPlayers = [];
    updateBoard();
    updateLeaderboard();
    document.getElementById('current-level').textContent = currentLevel;
    nextBtn.classList.add('hidden');
}

function updateLeaderboard() {
    leaderboardList.innerHTML = '';
    players.forEach((_, playerIndex) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Pemain ${playerIndex + 1}: ${scores[playerIndex]} poin`;
        leaderboardList.appendChild(listItem);
    });
}

// Fisher-Yates shuffle algorithm for randomizing options
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showModal(title, text, options = [], imageUrl = '') {
    // Add image if provided
    let modalContent = '';
    if (imageUrl) {
        modalContent += `<img src="${imageUrl}" class="modal-image">`;
    }
    
    // Add text content
    modalContent += text;
    
    modalTitle.textContent = title;
    modalText.innerHTML = modalContent;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Randomize options
    const randomizedOptions = shuffleArray(options);
    
    // Add options with optional images
    randomizedOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full mt-2";
        button.innerHTML = `
            ${option.imageUrl ? `<img src="${option.imageUrl}" class="inline mr-2 modal-option-image">` : ''}
            ${option.text}
        `;
        button.onclick = () => {
            eval(option.action);
            closeModal();
        };
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('question-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('question-modal').classList.add('hidden');
    optionsContainer.innerHTML = '';
}

function checkTile(tileIndex, playerIndex) {
    const currentLevelData = levels[`level${currentLevel}`][tileIndex];
    
    switch (currentLevelData.type) {
        case 'quiz':
            showModal(
                'Quiz Time!', 
                currentLevelData.question, 
                currentLevelData.options.map(option => ({
                    text: option.text,
                    action: `checkAnswer(${option.correct}, ${playerIndex})`,
                    imageUrl: option.imageUrl || ''
                })),
                currentLevelData.imageUrl || ''
            );
            break;
        case 'challenge':
            showModal(
                'Challenge!', 
                currentLevelData.task, 
                [{
                    text: 'Submit', 
                    action: `validateChallenge(${playerIndex})`
                }]
            );
            break;
        case 'info':
            const infoContent = `
                <p>${currentLevelData.content}</p>
                ${currentLevelData.example ? `<p class="mt-2 text-sm text-gray-500">Contoh: ${currentLevelData.example}</p>` : ''}
            `;
            showModal('Info', infoContent, [], currentLevelData.imageUrl || '');
            break;
        case 'reward':
            scores[playerIndex] += 10;
            updateLeaderboard();
            break;
        case 'finish':
            if (!finishedPlayers.includes(playerIndex)) {
                finishedPlayers.push(playerIndex);
                showFinishMessage(playerIndex);
                
                // Show next level button if at least one player finishes
                if (finishedPlayers.length >= 1) {
                    nextBtn.classList.remove('hidden');
                }
            }
            break;
    }
}

function checkAnswer(isCorrect, playerIndex) {
    if (isCorrect) {
        scores[playerIndex] += 10;
        updateLeaderboard();
    } else {
        alert('Jawaban salah! Coba lagi!');
    }
}

function validateChallenge(playerIndex) {
    // Simulate correct answer
    scores[playerIndex] += 20;
    updateLeaderboard();
}

function rollDice() {
    const steps = Math.floor(Math.random() * 3) + 1;
    movePlayer(currentPlayer, steps);
    
    const maxTileIndex = levels[`level${currentLevel}`].length - 1;
    if (players[currentPlayer] === maxTileIndex) {
        showFinishMessage(currentPlayer);
        nextBtn.classList.remove('hidden');
    }
    
    // Move to next player
    let nextPlayer = (currentPlayer + 1) % players.length;
    
    // Skip finished players
    while (finishedPlayers.includes(nextPlayer) && nextPlayer < players.length) {
        nextPlayer = (nextPlayer + 1) % players.length;
    }
    
    currentPlayer = nextPlayer;
    updateCurrentPlayer();
}

function updateCurrentPlayer() {
    currentPlayerDisplay.textContent = `Giliran: Pemain ${currentPlayer + 1}`;
}

function movePlayer(playerIndex, steps) {
    players[playerIndex] += steps;
    const maxTileIndex = levels[`level${currentLevel}`].length - 1;
    
    if (players[playerIndex] > maxTileIndex) {
        players[playerIndex] = maxTileIndex;
    }
    
    updateBoard();
    checkTile(players[playerIndex], playerIndex);
}

function updateBoard() {
    const currentLevelData = levels[`level${currentLevel}`];
    board.innerHTML = '';
    
    // Player colors
    const playerColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
    
    currentLevelData.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.className = `tile flex flex-col items-center justify-center text-center p-4 rounded-lg border-2 ${getTileColor(tile.type)}`;
        
        // Add tile icon and number
        tileElement.innerHTML = `
            <div class="text-3xl mb-2">${tile.icon || ''}</div>
            <div class="text-xs mt-auto">${index + 1}</div>
        `;
        
        // Add player indicators in fixed corners
        players.forEach((position, playerIndex) => {
            if (position === index) {
                const playerIndicator = document.createElement('div');
                playerIndicator.className = `player-indicator ${playerColors[playerIndex % playerColors.length]} absolute font-bold text-white flex items-center justify-center`;
                playerIndicator.textContent = playerIndex + 1;
                
                // Position based on player index
                switch(playerIndex) {
                    case 0: // Top-left
                        playerIndicator.style.top = '2px';
                        playerIndicator.style.left = '2px';
                        break;
                    case 1: // Top-right
                        playerIndicator.style.top = '2px';
                        playerIndicator.style.right = '2px';
                        break;
                    case 2: // Bottom-right
                        playerIndicator.style.bottom = '2px';
                        playerIndicator.style.right = '2px';
                        break;
                    case 3: // Bottom-left
                        playerIndicator.style.bottom = '2px';
                        playerIndicator.style.left = '2px';
                        break;
                }
                
                // Style the indicator
                playerIndicator.style.width = '20px';
                playerIndicator.style.height = '20px';
                playerIndicator.style.borderRadius = '50%';
                tileElement.appendChild(playerIndicator);
            }
        });
        
        board.appendChild(tileElement);
    });
}

function getTileColor(type) {
    return {
        start: 'bg-green-200 border-green-500',
        info: 'bg-blue-200 border-blue-500',
        quiz: 'bg-yellow-200 border-yellow-500',
        challenge: 'bg-orange-200 border-orange-500',
        reward: 'bg-purple-200 border-purple-500',
        finish: 'bg-red-200 border-red-500'
    }[type] || 'bg-gray-200 border-gray-400';
}

function showFinishMessage(playerIndex) {
    alert(`Pemain ${playerIndex + 1} menyelesaikan level ${currentLevel}!`);
}

function goToNextLevel() {
    if (currentLevel < 3) {
        currentLevel++;
        players = [0, 0, 0, 0];
        finishedPlayers = [];
        nextBtn.classList.add('hidden');
        currentPlayer = 0;
        updateCurrentPlayer();
        updateBoard();
        updateLeaderboard();
        document.getElementById('current-level').textContent = currentLevel;
    }
}
