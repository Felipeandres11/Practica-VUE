Vue.component('hijo', {
    template: //html 
    `
    <div class="py-5 m-2 bg-success">

        <h2 class="text-white">Componente Hijo: {{numero}} - {{nombreHijo}} </h2>

    </div>
    
    
    `, 

    props: ['numero'], 

    data(){
        return {
            nombreHijo: "Felipe Palma"
        }
    }, 
    /* Despues que se cargue el dom con la información */
    mounted(){
        this.$emit('nombreHijo', this.nombreHijo)
    }
})