const startBtn = document.getElementById("startBtn");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");
const commandInput = document.getElementById("commandInput");
const ukuran = document.getElementById("ukuran");


startBtn.addEventListener("click", function(){
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));
    box.style.gridTemplateColumns = `repeat(${ukuranValue}, 1fr)`;
    for (let i = 0; i < ukuranValue*ukuranValue - 1; i++) {
        const kotak = document.createElement("div");
        kotak.classList.add("kotak");
        kotak.innerText = i+1;

        box.appendChild(kotak);
    }
    const kotakMerah = document.createElement("div");
    kotakMerah.classList.add("kotak");
    kotakMerah.classList.add("merah");
    box.appendChild(kotakMerah);
});

runBtn.addEventListener("click", () => {
    const merah = document.querySelector(".merah");
    const command = commandInput.value.trim();
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));

    let index = Array.prototype.indexOf.call(box.children, merah); //buat cari index kotak merah

    if(command === "w"){
        index-=ukuranValue;
        console.log(index)
        box.insertBefore(merah, box.children[index]);
    }else if(command === "a"){
        index-=1;
        box.insertBefore(merah, box.children[index]);
    }else if(command === "s"){
        index = index + ukuranValue + 1;
        console.log(index)
        box.insertBefore(merah, box.children[index]);
    }else if(command === "d"){
        index+=2;
        box.insertBefore(merah, box.children[index]);
    }
});

//to do list
//randomize isi tabel box
//kasi batasan waktu pindah
//split string kalau commandlebih dari 1
//catat berapa kali dikasi command