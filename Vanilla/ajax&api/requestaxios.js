// request dengan library axios
// pastikan cdn sudah benar

// axios.get('https://swapi.dev/api/people/5')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log('error', err);
//         alert(err.message);
//     });

const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
};

for (let i = 1; i <= 5; i++){
    getPeople(i);
}