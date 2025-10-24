<template>

  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/ciclovida">Ciclo Vida</router-link>
      </li>
      <li>
        <router-link to="/directivas">Directivas</router-link>
      </li>
      <li>
        <router-link to="/parimpar">Par Impar</router-link>
      </li>
      <li>
        <router-link to="/musica">Musica</router-link>
      </li>
      <li>
        <router-link to="/cine">Cine</router-link>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "MenuComponent",
}
</script>

<style scoped>
@import "../assets/css/estilos.css";

ul#menu {
  display: flex;
  justify-content: center;
  gap: 40px;
}
</style>