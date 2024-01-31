const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
    
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (error) {
        console.error(error);
        alert(error.message)
    }
}

const addJokes = async () => {
    const joke = await getJokes();
    const elemen = document.createElement("li");
    elemen.innerHTML = joke;
    jokesList.append(elemen);
}

const jokesList = document.getElementById('jokes');
const jokesButton = document.getElementById('btnJokes');

jokesButton.addEventListener('click', addJokes)