// Carga de la web y seteo de tema
var cuerpo = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("oscuro") == "true") {
        var oscuro = cuerpo.classList.toggle("dark")
        localStorage.setItem("oscuro", oscuro)
    }
});

//Componentes
const COMPONENTES = {
    index: `
    <main class="portada">
        <div class="filtro">
            <div class="portada__texto">
                <h1 class="titulo__portada animate__animated animate__bounceInDown">NERDILON</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </main>

    <section class="destacados">
        <h2 class="destacados_titulo">★ Productos Destacados ★</h2>
        <div class="destacados_container">

            <div v-for="prod of info" class="destacados_container_productos">
                <img :src="prod.imagen" :alt="prod.nombre">
                <h4>{{prod.nombre}}</h4>
                <p>{{prod.descripcion}}</p>
                <a href="#">ver mas</a>
            </div>

        </div>
    </section>
    `,

    tienda:`
    <div class="container_Tienda" id="productosTienda">
        <section class="categorias">
            <h2>Categorias</h2>
            <ul>
                <li>
                    <label @change="filtro()" for="tazas"><input type="checkbox" value="tazas" id="tazas"
                            v-model="filtros"> Tazas</label>
                </li>
                <li>
                    <label @change="filtro()" for="remeras"><input type="checkbox" value="remeras" id="remeras"
                            v-model="filtros"> Remeras</label>
                </li>
                <li>
                    <label @change="filtro()" for="llaveros"><input type="checkbox" value="llaveros" id="llaveros"
                            v-model="filtros"> Llaveros</label>
                </li>
                <li>
                    <label @change="filtro()" for="mousepads"><input type="checkbox" value="mousepads" id="mousepads"
                            v-model="filtros"> Mouse Pads</label>
                </li>
                <li>
                    <label @change="filtro()" for="muniecos"><input type="checkbox" value="muniecos" id="muniecos"
                            v-model="filtros"> Muñecos</label>
                </li>
            </ul>
        </section>
        <section class="productosTienda">
            <div v-for="prod of filtrados">
                <div class="card_tienda">
                    <img :src="prod.imagen" :alt="prod.nombre">
                    <h4>{{prod.nombre}}</h4>
                    <p>{{prod.precio}}</p>
                    <a @click="construccion()">Agregar al carrito</a>
                </div>
            </div>
            <h2 v-if="filtros==''">Seleccione una categoría!</h2>
        </section>
    </div>
    `,

    //nosotros
    nosotros: `
    <div class="padre__tienda">
        <main>
            <section>
                <div class="banner">
                    <div class="banner-texto">
                        <h1 class="titulo__portada animate__animated animate__bounceInDown">Sobre NERDILON</h1>
                        <p id= "sobreNerdilon">Somos un emprendimiento dedicado a satisfacer esos pequeños caprichos visuales a lo largo del día.</p>
                    </div>
                    <img id="imgNosotros" src="./img/nosotros-test.jpg" alt="taza en escritorio">
                </div>
            </section>
            <section class="section-body">
                <!--Info General Sobre Por Que Contactarse-->
                <h2 class="destacados_titulo">★ Especialidad ★</h2>
                <p id="especialidad">En Nerdilon somos especialistas en la personalización, ofrecemos una amplia
                    variedad de opciones para que usted pueda elegir esa imagen que tanto le gustaría ver cada dia.</p>
            </section>
        </main>
    </div>
    `,

    //Contactenos
    contacto:`
    <section class="section-header">
        <!--Banner-->
        <div class="banner">
            <div class="banner-texto">
                <h1 class="titulo__portada animate__animated animate__bounceInDown">NERDILON</h1>
                <p>Si tenes alguna pregunta, sugerencia, queja o cumplido, comunicate con nosotros.</p>
            </div>
            <img src="./img/banner-contacto.jpg" alt="taza en paisaje">
        </div>
    </section>
    <section class="section-body">
        <!--Info General Sobre Por Que Contactarse-->
        <h2 class="destacados_titulo">★ Contacto ★</h2>
        <p>Consulta stock de nuestros productos,</p>
        <p>envianos tu pedido y te lo presupuestamos,</p>
        <p>comunicate con nosotros a nuestro whatsapp</p>
        <p>y visita nuestras redes sociales para conocer promociones y eventos!</p>
        <br>
        <p>O veni a nuestro local en Bahia Blanca <a class="link-dir" href="https://goo.gl/maps/gLoQQumstELUjqsK8" target="_blank">Zapiola 855</a></p>
        <iframe class="frame-dir" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4869836359576!2d-62.27231018426945!3d-38.70662697960035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb565e42848d%3A0xbc596326f67d457f!2sZapiola%20855%2C%20B8000CLQ%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665673952035!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    <section class="section-footer">
        <!--Formas de contacto-->
        <ul>
            <li>
                <a href="tel:+5491145101584"><i class="fa-solid fa-mobile-screen"></i></a>
            </li>
            <li>
                <a href="mailto:juannerdilon@nerdi.com"><i class="fa-solid fa-at"></i></a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=+5492983404754&text=Hola,%20¿puedes%20enviarme%20%mas%20%informacion?"
                    target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            </li>
            <li>
                <a href="https://facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
                <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
            </li>
        </ul>
    </section>
    `,
}

