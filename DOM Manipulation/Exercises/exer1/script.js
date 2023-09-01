const startBtn = document.getElementById("startBtn");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");
const commandInput = document.getElementById("commandInput");
const ukuran = document.getElementById("ukuran");
const isiKotak = [];
let jumlahCommand = 0;


startBtn.addEventListener("click", function(){
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));
    box.style.gridTemplateColumns = `repeat(${ukuranValue}, 1fr)`;
    for (let i = 0; i < ukuranValue*ukuranValue - 1; i++) {
        const kotak = document.createElement("div");
        kotak.classList.add("kotak");
        kotak.innerText = i+1;

        isiKotak.push(kotak);
        //box.appendChild(kotak);
    }
    const kotakMerah = document.createElement("div");
    kotakMerah.classList.add("kotak");
    kotakMerah.classList.add("merah");
    isiKotak.push(kotakMerah);

    isiKotak.sort(() => Math.random() - 0.5);

    isiKotak.forEach(isi => {
        box.appendChild(isi);
    })

    box.appendChild(kotakMerah);
});

runBtn.addEventListener("click", () => {
    const merah = document.querySelector(".merah");
    const commandList = commandInput.value.trim().split(",");
    const box = document.querySelector(".table-box");
    const ukuranValue = parseInt(ukuran.value.substring(0,1));

    let index = Array.prototype.indexOf.call(box.children, merah); //buat cari index kotak merah
    //cek apakah melebihi batas
    const diTembokAtas = index < ukuranValue;
    const diTembokKanan = index % ukuranValue === ukuranValue-1;
    const diTembokKiri = index % ukuranValue === 0;
    const diTembokBawah = index >= ukuranValue*2;

    commandList.forEach(command => {

        if(command === "w" && !diTembokAtas){
            index-=ukuranValue;//cari index kotak diatas kotak merah
            const divOrig = box.children[index];
            
            box.replaceChild(divOrig, merah); //kotak merah diganti kotak bernomor, ketika diganti kotak merah dihapus jadinya index berkurang 1
            box.insertBefore(merah, box.children[index]); //tempat kotak bernomor dimasuki kotak merah
        }else if(command === "a" && !diTembokKiri){
            index-=1;
            const divOrig = box.children[index];

            box.replaceChild(divOrig, merah);
            box.insertBefore(merah, box.children[index]);
        }else if(command === "s" && !diTembokBawah){
            index += ukuranValue;
            const divOrig = box.children[index];

            box.replaceChild(divOrig, merah);
            box.insertBefore(merah, box.children[index]);
        }else if(command === "d" && !diTembokKanan){
            index+=1;
            const divOrig = box.children[index];
            console.log(index)

            box.replaceChild(divOrig, merah);
            box.insertBefore(merah, box.children[index]);
        }else {
            alert("Kotak Melebihi Batas");
        }

    });

    jumlahCommand += commandList.length;
});

clearBtn.addEventListener("click", () => {
    commandInput.value = "";
});