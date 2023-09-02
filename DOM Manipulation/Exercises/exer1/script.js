const startBtn = document.getElementById("startBtn");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");
const cheatBtn = document.getElementById("cheatBtn");
const commandInput = document.getElementById("commandInput");
const ukuran = document.getElementById("ukuran");
let isiKotak = [];
const cheatKotak = [];
let jumlahCommand = 0;

const clearTableBox = () => {
    const box = document.querySelector(".table-box");
    if (box.children.length === 0) {
        return;
    }
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
};

const checkWin = () => {
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));
    let winCon = true;
    for (let i = 0; i < ukuranValue*3-1; i++) {
        if (box.children[i].innerHTML !== (i+1)) {
            winCon = false;
            break;
        }
    }
    if (winCon) {
        const merah = document.querySelector(".merah");
        merah.style.backgroundColor = "lime";
        alert("You Win");
    }
}; 

startBtn.addEventListener("click", function(){
    clearTableBox();
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));
    box.style.gridTemplateColumns = `repeat(${ukuranValue}, 1fr)`;
    for (let i = 0; i < ukuranValue*ukuranValue - 1; i++) {
        const kotak = document.createElement("div");
        kotak.classList.add("kotak");
        kotak.innerText = i+1;

        isiKotak.push(kotak);
        cheatKotak.push(kotak);
    }
    const kotakMerah = document.createElement("div");
    kotakMerah.classList.add("kotak");
    kotakMerah.classList.add("merah");
    isiKotak.push(kotakMerah);
    cheatKotak.push(kotakMerah);

    isiKotak.sort(() => Math.random() - 0.5);

    isiKotak.forEach(isi => {
        box.appendChild(isi);
    });

    isiKotak = [];
    jumlahCommand = 0; //reset jumlah command
});

runBtn.addEventListener("click", () => {
    const merah = document.querySelector(".merah");
    const commandList = commandInput.value.trim().split(",");
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));

    let index = Array.prototype.indexOf.call(box.children, merah); //buat cari index kotak merah

    commandList.forEach(command => {
        //cek apakah melebihi batas setiap gerak
        const diTembokAtas = index < ukuranValue;
        const diTembokKanan = index % ukuranValue === ukuranValue-1;
        const diTembokKiri = index % ukuranValue === 0;
        const diTembokBawah = index >= ukuranValue*2;

        
        if(command === "w" && !diTembokAtas){
            index-=ukuranValue;//cari index kotak diatas kotak merah
        }else if(command === "a" && !diTembokKiri){
            index-=1;
        }else if(command === "s" && !diTembokBawah){
            index += ukuranValue;
        }else if(command === "d" && !diTembokKanan){
            index+=1;
        }else {
            alert("Kotak Melebihi Batas");
        }

        const divOrig = box.children[index];
                
        box.replaceChild(divOrig, merah); //kotak merah diganti kotak bernomor, ketika diganti kotak merah dihapus jadinya index berkurang 1
        box.insertBefore(merah, box.children[index]); //tempat kotak bernomor dimasuki kotak merah

        if(index === ukuranValue*3-1) {
            checkWin()
        }
    });

    jumlahCommand += commandList.length;
});

cheatBtn.addEventListener("click", () => {
    clearTableBox();
    const box = document.querySelector(".table-box");
    cheatKotak.forEach(kotak => {
        box.appendChild(kotak);
    });
    box.lastChild.style.backgroundColor = "lime";
    alert("You Win")
});

clearBtn.addEventListener("click", () => {
    commandInput.value = "";
});

//to do list
//add win con
//add cheat
//add animation (optional)