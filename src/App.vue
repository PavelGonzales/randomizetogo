<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/events">События</router-link>
      <router-link to="/cinema">Фильмы</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Randomize from './components/Randomize';
import events from './components/events';
import cinema from './components/cinema';

export default {
  name: 'app',
  components: {
    Randomize,
    events,
    cinema,
  },
};
</script>

<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
