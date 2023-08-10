//jumbotron & carousel
const links = ["../../img/old-ford-mustang.jpg", "../../img/lancer-evo-8.jpg", "../../img/bmw-m3-gtr.jpg"];
let index = 0;
let intervalID = null;

function gantiGambar(arah){
    if (arah === "kiri") {
        index = (index - 1 + links.length) % links.length;
        // index - 1 + links.length : ngitung indeks baru kalau misal negatif ketambahan panjang dari links jadi positif. contoh kalau index=0 : 0 - 1 + 3
        // modulo biar mencegah supaya index nda lebih dari 3. contoh kalau index=1 : 1-1+3 = 3 % 3 = 1
        console.log(index);
    }else{
        index = (index + 1) % links.length;
    }

    document.getElementById("gambar").src = links[index];
}

function startCarousel(){
    intervalID = setInterval(() => { //ganti ke kanan tiap 3 detik
        gantiGambar("kanan");
    }, 3000);
}

function stopCarousel(){
    clearInterval(intervalID);
}

document.querySelector(".panah-kiri").addEventListener("click", () => {
    gantiGambar("kiri");
    stopCarousel();
});
document.querySelector(".panah-kanan").addEventListener("click", () => {
    gantiGambar("kanan");
    stopCarousel();
});

startCarousel(); //mulai ketika page ke load