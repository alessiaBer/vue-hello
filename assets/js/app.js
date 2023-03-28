/* Stampare a schermo un messaggio all’interno di un h1 
utilizzando una proprietá nell'oggetto restituito dalla funzione data. 

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            hello: 'Hello, I\'m Alessia',
            message: 'I just started to use',
            divClassName: 'span',
            vueLogo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
            vueJs: 'Vue.js'
        }
    },
    methods: {}
}).mount('#app');
