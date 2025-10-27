import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app= createApp(App)
app.config.globalProperties.$filters={
    //CREAMOS DOS MÉTODOS QUE RECIBIRAN "ALGO" Y DEVOLVERAN UN RESULTADO

    mayuscula(dato){
        return dato.toUpperCase()
    },
    getNumeroDoble(numero){
        return numero * 2;
    }

}

app.use(router).mount('#app')
