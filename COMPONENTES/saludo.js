Vue.component('saludo', {

    /* Desde la extensión es6-string-js podemos comentar //html en el template para que se vea codigo html*/

    template: //html 
    
    `
    <div>
               <h1>{{saludo}}</h1> 
               <h3>{{saludo}}</h3>

    </div>                          `,
    

    data(){
        return {
            saludo: 'hola desde vue'
        }
    }
})
