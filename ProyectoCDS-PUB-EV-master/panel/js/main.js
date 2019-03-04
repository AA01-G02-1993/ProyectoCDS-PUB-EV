var app=new Vue({
    el:'#app',
    data:{
        publicacion:"",
    
        newEvento:{
            titulo:"",
        },
        eventos:[
            {titulo: "Graduacion De Corte #2"},
            {titulo: "Convocatoria Prueba angular "},
            {titulo: " Prueba vue"},
            {titulo: "convocatoria para aspirante a Diseño Web"},
            {titulo: "Curso De python"},
            {titulo: "examen de certificacion   "},
            
        ],
    
    },
    computed:{
    formTitle(){
        return(this.publicacion)?'Noticia':'evento'
    }
    },
    methods:{
        addEvento: function(){              /*para quee no pasen compos vacios*/
            if(this.newEvento.titulo.length <= 1 )return alert('La tarea no puede estar vacia') ; 
            this.eventos.push({
                titulo:this.newEvento.titulo,
            });
            this.newEvento.titulo="";/*limpiar datos al input */
        },
     
    },
});