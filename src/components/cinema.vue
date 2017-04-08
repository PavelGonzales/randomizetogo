<template lang="pug">
  .randomize
    h1 {{ title }}
    button(@click="go_event") Пойдем!
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
      events: [],
      event: null,
      poster: null,
      index: 0,
      page: 1,
    };
  },
  created: function created() {
    console.log('CREATED');
    this.load(this.page);
  },
  methods: {
    load: function load(page) {
      axios.get(`//gonzalez-kudago.betaagency.ru/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100&page=${page}`)
      .then((response) => {
        this.shuffle(response.data.results);
        this.events = this.events.concat(response.data.results);
        console.log('Все отлично =>', response);
      }, (error) => {
        console.log('Ошибка =>', error);
      });
    },
    go_event: function goEvent() {
      if (this.index < this.events.length) {
        this.poster = this.events[this.index].poster.image;
        this.event = this.events[this.index];
        this.index = this.index + 1;
        console.log(this.events.length);
        console.log(this.index);
        if (this.index === this.events.length - 2) {
          this.page = this.page + 1;
          this.load(this.page);
        }
      }
    },
    shuffle: function shuffle(arr) {
      const array = arr;
      for (let i = array.length; i; i--) { // eslint-disable-line
        const j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
      }
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
  background-color #BFEE90
  /* For WebKit (Safari, Chrome, etc) */
  background #BFEE90 -webkit-gradient(linear, left top, left bottom, from(#90EEA0), to(#BFEE90)) no-repeat
  /* Mozilla,Firefox/Gecko */
  background #BFEE90 -moz-linear-gradient(top, #90EEA0, #BFEE90) no-repeat


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
