<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LinkedSelects/>
  </div>
</template>

<script>
import LinkedSelects from './components/LinkedSelects.vue'

export default {
  name: 'App',
  components: {
    LinkedSelects
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
