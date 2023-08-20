const gameBox = document.querySelector(".game-box");
let isi = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
let opened = [];

let isiShuffle = isi.sort(() => Math.random() - 0.5);

for (let i = 0; i < isi.length; i++) { //mbikin kotak
    const kotak = document.createElement("div");
    kotak.innerHTML = isi[i];
    kotak.className = "kotak";

    kotak.onclick = function(){
        kotak.classList.add("boxOpen");
        opened.push(kotak);

        if (opened.length < 2){
            return;
        }
        
        if (opened[0].innerHTML !== opened[1].innerHTML) {
            // buat nutup kartu
            setTimeout(() => {
                opened.forEach(card => {
                    card.classList.remove("boxOpen");
                });
                opened = [];
            }, 1000);
        }else {
            opened = [];
            cekMenang();
        }
    };

    gameBox.appendChild(kotak);
}

//timer 
let time = document.getElementById("time");
let detik = 0;
let menit = 0;

function updateTimer(){
    detik++;
    if (detik >= 60) {
        detik = 0;
        menit++;
    }
    time.innerHTML = `${menit.toString().padStart(2,'0')}:${detik.toString().padStart(2,'0')}`;
}

const interval = setInterval(updateTimer, 1000);

function cekMenang() {
    const listKotak = document.querySelectorAll(".kotak");

    for (let i = 0; i < listKotak.length; i++) {
        if(!listKotak[i].classList.contains("boxOpen")) {
            return; //ngecek apa semua kotak sudah kebuka
        }   
    }
    
    const modal = document.getElementById("winModal"); //munculin alert menang
    const closeBtn = modal.querySelector(".close-button");
    
    modal.style.display = "block";
    
    closeBtn.onclick = function(){
        modal.style.display = "none"
    };
    clearInterval(interval);
}

const resetBtn = document.querySelector(".reset-button");
resetBtn.addEventListener("click", () => {
    window.location.reload();
});