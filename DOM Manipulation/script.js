//document.getElementById("demo").innerHTML="Hello World!"; //ambil elemen dari id demo dan ubah value

/* beberapa cara ambil elemen
document.getElementById(id) --> ambil dari id
document.getElementsByTagName(name) --> ambil dari name
document.getElementsByClassName(name) --> ambil dari class
selengkapnya ada di w3schools
*/

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = "paragraph pertama (indeks 0) : " + y[0].innerHTML;

//ganti css 
//document.getElementById("demo").style.fontSize = "40px";
//document.getElementById("demo").style.color="red";
//document.getElementById("demo").style.display = "none";

//event listener
document.getElementById("btn").addEventListener("click", () => {
    x.style.width = "20%";
    x.style.height = "12vh";
    x.style.backgroundColor = "red";
});

document.getElementById("ganti-gambar").addEventListener("click", () => {
    const gambar = document.getElementsByClassName("silverwolf");
    gambar[0].src = "img/meltryllis.jpg";
});