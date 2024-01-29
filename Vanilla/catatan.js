let a = 45; //int
let b = "tes"; //string
let c = 4.5; //float
let d = true; //boolean
let e; //undefined
let f = null;

// declare variable
let var1 = 2; //bisa diubah valuenya 
const var2 = 3; //ga bisa diubah valuenya

console.log(var2); //print

// string
let kata1 = "axel suka meltryllis";

// method string
kata1.toUpperCase(); //jadi huruf besar semua
kata1.toLowerCase(); //jadi huruf kecil semua
kata1.trim(); //hilangkan space di sekitar string tapi tidak di string itu sendiri. " a b " --> "a b"
kata1.indexOf('m'); //mencari index di string dari char
kata1.slice(0,4); //ambil string dari index start sampai end (0,4), char di end tidak termasuk --> "axel"
kata1.replace("suka", "cinta"); //ganti string (awal, ganti)

// operator
// +, -, /, %, *
// operator pembanding
// <,>, <=, >=, == (sama), === (sama dan sejenis), !=, !==
// operator logika
// &&, ||, !

// sequence
if(a == 1){
    console.log(1);
}else if(a == 2){
    console.log(2);
}else{
    console.log(a);
}

switch (a) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log(a);
        break;
}

// array
const arr1 = [1,2,3,4,5]; //array ga harus sejenis, bisa int dan string dll
//array const bisa dibuah isi arraynya asal ga diubah arraynya
arr1[0] = 10; //ganti value
arr1.push(6); //menambahkan item di akhir array
arr1.pop(); //menghapus dari akhir array
arr1.shift(); //menghapus dari awal array
arr1.unshift(); //menambahkan item di awal array

// array multidimensi
const arrmulti = [[1,2], [3,4], [5,6]];
console.log(arrmulti[0][0]);
// sama seperti matriks

// array methods
//concat
const arr2 = [10,11,12,13,14,15];
const arr3 = arr1.concat(arr2);
// jadinya: arr3 = [1,2,3,4,5,10,11,12,13,14,15]

//includes
// cek apakah ada 5 di array arr1
console.log(arr1.includes(5)); //true

//indexof, sama seperti string
arr2.indexOf(10);

//join
//gabungin isi array jadi 1 string
const elemen = ['api', 'air', 'angin'];
elemen.join() //--> "api,air,angin"
elemen.join('') //--> "apiairangin"
elemen.join('-') //--> "air-air-angin"

//reverse
//mbalik nilai array, by reference jadi original yang diganti
const array1 = [1,2,3,4]
array1.reverse();

//slice
//sama seperti string
arr1.slice(2,4);

//splice
// ganti elemen di array dari suatu index
// (start, deleteCount, item)
const bulan = ['jan', 'mar', 'apr', 'juni'];
bulan.splice(1, 0 ,'feb'); //insert di index1
// ['jan', 'feb', 'mar', 'apr', 'juni']
bulan.splice(4, 1, 'mei'); //ganti 1 elemen di index 4
// ['jan', 'feb', 'mar', 'apr', 'mei']

//sort
// sort elemen di array tapi diubah dulu jadi string baru di sort
const angka1 = [1,2,9,5,10,6]
angka1.sort(); //--> [1,10,2,5,6,9]

// object
const person = {
    "nama": "Axel",
    "umur": 20,
    "status": "menikah",
    "nilai": [90,80,99,18,78], //dalam object bisa ada array
    "istri": { //dalam object bisa ada object
        "nama": "meltryllis",
        "umur": "unknown",
        "status": "menikah"
    }
};
// change object value
person["umur"] = 21;
person["nilai"][0] = 89;
person.istri.umur = 22;

// add value to object
person.hobby = "coding";

// array of object
const mahasiswa = [
    {
        nama: "axel",
        umur: 20
    },
    {
        nama: "meltryllis",
        umur: 20
    },
    {
        nama: "okita",
        umur: 20
    }
];

console.log(mahasiswa[0].nama) // axel

// loop
// for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     break
// }
// while
// while (condition) {
      
// }

// for of
const fruits = ['apple', 'manggo', 'orange', 'banana'];

for (let fruit of fruits){
    console.log(fruit);
}
// nested for of
for (let fruit of fruits){
    for (let str of fruit){
        console.log(str);
    }
}

// for in
const studentScore = {
    Axel: 80,
    Meltryllis: 78,
    Okita: 67
};

for (let student in studentScore){
    // student sebagai key
    // jadi studentScore(student) akan output valuenya
    console.log(`${student} memiliki skor ${studentScore(student)}`)
}

// function
function tes(arg1, arg2){ //arg1 = parameter
    return arg1 + arg2;
}
console.log(tes("halo", "dunia")); //"halo adalah"

// function expression
const hasilPangkat = function(nilai) {
    return nilai * nilai;
}

// function as argument
function duaKali(func) {
    func()
    func()
}

function lemparDadu() {
    const nilai = Math.floor(Math.random() * 6) + 1;
    console.log(hasil);
}

duaKali(lemparDadu);