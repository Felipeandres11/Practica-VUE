const app = new Vue({

    el: '#app',
    data: {

        titulo: 'Hola mundo con vue',

        frutas: [{nombre: 'Pera', cantidad: 10},{nombre: 'Platano', cantidad: 0}, 
        {nombre: 'Damasco', cantidad: 15}],

        autos: [{nombre: 'mazda', color: 'rojo'}, {nombre: 'toyota', color: 'azul'}],

        personas: [ 
            
            {nombre: 'Felipe', edad: 25}, {nombre: 'Andres', edad: 26}, {nombre: 'constanza', edad: 23}
        ],

        nuevaFruta: '', 
        cantidad: '', 

        nombrePersona: '', 
        edadPersona: '', 
        total: 0
    }, 
    methods: {

        agregarFruta (){
            console.log('diste click');
            this.frutas.push({
                nombre: this.nuevaFruta, 
                cantidad: this.cantidad
            });
            this.nuevaFruta = ''
            this.cantidad = ''
        },

        agregarPersona(){
            this.personas.push({
                nombre: this.nombrePersona,
                edad: this.edadPersona
            });
            this.nombrePersona = ''
            this.edadPersona = ''
        }
    },  
    computed: {
        
        sumarFrutas(){
            this.total = 0;
            this.frutas.forEach(f => {
                 this.total += f.cantidad
            })

            return this.total;
        }
    }

})