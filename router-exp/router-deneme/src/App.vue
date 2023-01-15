<script>
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <br> <br>
    <RouterLink to="/about">About</RouterLink> 
  </header>
  <hr>
 <RouterView/>
</template>

<style scoped>

</style>
