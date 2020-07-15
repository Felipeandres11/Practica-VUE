Vue.component('titulo',{
    template: //html 

    `
    <div>
        <h1>numero {{ $store.state.numero }}</h1>
        <hijo></hijo>
    </div>
    
    
    `
})

Vue.component('hijo',{
    template://html 
    `
      <div>
        <h1>numero {{ $store.state.numero }}</h1> 
        <button type="button" @click="$store.commit('aumentar')">+</button>
      </div>
    
    `
})


const store = new Vuex.Store({

    state: {
        numero: 10
    }, 
    mutations: {
        aumentar(state){
            state.numero ++
            /*this.state.numero ++*/
        }
    }

});



const app = new Vue({
    el: '#app', 
    store: store
})