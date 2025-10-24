<template>
  <div>
    <h1>HOLA MUNDO!!!!</h1>
    <h2>Su nombre es {{nombre}}</h2>
    <h2>Su edad es {{edad}}</h2>
    <h2>Su array es {{miArray}}</h2>

    <img src="../assets/images/random16.jpg">
  </div>
</template>


<script>
//VUE UTILIZA CODIGO JS ESPECIAL
//CADA COMPONENT QUE GENERAMOS DEBE TENER UN NOMBRE OBLIGATORIO
//Y DEBEMOS EXPORTARLO CON DICHO NOMBRE. El name ES LA ETIQUETA QUE
//UTILIZARAN OTROS COMPONENTES PARA DIBUJAR

export default {
  name: 'HolaMundo',
  data() {
    //LAS VARIABLES SON DECLARADAS EN FORMATO JSON
    //DENTRO DE UN RETURN
    return {
      nombre: "Alumno",
      edad: 25,
      miArray: [2,1],
      objeto: {}
    }
  }
};
</script>

<style scoped>
@import "../assets/css/estilos.css";
h1{
  color:blue
}
</style>

