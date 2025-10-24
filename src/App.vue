<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Que ilusión, mi primer Vue del Viernes"/>
  <HolaMundo/>-->

    <MenuComponent/>
    <router-view></router-view>

</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'
import HolaMundo from "@/components/HolaMundo.vue";*/

import MenuComponent from "@/components/MenuComponent.vue";

export default {
  name: 'App',
  components: {
    MenuComponent
    /*    HelloWorld,
        HolaMundo,*/
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
