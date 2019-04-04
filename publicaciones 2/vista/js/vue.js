const app = new Vue({
    el: "#app",
    created: function () {
        this.getUser()
    },

    data: {

        publicaciones: []
    },
    methods: {

        getUser: function () {

            axios.get('http://192.168.32.106/Publicaciones_eventos1/apiRest/public/api/publicaciones/lista')
                .then(response => {
                    // console.log(response.data.publicaciones);
                    
                    this.publicaciones = response.data.publicaciones
                    
                    // console.log(publicaciones)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        vermas: function (id) {
            alert(id)
            // window.location.href = "Beta2.html?="+id
        }

    }



});