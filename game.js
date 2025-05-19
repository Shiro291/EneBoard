// Game state
const board = document.getElementById('board');
const dice = document.getElementById('dice');
const players = [0, 0, 0, 0];
let currentPlayer = 0;
const scores = [0, 0, 0, 0];
const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
const nextBtn = document.getElementById('next-btn');
let currentLevel = 1;
let finishedPlayers = [];

// Audio elements
const diceRoll = new Audio('sounds/dice.mp3');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');
const finishSound = new Audio('sounds/finish.mp3');
const levelMusic = [
    new Audio('sounds/level1.mp3'),
    new Audio('sounds/level2.mp3'),
    new Audio('sounds/level3.mp3')
];

// Initialize game
updateBoard();
updateLeaderboard();
setupEventListeners();

function setupEventListeners() {
    dice.addEventListener('click', () => {
        playSound(diceRoll);
        rollDice();
    });
    
    nextBtn.addEventListener('click', goToNextLevel);
    
    document.getElementById('close-modal').addEventListener('click', closeModal);
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    players.forEach((_, playerIndex) => {
        const playerName = `Pemain ${playerIndex + 1}`;
        const playerScore = scores[playerIndex];
        const listItem = document.createElement('li');
        listItem.textContent = `${playerName}: ${playerScore} poin`;
        leaderboardList.appendChild(listItem);
    });
}

function showModal(title, text, options = [], imageUrl = '') {
    const modal = document.getElementById('question-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const optionsContainer = document.getElementById('options-container');
    
    // Add image if provided
    let modalContent = '';
    if (imageUrl) {
        modalContent += `<img src="${imageUrl}" class="w-full h-48 object-cover mb-4">`;
    }
    
    // Add text content
    modalContent += text;
    
    modalTitle.textContent = title;
    modalText.innerHTML = modalContent;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add options with optional images
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full mt-2";
        button.innerHTML = `
            ${option.imageUrl ? `<img src="${option.imageUrl}" class="h-6 inline mr-2">` : ''}
            ${option.text}
        `;
        button.onclick = () => {
            eval(option.action);
            closeModal();
        };
        optionsContainer.appendChild(button);
    });
    
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('question-modal');
    modal.classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
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
            showModal('Info', infoContent, []);
            break;
        case 'reward':
            scores[playerIndex] += 10;
            updateLeaderboard();
            playSound(correctSound);
            break;
        case 'finish':
            if (!finishedPlayers.includes(playerIndex)) {
                finishedPlayers.push(playerIndex);
                showFinishMessage(playerIndex);
            }
            break;
    }
}

function checkAnswer(isCorrect, playerIndex) {
    if (isCorrect) {
        scores[playerIndex] += 10;
        updateLeaderboard();
        playSound(correctSound);
    } else {
        playSound(wrongSound);
        alert('Jawaban salah! Coba lagi!');
    }
}

function validateChallenge(playerIndex) {
    // Simulate correct answer
    scores[playerIndex] += 20;
    leaderboard.push({ name: `Pemain ${playerIndex + 1}`, score: scores[playerIndex] });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    updateLeaderboard();
    playSound(correctSound);
    closeModal();
}

function rollDice() {
    const steps = Math.floor(Math.random() * 3) + 1;
    movePlayer(currentPlayer, steps);
    
    const maxTileIndex = levels[`level${currentLevel}`].length - 1;
    if (players[currentPlayer] === maxTileIndex) {
        showFinishMessage(currentPlayer);
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
    const currentPlayerElement = document.getElementById('current-player');
    currentPlayerElement.textContent = `Giliran: Pemain ${currentPlayer + 1}`;
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
                playerIndicator.className = `player-indicator absolute font-bold text-white flex items-center justify-center`;
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
                playerIndicator.style.backgroundColor = playerColors[playerIndex % playerColors.length];
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
    playSound(finishSound);
    alert(`Pemain ${playerIndex + 1} menyelesaikan level ${currentLevel}!`);
    
    // Show next level button if at least one player finishes
    if (finishedPlayers.length >= 1) {
        document.getElementById('next-level').classList.remove('hidden');
    }
}

function goToNextLevel() {
    if (currentLevel < 3) {
        currentLevel++;
        players = [0, 0, 0, 0];
        finishedPlayers = [];
        document.getElementById('next-level').classList.add('hidden');
        currentPlayer = 0;
        updateCurrentPlayer();
        updateBoard();
        updateLeaderboard();
    }
}

function playSound(sound) {
    if (!sound) return;
    sound.currentTime = 0;
    sound.play().catch(() => {}); // Handle autoplay restrictions
}

function saveLeaderboard() {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}
