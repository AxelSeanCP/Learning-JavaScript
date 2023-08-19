const gameBox = document.querySelector(".game-box");
let isi = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
let opened = [];
let ctr = 0;

let isiShuffle = isi.sort(() => Math.random() - 0.5);

for (let i = 0; i < isi.length; i++) {
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
            console.log("correct");
            opened = [];
        }
    };

    gameBox.appendChild(kotak);
}

const resetBtn = document.querySelector(".reset-button");
resetBtn.addEventListener("click", () => {
    window.location.reload();
});