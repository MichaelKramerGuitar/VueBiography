<template>
  <nav id="nav" class="nav">
    <ul>
      <li><a><router-link class="router-link" :to="{name: 'home'}" active-link="active">Home</router-link></a></li>
      <li><a><router-link class="router-link" :to="{name: 'army'}" active-link="active">Army</router-link></a></li>
      <li><a><router-link class="router-link" :to="{name: 'freelance'}" active-link="active">Freelance</router-link></a></li>
      <li><a><router-link class="router-link" :to="{name: 'foundational-melodies'}" active-link="active">Foundational Melodies</router-link></a></li>
      <li><a><router-link class="router-link" :to="{name: 'public-speaking'}" active-link="active">Public Speaking</router-link></a></li>
      <li><a><router-link class="router-link" :to="{name: 'blog'}" active-link="active">Blog</router-link></a></li>
    </ul>
  </nav>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
@import "styles/style.css";
</style>
