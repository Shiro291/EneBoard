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
    { type: 'start', content: 'Siap belajar perubahan energi?', icon: '🏁' },

    // Quiz 1 (Correct answer now 3rd option)
    {
      type: 'quiz',
      question: 'Desa Cikondang, Jawa Barat, mengandalkan PLTA dari Sungai Citarum untuk listrik. Saat musim kemarau panjang, debit air sungai menyusut 60%. Apa dampak utama bagi aktivitas warga?',
      imageUrl: 'assets/question-1.jpg',
      options: [
        { text: 'Harga listrik turun karena permintaan energi berkurang', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Kualitas air minum meningkat karena sungai tidak tercemar limbah', correct: false, imageUrl: 'assets/option-c.jpg' },
        { text: 'Pemadaman listrik bergilir delapan jam per hari karena turbin PLTA tidak bisa beroperasi tanpa aliran air yang memadai', correct: true, imageUrl: 'assets/option-a.jpg' }
      ],
      icon: '💧'
    },

    // Info: PLTA dan cuaca
    {
      type: 'info',
      content: 'PLTA sangat tergantung pada debit air. Saat kemarau panjang, kapasitas pembangkitan turun drastis.',
      example: 'Musim kemarau = risiko pemadaman',
      imageUrl: 'assets/info-plta.jpg',
      icon: 'ℹ️'
    },

    // Quiz 2 (Correct answer moved to 2nd)
    {
      type: 'quiz',
      question: 'Pabrik tempe “Sari Rasa” di Malang menghasilkan dua ton ampas kedelai per hari. Bagaimana limbah ini dapat diubah menjadi energi alternatif?',
      imageUrl: 'assets/question-2.jpg',
      options: [
        { text: 'Dijadikan pakan ternak tanpa proses konversi energi', correct: false, imageUrl: 'assets/option-c.jpg' },
        { text: 'Diolah menjadi biogas melalui fermentasi anaerobik karena ampas kedelai mengandung bahan organik yang dapat menghasilkan metana', correct: true, imageUrl: 'assets/option-a.jpg' },
        { text: 'Dibakar langsung untuk menghasilkan panas meski menimbulkan polusi udara', correct: false, imageUrl: 'assets/option-b.jpg' }
      ],
      icon: '🧪'
    },

    // Reward (early)
    { type: 'reward', content: '+10 Poin! 🎉 Kamu berhasil menjawab dengan benar!', icon: '⭐' },

    // Quiz 3 (Correct answer 1st -> moved to 2nd)
    {
      type: 'quiz',
      question: 'Angkutan umum TransJakarta dengan mesin hybrid (listrik + diesel) terjebak macet di Bundaran HI selama dua jam. Sumber energi mana yang paling efisien untuk mempertahankan sistem pendingin dan penerangan?',
      imageUrl: 'assets/question-3.jpg',
      options: [
        { text: 'Mesin diesel karena tenaga besar untuk menyalakan AC secara terus-menerus', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Baterai listrik karena emisi nol dan menghemat bahan bakar saat kendaraan diam', correct: true, imageUrl: 'assets/option-a.jpg' },
        { text: 'Kombinasi keduanya agar mesin tidak cepat panas dan baterai tetap terisi', correct: false, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🚌'
    },

    // Quiz 4 (Correct answer -> moved to last)
    {
      type: 'quiz',
      question: 'Desa Wae Rebo, Flores, terletak di lembah pegunungan dengan aliran sungai kecil berarus deras. Energi alternatif apa yang paling cocok untuk desa ini?',
      imageUrl: 'assets/question-4.jpg',
      options: [
        { text: 'Panel surya meski sering tertutup kabut pegunungan', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Generator diesel meski mahal dan menimbulkan polusi', correct: false, imageUrl: 'assets/option-c.jpg' },
        { text: 'Pembangkit listrik tenaga air mikrohidro memanfaatkan aliran sungai untuk menggerakkan turbin kecil', correct: true, imageUrl: 'assets/option-a.jpg' }
      ],
      icon: '🏞️'
    },

    // Quiz 5 (Correct moved to 2nd)
    {
      type: 'quiz',
      question: 'Sebuah keluarga di Yogyakarta mengganti sepuluh lampu pijar (60 watt) dengan LED (10 watt). Apa dampak nyata yang mereka rasakan setelah tiga bulan?',
      imageUrl: 'assets/question-5.jpg',
      options: [
        { text: 'Suhu ruangan meningkat sedikit karena LED juga menghasilkan panas meski lebih sedikit', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Tagihan listrik turun hingga lima puluh persen karena LED mengonsumsi daya jauh lebih rendah', correct: true, imageUrl: 'assets/option-a.jpg' },
        { text: 'Cahaya menjadi lebih redup meski nyala lampu terasa sama terang bagi penglihatan', correct: false, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '💡'
    },

    // Quiz 6 (Correct -> moved to 3rd)
    {
      type: 'quiz',
      question: 'Restoran di Bali menghasilkan tiga ratus liter limbah minyak goreng bekas per bulan. Cara terbaik mengolah limbah ini menjadi energi?',
      imageUrl: 'assets/question-6.jpg',
      options: [
        { text: 'Dibuang ke tanah yang mencemari lingkungan', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Dijual ke pabrik sabun yang tidak terkait produksi energi', correct: false, imageUrl: 'assets/option-c.jpg' },
        { text: 'Dikonversi menjadi biodiesel melalui proses transesterifikasi untuk bahan bakar mesin diesel', correct: true, imageUrl: 'assets/option-a.jpg' }
      ],
      icon: '🍳'
    },

    // Info: Keuntungan Energi Alternatif
    {
      type: 'info',
      content: 'Energi alternatif mengurangi ketergantungan pada bahan bakar fosil, menurunkan polusi, dan bisa memanfaatkan limbah lokal.',
      example: 'Biogas, mikrohidro, biodiesel',
      imageUrl: 'assets/alternative-benefits.jpg',
      icon: '🌱'
    },

    // Quiz 7 (Correct -> moved to 2nd)
    {
      type: 'quiz',
      question: 'Kapal nelayan di Kepulauan Seribu memasang panel surya untuk penerangan malam. Mengapa sistem ini kurang efektif saat musim penghujan?',
      imageUrl: 'assets/question-7.jpg',
      options: [
        { text: 'Panel surya mudah rusak oleh hujan asam padahal jarang terjadi di Indonesia', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Intensitas cahaya matahari rendah karena awan tebal menghalangi penyerapan energi surya', correct: true, imageUrl: 'assets/option-a.jpg' },
        { text: 'Nelayan lebih sering melaut siang hari sehingga sistem malam tidak optimal', correct: false, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '⛵'
    },

    // Quiz 8 (Correct -> moved to 1st)
    {
      type: 'quiz',
      question: 'Mal di Surabaya ingin mengurangi tagihan listrik dengan energi alternatif. Langkah awal paling realistis?',
      imageUrl: 'assets/question-8.jpg',
      options: [
        { text: 'Memasang panel surya di atap parkiran memanfaatkan lahan kosong untuk menghasilkan listrik', correct: true, imageUrl: 'assets/option-a.jpg' },
        { text: 'Membatasi jam operasional AC yang mengurangi kenyamanan pengunjung', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Mengganti lampu dekorasi dengan lilin yang tidak praktis dan berisiko kebakaran', correct: false, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🏬'
    },

    // Quiz 9 (Correct -> 2nd)
    {
      type: 'quiz',
      question: 'Pabrik di Semarang menghasilkan limbah panas 400°C dari mesin produksi. Bagaimana memanfaatkan limbah ini untuk menurunkan biaya operasional?',
      imageUrl: 'assets/question-9.jpg',
      options: [
        { text: 'Membuang panas ke atmosfer melalui cerobong asap yang membuang potensi energi', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Menggunakan turbin uap untuk menghasilkan listrik tambahan dari limbah panas', correct: true, imageUrl: 'assets/option-a.jpg' },
        { text: 'Menyalurkan panas ke pemukiman warga yang teknisnya tidak feasible', correct: false, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🏭'
    },

    // Quiz 10 (Correct -> 3rd)
    {
      type: 'quiz',
      question: 'Desa Tenganan, Bali, memiliki banyak pohon kelapa. Bagaimana sabut kelapa dimanfaatkan sebagai sumber energi alternatif?',
      imageUrl: 'assets/question-10.jpg',
      options: [
        { text: 'Dijadikan kerajinan tangan yang tidak terkait produksi energi', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Dibuang ke laut yang mencemari ekosistem', correct: false, imageUrl: 'assets/option-c.jpg' },
        { text: 'Dibuat menjadi briket arang sabut kelapa yang memiliki nilai kalori tinggi dan mudah dibakar', correct: true, imageUrl: 'assets/option-a.jpg' }
      ],
      icon: '🥥'
    },

    // Finish Level 2
    { type: 'finish', content: 'Level 2 Tuntas! Siap melangkah ke energi terbarukan lanjutan?', icon: '🏆' }
  ],      
    
    level3: [
    // 1. Start Level 3
    { type: 'start', content: 'Tantangan besar: integrasi energi & air bersih!', icon: '🏁' },

    // 2. Quiz L3-1
    {
      type: 'quiz',
      question: 'Pulau Komodo, NTT, memiliki sinar matahari intensif tetapi kekurangan air tawar. Rancang sistem energi yang sekaligus menghasilkan air bersih untuk 500 penduduk!',
      imageUrl: 'assets/question-l3-1.jpg',
      options: [
        { text: 'PLTA mikrohidro skala mini tidak bisa digunakan karena sungai di pulau kecil tidak memiliki aliran besar', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Generator diesel dan unit pengolahan air hujan mahal, bergantung suku cadang terbatas, kurang berkelanjutan', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Panel surya terintegrasi dengan sistem desalinasi tenaga matahari sehingga menghasilkan listrik sekaligus air tawar operasional', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '☀️'
    },

    // 3. Info: Panel Surya & Desalinasi
    {
      type: 'info',
      content: 'Kombinasi panel surya dan teknologi desalinasi memungkinkan pemanfaatan energi matahari sekaligus pengolahan air laut menjadi air minum.',
      example: 'Panel + reverse osmosis tenaga surya',
      imageUrl: 'assets/info-desalination.jpg',
      icon: '💧'
    },

    // 4. Quiz L3-2
    {
      type: 'quiz',
      question: 'Kota Jakarta ingin mengurangi 30% emisi CO₂ dari 10.000 angkutan umum berbahan bakar solar. Kebijakan apa yang paling efektif jangka panjang?',
      imageUrl: 'assets/question-l3-2.jpg',
      options: [
        { text: 'Membatasi jam operasi bus hanya solusi sementara tanpa mengubah sumber energi', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Menambah pajak kendaraan pribadi tidak langsung menyasar polusi bus', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Mengonversi seluruh armada menjadi bus listrik menghilangkan emisi langsung dan menurunkan ketergantungan solar', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🚍'
    },

    // 5. Quiz L3-3
    {
      type: 'quiz',
      question: 'Desa Lembah Hijau, Kalimantan, terpencil di hutan tropis. 70% warga belum teraliri listrik. Rancang sistem energi memanfaatkan sumber daya lokal!',
      imageUrl: 'assets/question-l3-3.jpg',
      options: [
        { text: 'Panel surya dengan baterai sulit optimal karena dahan dan daun menghalangi sinar', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Generator diesel mahal, suplai bahan bakar rentan terputus', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Mikrohidro skala kecil memanfaatkan aliran sungai + biogas dari limbah hutan memberikan listrik dan gas memasak', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🌳'
    },

    // 6. Reward: +15 Poin
    { type: 'reward', content: '+15 Poin! 🌟 Ide solutifmu brilian!', icon: '⭐' },

    // 7. Info: Energi Terbarukan Terpadu
    {
      type: 'info',
      content: 'Menggabungkan mikrohidro dan biogas memberikan pasokan listrik stabil dan gas untuk kebutuhan memasak di daerah terpencil.',
      example: 'Mikrohidro + fermentasi limbah kayu',
      imageUrl: 'assets/info-combined.jpg',
      icon: '🔄'
    },

    // 8. Quiz L3-4
    {
      type: 'quiz',
      question: 'Pabrik kelapa sawit di Riau menghasilkan 20 ton limbah tandan kosong per hari. Bagaimana optimalkan limbah ini untuk energi dan kurangi polusi?',
      imageUrl: 'assets/question-l3-4.jpg',
      options: [
        { text: 'Dibakar langsung untuk uap menghasilkan polusi signifikan', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Dijual ke pabrik kertas bukan solusi energi langsung', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Fermentasi limbah menjadi biogas untuk listrik dan residu jadi pupuk organik mengurangi polusi', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🌴'
    },

    // 9. Quiz L3-5
    {
      type: 'quiz',
      question: 'Rumah sakit di Papua Pegunungan hanya mengandalkan generator diesel yang sering mati. Solusi energi mana yang tahan cuaca ekstrem & terjangkau?',
      imageUrl: 'assets/question-l3-5.jpg',
      options: [
        { text: 'PLTA lokal tidak stabil karena aliran sungai kering musim kemarau', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Kincir angin tidak optimal karena kecepatan angin di lembah tidak konsisten', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Panel surya tahan badai dengan baterai lithium menyimpan cadangan energi cocok untuk iklim ekstrem', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🩺'
    },

    // 10. Info: Solar Resilience
    {
      type: 'info',
      content: 'Panel surya modern dilapisi pelindung tahan air dan angin sehingga cocok untuk lokasi rawan cuaca ekstrem.',
      example: 'Solar 72-cell dengan casing tahan banting',
      imageUrl: 'assets/info-solar.jpg',
      icon: '🌞'
    },

    // 11. Quiz L3-6
    {
      type: 'quiz',
      question: 'Pabrik tekstil di Surabaya menghasilkan limbah panas 600°C. Bagaimana memanfaatkannya untuk mengurangi biaya operasional?',
      imageUrl: 'assets/question-l3-6.jpg',
      options: [
        { text: 'Menyalurkan panas ke perumahan tidak feasible dari segi distribusi', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Membuang panas melalui cerobong asap membuang energi potensial', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Menggunakan turbin uap dari limbah panas menghasilkan listrik tambahan dan menurunkan biaya', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🏭'
    },

    // 12. Quiz L3-7
    {
      type: 'quiz',
      question: 'Desa Tenganan, Bali, memiliki pohon kelapa. Rancang sistem energi memanfaatkan semua bagian kelapa (sabut, tempurung, air)!',
      imageUrl: 'assets/question-l3-7.jpg',
      options: [
        { text: 'Menjual air kelapa saja mengabaikan potensi energi biomassa', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Membakar tempurung untuk memasak menghasilkan polusi tinggi', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Briket arang sabut, biogas dari tempurung, dan panel surya sistem pendingin air kelapa memanfaatkan semua sumber', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🥥'
    },

    // 13. Info: Biaya & Manfaat
    {
      type: 'info',
      content: 'Briket, biogas, dan panel surya memiliki biaya instalasi awal, tapi operasional rendah dan ramah lingkungan.',
      example: 'Biaya ROI dalam 2–3 tahun',
      imageUrl: 'assets/info-cost.jpg',
      icon: '💰'
    },

    // 14. Quiz L3-8
    {
      type: 'quiz',
      question: 'Sebuah sekolah di Lombok ingin menjadi pusat edukasi energi terbarukan. Proyek percontohan paling inspiratif?',
      imageUrl: 'assets/question-l3-8.jpg',
      options: [
        { text: 'Buku panduan energi terbarukan kaya teori tapi kurang interaktif', correct: false, imageUrl: 'assets/option-a.jpg' },
        { text: 'Kunjungan PLTU tidak mendorong inovasi atau pemahaman konsep', correct: false, imageUrl: 'assets/option-b.jpg' },
        { text: 'Taman edukasi mini dengan mikrohidro, panel surya, biogas siswa belajar langsung dengan simulasi interaktif', correct: true, imageUrl: 'assets/option-c.jpg' }
      ],
      icon: '🏫'
    },

    // 15. Finish Level 3
    { type: 'finish', content: 'Selamat! Level 3 Tuntas, kamu ahli energi terbarukan!', icon: '🏆' }
  ]
};
