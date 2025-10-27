<template>
  <div class="notfound">
    <div class="content">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <router-link to="/" class="btn">Ir al inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent",
}
</script>

<style scoped>
.notfound { display:flex; align-items:center; justify-content:center; min-height:60vh; text-align:center; padding:2rem; }
.content { max-width:600px; }
h1 { font-size:4rem; margin:0; color:#ff6b6b; }
h2 { margin:0.5rem 0 1rem; }
p { color:#666; margin-bottom:1.5rem; }
.btn { display:inline-block; padding:0.6rem 1rem; background:#42b983; color:#fff; border-radius:6px; text-decoration:none; }
.btn:hover { opacity:0.9; }
</style>