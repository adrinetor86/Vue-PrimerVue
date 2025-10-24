<template>
  <div>
    <h1>Ciclo Vida y métodos VUE</h1>
    <h2 style="color:red">{{ mensaje }}</h2>
    <button @click="cambiarMensaje()">
      Mostrar mensaje
    </button>
  </div>
</template>

<script>
export default {
  name: "CicloVidaComponent",
  data() {
    return {
      mensaje: "Hoy es viernes!"
    }
  },
  methods: {
    //AQUI INCLUIMOS NUESTROS METODOS PERSONZALIZADOS
    cambiarMensaje() {
      //PARA ACCEDER A LAS VARIABLES DE data() DEL COMPONENT
      //DEBEMOS UTILIZAR LA PALABRA this
      this.mensaje = "Hoy es sale!!"

      console.log(this.mensaje)
    }
  },
  mounted(){
    console.log("Component mounted");
  },
  created(){
    console.log("Component created");
  },
  updated(){
    console.log("Component updated");
  },
  unmounted() {
    console.log("Component unmounted");
  }
};

</script>

<style scoped>
/*h2{
  background-color: antiquewhite;
}*/
</style>