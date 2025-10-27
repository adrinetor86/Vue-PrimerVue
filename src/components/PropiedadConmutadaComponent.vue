<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <ul>
<!--      <li v-for="game in juegos" :key="game">
        {{ game }}
      </li>-->
      <li v-for="game in juegosRojos" :key="game" v-html="game"/>
    </ul>
    <label>Número:</label>
    <input type="number" v-model="numero"/>
    <div v-html="evaluarNumero"></div>


  </div>
</template>

<script>
export default {
  name: 'PropiedadConmutadaComponent',
  computed:{
    //SE ESCRIBE COMO UN METODO PERO SE UTILIZA COMO UNA PROPIEDAD
    juegosRojos(){
        var datos=[];
        var i=0;
        for(var game of this.juegos){
          var juegoRojo="<span style='color:red'>"+game+"</span>";
          datos[i]=juegoRojo;
          i++;
        }
      return datos;
    },
    evaluarNumero(){
      var data="";
      if(this.numero % 2 ===0){
        data="<h3>Es Par</h3>"
      }else{
        data="<h3>Es Impar</h3>"
      }
      return data;
    }
  },
  data() {
    return {
      numero:0,
      juegos: ["parchis", "canicas", "Luz verde, Luz roja", "La galleta"]
    }
  }

}
</script>

<style scoped>


</style>