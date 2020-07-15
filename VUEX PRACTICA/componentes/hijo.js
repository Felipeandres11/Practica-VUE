Vue.component('hijo',{
    template: //html 
    
    `
        <div>
           <p>Componente Hijo {{numero}} </p>
           <button @click="incrementarNumero">+</button>
           <button @click="disminuirNumero(5)">-</button>


           <button @click="obtenerCursos">Obtener cursos</button>

           <ul v-for="curso in cursos">
                <li>{{curso.nombre}} {{curso.id}}</li> 
           </ul>
        </div>
    
    `, 
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['incrementarNumero', 'disminuirNumero']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
})