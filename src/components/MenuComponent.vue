<template>

  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
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

<style>
@import "../assets/css/estilos.css";

ul#menu {
  display: inline;
}
</style>