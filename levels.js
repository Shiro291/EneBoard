const levels = {
    level1: [
        // 1. Start
        { type: 'start', content: 'Selamat datang di dunia energi!', icon: '🏁' },
        // 2. Info: Pengertian Energi
        { 
            type: 'info', 
            content: 'Energi adalah kemampuan untuk melakukan usaha atau aktivitas', 
            example: 'Contoh: Lampu menyala menggunakan energi listrik',
            imageUrl: 'assets/energy-definition.jpg', // Placeholder image
            icon: '⚡'
        },
        // 3. Quiz C1: Pengertian Energi
        { 
            type: 'quiz', 
            question: 'Apa pengertian energi?',
            imageUrl: 'assets/question-1.jpg', // Placeholder image
            options: [
                { 
                    text: 'Kemampuan untuk bergerak', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg' // Placeholder image
                },
                { 
                    text: 'Kemampuan melakukan usaha', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Benda yang menghasilkan panas', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '💡'
        },
        // 4. Info: Sumber Energi Tak Terbarukan
        { 
            type: 'info', 
            content: 'Sumber energi terbagi menjadi terbarukan dan tak terbarukan',
            example: 'Matahari termasuk energi terbarukan',
            imageUrl: 'assets/non-renewable-sources.jpg', // Placeholder image
            icon: '☀️'
        },
        // 5. Quiz C2: Sumber Energi Tak Terbarukan
        { 
            type: 'quiz', 
            question: 'Manakah sumber energi tak terbarukan?',
            imageUrl: 'assets/question-2.jpg', // Placeholder image
            options: [
                { 
                    text: 'Matahari', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Batu bara', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Angin', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🔥'
        },
        // 6. Reward: +10 Poin
        { 
            type: 'reward', 
            content: '+10 Poin! 🌟 Pahami sumber energi dengan baik!',
            icon: '⭐'
        },
        // 7. Info: Fotosintesis
        { 
            type: 'info', 
            content: 'Tumbuhan memanfaatkan energi matahari untuk fotosintesis',
            example: 'Proses membuat makanan dari cahaya',
            imageUrl: 'assets/photosynthesis.jpg', // Placeholder image
            icon: '🌱'
        },
        // 8. Quiz C3: Sumber Energi Fotosintesis
        { 
            type: 'quiz', 
            question: 'Sumber energi utama untuk fotosintesis adalah...',
            imageUrl: 'assets/question-3.jpg', // Placeholder image
            options: [
                { 
                    text: 'Matahari', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Listrik', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Baterai', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🌻'
        },
        // 9. Info: Energi Listrik Rumah
        { 
            type: 'info', 
            content: 'Listrik adalah energi yang paling sering digunakan di rumah',
            example: 'Contoh: TV, Kulkas, Lampu',
            imageUrl: 'assets/home-electricity.jpg', // Placeholder image
            icon: '🔌'
        },
        // 10. Quiz C4: Sumber Energi Rumah
        { 
            type: 'quiz', 
            question: 'Contoh sumber energi di rumah adalah...',
            imageUrl: 'assets/question-4.jpg', // Placeholder image
            options: [
                { 
                    text: 'Angin', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Listrik', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Minyak bumi', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🏠'
        },
        // 11. Info: Benda Bukan Sumber Energi
        { 
            type: 'info', 
            content: 'Benda mati tidak bisa menghasilkan energi sendiri',
            example: 'Contoh: Batu, Kursi, Buku',
            imageUrl: 'assets/non-energy-objects.jpg', // Placeholder image
            icon: '📚'
        },
        // 12. Quiz C5: Bukan Sumber Energi
        { 
            type: 'quiz', 
            question: 'Manakah yang BUKAN sumber energi?',
            imageUrl: 'assets/question-5.jpg', // Placeholder image
            options: [
                { 
                    text: 'Matahari', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Baterai', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Batu', 
                    correct: true,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '❌'
        },
        // 13. Info: Bentuk Energi
        { 
            type: 'info', 
            content: 'Energi memiliki berbagai bentuk: cahaya, gerak, panas, bunyi',
            example: 'Lampu menghasilkan energi cahaya',
            imageUrl: 'assets/energy-forms.jpg', // Placeholder image
            icon: '🌈'
        },
        // 14. Quiz C6: Bentuk Energi Lampu
        { 
            type: 'quiz', 
            question: 'Bentuk energi yang dihasilkan lampu adalah...',
            imageUrl: 'assets/question-6.jpg', // Placeholder image
            options: [
                { 
                    text: 'Cahaya', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Panas', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '💡'
        },
        // 15. Finish Level 1
        { 
            type: 'finish', 
            content: 'Level 1 Selesai! Lanjut ke transformasi energi!',
            icon: '🏆'
        }
    ],
    level2: [
        // 1. Start Level 2
        { type: 'start', content: 'Siap belajar perubahan energi?', icon: '🏁' },
        // 2. Info: Transformasi Dasar
        { 
            type: 'info', 
            content: 'Energi bisa berubah bentuk melalui alat tertentu',
            example: 'Setrika: Listrik → Panas',
            imageUrl: 'assets/energy-transformation.jpg', // Placeholder image
            icon: '🔄'
        },
        // 3. Quiz C7: Perubahan Energi Lampu
        { 
            type: 'quiz', 
            question: 'Perubahan energi di lampu?',
            imageUrl: 'assets/question-7.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik → Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Listrik → Cahaya', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Baterai → Bunyi', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '💡'
        },
        // 4. Info: Energi Bunyi
        { 
            type: 'info', 
            content: 'Alat musik mengubah energi gerak menjadi bunyi',
            example: 'Gitar: Gerakan tangan → Bunyi',
            imageUrl: 'assets/sound-energy.jpg', // Placeholder image
            icon: '🔊'
        },
        // 5. Quiz C8: Transformasi Kipas Angin
        { 
            type: 'quiz', 
            question: 'Perubahan energi di kipas angin?',
            imageUrl: 'assets/question-8.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik → Gerak', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Kimia → Panas', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Cahaya → Bunyi', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🌀'
        },
        // 6. Reward: +15 Poin
        { 
            type: 'reward', 
            content: '+15 Poin! 🌟 Kuasai transformasi energi!',
            icon: '⭐'
        },
        // 7. Info: Energi Kimia
        { 
            type: 'info', 
            content: 'Bensin menyimpan energi kimia',
            example: 'Mobil: Bensin → Gerak',
            imageUrl: 'assets/chemical-energy.jpg', // Placeholder image
            icon: '🚗'
        },
        // 8. Quiz C9: Energi Mobil
        { 
            type: 'quiz', 
            question: 'Energi apa yang menggerakkan mobil?',
            imageUrl: 'assets/question-9.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Bensin (Kimia → Gerak)', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Angin', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '⛽'
        },
        // 9. Info: Panel Surya
        { 
            type: 'info', 
            content: 'Panel surya mengubah cahaya → listrik',
            example: 'Digunakan di kalkulator surya',
            imageUrl: 'assets/solar-panel.jpg', // Placeholder image
            icon: '☀️'
        },
        // 10. Quiz C10: Transformasi Kompor Gas
        { 
            type: 'quiz', 
            question: 'Perubahan energi di kompor gas?',
            imageUrl: 'assets/question-10.jpg', // Placeholder image
            options: [
                { 
                    text: 'Kimia → Panas', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Listrik → Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Panas → Cahaya', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🔥'
        },
        // 11. Info: PLTA
        { 
            type: 'info', 
            content: 'PLTA menggunakan air untuk menghasilkan listrik',
            example: 'Air → Gerak turbin → Listrik',
            imageUrl: 'assets/hydro-power.jpg', // Placeholder image
            icon: '🌊'
        },
        // 12. Quiz C11: Urutan PLN
        { 
            type: 'quiz', 
            question: 'Urutan energi di PLN?',
            imageUrl: 'assets/question-11.jpg', // Placeholder image
            options: [
                { 
                    text: 'Batu bara → Panas → Listrik', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Angin → Listrik → Cahaya', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Matahari → Kimia → Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🏭'
        },
        // 13. Info: Blender
        { 
            type: 'info', 
            content: 'Blender mengubah listrik → gerak → menghancurkan buah',
            example: 'Contoh transformasi energi bertahap',
            imageUrl: 'assets/blender-energy.jpg', // Placeholder image
            icon: '料理'
        },
        // 14. Quiz C12: Transformasi Blender
        { 
            type: 'quiz', 
            question: 'Urutan transformasi energi di blender?',
            imageUrl: 'assets/question-12.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik → Gerak (motor) → Menghancurkan buah', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Gerak → Listrik → Cahaya', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Panas → Kimia → Listrik', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '⚡'
        },
        // 15. Finish Level 2
        { 
            type: 'finish', 
            content: 'Level 2 Tuntas! Menuju energi alternatif!',
            icon: '🏆'
        }
    ],
    level3: [
        // 1. Start Level 2
        { type: 'start', content: 'Siap belajar perubahan energi?', icon: '🏁' },
        // 2. Info: Transformasi Dasar
        { 
            type: 'info', 
            content: 'Energi bisa berubah bentuk melalui alat tertentu',
            example: 'Setrika: Listrik → Panas',
            imageUrl: 'assets/energy-transformation.jpg', // Placeholder image
            icon: '🔄'
        },
        // 3. Quiz C7: Perubahan Energi Lampu
        { 
            type: 'quiz', 
            question: 'Perubahan energi di lampu?',
            imageUrl: 'assets/question-7.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik → Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Listrik → Cahaya', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Baterai → Bunyi', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '💡'
        },
        // 4. Info: Energi Bunyi
        { 
            type: 'info', 
            content: 'Alat musik mengubah energi gerak menjadi bunyi',
            example: 'Gitar: Gerakan tangan → Bunyi',
            imageUrl: 'assets/sound-energy.jpg', // Placeholder image
            icon: '🔊'
        },
        // 5. Quiz C8: Transformasi Kipas Angin
        { 
            type: 'quiz', 
            question: 'Perubahan energi di kipas angin?',
            imageUrl: 'assets/question-8.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik → Gerak', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Kimia → Panas', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Cahaya → Bunyi', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🌀'
        },
        // 6. Reward: +15 Poin
        { 
            type: 'reward', 
            content: '+15 Poin! 🌟 Kuasai transformasi energi!',
            icon: '⭐'
        },
        // 7. Info: Energi Kimia
        { 
            type: 'info', 
            content: 'Bensin menyimpan energi kimia',
            example: 'Mobil: Bensin → Gerak',
            imageUrl: 'assets/chemical-energy.jpg', // Placeholder image
            icon: '🚗'
        },
        // 8. Quiz C9: Energi Mobil
        { 
            type: 'quiz', 
            question: 'Energi apa yang menggerakkan mobil?',
            imageUrl: 'assets/question-9.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik', 
                    correct: false,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Bensin (Kimia → Gerak)', 
                    correct: true,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Angin', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '⛽'
        },
        // 9. Info: Panel Surya
        { 
            type: 'info', 
            content: 'Panel surya mengubah cahaya → listrik',
            example: 'Digunakan di kalkulator surya',
            imageUrl: 'assets/solar-panel.jpg', // Placeholder image
            icon: '☀️'
        },
        // 10. Quiz C10: Transformasi Kompor Gas
        { 
            type: 'quiz', 
            question: 'Perubahan energi di kompor gas?',
            imageUrl: 'assets/question-10.jpg', // Placeholder image
            options: [
                { 
                    text: 'Kimia → Panas', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Listrik → Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Panas → Cahaya', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🔥'
        },
        // 11. Info: PLTA
        { 
            type: 'info', 
            content: 'PLTA menggunakan air untuk menghasilkan listrik',
            example: 'Air → Gerak turbin → Listrik',
            imageUrl: 'assets/hydro-power.jpg', // Placeholder image
            icon: '🌊'
        },
        // 12. Quiz C11: Urutan PLN
        { 
            type: 'quiz', 
            question: 'Urutan energi di PLN?',
            imageUrl: 'assets/question-11.jpg', // Placeholder image
            options: [
                { 
                    text: 'Batu bara → Panas → Listrik', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Angin → Listrik → Cahaya', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Matahari → Kimia → Gerak', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '🏭'
        },
        // 13. Info: Blender
        { 
            type: 'info', 
            content: 'Blender mengubah listrik → gerak → menghancurkan buah',
            example: 'Contoh transformasi energi bertahap',
            imageUrl: 'assets/blender-energy.jpg', // Placeholder image
            icon: '料理'
        },
        // 14. Quiz C12: Transformasi Blender
        { 
            type: 'quiz', 
            question: 'Urutan transformasi energi di blender?',
            imageUrl: 'assets/question-12.jpg', // Placeholder image
            options: [
                { 
                    text: 'Listrik → Gerak (motor) → Menghancurkan buah', 
                    correct: true,
                    imageUrl: 'assets/option-a.jpg'
                },
                { 
                    text: 'Gerak → Listrik → Cahaya', 
                    correct: false,
                    imageUrl: 'assets/option-b.jpg'
                },
                { 
                    text: 'Panas → Kimia → Listrik', 
                    correct: false,
                    imageUrl: 'assets/option-c.jpg'
                }
            ],
            icon: '⚡'
        },
        // 15. Finish Level 2
        { 
            type: 'finish', 
            content: 'Level 2 Tuntas! Menuju energi alternatif!',
            icon: '🏆'
        }
    ],
};
