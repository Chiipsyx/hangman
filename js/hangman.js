var questions = {
  "abiotik": "(a) tidak memiliki ciri hidup; tidak hidup",
  "abadi": "(a) kekal; tidak berkesudahan",
  "atlet": "(n) olahragawan, terutama yang mengikuti perlombaan atau pertandingan (kekuatan, ketangkasan, dan kecepatan)",
  "ametis": "(a) (Geo) batu permata kuarsa yang tembus cahaya dengan warna yang beraneka, seperti ungu, merah, biru",
  "adat": "(n) kebiasaan yang berlaku di masyarakat",
  "badai": "(n) angin kencang yang berputar-putar dan membawa hujan lebat",
  "bahu": "(n) bagian tubuh antara leher dan lengan atas",
  "bajaj": "(n) kendaraan roda tiga yang digerakkan dengan mesin bensin",
  "bulan": "(n) satelit alami bumi yang mengelilingi bumi",
  "bohong": "(a) tidak benar; tidak jujur",
  "cadel": "(a) kurang sempurna mengucapkan kata-kata sehingga bunyi [r] dilafalkan [l]",
  "cakar": "(n) kuku yang tajam dan keras",
  "cawan": "(n) gelas kecil yang biasanya digunakan untuk minum kopi atau teh",
  "cubit": "(v) memegang dengan jari-jari tangan dan meremas",
  "copet": "(n) orang yang mencuri di tempat umum",
  "dangdut": "(n) musik populer Indonesia yang berasal dari musik Melayu",
  "dada": "(n) bagian tubuh antara leher dan perut",
  "duafa": "(n) orang-orang yang hidup dalam kemiskinan",
  "diagonal": "(a) garis yang menghubungkan dua sudut yang berlawanan pada suatu bangun datar",
  "dokter": "(n) orang yang mempelajari ilmu kedokteran dan bekerja menyembuhkan orang sakit",
  "domba": "(n) hewan mamalia berkaki empat yang biasa dipelihara untuk diambil bulunya",
  "dengung": "(n) bunyi yang berulang-ulang dan bergetar",
  "erosi": "(n) pengikisan tanah oleh air, angin, atau es",
  "emansipasi": "(n) pembebasan dari belenggu atau ketergantungan",
  "etika": "(n) ilmu tentang apa yang baik dan buruk, benar dan salah dalam kehidupan manusia",
  "efisien": "(a) dapat bekerja dengan baik dan cepat",
  "edukasi": "(n) proses pendidikan",
  "fabel": "(n) cerita binatang yang di dalamnya terkandung pelajaran atau nasihat",
  "fanatik": "(a) sangat bersemangat dan tidak masuk akal dalam mempertahankan pendapatnya",
  "fiksi": "(n) cerita yang tidak benar-benar terjadi",
  "fatamorgana": "(n) ilusi optik yang terjadi karena perbedaan kepadatan udara",
  "fajar": "(n) waktu menjelang matahari terbit",
  "gajah": "(n) hewan mamalia berkaki empat yang memiliki belalai",
  "gila": "(a) tidak waras; tidak sehat",
  "guru": "(n) orang yang mengajar di sekolah",
  "gigi": "(n) bagian keras di dalam mulut yang digunakan untuk mengunyah makanan",
  "gema": "(n) bunyi yang terdengar kembali karena pantulan",
  "hujan": "(n) air yang turun dari langit dalam bentuk butir-butir kecil",
  "habitat": "(n) tempat tinggal atau hidupnya makhluk hidup",
  "hewan": "(n) makhluk hidup yang tidak dapat membuat makanannya sendiri",
  "hakim": "(n) orang yang memutuskan perkara di pengadilan",
  "halte": "(n) tempat menunggu penumpang angkutan umum",
  "ikan": "(n) hewan yang hidup di air dan bernapas dengan insang",
  "iklim": "(n) cuaca yang berlangsung lama di suatu tempat",
  "imajinasi": "(n) daya cipta; daya khayal",
  "imigran": "(n) orang yang pindah dari satu negara ke negara lain",
  "intuisi": "(n) pengetahuan yang didapat tanpa melalui proses berpikir",
  "jangkrik": "(n) serangga yang dapat mengeluarkan bunyi",
  "jagal": "(n) orang yang membunuh hewan untuk diambil dagingnya",
  "jahit": "(v) menggabungkan dua benda dengan benang",
  "jurnal": "(n) buku harian",
  "jimat": "(n) benda yang dipercaya dapat membawa keberuntungan",
  "komputer": "(n) alat elektronik yang dapat menerima dan mengolah data menjadi informasi",
  "kapur": "(n) bahan yang digunakan untuk menulis di papan tulis",
  "kuarsa": "(n) mineral yang terdiri dari silikon dioksida",
  "kucing": "(n) mamalia karnivor yang berukuran kecil hingga sedang, memiliki cakar berbentuk arit yang dapat keluar masuk dari kantong jari-jarinya, termasuk hewan teritorial〔Felidae〕",
  "koran": "(n) kertas yang digunakan untuk mencetak berita",
  "langit": "(n) ruang di atas bumi yang tampak berwarna biru pada siang hari dan hitam pada malam hari",
  "landak": "(n) hewan pengerat yang memiliki duri-duri di punggungnya",
  "lumpuh": "(a) tidak dapat bergerak",
  "longsor": "(n) tanah yang bergerak turun dari tempatnya",
  "logika": "(n) ilmu tentang cara berpikir yang benar",
  "menara": "(n) bangunan yang tinggi dan ramping",
  "mikroskop": "(n) alat yang digunakan untuk melihat benda-benda yang sangat kecil",
  "matahari": "(n) bintang yang menjadi pusat tata surya",
  "mineral": "(n) benda padat yang terdapat di dalam kerak bumi",
  "mistar": "(n) alat untuk mengukur panjang",
  "membran": "(n) selaput tipis yang melapisi bagian dalam tubuh",
  "ngarai": "(n) lembah yang dalam dan sempit",
  "nisan": "(n) batu yang diletakkan di atas kuburan",
  "ngabuburit": "(n) kegiatan yang dilakukan menjelang berbuka puasa",
  "nukleus": "(n) bagian tengah sel yang mengandung DNA",
  "nirwana": "(n) tempat yang sangat indah dan damai",
  "otak": "(n) organ yang terdapat di dalam kepala dan berfungsi untuk mengatur kerja tubuh",
  "ovovivipar": "(a) berkembang biak dengan cara telur menetas di dalam tubuh induknya",
  "osteoporosis": "(n) penyakit tulang yang menyebabkan tulang menjadi rapuh",
  "omset": "(n) jumlah uang yang diperoleh dari penjualan barang atau jasa",
  "ojek": "(n) sepeda atau sepeda motor yang ditambangkan dengan cara memboncengkan penumpang atau penyewanya",
  "pahala": "(n) ganjaran yang diberikan kepada orang yang berbuat baik",
  "pohon": "(n) tumbuhan yang batangnya tinggi dan besar",
  "pianis": "(n) orang yang memainkan piano",
  "pedang": "(n) senjata tajam yang terbuat dari besi",
  "pocong": "(n) mayat yang dibungkus kain kafan dan berjalan melompat-lompat",
  "radiasi": "(n) pancaran energi dari suatu sumber",
  "rotasi": "(n) gerakan memutar pada sumbu",
  "repetisi": "(n) pengulangan",
  "rumah": "(n) bangunan tempat tinggal manusia",
  "restu": "(n) izin; persetujuan",
  "resin": "(n) getah yang mengeras",
  "sigung": "(n)  mamalia karnivor yang dapat mengeluarkan bau busuk jika terganggu, berambut panjang dan lebat, warnanya hitam atau cokelat tua dengan garis putih memanjang dari bagian tengah kepala hingga ekor〔Mydaus javanensis〕",
  "sakral": "(a) suci; tidak boleh dihina",
  "semut": "(n) serangga yang mempunyai antena menyiku, bagian segmen kedua dari abdomen menyempit seperti tangkai yang bersimpul, menghasilkan asam format sebagai alat pertahanan diri, hidup berkelompok di berbagai macam ekosistem〔Formicidae]",
  "safir": "(n) batu permata yang berwarna biru tua atau biru kehijauan",
  "sulfur": "(n) unsur kimia yang berwarna kuning; belerang",
  "tabir": "(n) kain yang digunakan untuk menutupi sesuatu",
  "tinja": "(n) kotoran yang keluar dari anus",
  "tebing": "(n) bagian daratan yang tinggi dan curam",
  "tulang": "(n) bagian tubuh yang keras dan berwarna putih",
  "tegas": "(a) tidak ragu-ragu; tidak berbelit-belit",
  "tangga": "(n) alat untuk naik ke tempat yang lebih tinggi",
  "ukulele": "(n) alat musik petik yang berukuran kecil",
  "umbi": "(n) akar yang menjadi besar dan berisi (wortel, ketela, dan sebagainya)",
  "uranium": "(n) unsur kimia yang berwarna putih keperakan; digunakan untuk membuat bom atom",
  "urea": "(n) pupuk buatan; pupuk yang termasuk golongan pupuk nitrogen digunakan dalam pertanian",
  "virus": "(n) organisme yang sangat kecil dan hanya dapat hidup di dalam sel makhluk hidup lain",
  "vaksin": "(n) cairan yang mengandung kuman penyakit yang dilemahkan atau dibunuh, digunakan untuk mencegah penyakit",
  "vokalis": "(n) orang yang menyanyi",
  "ventilasi": "(n) proses perpindahan udara dari luar ke dalam ruangan",
  "veteran": "(n) orang yang berjasa dalam perjuangan kemerdekaan",
  "wakaf": "(n) harta yang disisihkan untuk kepentingan umum",
  "wacana": "(n) karangan yang berisi gagasan atau pikiran",
  "waduk": "(n) bendungan yang dibuat untuk menampung air",
  "wahana": "(n) alat untuk mengangkut orang atau barang",
  "wortel": "(n) sayuran yang berwarna oranye",
  "yayasan": "(n) badan yang dibentuk untuk kepentingan umum",
  "yodium": "(n) unsur kimia yang berwarna hitam kebiruan; digunakan untuk mengobati luka",
  "yoga": "(n) latihan untuk mengendalikan pikiran dan tubuh",
  "yogurt": "(n) makanan yang terbuat dari susu yang difermentasi",
  "zaman": "(n) periode waktu tertentu",
  "ziarah": "(n) kunjungan ke tempat yang dianggap suci",
  "zigot": "(n) sel yang terbentuk dari hasil penyatuan sel telur dan sel sperma",
  "zamrud": "(n) batu permata yang berwarna hijau seperti lumut",
}

