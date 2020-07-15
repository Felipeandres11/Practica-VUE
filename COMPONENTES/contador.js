Vue.component('contador',{
    template://html 
                    `
                        <div>
                            <h3>{{numero}}</h3>
                            <button @click="numero++">SUMAR</button>
                        </div>
                    
                    `, 
    data() {
        return{ 
            numero: 0
        }
    }
                    
})