let hasil = document.getElementById("hasil");

const listButton = document.getElementsByTagName("button");

for (let i = 0; i < listButton.length; i++) {
    listButton[i].onclick = function () { //semua button dikasi function ini
        //js string / number ga ngaruh
        if (hasil.innerText !== "0") { //kalo sudah diisi angka 
            if (isNaN(listButton[i].innerText)) { //cek kalau yang dipencet bukan angka
                const operator = listButton[i].innerText;
                switch (operator) {
                    case "AC":
                        hasil.innerText = "0";
                        break;
                    case "⌫":
                        if (hasil.innerText.length !== 1) {
                            hasil.innerText = hasil.innerText.slice(0, -1);
                        }else hasil.innerText = "0";
                        break;
                    case "=":
                        hasil.innerText = eval(hasil.innerText);
                        break;
                    case "%":
                        let angka = ambilAngka();
                        hasil.innerText = angka;
                        break;
                    default:
                        if (!isNaN(hasil.innerText.charAt(hasil.innerText.length-1))) { //cek kalau yang terakhir angka, nanti baru bisa ditambah operator
                            hasil.innerText += listButton[i].innerText;
                        }
                        break;
                }
            }else { //yang dipencet angka
                hasil.innerText += listButton[i].innerText;
            }
        }else if(!isNaN(listButton[i].innerText)){ //cek kalau angka
            hasil.innerText = listButton[i].innerText; //kalo masih awal (0) langsung replace
        }
    }
}

function ambilAngka(){
    for (let i = hasil.innerText.length-1; i >= 0; i--) {
        if (isNaN(hasil.innerText.charAt(i))) {
            let angka = hasil.innerText.substring(i+1, hasil.innerText.length); //substring dari akhir sampe nemu operator
            angka /= 100;

            let ubah = hasil.innerText.substring(0, i+1); //substring dari awal sampe nemu operator
            return ubah+angka;
        }else if (!isNaN(hasil.innerText.charAt(0)) && i === 0) { //jalan kalau sudah habis & tidak ada operator
            let angka = hasil.innerText;
            angka /= 100;
            return angka;
        }
        
    }
}