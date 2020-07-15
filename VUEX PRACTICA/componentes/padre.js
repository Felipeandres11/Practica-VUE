Vue.component('padre',{
    template: //html 
  
    `
        <div>
            <h1> Titulo {{numero}} </h1>
            <hijo></hijo>
        </div>
    
    `, 

    computed:{
       ...Vuex.mapState(['numero'])
    }
})