<template lang="pug">
  .randomize
    h1 {{ title }}
    button(@click="load") Пойдем!
    .img
      img(v-bind:src="poster"
          @click="showInfo = true"
          v-if="poster !== null")
    info-dialog(v-if="showInfo" 
                @close="showInfo = false"
                v-bind:title="event.title"
                v-bind:poster="event.poster"
                v-bind:description="event.body_text")
</template>

<script>
import axios from 'axios';
import infoDialog from './info-dialog';

export default {
  name: 'cinema',
  components: {
    infoDialog,
  },
  data() {
    return {
      title: 'На какой фильм пойдем сегодня?',
      showInfo: false,
      event: null,
      poster: null,
    };
  },
  methods: {
    load: function load() {
      axios.get('//gonzalez-kudago.betaagency.ru/public-api/v1.3/movies/?location=msk&fields=title,body_text,poster')
      .then((response) => {
        const events = response.data.results;
        const random = Math.floor(Math.random() * events.length);
        this.poster = events[random].poster.image;
        this.event = events[random];
        console.log('Все отлично =>', events);
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
  flex-direction column


h1
h3
  font-weight normal
  color #fff

.img 
  width 280px
  height 400px
  cursor pointer
  position relative
  img
    width 100%
    position absolute
    top 0
    left 0
    box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
    transition box-shadow 0.15s cubic-bezier(.25,.8,.25,1)

button 
  background-color #E0F2F1
  border none
  box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
  transition box-shadow 0.15s cubic-bezier(.25,.8,.25,1)
  border-radius 2px
  width 280px
  height 60px
  font-size 22px
  margin-bottom 25px
  &:active
    box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)

</style>
