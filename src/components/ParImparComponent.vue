<template>
  <div>

    <h1>PAR O IMPAR</h1>

    <input type="number" v-model="numero"/>

    <h3>{{numero}}</h3>
    <button @click="generarNumero" type="button">Generar Numero</button>

    <h4 v-if="numero % 2==0">PAR</h4>
    <h4 v-else>IMPAR</h4>
  </div>
</template>
<script>
export default {
  name:"ParImparComponent",
  data(){
    return{
      numero:0
    }
  },
  methods:{
    generarNumero(){

      this.numero =parseInt(Math.random());
      console.log(this.numero);
    }
  }

}
</script>
<style scoped>

</style>