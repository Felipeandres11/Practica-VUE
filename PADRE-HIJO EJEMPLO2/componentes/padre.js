Vue.component('padre',{
    template: //html 
    `
    <div>
        <h1>Componente: {{numeroPadre}} {{nombrePadre}}</h1>
        <button @click="numeroPadre++" class="btn btn-primary">+</button>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event "></hijo>
    </div>
    
    `,

    data(){

        return {
            numeroPadre: 0, 
            nombrePadre: ''
        }
    }
})