//VUE

const { createApp } = Vue

createApp({
    data: function() {
        return{
            vista: "index",
            logueado: (sessionStorage.logueado != "si"),
            urlUsuarios: "./data/usuarios.json",
            info: {},
            email:"",
            password:""
        }
    },
    created() {
        if (!this.logueado) this.sesionActiva()
    },
    methods: {
        iniciaSesion(){
            if (this.info.email == this.email && this.info.contraseña == this.password){
                sessionStorage.logueado = "si"
                form.contraseña=""
                form.email=""
                document.getElementById("btn-cerrar-log").click();
            }else{
                alert("Email o Contraseña Incorrecto!")
            }
        },
        registro(){
            alert("Ja. Eso no Anda")
            document.getElementById("reset").click()
        },
        sesionActiva(){
            fetch(this.urlUsuarios)
            .then (res => res.json())
            .then (data => {
                this.info = data
            })
        },
        cambiarModo(){
            var oscuro = cuerpo.classList.toggle("dark")
            localStorage.setItem("oscuro", oscuro)
        }
    },
    components: {
        index: {
            data: function() {
                return {
                    info:[],
                    urlDestacados:"./data/destacados.json",
                    logueado: (sessionStorage.logueado != "si"),
                }
            },
            methods:{
                leerDatos(url){
                    fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        this.info = data
                    })
                }
            },
            created() {
                this.leerDatos(this.urlDestacados)
            },
            template: COMPONENTES.index
        },
        nosotros: {
            data: function() {
                return {
                    logueado: (sessionStorage.logueado != "si"),
                }
            },
            template: COMPONENTES.nosotros
        },
        contacto: {
            data: function() {
                return {
                    logueado: (sessionStorage.logueado != "si"),
                }
            },
            template: COMPONENTES.contacto
        },
        tienda: {
            data() {
                return {
                    info: {},
                    filtrados: [],
                    cargando: true,
                    urlData: "./data/productos.json",
                    filtros:["tazas", "remeras", "llaveros", "mousepads", "muniecos"],
                }
            },
            created() {
                this.leerDatos(this.urlData)
            },
            methods: {
                construccion(){
                    alert("Seccion en Reparacion. Disculpe las molestias!")
                },
                leerDatos(url) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            this.info = data
                            this.filtro()
                        })
                },
                filtro(){
                    this.filtrados=[]
                    for (let filt of this.filtros){
                        console.log(filt)
                        this.filtrados = this.filtrados.concat(this.info[filt])
                    }
                }
            },
            template: COMPONENTES.tienda
        }
    }
}).mount("#contenido")

var button = document.querySelector('.header__button');
var nav = document.getElementById('header__nav');
var frmLogin = document.querySelector(".form");

function navBurguer() {
    nav.classList.toggle('header__nav--activo');
};

function login() {
    frmLogin.classList.toggle("login");
};

function register() {
    frmLogin.classList.toggle("register");
};

