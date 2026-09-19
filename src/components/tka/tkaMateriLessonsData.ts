import { TkaSubject } from './tkaTypes';

export interface TkaMateriLesson {
  id: string;
  subject: TkaSubject;
  chapterId: string;
  chapterNumber: string;
  chapterTitle: string;
  overview: string;
  keyPoints: {
    title: string;
    description: string;
    formulaOrConcept?: string;
  }[];
  exampleProblems: {
    question: string;
    stepByStep: string[];
    theKingTip: string;
    answer: string;
  }[];
  summary: string;
}

export const TKA_DETAILED_LESSONS: TkaMateriLesson[] = [
  // MATEMATIKA
  {
    id: 'MAT_LESSON_1',
    subject: 'MATEMATIKA',
    chapterId: 'MAT_BAB_1',
    chapterNumber: 'Bab I',
    chapterTitle: 'Bangun Ruang Sisi Datar (Prisma & Limas)',
    overview: 'Mempelajari sifat geometris, rumus luas permukaan, volume, serta kerangka kawat bangun ruang prisma dan limas dengan visualisasi konsep jaring-jaring.',
    keyPoints: [
      {
        title: 'Volume & Luas Permukaan Prisma',
        description: 'Prisma adalah bangun ruang yang dibatasi oleh dua bidang sejajar dan kongruen (alas dan tutup) serta bidang-bidang tegak.',
        formulaOrConcept: 'V = L_alas × t\nL_permukaan = (2 × L_alas) + (K_alas × t)',
      },
      {
        title: 'Volume & Luas Permukaan Limas',
        description: 'Limas dibatasi oleh satu alas berbentuk segi-n dan sisi-sisi tegak berbentuk segitiga yang bertemu di satu titik puncak.',
        formulaOrConcept: 'V = (1/3) × L_alas × t\nL_permukaan = L_alas + Σ(L_segitiga_tegak)',
      },
      {
        title: 'Panjang Kerangka Kawat',
        description: 'Dihitung dengan menjumlahkan seluruh panjang rusuk-rusuk pembentuk bangun ruang.',
        formulaOrConcept: 'K_prisma = (2 × K_alas) + (n × t)\nK_limas = K_alas + (n × rusuk_tegak)',
      },
    ],
    exampleProblems: [
      {
        question: 'Sebuah prisma segitiga memiliki alas siku-siku dengan panjang sisi 6 cm, 8 cm, dan 10 cm. Jika tinggi prisma 15 cm, tentukan volume dan luas permukaannya!',
        stepByStep: [
          '1. Luas alas = (1/2) × alas × tinggi = (1/2) × 6 × 8 = 24 cm²',
          '2. Keliling alas = 6 + 8 + 10 = 24 cm',
          '3. Volume = Luas alas × tinggi = 24 × 15 = 360 cm³',
          '4. Luas Permukaan = (2 × Luas alas) + (Keliling alas × tinggi) = (2 × 24) + (24 × 15) = 48 + 360 = 408 cm²',
        ],
        theKingTip: 'THE KING: Sisi miring siku-siku selalu sisi terpanjang (10 cm). Dua sisi lainnya (6 dan 8) langsung kalikan lalu bagi 2 untuk luas alas.',
        answer: 'Volume = 360 cm³, Luas Permukaan = 408 cm²',
      },
    ],
    summary: 'Kunci bangun ruang: Bedakan antara prisma (memiliki 2 sisi kongruen atas-bawah) dengan limas (meruncing ke 1 titik puncak dengan pengali 1/3 pada volume).',
  },
  {
    id: 'MAT_LESSON_3',
    subject: 'MATEMATIKA',
    chapterId: 'MAT_BAB_3',
    chapterNumber: 'Bab III',
    chapterTitle: 'Peluang & Frekuensi Harapan',
    overview: 'Konsep ruang sampel kejadian, peluang teoritis, peluang empiris, dan menghitung frekuensi harapan dalam percobaan pelemparan koin atau dadu.',
    keyPoints: [
      {
        title: 'Peluang Teoritik Suatu Kejadian A',
        description: 'Rasio banyaknya titik sampel kejadian A terhadap banyaknya seluruh anggota ruang sampel S.',
        formulaOrConcept: 'P(A) = n(A) / n(S)   dengan batasan   0 ≤ P(A) ≤ 1',
      },
      {
        title: 'Frekuensi Harapan F_h(A)',
        description: 'Banyaknya kejadian A yang diharapkan terjadi dalam N kali percobaan berulang.',
        formulaOrConcept: 'F_h(A) = P(A) × N',
      },
      {
        title: 'Peluang Komplemen A\'',
        description: 'Peluang tidak terjadinya peristiwa A.',
        formulaOrConcept: 'P(A\') = 1 − P(A)',
      },
    ],
    exampleProblems: [
      {
        question: 'Dua buah dadu dilempar bersamaan sebanyak 180 kali. Tentukan frekuensi harapan munculnya mata dadu berjumlah 8!',
        stepByStep: [
          '1. Ruang sampel 2 buah dadu: n(S) = 6 × 6 = 36',
          '2. Kejadian mata dadu berjumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) ⟹ n(A) = 5',
          '3. Peluang P(A) = 5 / 36',
          '4. Frekuensi Harapan = (5 / 36) × 180 = 5 × 5 = 25 kali',
        ],
        theKingTip: 'THE KING: Jumlah dadu 7 ada 6 titik. Untuk jumlah 8, berkurang 1 = 5 titik. Langsung: 5/36 × 180 = 25 kali!',
        answer: '25 kali',
      },
    ],
    summary: 'Peluang selalu bernilai antara 0 (mustahil) sampai 1 (pasti). Frekuensi harapan didapat langsung dari mengalikan peluang dengan banyaknya pengulangan.',
  },
  {
    id: 'MAT_LESSON_4',
    subject: 'MATEMATIKA',
    chapterId: 'MAT_BAB_4',
    chapterNumber: 'Bab IV',
    chapterTitle: 'Bilangan Berpangkat & Notasi Ilmiah',
    overview: 'Memahami sifat eksponen positif, negatif, nol, pecahan, serta penulisan bentuk baku (notasi ilmiah) untuk angka sangat besar atau sangat kecil.',
    keyPoints: [
      {
        title: 'Sifat-sifat Operasi Eksponen',
        description: 'Aturan perkalian, pembagian, dan pemangkatan pada basis yang sama.',
        formulaOrConcept: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐˣⁿ\na⁰ = 1 (a ≠ 0)\na⁻ⁿ = 1 / aⁿ',
      },
      {
        title: 'Bentuk Baku (Notasi Ilmiah)',
        description: 'Penulisan angka standar internasional.',
        formulaOrConcept: 'a × 10ⁿ   dengan syarat 1 ≤ a < 10 dan n bilangan bulat',
      },
    ],
    exampleProblems: [
      {
        question: 'Sederhanakan bentuk (2³ × 2⁵) ÷ 2⁴ dan tuliskan 0,000045 dalam bentuk baku ilmiah!',
        stepByStep: [
          '1. Perkalian pangkat dijumlah: 2³⁺⁵ = 2⁸',
          '2. Pembagian pangkat dikurang: 2⁸ ÷ 2⁴ = 2⁸⁻⁴ = 2⁴ = 16',
          '3. Angka 0,000045 digeser komanya ke kanan 5 kali hingga diperoleh angka 4,5 (1 ≤ 4,5 < 10), sehingga menjadi 4,5 × 10⁻⁵',
        ],
        theKingTip: 'THE KING: Jika koma bergeser ke kanan, pangkat 10 menjadi negatif. 0,000045 ⟹ geser 5 langkah ⟹ 4,5 × 10⁻⁵.',
        answer: 'Hasil pangkat = 2⁴ = 16; Bentuk baku = 4,5 × 10⁻⁵',
      },
    ],
    summary: 'Perhatikan basis pangkat harus sama sebelum menggabungkan eksponen. Pangkat 0 selalu bernilai 1 untuk semua bilangan bukan nol.',
  },

  // BAHASA INDONESIA
  {
    id: 'BINDO_LESSON_1',
    subject: 'B_INDO',
    chapterId: 'BINDO_BAB_1',
    chapterNumber: 'Bab 1',
    chapterTitle: 'Teks Deskripsi & Fabel Naratif',
    overview: 'Mengidentifikasi informasi tersurat dan tersirat, watak tokoh, latar suasana, majas/gaya bahasa, serta sudut pandang pengarang dalam teks fabel atau narasi.',
    keyPoints: [
      {
        title: 'Ciri & Struktur Teks Deskripsi',
        description: 'Menggambarkan objek secara rinci, melibatkan pancaindra sehingga pembaca seolah merasakan langsung.',
        formulaOrConcept: 'Struktur: Identifikasi / Penegasan Umum ⟶ Deskripsi Bagian ⟶ Penutup / Kesimpulan',
      },
      {
        title: 'Unsur Intrinsik Cerita Fabel',
        description: 'Tokoh binatang yang berperilaku menyerupai manusia dan mengandung pesan moral.',
        formulaOrConcept: 'Unsur: Tema, Tokoh & Penokohan, Alur, Latar (Tempat, Waktu, Suasana), Sudut Pandang, Amanat',
      },
    ],
    exampleProblems: [
      {
        question: 'Bagaimana cara cepat menentukan tokoh utama dan bukti watak dalam kutipan teks narasi fabel?',
        stepByStep: [
          '1. Tokoh utama adalah tokoh yang paling sering disebut dan menggerakkan jalan cerita dari awal hingga akhir.',
          '2. Bukti watak dicari melalui dialog langsung antartokoh, tindakan nyata tokoh saat menghadapi masalah, atau narasi deskripsi penulis.',
        ],
        theKingTip: 'THE KING: Cari kata kerja aktif pada tokoh. Kalimat "membantu tupai" atau "mengantar anak burung" langsung membuktikan watak penolong.',
        answer: 'Analisis tindakan tokoh dan frekuensi kemunculannya dalam setiap paragraf.',
      },
    ],
    summary: 'Teks deskripsi memusatkan gambaran inderawi, sedangkan fabel menonjolkan pesan moral lewat tindakan binatang berkarakter.',
  },
  {
    id: 'BINDO_LESSON_2',
    subject: 'B_INDO',
    chapterId: 'BINDO_BAB_2',
    chapterNumber: 'Bab 2',
    chapterTitle: 'Teks Prosedur & Infografik',
    overview: 'Memahami teks petunjuk langkah demi langkah, kalimat imperatif (perintah), kata kerja aktif, serta membaca data grafis/poster/infografis.',
    keyPoints: [
      {
        title: 'Ciri Bahasa Teks Prosedur',
        description: 'Menggunakan kalimat imperatif, deklaratif, konjungsi urutan (pertama, kemudian, lalu), dan kata keterangan alat/cara.',
        formulaOrConcept: 'Struktur: Tujuan ⟶ Alat & Bahan ⟶ Langkah-Langkah Berurutan ⟶ Penegasan / Tips',
      },
      {
        title: 'Membaca Infografik & Poster',
        description: 'Menemukan gagasan pokok dan pesan tersirat dari perpaduan gambar dan teks ringkas.',
        formulaOrConcept: 'Fokus pada judul utama, angka statistik, dan hubungan sebab-akibat antarbagan.',
      },
    ],
    exampleProblems: [
      {
        question: 'Ubahlah kalimat pasif "Langkah ini harus dilakukan secara teliti" menjadi kalimat imperatif teks prosedur!',
        stepByStep: [
          '1. Kalimat imperatif menggunakan kata kerja dasar dengan partikel -lah atau kata perintah langsung.',
          '2. Hilangkan subjek dan ubah predikat menjadi tindakan aktif.',
          '3. Bentuk tepat: "Lakukan langkah ini secara teliti!"',
        ],
        theKingTip: 'THE KING: Kalimat prosedur selalu dimulai dengan kata kerja aksi aktif (Potonglah, Campurkan, Tekan tombol).',
        answer: '"Lakukan langkah ini secara teliti!"',
      },
    ],
    summary: 'Teks prosedur menuntut urutan logis yang tidak boleh tertukar agar tujuan akhir dapat tercapai dengan sempurna.',
  },

  // IPA
  {
    id: 'IPA_LESSON_1',
    subject: 'IPA',
    chapterId: 'IPA_BAB_1',
    chapterNumber: 'Bab 1',
    chapterTitle: 'Biologi Manusia (Sistem Saraf, Reproduksi & Homeostasis)',
    overview: 'Memahami struktur sel saraf (neuron), fungsi bagian otak, sistem hormon, siklus menstruasi, dan mekanisme menjaga kestabilan tubuh (homeostasis).',
    keyPoints: [
      {
        title: 'Bagian & Fungsi Sel Saraf (Neuron)',
        description: 'Dendrit menerima rangsang, Badan Sel mengolah impuls, Akson/Neurit menghantarkan impuls ke neuron lain, Selubung Mielin mempercepat jalannya impuls.',
        formulaOrConcept: 'Alur Impuls: Reseptor (Indra) ⟶ Saraf Sensorik ⟶ Otak/Sumsum Tulang Belakang ⟶ Saraf Motorik ⟶ Efektor (Otot)',
      },
      {
        title: 'Sistem Reproduksi Manusia & Hormon',
        description: 'Organ reproduksi pria (testis menghasilkan sperma dan testosteron) dan wanita (ovarium menghasilkan ovum, estrogen, progesteron).',
        formulaOrConcept: 'Fertilisasi (pembuahan ovum oleh sperma) terjadi di Tuba Fallopii / Oviduk.',
      },
    ],
    exampleProblems: [
      {
        question: 'Pada gerak refleks seperti menarik tangan saat terkena benda panas, bagaimanakah lintasan jalannya impuls saraf?',
        stepByStep: [
          '1. Kulit merasakan panas (Reseptor).',
          '2. Impuls dihantarkan melalui Neuron Sensorik.',
          '3. Impuls tidak diproses oleh otak melainkan dialihkan ke Sumsum Tulang Belakang (Medula Spinalis).',
          '4. Diteruskan ke Neuron Motorik.',
          '5. Menggerakkan otot tangan untuk segera menghindar (Efektor).',
        ],
        theKingTip: 'THE KING: Gerak refleks = Reseptor ⟶ Sensorik ⟶ Sumsum Tulang Belakang ⟶ Motorik ⟶ Efektor (Tanpa melibatkan kesadaran otak).',
        answer: 'Reseptor ⟶ Sensorik ⟶ Sumsum Tulang Belakang ⟶ Motorik ⟶ Efektor',
      },
    ],
    summary: 'Sistem koordinasi memadukan kerja saraf (reaksi cepat) dan hormon (reaksi lambat berjangka panjang) untuk mempertahankan kondisi seimbang tubuh.',
  },
  {
    id: 'IPA_LESSON_2',
    subject: 'IPA',
    chapterId: 'IPA_BAB_2',
    chapterNumber: 'Bab 2',
    chapterTitle: 'Tekanan Zat (Padat, Cair & Gas)',
    overview: 'Hukum Pascal, Hukum Archimedes, tekanan hidrostatis, dan aplikasi dalam kehidupan sehari-hari seperti pompa hidrolik dan kapal laut.',
    keyPoints: [
      {
        title: 'Tekanan Zat Padat',
        description: 'Besarnya gaya yang bekerja per satuan luas bidang tekan.',
        formulaOrConcept: 'P = F / A   (Tekanan makin besar jika luas penampang A makin kecil/runcing)',
      },
      {
        title: 'Tekanan Hidrostatis (Zat Cair)',
        description: 'Tekanan yang diakibatkan oleh berat zat cair itu sendiri.',
        formulaOrConcept: 'P_h = ρ × g × h   (h dihitung dari permukaan zat cair ke bawah)',
      },
      {
        title: 'Hukum Pascal (Pompa Hidrolik)',
        description: 'Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan ke segala arah sama besar.',
        formulaOrConcept: 'F₁ / A₁ = F₂ / A₂',
      },
    ],
    exampleProblems: [
      {
        question: 'Sebuah dongkrak hidrolik memiliki luas penampang kecil A₁ = 10 cm² dan luas penampang besar A₂ = 500 cm². Jika penampang kecil ditekan gaya 200 N, berapa beban mobil yang dapat diangkat pada penampang besar?',
        stepByStep: [
          '1. Gunakan Hukum Pascal: F₁ / A₁ = F₂ / A₂',
          '2. 200 / 10 = F₂ / 500',
          '3. 20 = F₂ / 500',
          '4. F₂ = 20 × 500 = 10.000 N',
        ],
        theKingTip: 'THE KING: Perbandingan luas: 500 ÷ 10 = 50 kali lipat. Maka gaya angkat F₂ langsung = 50 × 200 N = 10.000 N!',
        answer: '10.000 N',
      },
    ],
    summary: 'Untuk zat padat, ujung runcing memperbesar tekanan. Pada fluida statis, makin dalam posisi benda, tekanan hidrostatisnya makin besar.',
  },

  // BAHASA INGGRIS
  {
    id: 'BING_LESSON_1',
    subject: 'B_INGGRIS',
    chapterId: 'BING_UNIT_1',
    chapterNumber: 'Unit 1',
    chapterTitle: 'Procedure Text & Imperative Sentences',
    overview: 'Understanding goal/aim, ingredients/materials, sequential action steps, imperative verb patterns, and transitional conjunctions in recipes and user manuals.',
    keyPoints: [
      {
        title: 'Social Function of Procedure Text',
        description: 'To describe how something is completely done or made through a sequence of actions or steps.',
        formulaOrConcept: 'Generic Structure: Goal/Aim ⟶ Materials/Ingredients ⟶ Steps/Methods',
      },
      {
        title: 'Language Features',
        description: 'Using imperative mood (action verbs at the front without subject), simple present tense, and sequence markers (First, Next, Then, Finally).',
        formulaOrConcept: 'Pattern: [Verb 1] + [Object/Complement]!  Example: "Stir the mixture gently!"',
      },
    ],
    exampleProblems: [
      {
        question: 'Read the sentence: "First, you must cut the mango into small dices." How to rephrase it into an imperative command?',
        stepByStep: [
          '1. An imperative sentence begins directly with an infinitive/base verb (Verb 1).',
          '2. Remove the modal auxiliary "you must".',
          '3. Direct sentence: "Cut the mango into small dices!"',
        ],
        theKingTip: 'THE KING: In procedure instructions, imperative sentences always drop "You must/should" and start directly with the action verb.',
        answer: '"Cut the mango into small dices!"',
      },
    ],
    summary: 'Procedure texts focus on clarity and chronological order so the user can replicate the process without error.',
  },
  {
    id: 'BING_LESSON_4',
    subject: 'B_INGGRIS',
    chapterId: 'BING_UNIT_4',
    chapterNumber: 'Unit 4',
    chapterTitle: 'Product Labels & Health Warnings',
    overview: 'Reading nutrition facts, ingredients, direction to use, storage instructions, and expiration date warnings on medicine, food, and beverage labels.',
    keyPoints: [
      {
        title: 'Common Components on Food & Medicine Labels',
        description: 'Key sections that frequently appear in examination questions.',
        formulaOrConcept: 'Brand/Name of product, Description, Content/Amount, Ingredients, Directions to use/dosage, Directions to store, Expiration date',
      },
      {
        title: 'Key Vocabulary & Warnings',
        description: 'Understanding terms like "Keep out of reach of children", "Store in a cool dry place", "Best before", and "Dosage".',
        formulaOrConcept: '"Keep away from direct sunlight" = simpan di tempat teduh/terlindung dari sinar matahari langsung.',
      },
    ],
    exampleProblems: [
      {
        question: 'What is the purpose of reading the expiration date ("Exp. Date") on a food label?',
        stepByStep: [
          '1. "Exp. Date" indicates the final date up to which the product is safe and retains full quality.',
          '2. Consuming after this date may cause health problems.',
          '3. Purpose: To know when the product is no longer safe or suitable for consumption.',
        ],
        theKingTip: 'THE KING: "Expiration date" or "Best before" questions always ask "when the product is safe to consume" or "validity period".',
        answer: 'To know when the product is no longer safe to consume.',
      },
    ],
    summary: 'Product labels convey crucial consumer safety information. Pay close attention to dosage for children vs adults.',
  },
];

export function getDetailedLessonBySubject(subject: TkaSubject): TkaMateriLesson[] {
  return TKA_DETAILED_LESSONS.filter((l) => l.subject === subject);
}
