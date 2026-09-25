import { Question } from '../types';

export const DEFAULT_QUESTIONS: Question[] = [
  // ================= KATEGORI A (SD Kelas 1-3) - MATEMATIKA =================
  {
    id: 'A-MAT-01',
    category: 'A',
    subject: 'matematika',
    question: 'Berapakah hasil dari 45 + 38?',
    options: ['73', '83', '85', '93'],
    correctAnswer: 1,
    points: 5,
    explanation: '45 + 38 = 83.'
  },
  {
    id: 'A-MAT-02',
    category: 'A',
    subject: 'matematika',
    question: 'Ibu membeli 5 ikat rambutan. Setiap ikat berisi 10 buah rambutan. Berapa jumlah seluruh rambutan yang dibeli Ibu?',
    options: ['40 buah', '45 buah', '50 buah', '55 buah'],
    correctAnswer: 2,
    points: 5,
    explanation: '5 ikat x 10 buah = 50 buah rambutan.'
  },
  {
    id: 'A-MAT-03',
    category: 'A',
    subject: 'matematika',
    question: 'Angka 7 pada bilangan 742 menempati nilai tempat...',
    options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Pada bilangan 742: 7 bernilai ratusan (700), 4 puluhan (40), 2 satuan.'
  },
  {
    id: 'A-MAT-04',
    category: 'A',
    subject: 'matematika',
    question: 'Bangun datar yang memiliki 3 sisi dan 3 titik sudut adalah...',
    options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi Panjang'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Segitiga memiliki 3 sisi dan 3 sudut.'
  },
  {
    id: 'A-MAT-05',
    category: 'A',
    subject: 'matematika',
    question: 'Berapakah hasil dari 90 - 37?',
    options: ['53', '63', '57', '67'],
    correctAnswer: 0,
    points: 5,
    explanation: '90 - 37 = 53.'
  },
  {
    id: 'A-MAT-06',
    category: 'A',
    subject: 'matematika',
    question: 'Pukul berapa yang ditunjukkan jika jarum pendek di angka 3 dan jarum panjang di angka 12?',
    options: ['03.00', '12.03', '03.12', '12.15'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Jarum pendek menunjukkan jam (3), jarum panjang menit 00 (di angka 12) = 03.00.'
  },
  {
    id: 'A-MAT-07',
    category: 'A',
    subject: 'matematika',
    question: 'Lanjutan dari pola bilangan 4, 8, 12, 16, ... adalah...',
    options: ['18', '20', '22', '24'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Pola bertambah 4 tiap langkah: 16 + 4 = 20.'
  },
  {
    id: 'A-MAT-08',
    category: 'A',
    subject: 'matematika',
    question: 'Doni memiliki 24 kelereng dan dibagikan sama rata kepada 4 temannya. Setiap anak mendapatkan...',
    options: ['5 kelereng', '6 kelereng', '7 kelereng', '8 kelereng'],
    correctAnswer: 1,
    points: 5,
    explanation: '24 dibagi 4 = 6 kelereng per anak.'
  },
  {
    id: 'A-MAT-09',
    category: 'A',
    subject: 'matematika',
    question: 'Manakah dari bilangan berikut yang nilainya paling besar?',
    options: ['349', '394', '439', '493'],
    correctAnswer: 3,
    points: 5,
    explanation: '493 adalah bilangan terbesar di antara pilihan.'
  },
  {
    id: 'A-MAT-10',
    category: 'A',
    subject: 'matematika',
    question: '1 meter sama dengan berapa sentimeter?',
    options: ['10 cm', '100 cm', '1000 cm', '10000 cm'],
    correctAnswer: 1,
    points: 5,
    explanation: '1 meter = 100 sentimeter.'
  },
  {
    id: 'A-MAT-11',
    category: 'A',
    subject: 'matematika',
    question: 'Berapakah 7 x 6?',
    options: ['36', '40', '42', '48'],
    correctAnswer: 2,
    points: 5,
    explanation: '7 x 6 = 42.'
  },
  {
    id: 'A-MAT-12',
    category: 'A',
    subject: 'matematika',
    question: 'Pecahan satu per dua dapat ditulis dengan lambang...',
    options: ['1/3', '1/4', '1/2', '2/1'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Satu per dua ditulis 1/2.'
  },
  {
    id: 'A-MAT-13',
    category: 'A',
    subject: 'matematika',
    question: 'Panjang pensil Rian 14 cm, panjang pensil Danu 19 cm. Berapa selisih panjang pensil mereka?',
    options: ['3 cm', '5 cm', '6 cm', '7 cm'],
    correctAnswer: 1,
    points: 5,
    explanation: '19 cm - 14 cm = 5 cm.'
  },
  {
    id: 'A-MAT-14',
    category: 'A',
    subject: 'matematika',
    question: 'Keliling persegi dengan panjang sisi 6 cm adalah...',
    options: ['12 cm', '18 cm', '24 cm', '36 cm'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Keliling persegi = 4 x sisi = 4 x 6 cm = 24 cm.'
  },
  {
    id: 'A-MAT-15',
    category: 'A',
    subject: 'matematika',
    question: 'Berapakah hasil dari 125 + 75 - 50?',
    options: ['100', '125', '150', '200'],
    correctAnswer: 2,
    points: 5,
    explanation: '125 + 75 = 200, 200 - 50 = 150.'
  },
  {
    id: 'A-MAT-16',
    category: 'A',
    subject: 'matematika',
    question: 'Jumlah hari dalam 3 minggu adalah...',
    options: ['14 hari', '21 hari', '24 hari', '28 hari'],
    correctAnswer: 1,
    points: 5,
    explanation: '1 minggu = 7 hari. 3 x 7 = 21 hari.'
  },
  {
    id: 'A-MAT-17',
    category: 'A',
    subject: 'matematika',
    question: 'Sebuah kotak berisi 35 apel. Ayah memasukkan 25 apel lagi, lalu adik memakan 8 apel. Berapa sisa apel di kotak?',
    options: ['50 apel', '52 apel', '54 apel', '56 apel'],
    correctAnswer: 1,
    points: 5,
    explanation: '35 + 25 = 60, 60 - 8 = 52 apel.'
  },
  {
    id: 'A-MAT-18',
    category: 'A',
    subject: 'matematika',
    question: 'Berapakah 8 x 4?',
    options: ['28', '30', '32', '36'],
    correctAnswer: 2,
    points: 5,
    explanation: '8 x 4 = 32.'
  },
  {
    id: 'A-MAT-19',
    category: 'A',
    subject: 'matematika',
    question: 'Uang dua puluh ribu rupiah dapat ditukarkan dengan lembaran uang lima ribuan sebanyak...',
    options: ['2 lembar', '3 lembar', '4 lembar', '5 lembar'],
    correctAnswer: 2,
    points: 5,
    explanation: '20.000 / 5.000 = 4 lembar.'
  },
  {
    id: 'A-MAT-20',
    category: 'A',
    subject: 'matematika',
    question: 'Bilangan ganjil antara 12 dan 18 adalah...',
    options: ['13, 15, 17', '14, 16, 18', '11, 13, 15', '13, 14, 15'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Bilangan ganjil antara 12 dan 18 adalah 13, 15, dan 17.'
  },

  // ================= KATEGORI A - BAHASA INGGRIS =================
  {
    id: 'A-ENG-01',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'What is the color of the sun?',
    options: ['Blue', 'Yellow', 'Green', 'Purple'],
    correctAnswer: 1,
    points: 5,
    explanation: 'The sun is yellow.'
  },
  {
    id: 'A-ENG-02',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'How do you say "Selamat pagi" in English?',
    options: ['Good afternoon', 'Good morning', 'Good night', 'Good evening'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Selamat pagi = Good morning.'
  },
  {
    id: 'A-ENG-03',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Choose the correct word: "I have two ______ to see things."',
    options: ['ears', 'eyes', 'hands', 'legs'],
    correctAnswer: 1,
    points: 5,
    explanation: 'We see with our eyes.'
  },
  {
    id: 'A-ENG-04',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'What is the English word for "kucing"?',
    options: ['Bird', 'Dog', 'Cat', 'Fish'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Kucing in English is cat.'
  },
  {
    id: 'A-ENG-05',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'What number comes after seven?',
    options: ['Six', 'Eight', 'Nine', 'Ten'],
    correctAnswer: 1,
    points: 5,
    explanation: 'After seven (7) is eight (8).'
  },
  {
    id: 'A-ENG-06',
    category: 'A',
    subject: 'bahasa-inggris',
    question: '"My sister is eating an ______." Choose the right fruit.',
    options: ['apple', 'book', 'chair', 'pencil'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Apple is an edible fruit.'
  },
  {
    id: 'A-ENG-07',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Which day comes after Monday?',
    options: ['Sunday', 'Wednesday', 'Tuesday', 'Friday'],
    correctAnswer: 2,
    points: 5,
    explanation: 'After Monday is Tuesday.'
  },
  {
    id: 'A-ENG-08',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Complete the sentence: "She ______ a student."',
    options: ['is', 'are', 'am', 'be'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Subject "She" takes the verb "is".'
  },
  {
    id: 'A-ENG-09',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'What do you use to write on your notebook?',
    options: ['Spoon', 'Pencil', 'Shoe', 'Plate'],
    correctAnswer: 1,
    points: 5,
    explanation: 'We use a pencil to write.'
  },
  {
    id: 'A-ENG-10',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Translate: "Buku ini berwarna merah."',
    options: ['This book is red.', 'This book is blue.', 'That pen is red.', 'The car is red.'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Buku ini = This book, berwarna merah = is red.'
  },
  {
    id: 'A-ENG-11',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'How many fingers do you have on two hands?',
    options: ['Five', 'Eight', 'Ten', 'Twelve'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Two hands have 10 fingers.'
  },
  {
    id: 'A-ENG-12',
    category: 'A',
    subject: 'bahasa-inggris',
    question: '"Thank you very much." What is the best polite response?',
    options: ['Good bye', 'You are welcome', 'I am sorry', 'No problem boy'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Response to Thank you is "You are welcome".'
  },
  {
    id: 'A-ENG-13',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Which animal can fly in the sky?',
    options: ['Elephant', 'Fish', 'Bird', 'Cow'],
    correctAnswer: 2,
    points: 5,
    explanation: 'A bird can fly in the sky.'
  },
  {
    id: 'A-ENG-14',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'What is the opposite of "Big"?',
    options: ['Tall', 'Small', 'Fat', 'Long'],
    correctAnswer: 1,
    points: 5,
    explanation: 'The opposite of big is small.'
  },
  {
    id: 'A-ENG-15',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Where do you sleep at night?',
    options: ['In the kitchen', 'In the bathroom', 'In the bedroom', 'In the garden'],
    correctAnswer: 2,
    points: 5,
    explanation: 'We sleep in the bedroom.'
  },
  {
    id: 'A-ENG-16',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'Choose the correct article: "This is ______ umbrella."',
    options: ['a', 'an', 'the two', 'some'],
    correctAnswer: 1,
    points: 5,
    explanation: '"Umbrella" begins with a vowel sound, so we use "an".'
  },
  {
    id: 'A-ENG-17',
    category: 'A',
    subject: 'bahasa-inggris',
    question: '"The elephant is ______."',
    options: ['tiny', 'huge', 'feather', 'short'],
    correctAnswer: 1,
    points: 5,
    explanation: 'An elephant is huge (very big).'
  },
  {
    id: 'A-ENG-18',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'How do you say "tiga belas" in English?',
    options: ['Thirty', 'Thirteen', 'Three', 'Third'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Tiga belas is thirteen.'
  },
  {
    id: 'A-ENG-19',
    category: 'A',
    subject: 'bahasa-inggris',
    question: 'What do we drink when we are thirsty?',
    options: ['Water', 'Cake', 'Bread', 'Pizza'],
    correctAnswer: 0,
    points: 5,
    explanation: 'We drink water.'
  },
  {
    id: 'A-ENG-20',
    category: 'A',
    subject: 'bahasa-inggris',
    question: '"We are happy." The word "happy" means...',
    options: ['Sedih', 'Senang / Gembira', 'Marah', 'Takut'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Happy means senang atau gembira.'
  },

  // ================= KATEGORI A - IPA / SAINS =================
  {
    id: 'A-IPA-01',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Bagian tumbuhan yang bertugas menyerap air dan zat hara dari dalam tanah adalah...',
    options: ['Daun', 'Batang', 'Akar', 'Bunga'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Akar berfungsi menyerap air dan zat hara dari tanah.'
  },
  {
    id: 'A-IPA-02',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Hewan yang bernapas menggunakan insang adalah...',
    options: ['Kucing', 'Ikan', 'Ayam', 'Kambing'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Ikan hidup di air dan bernapas dengan insang.'
  },
  {
    id: 'A-IPA-03',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Benda yang tidak tembus cahaya jika disinari akan menghasilkan...',
    options: ['Bayangan', 'Air', 'Api', 'Pelangi'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Cahaya yang terhalang benda padat/gelap menghasilkan bayangan.'
  },
  {
    id: 'A-IPA-04',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Panca indra manusia yang berguna untuk mengecap rasa manis dan asin adalah...',
    options: ['Mata', 'Hidung', 'Lidah', 'Telinga'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Lidah merupakan indra pengecap rasa.'
  },
  {
    id: 'A-IPA-05',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Perubahan wujud es batu menjadi air cair dinamakan...',
    options: ['Membeku', 'Mencair', 'Menguap', 'Mengembun'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Perubahan padat ke cair disebut mencair.'
  },
  {
    id: 'A-IPA-06',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Sumber energi panas dan cahaya terbesar bagi bumi adalah...',
    options: ['Bulan', 'Lampu', 'Matahari', 'Bintang'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Matahari adalah sumber energi utama bumi.'
  },
  {
    id: 'A-IPA-07',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Hewan pemakan tumbuhan disebut hewan...',
    options: ['Karnivora', 'Herbivora', 'Omnivora', 'Insektivora'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Herbivora adalah hewan pemakan tumbuhan (seperti sapi dan kambing).'
  },
  {
    id: 'A-IPA-08',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Udara bersih yang kita hirup saat bernapas mengandung gas...',
    options: ['Oksigen', 'Karbon dioksida', 'Karbon monoksida', 'Asap'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Manusia menghirup gas oksigen.'
  },
  {
    id: 'A-IPA-09',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Benda berikut yang dapat ditarik oleh magnet adalah...',
    options: ['Paku besi', 'Penggaris plastik', 'Kertas buku', 'Penghapus karet'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Paku besi terbuat dari logam feromagnetik yang dapat ditarik magnet.'
  },
  {
    id: 'A-IPA-10',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Burung berkembang biak dengan cara...',
    options: ['Melahirkan', 'Bertelur', 'Membelah diri', 'Tunas'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Burung adalah hewan ovipar (bertelur).'
  },
  {
    id: 'A-IPA-11',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Ciri makhluk hidup berikut yang benar adalah...',
    options: ['Tidak butuh makan', 'Tumbuh dan berkembang', 'Tidak dapat bergerak', 'Bentuknya tetap'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Makhluk hidup bertumbuh dan berkembang.'
  },
  {
    id: 'A-IPA-12',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Daun pada umumnya berwarna hijau karena memiliki zat...',
    options: ['Klorofil', 'Hemoglobin', 'Melanin', 'Karoten'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Klorofil adalah zat hijau daun untuk fotosintesis.'
  },
  {
    id: 'A-IPA-13',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Alat untuk mengukur suhu tubuh saat demam adalah...',
    options: ['Penggaris', 'Termometer', 'Timbangan', 'Stopwatch'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Termometer digunakan untuk mengukur suhu.'
  },
  {
    id: 'A-IPA-14',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Gaya yang terjadi ketika kita menarik gerobak mainan adalah gaya...',
    options: ['Gaya dorong', 'Gaya tarik', 'Gaya gravitasi', 'Gaya magnet'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Menarik gerobak menggunakan gaya tarik.'
  },
  {
    id: 'A-IPA-15',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Air dapat berubah menjadi uap jika air...',
    options: ['Didinginkan', 'Dipanaskan sampai mendidih', 'Didiamkan di kulkas', 'Dibekukan'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Pemanasan membuat air menguap menjadi gas.'
  },
  {
    id: 'A-IPA-16',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Hewan katak hidup di dua alam (air dan darat) sehingga tergolong hewan...',
    options: ['Reptil', 'Amfibi', 'Mamalia', 'Unggas'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Katak adalah amfibi.'
  },
  {
    id: 'A-IPA-17',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Bunyi dihasilkan dari benda yang...',
    options: ['Diam', 'Bergetar', 'Dingin', 'Terang'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Bunyi dihasilkan oleh getaran benda.'
  },
  {
    id: 'A-IPA-18',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Supaya tanaman di pekarangan tumbuh subur, tanaman harus diberi...',
    options: ['Air dan cahaya matahari yang cukup', 'Minyak goreng', 'Air sabun', 'Ditaruh di tempat gelap terus'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Tanaman memerlukan air dan sinar matahari untuk hidup.'
  },
  {
    id: 'A-IPA-19',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Benda cair memiliki sifat mengikuti...',
    options: ['Warnanya', 'Bentuk wadahnya', 'Suhu ruang', 'Ukurannya'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Benda cair mengalir dan mengisi bentuk wadahnya.'
  },
  {
    id: 'A-IPA-20',
    category: 'A',
    subject: 'ipa-sains',
    question: 'Saat kita menjemur baju basah di bawah terik matahari, baju mengering karena terjadi proses...',
    options: ['Penguapan', 'Pembekuan', 'Peleburan', 'Penyubliman'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Air di baju basah menguap ke udara karena panas matahari.'
  },

  // ================= KATEGORI A - BAHASA INDONESIA =================
  {
    id: 'A-IND-01',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Huruf kapital digunakan pada awal...',
    options: ['Kalimat dan nama orang', 'Setiap kata', 'Tanda koma', 'Akhir paragraf'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Huruf kapital dipakai di awal kalimat dan nama orang.'
  },
  {
    id: 'A-IND-02',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Lawan kata dari "rajin" adalah...',
    options: ['Pintar', 'Malas', 'Cepat', 'Lambat'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Antonim rajin adalah malas.'
  },
  {
    id: 'A-IND-03',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: '"Di mana kamu membeli buku cerita itu(...)" Tanda baca yang tepat untuk mengakhiri kalimat tersebut adalah...',
    options: ['Tanda titik (.)', 'Tanda seru (!)', 'Tanda tanya (?)', 'Tanda koma (,)'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Kalimat tanya diakhiri dengan tanda tanya (?).'
  },
  {
    id: 'A-IND-04',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Kata dasar dari "membaca" adalah...',
    options: ['Baca', 'Membacakan', 'Kaca', 'Pembaca'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Kata dasar membaca adalah baca.'
  },
  {
    id: 'A-IND-05',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Persamaan kata (sinonim) dari kata "senang" adalah...',
    options: ['Duka', 'Gembira', 'Kecil', 'Takut'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Senang bersinonim dengan gembira.'
  },
  {
    id: 'A-IND-06',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Susunlah kata berikut menjadi kalimat yang padu: "pagi - sarapan - setiap - Budi"',
    options: ['Budi sarapan setiap pagi.', 'Pagi sarapan Budi setiap.', 'Setiap Budi pagi sarapan.', 'Sarapan pagi setiap Budi.'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Urutan baku: Subjek - Predikat - Keterangan.'
  },
  {
    id: 'A-IND-07',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Kalimat yang berisi perintah atau ajakan diakhiri dengan tanda...',
    options: ['Tanda titik (.)', 'Tanda seru (!)', 'Tanda tanya (?)', 'Tanda petik (")'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Kalimat perintah/seruan diakhiri tanda seru (!).'
  },
  {
    id: 'A-IND-08',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Ibu memasak di dapur. Kata "memasak" berkedudukan sebagai...',
    options: ['Subjek', 'Predikat', 'Objek', 'Keterangan'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Memasak adalah kata kerja (predikat).'
  },
  {
    id: 'A-IND-09',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Ungkapan "kutu buku" mempunyai arti orang yang...',
    options: ['Banyak kutunya', 'Suka membaca buku', 'Menjual buku bekas', 'Membuat buku cerita'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Kutu buku adalah kiasan untuk orang yang sangat gemar membaca.'
  },
  {
    id: 'A-IND-10',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Penulisan tempat dan tanggal surat yang benar adalah...',
    options: ['Jakarta, 17 Agustus 2026', 'Jakarta: 17 Agustus 2026', 'Jakarta 17-Agustus-2026', 'Jakarta; 17 Agustus 2026'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Nama kota dipisahkan dengan tanda koma sebelum tanggal.'
  },
  {
    id: 'A-IND-11',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Tokoh yang memiliki sifat baik dalam sebuah dongeng disebut...',
    options: ['Protagonis', 'Antagonis', 'Tritagonis', 'Figuran'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Protagonis adalah tokoh utama berwatak baik.'
  },
  {
    id: 'A-IND-12',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Kata tanya yang digunakan untuk menanyakan waktu adalah...',
    options: ['Siapa', 'Kapan', 'Di mana', 'Mengapa'],
    correctAnswer: 1,
    points: 5,
    explanation: '"Kapan" digunakan untuk menanyakan waktu terjadinya peristiwa.'
  },
  {
    id: 'A-IND-13',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Pesan moral yang ingin disampaikan pengarang dalam cerita disebut...',
    options: ['Alur', 'Amanat', 'Latar', 'Tema'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Amanat adalah pesan moral dari sebuah cerita.'
  },
  {
    id: 'A-IND-14',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: '"Tolong ambilkan buku itu di atas meja." Kalimat di atas merupakan jenis kalimat...',
    options: ['Tanya', 'Permintaan tolong / perintah halus', 'Berita', 'Pernyataan'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Menggunakan kata tolong menunjukkan kalimat permintaan tolong.'
  },
  {
    id: 'A-IND-15',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Lawan kata dari "panjang" adalah...',
    options: ['Lebar', 'Tinggi', 'Pendek', 'Besar'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Lawan kata panjang adalah pendek.'
  },
  {
    id: 'A-IND-16',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Dongeng yang menceritakan tentang kehidupan binatang disebut...',
    options: ['Fabel', 'Mite', 'Legenda', 'Sage'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Fabel adalah cerita fiksi berkarakter binatang.'
  },
  {
    id: 'A-IND-17',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Penulisan kata baku yang benar adalah...',
    options: ['Apotik', 'Apotek', 'Apoteg', 'Apoteek'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Bentuk baku menurut KBBI adalah "apotek".'
  },
  {
    id: 'A-IND-18',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Tempat pemberhentian kereta api dinamakan...',
    options: ['Terminal', 'Stasiun', 'Bandara', 'Pelabuhan'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Kereta api berhenti di stasiun.'
  },
  {
    id: 'A-IND-19',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Pemberitahuan resmi yang ditujukan kepada khalayak ramai disebut...',
    options: ['Pengumuman', 'Surat pribadi', 'Rahasia', 'Diary'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Pengumuman adalah pemberitahuan umum.'
  },
  {
    id: 'A-IND-20',
    category: 'A',
    subject: 'bahasa-indonesia',
    question: 'Di bawah ini yang merupakan kalimat tanya adalah...',
    options: ['Saya suka makan buah.', 'Berapa harga pensil ini?', 'Tolong bersihkan meja!', 'Bunga itu indah sekali.'],
    correctAnswer: 1,
    points: 5,
    explanation: '"Berapa harga pensil ini?" menanyakan harga.'
  },

  // ================= KATEGORI B (SD Kelas 4-6) - MATEMATIKA =================
  {
    id: 'B-MAT-01',
    category: 'B',
    subject: 'matematika',
    question: 'Faktor Persekutuan Terbesar (FPB) dari bilangan 36 dan 48 adalah...',
    options: ['6', '8', '12', '24'],
    correctAnswer: 2,
    points: 5,
    explanation: '36 = 2^2 x 3^2, 48 = 2^4 x 3. FPB = 2^2 x 3 = 12.'
  },
  {
    id: 'B-MAT-02',
    category: 'B',
    subject: 'matematika',
    question: 'Kelipatan Persekutuan Terkecil (KPK) dari 15 dan 25 adalah...',
    options: ['50', '75', '100', '150'],
    correctAnswer: 1,
    points: 5,
    explanation: '15 = 3 x 5, 25 = 5^2. KPK = 3 x 5^2 = 75.'
  },
  {
    id: 'B-MAT-03',
    category: 'B',
    subject: 'matematika',
    question: 'Sebuah lingkaran memiliki diameter 28 cm. Berapakah luas lingkaran tersebut? (Gunakan pi = 22/7)',
    options: ['616 cm²', '308 cm²', '154 cm²', '88 cm²'],
    correctAnswer: 0,
    points: 5,
    explanation: 'r = 14 cm. Luas = 22/7 x 14 x 14 = 616 cm².'
  },
  {
    id: 'B-MAT-04',
    category: 'B',
    subject: 'matematika',
    question: 'Berapakah hasil dari 3/4 + 2/5?',
    options: ['5/9', '1 3/20', '1 1/20', '23/20'],
    correctAnswer: 1,
    points: 5,
    explanation: '15/20 + 8/20 = 23/20 = 1 3/20.'
  },
  {
    id: 'B-MAT-05',
    category: 'B',
    subject: 'matematika',
    question: 'Sebuah mobil melaju dengan kecepatan rata-rata 60 km/jam selama 2,5 jam. Berapa jarak tempuh mobil tersebut?',
    options: ['120 km', '135 km', '150 km', '165 km'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Jarak = Kecepatan x Waktu = 60 x 2,5 = 150 km.'
  },
  {
    id: 'B-MAT-06',
    category: 'B',
    subject: 'matematika',
    question: 'Hasil dari 15² - 12² adalah...',
    options: ['81', '27', '108', '54'],
    correctAnswer: 0,
    points: 5,
    explanation: '225 - 144 = 81.'
  },
  {
    id: 'B-MAT-07',
    category: 'B',
    subject: 'matematika',
    question: 'Nilai dari akar pangkat tiga dari 4.096 adalah...',
    options: ['14', '16', '18', '26'],
    correctAnswer: 1,
    points: 5,
    explanation: '16 x 16 x 16 = 4.096.'
  },
  {
    id: 'B-MAT-08',
    category: 'B',
    subject: 'matematika',
    question: 'Perbandingan uang Rani dan Sinta adalah 3 : 5. Jika jumlah uang mereka Rp 160.000, berapa uang Sinta?',
    options: ['Rp 60.000', 'Rp 80.000', 'Rp 100.000', 'Rp 120.000'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Uang Sinta = 5/(3+5) x 160.000 = 5/8 x 160.000 = Rp 100.000.'
  },
  {
    id: 'B-MAT-09',
    category: 'B',
    subject: 'matematika',
    question: 'Volume balok dengan panjang 12 cm, lebar 8 cm, dan tinggi 10 cm adalah...',
    options: ['840 cm³', '960 cm³', '1.020 cm³', '1.200 cm³'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Volume = 12 x 8 x 10 = 960 cm³.'
  },
  {
    id: 'B-MAT-10',
    category: 'B',
    subject: 'matematika',
    question: 'Nilai rata-rata dari data: 7, 8, 9, 6, 8, 10 adalah...',
    options: ['7,5', '8,0', '8,5', '9,0'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Jumlah data = 48, dibagi 6 = 8,0.'
  },
  {
    id: 'B-MAT-11',
    category: 'B',
    subject: 'matematika',
    question: 'Sebuah peta memiliki skala 1 : 250.000. Jika jarak dua kota di peta 4 cm, berapa jarak sebenarnya?',
    options: ['1 km', '10 km', '25 km', '100 km'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Jarak sebenarnya = 4 x 250.000 cm = 1.000.000 cm = 10 km.'
  },
  {
    id: 'B-MAT-12',
    category: 'B',
    subject: 'matematika',
    question: 'Berapakah 25% dari 240?',
    options: ['48', '50', '60', '72'],
    correctAnswer: 2,
    points: 5,
    explanation: '25/100 x 240 = 60.'
  },
  {
    id: 'B-MAT-13',
    category: 'B',
    subject: 'matematika',
    question: 'Hasil dari (-15) + (-8) - (-12) adalah...',
    options: ['-11', '-35', '-19', '11'],
    correctAnswer: 0,
    points: 5,
    explanation: '-15 - 8 + 12 = -23 + 12 = -11.'
  },
  {
    id: 'B-MAT-14',
    category: 'B',
    subject: 'matematika',
    question: 'Luas trapesium dengan sisi sejajar 14 cm dan 20 cm serta tinggi 8 cm adalah...',
    options: ['120 cm²', '136 cm²', '144 cm²', '272 cm²'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Luas = 1/2 x (14 + 20) x 8 = 34 x 4 = 136 cm².'
  },
  {
    id: 'B-MAT-15',
    category: 'B',
    subject: 'matematika',
    question: 'Sebuah toko memberikan diskon 15% untuk tas seharga Rp 200.000. Berapa harga yang harus dibayar?',
    options: ['Rp 160.000', 'Rp 170.000', 'Rp 180.000', 'Rp 185.000'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Diskon = 15% x 200.000 = 30.000. Harga bayar = 170.000.'
  },
  {
    id: 'B-MAT-16',
    category: 'B',
    subject: 'matematika',
    question: 'Hasil dari 2 1/2 x 1 3/5 adalah...',
    options: ['3', '4', '4 1/2', '5'],
    correctAnswer: 1,
    points: 5,
    explanation: '5/2 x 8/5 = 40/10 = 4.'
  },
  {
    id: 'B-MAT-17',
    category: 'B',
    subject: 'matematika',
    question: 'Sebuah drum berbentuk tabung memiliki jari-jari 7 dm dan tinggi 10 dm. Berapa liter volume drum tersebut?',
    options: ['1.540 liter', '770 liter', '3.080 liter', '154 liter'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Volume = 22/7 x 7 x 7 x 10 = 1.540 dm³ = 1.540 liter.'
  },
  {
    id: 'B-MAT-18',
    category: 'B',
    subject: 'matematika',
    question: 'Sudut yang besarnya antara 90 derajat dan 180 derajat disebut sudut...',
    options: ['Lancip', 'Siku-siku', 'Tumpul', 'Refleks'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Sudut lebih besar dari 90° dan kurang dari 180° adalah sudut tumpul.'
  },
  {
    id: 'B-MAT-19',
    category: 'B',
    subject: 'matematika',
    question: 'Modus dari data nilai: 6, 7, 8, 7, 9, 7, 8, 10, 7 adalah...',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Nilai 7 muncul paling sering (4 kali).'
  },
  {
    id: 'B-MAT-20',
    category: 'B',
    subject: 'matematika',
    question: 'Berapakah hasil dari 4³ + 5² - √144?',
    options: ['77', '79', '81', '85'],
    correctAnswer: 0,
    points: 5,
    explanation: '64 + 25 - 12 = 89 - 12 = 77.'
  },

  // ================= KATEGORI C (SMP & SMA/SMK) - MATEMATIKA =================
  {
    id: 'C-MAT-01',
    category: 'C',
    subject: 'matematika',
    question: 'Jika 3^(2x - 1) = 243, maka nilai dari x adalah...',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    points: 5,
    explanation: '243 = 3^5. Maka 2x - 1 = 5 => 2x = 6 => x = 3.'
  },
  {
    id: 'C-MAT-02',
    category: 'C',
    subject: 'matematika',
    question: 'Akar-akar persamaan kuadrat x² - 7x + 10 = 0 adalah...',
    options: ['x = -2 atau x = -5', 'x = 2 atau x = 5', 'x = -2 atau x = 5', 'x = 1 atau x = 10'],
    correctAnswer: 1,
    points: 5,
    explanation: '(x - 2)(x - 5) = 0, sehingga x = 2 atau x = 5.'
  },
  {
    id: 'C-MAT-03',
    category: 'C',
    subject: 'matematika',
    question: 'Diketahui deret aritmatika dengan suku pertama a = 5 dan beda b = 3. Suku ke-20 (U20) adalah...',
    options: ['62', '65', '68', '71'],
    correctAnswer: 0,
    points: 5,
    explanation: 'U20 = a + (20-1)b = 5 + 19(3) = 5 + 57 = 62.'
  },
  {
    id: 'C-MAT-04',
    category: 'C',
    subject: 'matematika',
    question: 'Nilai dari sin 30° + cos 60° - tan 45° adalah...',
    options: ['0', '1/2', '1', '√3/2'],
    correctAnswer: 0,
    points: 5,
    explanation: 'sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1. 1/2 + 1/2 - 1 = 0.'
  },
  {
    id: 'C-MAT-05',
    category: 'C',
    subject: 'matematika',
    question: 'Fungsi f(x) = 2x³ - 9x² + 12x. Turunan pertama f\'(x) adalah...',
    options: ['6x² - 18x + 12', '6x³ - 9x + 12', '3x² - 18x + 12', '6x² - 9x + 12'],
    correctAnswer: 0,
    points: 5,
    explanation: 'f\'(x) = 6x² - 18x + 12.'
  },
  {
    id: 'C-MAT-06',
    category: 'C',
    subject: 'matematika',
    question: 'Banyak cara menyusun 4 huruf berbeda dari kata "BINTANG" adalah... (Kombinasi/Permutasi)',
    options: ['420', '840', '1.680', '2.520'],
    correctAnswer: 1,
    points: 5,
    explanation: '7P4 = 7! / 3! = 7 x 6 x 5 x 4 = 840 cara.'
  },
  {
    id: 'C-MAT-07',
    category: 'C',
    subject: 'matematika',
    question: 'Dua dadu dilempar bersamaan satu kali. Peluang muncul jumlah mata dadu sama dengan 8 adalah...',
    options: ['3/36', '4/36', '5/36', '6/36'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Pasangan jumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) ada 5 kejadian. Peluang = 5/36.'
  },
  {
    id: 'C-MAT-08',
    category: 'C',
    subject: 'matematika',
    question: 'Jika matriks A = [[2, 3], [1, 4]], maka determinan matriks A adalah...',
    options: ['5', '8', '11', '14'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Det(A) = (2)(4) - (3)(1) = 8 - 3 = 5.'
  },
  {
    id: 'C-MAT-09',
    category: 'C',
    subject: 'matematika',
    question: 'Nilai limit x mendekati 3 dari (x² - 9)/(x - 3) adalah...',
    options: ['0', '3', '6', '9'],
    correctAnswer: 2,
    points: 5,
    explanation: '(x - 3)(x + 3) / (x - 3) = x + 3. Substitusi x = 3 => 3 + 3 = 6.'
  },
  {
    id: 'C-MAT-10',
    category: 'C',
    subject: 'matematika',
    question: 'Persamaan lingkaran dengan pusat (0,0) dan melalui titik (3,4) adalah...',
    options: ['x² + y² = 7', 'x² + y² = 12', 'x² + y² = 25', 'x² + y² = 50'],
    correctAnswer: 2,
    points: 5,
    explanation: 'r² = 3² + 4² = 9 + 16 = 25. Persamaan: x² + y² = 25.'
  },
  {
    id: 'C-MAT-11',
    category: 'C',
    subject: 'matematika',
    question: 'Jika log 2 = a dan log 3 = b, maka nilai log 18 dinyatakan dalam a dan b adalah...',
    options: ['a + b', 'a + 2b', '2a + b', '2a + 2b'],
    correctAnswer: 1,
    points: 5,
    explanation: 'log 18 = log (2 x 3²) = log 2 + 2 log 3 = a + 2b.'
  },
  {
    id: 'C-MAT-12',
    category: 'C',
    subject: 'matematika',
    question: 'Diketahui suku ketiga deret geometri adalah 18 dan suku keenam adalah 486. Rasio (r) deret tersebut adalah...',
    options: ['2', '3', '4', '6'],
    correctAnswer: 1,
    points: 5,
    explanation: 'U6 / U3 = r³ = 486 / 18 = 27. Maka r = 3.'
  },
  {
    id: 'C-MAT-13',
    category: 'C',
    subject: 'matematika',
    question: 'Berapakah integral dari ∫(6x² - 4x + 3) dx?',
    options: ['2x³ - 2x² + 3x + C', '3x³ - 2x² + 3x + C', '2x³ - 4x² + 3x + C', '6x³ - 2x² + 3x + C'],
    correctAnswer: 0,
    points: 5,
    explanation: '6/3 x³ - 4/2 x² + 3x + C = 2x³ - 2x² + 3x + C.'
  },
  {
    id: 'C-MAT-14',
    category: 'C',
    subject: 'matematika',
    question: 'Gradien garis yang melalui titik A(2, 5) dan B(6, 13) adalah...',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    points: 5,
    explanation: 'm = (13 - 5)/(6 - 2) = 8/4 = 2.'
  },
  {
    id: 'C-MAT-15',
    category: 'C',
    subject: 'matematika',
    question: 'Himpunan penyelesaian pertidaksamaan 2x - 5 < 3x + 1 adalah...',
    options: ['x > -6', 'x < -6', 'x > 6', 'x < 6'],
    correctAnswer: 0,
    points: 5,
    explanation: '2x - 3x < 1 + 5 => -x < 6 => x > -6.'
  },
  {
    id: 'C-MAT-16',
    category: 'C',
    subject: 'matematika',
    question: 'Nilai dari cos 120° adalah...',
    options: ['1/2', '-1/2', '√3/2', '-√3/2'],
    correctAnswer: 1,
    points: 5,
    explanation: 'cos 120° = cos (180° - 60°) = -cos 60° = -1/2.'
  },
  {
    id: 'C-MAT-17',
    category: 'C',
    subject: 'matematika',
    question: 'Sebuah segitiga ABC siku-siku di B dengan panjang AB = 9 cm dan BC = 12 cm. Panjang AC adalah...',
    options: ['15 cm', '16 cm', '18 cm', '21 cm'],
    correctAnswer: 0,
    points: 5,
    explanation: 'AC² = 9² + 12² = 81 + 144 = 225 => AC = 15 cm.'
  },
  {
    id: 'C-MAT-18',
    category: 'C',
    subject: 'matematika',
    question: 'Berapakah simpangan baku dari data: 4, 6, 8, 10, 12?',
    options: ['2√2', '√8', '2,83', 'Semua benar (2√2)'],
    correctAnswer: 3,
    points: 5,
    explanation: 'Rata-rata = 8. Varians = (16+4+0+4+16)/5 = 8. Simpangan baku = √8 = 2√2.'
  },
  {
    id: 'C-MAT-19',
    category: 'C',
    subject: 'matematika',
    question: 'Jika f(x) = 2x + 1 dan g(x) = x² - 3, maka (g ∘ f)(x) adalah...',
    options: ['4x² + 4x - 2', '2x² - 5', '4x² + 1', '4x² - 2'],
    correctAnswer: 0,
    points: 5,
    explanation: 'g(2x + 1) = (2x + 1)² - 3 = 4x² + 4x + 1 - 3 = 4x² + 4x - 2.'
  },
  {
    id: 'C-MAT-20',
    category: 'C',
    subject: 'matematika',
    question: 'Vektor u = 3i - 4j. Panjang (magnitudo) vektor u adalah...',
    options: ['3', '4', '5', '7'],
    correctAnswer: 2,
    points: 5,
    explanation: '|u| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.'
  },

  // ================= KATEGORI C - IPA / SAINS =================
  {
    id: 'C-IPA-01',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Hukum II Newton menyatakan bahwa percepatan sebuah benda berbanding lurus dengan gaya dan berbanding terbalik dengan massa. Rumusnya adalah...',
    options: ['F = m / a', 'F = m . a', 'a = F . m', 'm = F . a'],
    correctAnswer: 1,
    points: 5,
    explanation: 'F = m . a (Gaya = massa x percepatan).'
  },
  {
    id: 'C-IPA-02',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Organel sel yang berfungsi sebagai tempat sintesis protein adalah...',
    options: ['Mitokondria', 'Ribosom', 'Badan Golgi', 'Lisosom'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Ribosom adalah tempat sintesis protein.'
  },
  {
    id: 'C-IPA-03',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Gas rumah kaca yang memiliki kontribusi terbesar terhadap efek pemanasan global akibat aktivitas manusia adalah...',
    options: ['Oksigen (O2)', 'Karbon Dioksida (CO2)', 'Nitrogen (N2)', 'Argon (Ar)'],
    correctAnswer: 1,
    points: 5,
    explanation: 'CO2 menyerap dan memancarkan kembali radiasi inframerah.'
  },
  {
    id: 'C-IPA-04',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Unsur dengan nomor atom 11 memiliki konfigurasi elektron (kulit atom)...',
    options: ['2, 8, 1', '2, 9', '2, 8, 2', '2, 7, 2'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Natrium (Na, Z=11): 2 di kulit K, 8 di kulit L, 1 di kulit M.'
  },
  {
    id: 'C-IPA-05',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Sebuah kawat penghantar memiliki hambatan 10 Ohm dan dialiri arus 2 Ampere. Beda potensial pada ujung kawat adalah...',
    options: ['5 Volt', '12 Volt', '20 Volt', '40 Volt'],
    correctAnswer: 2,
    points: 5,
    explanation: 'V = I . R = 2 A x 10 Ohm = 20 Volt.'
  },
  {
    id: 'C-IPA-06',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Pembelahan sel yang menghasilkan empat sel anakan dengan jumlah kromosom separuh dari sel induk disebut...',
    options: ['Mitosis', 'Meiosis', 'Amitosis', 'Biner'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Meiosis menghasilkan sel gamet haploid (n) berjumlah 4 sel anak.'
  },
  {
    id: 'C-IPA-07',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Larutan dengan pH = 3 tergolong larutan...',
    options: ['Asam kuat', 'Basa kuat', 'Netral', 'Garam murni'],
    correctAnswer: 0,
    points: 5,
    explanation: 'pH < 7 adalah asam; pH 3 adalah asam kuat.'
  },
  {
    id: 'C-IPA-08',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Energi potensial gravitasi sebuah benda bermassa 2 kg yang berada di ketinggian 5 meter (g = 10 m/s²) adalah...',
    options: ['10 Joule', '50 Joule', '100 Joule', '200 Joule'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Ep = m . g . h = 2 x 10 x 5 = 100 Joule.'
  },
  {
    id: 'C-IPA-09',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Enzim ptialin (amilase saliva) dalam air liur berfungsi mencerna amilum menjadi...',
    options: ['Glukosa/Maltosa', 'Asam amino', 'Asam lemak', 'Gliserol'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Amilase memecah amilum menjadi disakarida (maltosa).'
  },
  {
    id: 'C-IPA-10',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Reaksi pelepasan elektron pada suatu atom disebut reaksi...',
    options: ['Reduksi', 'Oksidasi', 'Netralisasi', 'Presipitasi'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Oksidasi adalah peristiwa pelepasan elektron.'
  },
  {
    id: 'C-IPA-11',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Perambatan panas tanpa perantara materi dinamakan...',
    options: ['Konduksi', 'Konveksi', 'Radiasi', 'Evaporasi'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Radiasi adalah perpindahan panas melalui gelombang elektromagnetik tanpa medium.'
  },
  {
    id: 'C-IPA-12',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Bagian darah yang berperan vital dalam pembekuan darah saat terjadi luka adalah...',
    options: ['Eritrosit', 'Leukosit', 'Trombosit', 'Plasma'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Trombosit (keping darah) bertugas dalam proses koagulasi/pembekuan darah.'
  },
  {
    id: 'C-IPA-13',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Senyawa air memiliki rumus kimia H2O. Ikatan yang terjadi antara atom H dan O adalah ikatan...',
    options: ['Ionik', 'Kovalen', 'Logam', 'Van der Waals'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Ikatan antara sesama unsur non-logam adalah ikatan kovalen polar.'
  },
  {
    id: 'C-IPA-14',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Cepat rambat bunyi paling cepat merambat melalui zat berwujud...',
    options: ['Gas', 'Cair', 'Padat', 'Ruang hampa'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Zat padat memiliki partikel yang paling rapat sehingga menghantarkan gelombang getaran bunyi paling cepat.'
  },
  {
    id: 'C-IPA-15',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Hormon yang dihasilkan oleh kelenjar pankreas untuk menurunkan kadar gula darah adalah...',
    options: ['Adrenalin', 'Insulin', 'Tiroksin', 'Estrogen'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Insulin mengubah glukosa menjadi glikogen di hati.'
  },
  {
    id: 'C-IPA-16',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Sebuah cermin cekung memiliki jarak fokus 10 cm. Jika benda diletakkan 15 cm di depan cermin, jarak bayangannya adalah...',
    options: ['20 cm', '25 cm', '30 cm', '60 cm'],
    correctAnswer: 2,
    points: 5,
    explanation: '1/s\' = 1/f - 1/s = 1/10 - 1/15 = (3-2)/30 = 1/30 => s\' = 30 cm.'
  },
  {
    id: 'C-IPA-17',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Molekul DNA tersusun atas rantai polinukleotida ganda yang berpilin yang disebut...',
    options: ['Single strand', 'Double helix', 'Triple loop', 'Alpha sheet'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Bentuk DNA adalah untai ganda berpilin (double helix).'
  },
  {
    id: 'C-IPA-18',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Hukum kekekalan energi menyatakan bahwa...',
    options: ['Energi dapat diciptakan dari kehampaan', 'Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat berubah bentuk', 'Energi selalu berkurang di alam semesta', 'Energi hanya ada pada benda bergerak'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Prinsip Termodinamika I: energi bersifat kekal.'
  },
  {
    id: 'C-IPA-19',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Zat yang berfungsi mempercepat laju reaksi kimia tanpa ikut habis bereaksi disebut...',
    options: ['Reaktan', 'Katalisator', 'Produk', 'Inhibitor'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Katalis menurunkan energi aktivasi reaksi.'
  },
  {
    id: 'C-IPA-20',
    category: 'C',
    subject: 'ipa-sains',
    question: 'Organisme yang berperan menguraikan sisa-sisa organisme yang telah mati menjadi zat hara di alam adalah...',
    options: ['Produsen', 'Konsumen primer', 'Dekomposer / Pengurai', 'Herbivor'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Dekomposer (bakteri dan jamur) mengurai bahan organik menjadi anorganik.'
  },

  // ================= KATEGORI C - BAHASA INGGRIS =================
  {
    id: 'C-ENG-01',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'If she ______ harder, she would pass the national entrance exam with honors.',
    options: ['studied', 'studies', 'study', 'has studied'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Second conditional clause: If + past simple, would + bare infinitive.'
  },
  {
    id: 'C-ENG-02',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'The committee members insisted that the proposal ______ reviewed thoroughly by legal advisors.',
    options: ['is', 'be', 'was', 'were'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Subjunctive mood after verbs of demand/insistence: subject + bare infinitive (be).'
  },
  {
    id: 'C-ENG-03',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Choose the word closest in meaning to "PRAGMATIC":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Hesitant'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Pragmatic means practical and sensible.'
  },
  {
    id: 'C-ENG-04',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Neither the teacher nor the students ______ aware of the sudden schedule alteration.',
    options: ['was', 'were', 'is', 'are being'],
    correctAnswer: 1,
    points: 5,
    explanation: 'In "neither ... nor", the verb agrees with the closer subject ("students", plural => were).'
  },
  {
    id: 'C-ENG-05',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'By the end of this semester, we ______ our scientific research paper.',
    options: ['will complete', 'will have completed', 'completed', 'are completing'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Future perfect tense ("By the end of... will have completed").'
  },
  {
    id: 'C-ENG-06',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Which of the following sentences contains a dangling modifier?',
    options: [
      'Walking down the street, the trees looked vibrant.',
      'Walking down the street, I admired the vibrant trees.',
      'I walked down the street admiring trees.',
      'The trees looked vibrant as I walked down the street.'
    ],
    correctAnswer: 0,
    points: 5,
    explanation: 'In option A, the trees are grammatically modified as "walking down the street", which is illogical.'
  },
  {
    id: 'C-ENG-07',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'The antonym of "VERBOSE" is...',
    options: ['Wordy', 'Concise', 'Elaborate', 'Repetitive'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Verbose means using too many words; its antonym is concise.'
  },
  {
    id: 'C-ENG-08',
    category: 'C',
    subject: 'bahasa-inggris',
    question: '"Hardly had we entered the hall ______ the grand ceremony commenced."',
    options: ['than', 'when', 'then', 'as'],
    correctAnswer: 1,
    points: 5,
    explanation: 'The correlative conjunction structure is: "Hardly had ... when ...".'
  },
  {
    id: 'C-ENG-09',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'The scientist was commended for her ______ discovery in renewable energy technology.',
    options: ['groundbreaking', 'breaking ground', 'grounded', 'broken'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Groundbreaking means pioneering or revolutionary.'
  },
  {
    id: 'C-ENG-10',
    category: 'C',
    subject: 'bahasa-inggris',
    question: '"He is accustomed to ______ in diverse multicultural teams."',
    options: ['work', 'working', 'worked', 'works'],
    correctAnswer: 1,
    points: 5,
    explanation: 'The phrase "accustomed to" is followed by a gerund (-ing form).'
  },
  {
    id: 'C-ENG-11',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Choose the sentence written in correct passive voice:',
    options: [
      'The prestigious award presented by the committee yesterday.',
      'The prestigious award was presented by the committee yesterday.',
      'The committee was presented the prestigious award.',
      'Yesterday presenting the prestigious award by committee.'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Simple past passive: subject + was/were + past participle.'
  },
  {
    id: 'C-ENG-12',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'What rhetorical device is used in: "The wind whispered secrets through the dense forest"?',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Giving human characteristics (whispering) to non-human elements (the wind) is personification.'
  },
  {
    id: 'C-ENG-13',
    category: 'C',
    subject: 'bahasa-inggris',
    question: '"Despite the heavy deluge, the outdoor Olympiad symposium proceeded smoothly." The word "deluge" means...',
    options: ['Severe drought', 'Torrential downpour/flood', 'Mild wind', 'Hot temperature'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Deluge means a severe downpour of rain or flood.'
  },
  {
    id: 'C-ENG-14',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Identify the noun phrase functioning as the subject: "The highly anticipated national science championship will commence tomorrow."',
    options: [
      'will commence tomorrow',
      'The highly anticipated national science championship',
      'science championship will',
      'tomorrow'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'The entire noun phrase before the auxiliary "will" acts as the subject.'
  },
  {
    id: 'C-ENG-15',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Choose the correct preposition: "Her outstanding analytical thesis was published ______ accordance with international academic guidelines."',
    options: ['on', 'in', 'at', 'with'],
    correctAnswer: 1,
    points: 5,
    explanation: 'The standard idiom is "in accordance with".'
  },
  {
    id: 'C-ENG-16',
    category: 'C',
    subject: 'bahasa-inggris',
    question: '"She speaks French fluently, ______?" Choose the correct question tag.',
    options: ['doesn\'t she', 'isn\'t she', 'does she', 'didn\'t she'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Affirmative simple present with "she" takes the negative tag "doesn\'t she?".'
  },
  {
    id: 'C-ENG-17',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'The phrase "once in a blue moon" refers to an event that occurs...',
    options: ['Very frequently', 'Extremely rarely', 'Every month', 'During the night only'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Idiom "once in a blue moon" means very rarely.'
  },
  {
    id: 'C-ENG-18',
    category: 'C',
    subject: 'bahasa-inggris',
    question: '"Having finished his laboratory experiment, ______."',
    options: [
      'the report was submitted by Kevin.',
      'Kevin submitted his comprehensive report.',
      'the test tubes were cleaned.',
      'it was time for lunch.'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'The participle "Having finished" must be logically attached to the subject who did the action (Kevin).'
  },
  {
    id: 'C-ENG-19',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'What is the noun form of the adjective "RESILIENT"?',
    options: ['Resilence', 'Resiliency / Resilience', 'Resiliance', 'Resilious'],
    correctAnswer: 1,
    points: 5,
    explanation: 'The noun form is resilience or resiliency.'
  },
  {
    id: 'C-ENG-20',
    category: 'C',
    subject: 'bahasa-inggris',
    question: 'Choose the sentence with correct punctuation:',
    options: [
      'However; we must maintain integrity.',
      'We must, however, maintain the highest academic integrity.',
      'We must however maintain, the highest integrity.',
      'We must however; maintain integrity.'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Parenthetical conjunctive adverb "however" is set off by commas.'
  },

  // ================= KATEGORI C - BAHASA INDONESIA =================
  {
    id: 'C-IND-01',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Penulisan kata serapan yang sesuai dengan Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) adalah...',
    options: ['Konkrit, analisa, sistim', 'Konkret, analisis, sistem', 'Kongkrit, analisa, sistim', 'Konkret, analisa, sistim'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Bentuk baku: konkret, analisis, sistem.'
  },
  {
    id: 'C-IND-02',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Paragraf yang kalimat utamanya terletak di awal paragraf disebut paragraf...',
    options: ['Induktif', 'Deduktif', 'Campuran', 'Naratif'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Paragraf deduktif menempatkan gagasan utama di awal paragraf.'
  },
  {
    id: 'C-IND-03',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Kalimat berikut yang merupakan kalimat efektif dan gramatikal adalah...',
    options: [
      'Bagi para peserta yang mana terlambat tidak diizinkan masuk.',
      'Peserta yang terlambat tidak diizinkan memasuki ruang ujian.',
      'Untuk mempersingkat waktu, kita teruskan acara selanjutnya.',
      'Dalam pertemuan ini membicarakan tentang peningkatan mutu olimpiade.'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Kalimat efektif harus hemat kata, logis, dan memiliki subjek serta predikat yang jelas.'
  },
  {
    id: 'C-IND-04',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Majas yang menyatakan sesuatu secara berlebih-lebihan untuk memberikan kesan dramatis dinamakan majas...',
    options: ['Litotes', 'Hiperbola', 'Personifikasi', 'Metafora'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Hiperbola adalah gaya bahasa melebih-lebihkan kenyataan.'
  },
  {
    id: 'C-IND-05',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Penulisan judul karya ilmiah berikut yang tepat sesuai kaidah EYD adalah...',
    options: [
      'Pengaruh Minat Baca Terhadap Prestasi Akademik Siswa Di Indonesia',
      'Pengaruh Minat Baca terhadap Prestasi Akademik Siswa di Indonesia',
      'Pengaruh Minat Baca Terhadap Prestasi Akademik Siswa di Indonesia',
      'pengaruh minat baca terhadap prestasi akademik siswa di indonesia'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Kata tugas/preposisi seperti "terhadap" dan "di" ditulis dengan huruf kecil kecuali di awal judul.'
  },
  {
    id: 'C-IND-06',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Konjungsi yang menyatakan hubungan pertentangan antarkalimat adalah...',
    options: ['Oleh karena itu', 'Akan tetapi', 'Selain itu', 'Bahkan'],
    correctAnswer: 1,
    points: 5,
    explanation: '"Akan tetapi" menandakan pertentangan.'
  },
  {
    id: 'C-IND-07',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Arti ungkapan "berpangku tangan" adalah...',
    options: ['Bekerja keras', 'Tidak mau berbuat atau membantu apa-apa', 'Duduk bersila', 'Meminta sedekah'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Berpangku tangan bermakna bermalas-malasan atau tidak mau berusaha/membantu.'
  },
  {
    id: 'C-IND-08',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Teks yang berisi pendapat pribadi penulis disertai fakta pendukung untuk meyakinkan pembaca disebut teks...',
    options: ['Eksposisi / Opini', 'Eksplanasi', 'Laporan Hasil Observasi', 'Deskripsi'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Teks eksposisi menyajikan argumentasi logis berdasarkan tesis dan fakta.'
  },
  {
    id: 'C-IND-09',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Fungsi utama teks eksplanasi ilmiah adalah...',
    options: [
      'Menghibur pembaca dengan cerita khayalan',
      'Menjelaskan proses terjadinya fenomena alam atau sosial secara kausalitas',
      'Mempromosikan produk atau jasa komersial',
      'Memberikan instruksi langkah-langkah membuat kerajinan'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Eksplanasi menjelaskan hubungan sebab-akibat terjadinya suatu fenomena.'
  },
  {
    id: 'C-IND-10',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Penggunaan tanda koma (,) yang tepat terdapat pada kalimat...',
    options: [
      'Saya membeli pensil, penghapus dan buku tulis.',
      'Saya membeli pensil, penghapus, dan buku tulis.',
      'Saya membeli, pensil, penghapus, dan buku tulis.',
      'Saya membeli pensil penghapus, dan buku tulis.'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Rincian lebih dari dua unsur dipisahkan dengan koma sebelum konjungsi "dan" (Oxford comma dalam EYD V).'
  },
  {
    id: 'C-IND-11',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Kata "orisinalitas" memiliki arti...',
    options: ['Keaslian atau orisinal', 'Kemudahan adaptasi', 'Kecepatan berpikir', 'Kelemahan argumen'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Orisinalitas berarti keaslian ide atau ciptaan.'
  },
  {
    id: 'C-IND-12',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Kalimat persuasif yang santun dan mengajak pada poster pendaftaran olimpiade adalah...',
    options: [
      'Kamu harus daftar sekarang atau menyesal!',
      'Mari kembangkan potensi emasmu dan raih prestasi nasional bersama kami!',
      'Daftar jika ingin nilai rapor bagus.',
      'Semua siswa wajib setor nama hari ini!'
    ],
    correctAnswer: 1,
    points: 5,
    explanation: 'Kalimat persuasif positif menggunakan ajakan santun dan memotivasi pembaca.'
  },
  {
    id: 'C-IND-13',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Unsur intrinsik cerpen yang menggambarkan tempat, waktu, dan suasana terjadinya peristiwa adalah...',
    options: ['Latar (Setting)', 'Alur (Plot)', 'Amanat', 'Penokohan'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Latar mencakup waktu, tempat, dan suasana.'
  },
  {
    id: 'C-IND-14',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Penulisan gabungan kata yang benar adalah...',
    options: ['Tanggungjawab', 'Tanggung jawab', 'Tanggung-jawab', 'Pertanggung jawaban'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Gabungan kata ditulis terpisah: "tanggung jawab". Jika diberi awalan dan akhiran sekaligus, ditulis serangkai: "pertanggungjawaban".'
  },
  {
    id: 'C-IND-15',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Kata serapan dari bahasa asing yang dieja dengan benar adalah...',
    options: ['Frekwensi', 'Frekuensi', 'Prekwensi', 'Frequensi'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Penyerapan bahasa asing qu menjadi ku: frekuensi.'
  },
  {
    id: 'C-IND-16',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Ragam bahasa yang digunakan dalam penulisan karya ilmiah dan acara resmi kenegaraan adalah ragam...',
    options: ['Santai / Slang', 'Baku / Formal', 'Dialek daerah', 'Kolokial'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Ragam baku digunakan dalam ranah ilmiah dan resmi.'
  },
  {
    id: 'C-IND-17',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Sinonim dari kata "akuntabel" adalah...',
    options: ['Dapat dipercaya dan dipertanggungjawabkan', 'Mudah dibeli', 'Sangat rahasia', 'Sulit dihitung'],
    correctAnswer: 0,
    points: 5,
    explanation: 'Akuntabel berarti dapat dipertanggungjawabkan kebenarannya.'
  },
  {
    id: 'C-IND-18',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Inti dari sebuah simpulan teks eksposisi harus bertolak dari...',
    options: ['Pendapat subjektif pembaca baru', 'Tesis dan rangkaian argumen yang telah dipaparkan', 'Pertanyaan tanpa jawaban', 'Kutipan lirik lagu'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Simpulan merangkum dan menegaskan kembali tesis berdasarkan fakta argumen.'
  },
  {
    id: 'C-IND-19',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Penggunaan kata depan "di" yang tepat adalah...',
    options: ['dimana', 'disekolah', 'di Surabaya', 'dijual-belikan'],
    correctAnswer: 2,
    points: 5,
    explanation: 'Kata depan "di" yang menyatakan tempat ditulis terpisah: "di Surabaya".'
  },
  {
    id: 'C-IND-20',
    category: 'C',
    subject: 'bahasa-indonesia',
    question: 'Gaya penulisan ringkas dan padat tanpa mengurangi substansi pokok dalam laporan disebut...',
    options: ['Parafrase', 'Ikhtisar / Rangkuman', 'Fiksi', 'Anekdot'],
    correctAnswer: 1,
    points: 5,
    explanation: 'Ikhtisar atau rangkuman menyajikan intisari naskah dengan padat.'
  }
];
