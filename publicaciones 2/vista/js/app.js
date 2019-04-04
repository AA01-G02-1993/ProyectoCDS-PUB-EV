
//////////////////////////////////////////////////////// Todas las noticias  //////////////////////////////////////////////////////////
Vue.component('public', {
    template: `
    <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12" v-for="publicacion in publicaciones">
        <div class="blog-wrap-2 mb-30">
            <div class="blog-img-2">
                <a v-for="imagenes in publicacion.img.slice(0,1)">
                    <img v-bind:src="imagenes.img" alt="">
                </a>
            </div>
            <div class="blog-content-2">
                <div class="blog-meta-2">
                    <ul>
                        <li>{{publicacion.created_at.split(' ')[0]}}</li>
                        <li>
                            <a href="#">{{publicacion.fk_comentarios}}
                                <i class="pe-7s-comment"></i>
                                <i class="fa fa-comments-o"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <h4>
                    <a @click="vermas(publicacion.id)">{{publicacion.titulo.substring(0,25)}}</a>
                </h4>
                <p>{{publicacion.contenido.substring(0,150)+" ..."}}</p>
                <div class="blog-share-comment">
                    <div class="blog-btn-2">
                        <a @click="vermas(publicacion.id)">Ver más</a>
                    </div>
                    <div class="blog-share">
                        <span>Compartir :</span>
                        <div class="share-social">
                            <ul>
                                <li>
                                    <a class="facebook" href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="twitter" href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="instagram" href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    mounted() {
        axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/lista')
            .then(res => {
                // console.log(res)
                this.publicaciones = res.data.public
                // console.log(this.publicaciones)
                var ordenar =res.data.public
                ordenar.sort((a, b) => b.id - a.id );
                console.log(ordenar);
                
            })
    },
    data() {
        return {
            publicaciones: []
        }
    },
    methods: {
        vermas: function (id) {
            window.location.href = "Beta2.html?=" + id
        }
    }
})

////////////////////////////////////////////////////////  noticias recientes //////////////////////////////////////////////////////////

Vue.component('recientes', {
    template: `
    <div>
    <div class="sidebar-project-wrap mt-30" v-for="publicacion in publicaciones.slice(0,4)">
        <!-- /////////////////////////////////////////////////////////// -->
        <div class="single-sidebar-blog">
            <div class="sidebar-blog-img">
            <a v-for="imagenes in publicacion.img.slice(0,1)">
                <img v-bind:src="imagenes.img" alt="">
            </a>
            </div>
            <div class="sidebar-blog-content">
                <span>{{publicacion.titulo.substring(0,20)}}</span>
                <h4>
                    <a @click="vermas(publicacion.id)">{{publicacion.contenido.substring(0,20)+" ..."}}</a>
                </h4>
            </div>
        </div>
    </div>
</div>
    `,
    mounted() {
        axios.get('http://192.168.32.106/Publicaciones_eventos2/apiRest/public/api/publicaciones/lista2')
            .then(res => {
                // console.log(res)
                this.publicaciones = res.data.public
              
                // console.log(this.publicaciones)
            })
    },
    data() {
        return {
            publicaciones: []
        }
    },
    methods: {
        vermas: function (id) {
            // alert(id)
            window.location.href = "Beta2.html?=" + id
        }

    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mv = new Vue({
    el: '#app'
})