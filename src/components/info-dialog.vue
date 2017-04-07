<template lang="pug">
  transition(name="fade")
    .dialog
      .overlay(@click="$emit('close')")
      .inner
        h1 Название мероприятия
        h3 время и место
        p Описание мероприятия
        .map карта
        button(@click="$emit('close')") close
</template>

<script>
export default {
  name: 'info-dialog',
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
  display flex 
  justify-content center 
  align-items center
.overlay
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0,0,0,0.7)

.inner
  position relative
  background-color #fff
  border-radius 3px
  padding 24px
  transition transform .4s ease-in-out

.map 
  width 540px
  height 320px
  background-color #efefef

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
