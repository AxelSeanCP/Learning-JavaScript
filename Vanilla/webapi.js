// JSON
const data = `{
    "ticker": {
        "base": "BTC",
        "target": "IDR",
        "price": "34500100.000"
    },
    "timestamp": 16475647,
    "success": true,
    "error": ""
}`;

const person = {
    nama: "axel",
    gender: "laki laki"
}

//ubah JSON jadi JavaScript
const res = JSON.parse(data); 
console.log(res);
console.log(res.ticker.price);

//ubah JavaScript jadi JSON
const res2 = JSON.stringify(person);

// ambil api pakai postman atau hoppscotch