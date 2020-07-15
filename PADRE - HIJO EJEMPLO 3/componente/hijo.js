Vue.component('hijo', {
    template: //html 
    `
    <div> 
        <h1>SOY UN HIJO: {{numeroHijo}} - {{nombre}} </h1> 
    </div>
    `, 
    props: ['numeroHijo'], 
    data(){
        return {
            nombre: 'Felipe Palma'
        }
    }, 
    mounted(){
        return this.$emit('nombreHijo', this.nombre)
    }
})