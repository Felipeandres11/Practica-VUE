Vue.component('padre', {
    template: //html 
    `
    <div> 
        <h1>Contador Padre : {{numero}} - Nombre : {{nombrePadre}}</h1> 
        <button @click="numero+=2" class="btn btn-primary mt-2">+2</button>
        <hijo :numeroHijo="numero" @nombreHijo="nombrePadre = $event"></hijo>


    </div>
    `,

    data(){
        return {
            numero: 0, 
            nombrePadre : ''
        }
    }
})
    
 
