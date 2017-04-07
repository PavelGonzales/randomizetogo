<template lang="pug">
  .randomize
    .wrap
      h1 TDTYNSSS
      button(@click="load") Пойдем!
      h3 {{ random_text }}
      button(@click="showInfo = true"
             v-if="event !== null" ) узнать о конкретном евенте!
      info-dialog(v-if="showInfo" 
                  @close="showInfo = false"
                  v-bind:time="event.event.daterange.start_time"
                  v-bind:img="event.event.first_image.image"
                  v-bind:description="event.event.description")
</template>

<script>
import axios from 'axios';
import infoDialog from './info-dialog';

export default {
  name: 'events',
  components: {
    infoDialog,
  },
  data() {
    return {
      title: 'Нажми на кнопку что бы узнать куда пойти сегодня',
      random_text: 'Никуда',
      showInfo: false,
      event: null,
    };
  },
  methods: {
    load: function load() {
      axios.get('//gonzalez-kudago.betaagency.ru/public-api/v1.3/events-of-the-day/?expand=event&location=msk')
      .then((response) => {
        const events = response.data.results;
        const random = Math.floor(Math.random() * events.length);
        this.random_text = events[random].event.title;
        this.event = events[random];
        console.log('Все отлично =>', events);
      }, (error) => {
        console.log('Ошибка =>', error);
      });
    },

    getEvent: function getEvent() {
      axios.get('//gonzalez-kudago.betaagency.ru/public-api/v1.3/events/34162/?fields=id,participants,place,location,dates&expand=participants,place,location,dates')
      .then((response) => {
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
h3
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
