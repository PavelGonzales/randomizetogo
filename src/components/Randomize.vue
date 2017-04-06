<template lang="pug">
  .randomize
    .wrap
      h1 {{ title }}
      button(@click="load") Пойдем!
      p {{ random_text }}
</template>

<script>
import axios from 'axios';

export default {
  name: 'randomize',
  data() {
    return {
      title: 'Нажми на кнопку что бы узнать куда пойти сегодня',
      random_text: 'Никуда',
    };
  },
  methods: {
    load: function load() {
      axios.get('https://kudago.com/public-api/v1.2/events/?expand=event').then((response) => {
        const events = response.data.results;
        const random = Math.floor(Math.random() * events.length);
        this.random_text = events[random].title;
        console.log('Все отлично =>', events[random].title);
      }, (error) => {
        console.log('Ошибка =>', error);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.randomize 
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color #009688
  display flex 
  justify-content center 
  align-items center

h1
  font-weight normal
  color #fff

button 
  background-color #E0F2F1
  border none
  box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
  transition box-shadow 0.15s cubic-bezier(.25,.8,.25,1)
  border-radius 2px
  width 280px
  height 60px
  font-size 22px
  &:active
    box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)

</style>
