<template>
  <div id="app">
    <h1>Nixie Tube Clock</h1>
    <Clock />
    <Details />
  </div>
</template>

<script>
import Clock from './components/Clock';
import Details from './components/Details';
export default {
  name: 'App',
  components: {
    Clock, Details
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nixie+One');

html, body, div, span {
  padding: 0; margin: 0; box-sizing: border-box;
}

body {
  background: #070707;
  color: white;
}

h1 {
  text-align: center;
}

#app {
  font-family: Nixie One;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
