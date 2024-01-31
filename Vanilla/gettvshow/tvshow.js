const form = document.querySelector("#search-form");
const gallery = document.querySelector("#image-gallery");

form.addEventListener('submit', async e => {
    e.preventDefault();
    const keyword = form.elements.query.value;
    const config = {
        params: {
            q: keyword
        }
    };

    const res = await axios.get('https://api.tvmaze.com/search/shows', config);

    if (res.data.length == 0){
        alert("No shows detected");
        form.elements.query.value = '';
        return;
    }

    getImages(res.data);
    form.elements.query.value = '';
});

const getImages = shows => {
    refreshGallery();
    for (let result of shows){
        if (result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            gallery.append(img);
        }
    }
}

const refreshGallery = () => {
    gallery.innerHTML = '';
}