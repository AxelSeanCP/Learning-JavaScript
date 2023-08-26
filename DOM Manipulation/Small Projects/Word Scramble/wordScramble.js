const wordText = document.getElementById("word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const words = [
    {
        word : "laptop",
        hint : "Semacam komputer tapi lebih bebas dibawa"
    },
    {
        word : "makanan",
        hint : "Sesuatu yang kita konsumsi untuk energi"
    },
    {
        word : "kucing",
        hint : "Hewan peliharaan yang suka tidur siang"
    },
    {
        word : "mobil",
        hint : "Alat transportasi empat roda"
    },
    {
        word : "bola",
        hint : "Digunakan dalam banyak jenis olahraga"
    },
    {
        word : "helikopter",
        hint : "Kendaraan yang hanya dimiliki militer"
    },
    {
        word : "banjir",
        hint : "Salah satu fenomena alam yang merusak"
    }
];

const countdown = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return (timeText.innerText = maxTime);
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word!`);
        startGame();
    },1000)
};

const startGame = () => {
    countdown(30);
    const rndIndex = Math.floor(Math.random() * words.length); //ambil indeks random dr array words
    const soal = words[rndIndex]; //ambil 1 object
    correctWord = soal.word.toLowerCase();
    const wordArray = soal.word.split(""); //masukin word ke array
    wordArray.sort(() => Math.random() - 0.5); //shuffle array tsb

    wordText.innerText = wordArray.join(""); //masukin array ke string
    hintText.innerText = soal.hint;
    inputField.value = ""; //reset input value
    inputField.setAttribute("maxlength", correctWord.length); //tambah attribute untuk mencegah tebakan lebih panjang dari kata asli
};
startGame();

const checkGame = () => {
    const userWord = inputField.value.toLowerCase();
    if (!userWord) {
        return alert(`Please enter the word to check`);
    }
    if (userWord !== correctWord) {
        return alert(`Opps ${userWord.toLowerCase()} is not the correct word!`);
    }
    alert(`Congrats!!! ${correctWord.toUpperCase()} is the correct word`);
    startGame();
};

refreshBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkGame);