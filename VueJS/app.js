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

const app = new Vue({
    el: '#app',
    data: {
        name: 'Vue.js'
    }
});