<template>
  <div id="nav" class="nav">
    <router-link class="router-link" :to="{name: 'home'}" active-link="active">Home</router-link> |
    <router-link class="router-link" :to="{name: 'army'}" active-link="active">Army</router-link> |
    <router-link class="router-link" :to="{name: 'blog'}" active-link="active">Blog</router-link> |
    <router-link class="router-link" to="/about" active-link="active">About</router-link> |
    <router-link class="router-link" to="/user/" active-link="active">User Page</router-link>
  </div>
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