let reserved_questions = {
  "nyaman": "(a) enak; tidak terganggu; damai; tentram;",
  "cocok": "(a) sesuai; tepat; tidak bertentangan",
  "bersama": "(a) bersatu; tidak sendiri; berpasang-pasangan",
  "cincin": "(n) perhiasan berupa lingkaran kecil yang dipakai di jari, ada yang berpermata, ada yang tidak",
}

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let count = 1;
let normalNum = 3; // Number of normal questions

let totalLevel = normalNum + Object.keys(reserved_questions).length;

function randomWord() {
  if (count < normalNum) {
    let rand = Math.floor(Math.random() * Object.keys(questions).length);
    question = Object.values(questions)[rand];
    answer = Object.keys(questions)[rand];
  } else {
    // Sequence from reserved_questions
    question = Object.values(reserved_questions)[count - normalNum];
    answer = Object.keys(reserved_questions)[count - normalNum];
  }
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}



function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    maxWrong = 6;
    answer = '';
    guessed = [];
    wordStatus = null;

    if (count == totalLevel) {
      // prevent from closing if the user click confirm button
      Swal.fire({
        title: "Yeayy! Adell sudah menang!",
        text: "Aku ada hadiah buat Adell",
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: './images/letter.png',
        imageWidth: 200,
        confirmButtonText: 'Owkayyy Cipta!',
        preConfirm: () => {
          return false;
        } // prevent from closing if the user click confirm button
      });
    } else {
      document.getElementById('maxWrong').innerHTML = maxWrong;
      randomWord();
      generateButtons();
      guessedWord();
    }

    count++;
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
  document.getElementById('question').innerHTML = question;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
