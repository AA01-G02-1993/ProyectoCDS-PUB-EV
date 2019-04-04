var imagenesSecun= []
const app = new Vue({
    el: "#app",
    created: function () {
        this.getUser();
        // this.public();
    },

    data: {

        publicacion: [],
        parrafos: [],
        imagenesSecundarias:imagenesSecun

    },
    methods: {

        getUser: function () {
            var url = document.location.href;
            var id = url.split('=')[1];
            this.id = id
            axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/verID', {
                params: {
                    id: this.id,

                }
            })
                .then(response => {
                    this.publicacion = response.data.datos
                    var cadena = response.data.datos.contenido
                    var separador = "\n\n"
                    var x = cadena.split(separador);
                    var parrafos = []

                    for (let i = 0; i < x.length; i++) {
                        var r = x[i]
                        parrafos.push(r)


                    }
                    this.parrafos = parrafos
                    // para imprimir la imagen principal
                  
                    var res = response.data.datos.img
                    
                    // para imprimir las imagenes secundarias
                   
                    for (let i = 1; i < res.length; i++) {
                        imagenesSecun.push(res[i].img)
                        // console.log(res[i].img);       
                        
                    }

                //   console.log(this.imagenesSecundarias);
                  
                    $("#imagenPricipal").attr("src", res[0].img);
                    // console.log(this.imagenPricipal);
                    

                })
                .catch(error => {
                    console.log(error);
                })
        }


    }



});

