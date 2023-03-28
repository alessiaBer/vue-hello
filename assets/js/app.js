/* Stampare a schermo un messaggio all’interno di un h1 
utilizzando una proprietá nell'oggetto restituito dalla funzione data. 

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            hello: 'Hi, I\'m Alessia',
            message: 'I just started to use',
            divClassName: 'span',
            vueLogo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
            vueJs: 'Vue.js',
            is_bg_changed: false
        }
    },
    methods: {
        changeBackground() {
            console.log('ciao')
            this.is_bg_changed = !this.is_bg_changed; 
            console.log(this.is_bg_changed)
        }
    }
}).mount('#app');
