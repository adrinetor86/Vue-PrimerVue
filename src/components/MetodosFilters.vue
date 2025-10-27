<template>
  <div>
    <h1>Métodos Filters</h1>

    <ul>
      <li v-for="num in numeros" :key="num">
        Número: {{num}},
        Doble: {{ $filters.getNumeroDoble(num) }}
      </li>
    </ul>
    <ul>
      <li v-for="nombre in nombres" :key="nombre">
        {{ $filters.mayuscula(nombre) }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MetodosFilters",
  data(){
    return{
      numeros:[1,2,3,4,5,6,7,8,9,10],
      nombres:["adrian","pedro","santiago","jaime"]
    }
  }
}
</script>

<style scoped>

</style>