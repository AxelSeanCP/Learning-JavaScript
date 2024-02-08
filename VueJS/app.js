// versi vue 3, proses belajar pakai versi 2
// const { createApp, ref } = Vue;

// const app = createApp({
//     setup() {
//         const name = ref('Vue.js')
//         return {
//             name
//         }
//     }
// }).mount('#app')

// const app = new Vue({
//     el: '#app',
//     data: {
//         name: 'Vue.js'
//     }
// });

const dataProduct = { 
    products: [
        {
            "name": "Meltryllis Figure",
            "description": "This is an action figure of a popular character named Meltryllis from Fate/Grand Order. Get yours only on Kyou Hobby Shop. Free 1 action figure for newcomers",
            "price": "9.000.000",
            "image": "https://cdn.kyou.id/items/159321-revive-pvc-figure-18-alter-ego-meltlilith.jpg"
        },
        {
            "name": "Meltryllis Figure",
            "description": "This is an action figure of a popular character named Meltryllis from Fate/Grand Order. Get yours only on Kyou Hobby Shop. Free 1 action figure for newcomers",
            "price": "9.000.000",
            "image": "https://cdn.kyou.id/items/159321-revive-pvc-figure-18-alter-ego-meltlilith.jpg"
        },
        {
            "name": "Meltryllis Figure",
            "description": "This is an action figure of a popular character named Meltryllis from Fate/Grand Order. Get yours only on Kyou Hobby Shop. Free 1 action figure for newcomers",
            "price": "9.000.000",
            "image": "https://cdn.kyou.id/items/159321-revive-pvc-figure-18-alter-ego-meltlilith.jpg"
        }
    ]
}

const app = new Vue({
    el: '#app',
    data: dataProduct
});