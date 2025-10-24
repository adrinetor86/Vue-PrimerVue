//NECESITAMOS LAS LIBRERIAS DE NAVEGACION QUE HEMOS
//INCLUIDO CON npm install vue-router
import {createRouter ,createWebHistory} from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CinemaComponent from "./components/CineComponent.vue";
import DirectivasComponent from "@/components/DirectivasComponent.vue";
import CicloVidaComponent from "@/components/CicloVidaComponent.vue";
import ParImparComponent from "@/components/ParImparComponent.vue";

//UN ARRAY CON LAS RUTAS DE NAVEGACION

const myRoutes=[
    {path:"/",component:HomeComponent},
    {path:"/musica",component:MusicaComponent},
    {path:"/cine",component:CinemaComponent},
    {path:"/ciclovida",component:CicloVidaComponent},
    {path:"/directivas",component:DirectivasComponent},
    {path:"/parimpar",component: ParImparComponent}
]

//CREAMOS UNA VARIABLE PARA EL router INDICANDO EL TIPO DE NAVEGACION Y
//LAS RUTAS

const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes,
})

//LA CONSTANTE router ES LA QUE UTILIZARA EL FICHERO main.js
//DEBEMOS EXPORTARLA PARA QUE SEA UTILIZADA
export default router;

