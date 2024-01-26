// call stack function
const kali = (x,y) => {
    return x * y;
}

const pangkat = (x) => {
    return kali(x,x);
}

const pythagoras = (a,b,c) => {
    return pangkat(a) + pangkat(b) === pangkat(c);
}

console.log(pythagoras(3,4,5)); //true
console.log(pythagoras(4,5,3)); //false

/* yang dijalankan bawah dulu baru atas
pythagoras --> pangkat --> kali */