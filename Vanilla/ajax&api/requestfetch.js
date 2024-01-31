// fetch mendukung promise
// kalau tidak dikasi method maka otomatis method GET

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         if(!res.ok) {
//             throw Error('Could not fetch data');
//         }

//         return res.json();
//     })
//     .then((data) => {
//         console.log('json 1', data);
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then((res) => {
//         if(!res.ok) {
//             throw Error('Could not fetch data');
//         }

//         return res.json();
//     })
//     .then((data) => {
//         console.log('json 2', data);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     })

// versi lebih singkat
const loadPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/3');
        const data = await res.json();
        console.log('json 3', data);

        const res2 = await fetch('https://swapi.dev/api/people/4');
        const data2 = await res2.json();
        console.log('json 4', data2);
    } catch (error) {
        console.log('error', error)       
    }
};

loadPeople();