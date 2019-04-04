const app = new Vue({
    el: "#app",
    created: function () {
        this.getUser();
        // this.public();
    },

    data: {

        publicacion: []
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
                    this.publicacion = response.data.dato
                    console.log(this.publicacion)

                })
                .catch(error => {
                    console.log(error);
                })
        }


    }



});

