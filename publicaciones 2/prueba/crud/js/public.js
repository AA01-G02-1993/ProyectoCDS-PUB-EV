
$("#imgH").hide();
$("#imgM").hide();
//arreglo para mostrar las imagenes en los formularios de modificar y agregar
var imagenes = [];

////////////////////////////////////////////////////       formulario agregar      //////////////////////////////////////////////////////////////////

// funcion para codificar las imagenes a codigo 64 y agregarlas al arreglo imagenes
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {

        var imgs = { img: "" }
        // insertar las imagenes obtenidas por el formulario al json imgs
        imgs.img = reader.result
        // insertar  el json imgs al arreglo imagenes
        imagenes.push(imgs);

    }
    reader.readAsDataURL(file);
}
///////////////////////////////////////////////////////////      formulario modificar        /////////////////////////////////////////////////////////////////
function encodeImage(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {

        var imgs = { img: "" }
        // insertar las imagenes obtenidas por el formulario al json imgs
        imgs.img = reader.result
        // insertar  el json imgs al arreglo imagenes
        imagenes.push(imgs);
    }
    reader.readAsDataURL(file);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const app = new Vue({
    el: "#app",
    created: function () {
        this.mostrar()

    },

    data: {
        id: "",
        contenido: '',
        titulo: '',
        autor: '',
        // imagenes = al arreglo de imagenes
        imagenes: imagenes,
        //arreglo obtenido al pulsar el boton actualizar
        items: [],
        publicaciones: [],
        mostar: true,
        img: ""
    },
    methods: {


        mostrar: function () {

            axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/lista')
                .then(response => {
                    //asignarle al arreglo publicaciones la respuesta donde obtenemos todas las publicaciones
                    this.publicaciones = response.data.public

                })
                .catch(error => {
                    console.log(error);
                })
        },
        /////////////////////////////////////////////////////////  para eliminar imagenes   /////////////////////////////////////////////////
        borrar: function (img) {
            //for para comparar las images para poder eliminarlas de el arreglo con splice      
            for (var i = 0; i < imagenes.length; i++) {
                if (imagenes[i].img == img) {
                    imagenes.splice(i, 1);
                    break;
                }
            }
        },
        ///////////////////////////////////////// Agregar publicacion  //////////////////////////////////////////////

        agregar: function (data) {

            axios.post('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/insertar', {
                contenido: this.contenido,
                titulo: this.titulo,
                autor: this.autor,
                imagenes: this.imagenes
            })

                .then(response => {

                    console.log(response);

                })
                .catch(error => {
                    console.log(error);
                    alert(error)
                })
                this.mostrar()
        },
        /////////////////////////////////////    eliminar Publicacion   ///////////////////////////////////////////////

        eliminar: function (id) {
            // alerta de confirmacion para eliminar una publicacion
            var eliminar = confirm("desea eliminar esta publicacion");
            if (eliminar == true) {
                axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/eliminar', {
                    params: {
                        id: id
                    }
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                        alert(error)
                    })
                    this.mostrar()
            } else {

            }

        },
        //////////////////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////    Actualizar Publicacion   /////////////////////////////////////////////////////////////
        actualizar: function (item) {
            // asignandole a el arreglo items  el arreglo item que obtenemos al pulsar el boton actualizar
            this.items = item
            // asignandole a el arreglo h  el valor de el arreglo de imagenes            
            var h = this.items.img
            // for para recorrer el arreglo h que contiene todas las imagenes que obtenemos de la publicacion seleccionada
            for (let i = 0; i < h.length; i++) {
                // obteniendo el valor de una imagen
                var t = h[i].img;

                var imgs = { img: "" }
                // insertar la imagen obtenida por cada giro y asignarle la imagen a el json imgs
                imgs.img = t
                // insertar  el json imgs al arreglo imagenes
                imagenes.push(imgs);
                // console.log(t);

            }
            var g = item.img

        }
        ,
        /////////////////////////////////////////////////////////  para eliminar imagenes   /////////////////////////////////////////////////
        borrar2: function (img) {
            //asignandole el valor de la imagen que obtenemos al pulsar el boton de borrar imagen y selo asignamos a la varible img
            this.img = img
            //for para comparar las images para poder eliminarlas de el arreglo con splice 
            for (var i = 0; i < imagenes.length; i++) {
                if (imagenes[i].img == img) {
                    imagenes.splice(i, 1);
                    break;
                }
            }
        },
        /////////////////////////////////////////////////////////////////////////

        modificar: function (id) {

            axios.put('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/modi', {

                id: id,
                contenido: this.items.contenido,
                titulo: this.items.titulo,
                autor: this.items.autor,
                imagenes: this.imagenes

            })

                .then(response => {

                    console.log(response);

                })
                .catch(error => {
                    console.log(error);
                    alert(error)
                })

                this.mostrar()

        }

    }



});