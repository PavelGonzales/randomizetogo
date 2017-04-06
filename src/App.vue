<template>
  <div id="app">
    <randomize></randomize>
  </div>
</template>

<script>
import Randomize from './components/Randomize';

export default {
  name: 'app',
  components: {
    Randomize,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
