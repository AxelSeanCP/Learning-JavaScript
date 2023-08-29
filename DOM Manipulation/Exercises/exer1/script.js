const ukuran = document.getElementById("ukuran");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(){
    const box = document.querySelector(".table-box");
    const ukuranValue = ukuran.value;
    box.style.gridTemplateColumns = `repeat(${ukuranValue}, 1fr)`;
    for (let i = 0; i < ukuran.value*ukuran.value - 1; i++) {
        const kotak = document.createElement("div");
        kotak.classList.add("kotak");
        kotak.innerText = i+1;

        box.appendChild(kotak);
    }
    const kotakMerah = document.createElement("div");
    kotakMerah.classList.add("merah");
    box.appendChild(kotakMerah);
});