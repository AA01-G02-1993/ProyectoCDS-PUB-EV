
$("#imgH").hide();
$("#imgM").hide();



const app = new Vue({
    el: "#app",
    mounted() {
        this.mostrar()

    },

    data: {
        id: "",
        contenido: '',
        titulo: '',
        fecha: '',
        contacto: '',
        img: '',
        items: [],
        eventos: [],
        
    },
    methods: {
        getImage(event) {
            //Asignamos la imagen a  nuestra data
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                $("#img").val(reader.result);
                $("#img2").val(reader.result);
                $("#imagen").attr("src", reader.result);
                document.getElementById("imagenR").src = reader.result;
        
                var imagen = reader.result
        
                // console.log(imagen);
        
            }
            reader.readAsDataURL(file);
        },


        mostrar: function () {

            axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/eventos/lista')
                .then(response => {           
                    this.eventos = response.data.eventos

                })
                .catch(error => {
                    console.log(error);
                })
        },

        ///////////////////////////////////////// Agregar publicacion  //////////////////////////////////////////////

        agregar: function (data) {
            this.img = $("#img").val();
            axios.post('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/eventos/insertar', {
            
                    contenido: this.contenido,
                    fecha: this.fecha,
                    contacto: this.contacto,
                    titulo: this.titulo,
                    img: this.img
                
            })

                .then(response => {

                    console.log(response);
                    this.mostrar()  

                })
                .catch(error => {
                    console.log(error);
                    alert(error)
                })
                // this.mostrar()  
        },
        /////////////////////////////////////    eliminar Publicacion   ///////////////////////////////////////////////

        eliminar: function (id) {
            var eliminar = confirm("desea eliminar esta publicacion");
            if (eliminar == true) {
                axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/eventos/eliminar', {
                    params: {
                        id: id
                    }
                })
                    .then(response => {
                        console.log(response);
                        this.mostrar()
                    })
                    .catch(error => {
                        console.log(error);
                        alert(error)
                    })
                     
            } else {

            }

        },
        //////////////////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////    Actualizar Publicacion   /////////////////////////////////////////////////////////////
        actualizar: function (item) {
            this.items = item
        },
        /////////////////////////////////////////////////////////////////////////

        modificar: function (id) {
            this.items.img = $("#img2").val();
            //   console.log(this.items.img);
        

            axios.put('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/eventos/modi', {

                id: id,
                contenido: this.items.contenido,
                fecha: this.items.fecha,
                contacto: this.items.contacto,
                titulo: this.items.titulo,
                img: this.items.img


            })

                .then(response => {

                    console.log(response);
                    this.mostrar() 
                })
                .catch(error => {
                    console.log(error);
                    alert(error)
                })
                
        }

    }



});