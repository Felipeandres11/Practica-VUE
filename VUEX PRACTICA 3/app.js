const store = new Vuex.Store({
    
    state: {
       numero: 10
    }, 
    mutations: {
        incrementarNumero(state){
            state.numero ++
        }, 
        disminuirNumero(state, numero){
            state.numero -= numero
        }
    }


})


const app = new Vue({
    el: '#app', 
    store: store
})