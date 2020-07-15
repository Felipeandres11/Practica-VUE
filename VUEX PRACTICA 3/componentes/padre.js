Vue.component('padre', {
    
    template://html 

    `
        <div>
            <h1> Numero: {{numero}} </h1>
            <button style="padding: 10px 15px; color: white; background-color: blue" @click="incrementarNumero">+</button>
            <button style="padding: 10px 15px; color: white; background-color: red" @click="disminuirNumero(5)">-</button>
        </div>

    `, 

    computed:{
     ...Vuex.mapState(['numero']),   
    }, 
    methods:{
      ...Vuex.mapMutations(['incrementarNumero', 'disminuirNumero'])
    }
})