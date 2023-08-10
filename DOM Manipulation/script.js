//document.getElementById("demo").innerHTML="Hello World!"; //ambil elemen dari id demo dan ubah value

/* beberapa cara ambil elemen
document.getElementById(id) --> ambil dari id
document.getElementsByTagName(name) --> ambil dari name
document.getElementsByClassName(name) --> ambil dari class
selengkapnya ada di w3schools
*/
/*
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = "paragraph pertama (indeks 0) : " + y[0].innerHTML;
*/

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

//ganti gambar
let ctr = 1;
document.getElementsByClassName("gbr")[0].addEventListener("click", () => {
    const gambar = document.getElementsByClassName("gbr");
    if (ctr%2===1) { //kalo ganjil meltryllis
        gambar[0].src = "img/meltryllis.jpg";
    }else { // kalo genap silverwolf
        gambar[0].src = "img/silverwolf.jpg";
    }
    ctr++
});

const myFunction = () => {
    //ambil value dari input
    let x = document.getElementById("numb").value;
    
    let text; //text buat output
    if(isNaN(x) || x<1 || x>10){
        text = "input not valid";
    }else {
        text = "input ok"
    }
    document.getElementById("output").innerHTML = text;
}

//animasi balok gerak
const myMove = () => {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if (pos === 350) {
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

// animasi ganti warna tulisan
let interID; //variabel interval id

function changeColor(){
    //check apakah interval sudah ada value
    if (!interID) {
        interID = setInterval(gantiWarna, 1000);
    }
}

function gantiWarna(){
    const elem = document.getElementById("myBox");
    elem.className = elem.className === "go" ? "stop" : "go";
}

function stopTextColor(){
    clearInterval(interID);
    // lepas interval id dari variable
    interID = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);

//ganti huruf ke uppercase di input
document.getElementById("numb").onchange = upperCase = () => {
    let x = document.getElementById("numb");
    x.value = x.value.toUpperCase();
};

//events mouse
function mouseOver(obj){
    obj.innerHTML = "Thank You"
    obj.style.backgroundColor = "#bf9111";
}
function mouseOut(obj){
    obj.innerHTML = "Mouse Over Me";
    obj.style.backgroundColor = "#d94a38";
}
function mouseDown(obj){
    obj.innerHTML = "Release Me";
    obj.style.backgroundColor = "#1ec5e5";
}
function mouseUp(obj){
    obj.innerHTML = "Thank You";
    obj.style.backgroundColor = "#d94a38";
}

//kalo butuh passing parameter
//element.addEventListener("click", function(){ myFunction(p1, p2); }); 

//kalo butuh remove event listener
//element.removeEventListener("mousemove", myFunction);

//event bubling = elemen paling dalam jalan dulu baru luar
//event capturing = elemen paling luar jalan dulu baru dalam
//contoh : <div><p></p></div>

//cara lain ambil value pake nodes
//document.getElementById("demo").innerHTML = document.getElementById("judul").firstChild.nodeValue;
//document.getElementById("demo").innerHTML = document.getElementById("judul").childNodes[0].nodeValue;

/*
//tambah elemen
const para = document.createElement("p");
const node = document.createTextNode("this is new!");
para.appendChild(node);

//ditambah di belakang
const element = document.getElementById("main");
element.appendChild(para);

//ditambah di paling depan
const child = document.getElementById("p1");
element.insertBefore(para, child);
*/

/*
//remove elemen
//document.getElementById("p1").remove();
const parent = document.getElementById("main");
const child = document.getElementById("p1");
parent.removeChild(child);
*/

/*
//replace elemen
const para = document.createElement("p");
const node = document.createTextNode("this is new!");
para.appendChild(node);

const parent = document.getElementById("main");
const child = document.getElementById("p1");
parent.replaceChild(para, child);
*/

/*
//collection
const myCollection = document.getElementsByTagName("p");
for (let i = 0; i< myCollection.length; i++) {
   myCollection[i].style.color = "red";
}
const myNodeList = document.querrySelectorAll("p");
for (let i = 0; i< myNodeList.length; i++) {
   myNodeList[i].style.color = "red";
}
//the difference : 
/*
An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.

*/