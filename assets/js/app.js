/* Stampare a schermo un messaggio all’interno di un h1 
utilizzando una proprietá nell'oggetto restituito dalla funzione data. 

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello I\'m Alessia and I just started to use VueJs',
        }
    },
    methods: {
        printMessage() {
            const h1 = this.createElement('h1');
            h1.innerHTML = `{{ message }}`;
        }
    }
}).mount('#app');
