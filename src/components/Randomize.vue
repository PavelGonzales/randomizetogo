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
      resourse_url: 'https://kudago.com/public-api/v1.3/event-categories/?lang=&order_by=&fields=',
    };
  },
  methods: {
    load: () => {
      // console.log(axios.get(this.resourse_url));
      axios.get('https://kudago.com/public-api/v1.3/event-categories/?lang=&order_by=&fields=').then((response) => {
        console.log('Все отлично =>', response);
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
