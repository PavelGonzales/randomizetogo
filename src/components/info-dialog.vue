<template lang="pug">
  transition(name="fade")
    .dialog
      .overlay(@click="$emit('close')")
      .view
        .inner
          h1 {{ title }}
          .about
            img(v-bind:src="poster.image" alt="#")
            .about__content
              span рейтинг 
              span где идет
              span ценовая категория
          p {{ description }}
          button(@click="$emit('close')") close
</template>

<script>
export default {
  name: 'info-dialog',
  props: [
    'title',
    'poster',
    'description',
  ],
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.dialog
  position fixed
  top 0
  left 0
  right 0
  bottom 0

.overlay
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0,0,0,0.7)

.view
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex 
  justify-content center 
  align-items flex-start
  overflow-y scroll
  padding 75px
  box-sizing border-box

.inner
  position relative
  background-color #fff
  border-radius 3px
  padding 25px
  transition transform .4s ease-in-out
  width 590px
  box-sizing border-box

.about
  width 100%
  // height 320px
  background-color #efefef
  text-align left
  display flex 
  align-items flex-start
  img
    width 50%
  .about__content
    width 50%
    height 100%
    span 
      width 100%
      display inline-block

button 
  margin-top 15px

.fade-enter-active
.fade-leave-active
  transition opacity .5s

.fade-enter
.fade-leave-to /* .fade-leave-active для <2.1.8 */
  opacity 0
  .inner 
    transform scale(1.2)

</style>
