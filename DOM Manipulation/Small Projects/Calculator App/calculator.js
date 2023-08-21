let hasil = document.getElementById("hasil");

const listButton = document.getElementsByTagName("button");

for (let i = 0; i < listButton.length; i++) {
    listButton[i].onclick = function () {
        if (hasil.innerHTML !== "0") { //js string / number ga ngaruh
            if (isNaN(listButton[i].innerHTML)) { //cek operator
                
            }
        }else hasil.innerHTML = listButton[i].innerHTML; // kalo masih awal langsung replace
    }
    
}