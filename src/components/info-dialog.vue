<template lang="pug">
  .dialog
    h1 Dialog
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
  background-color rgba(0,0,0,0.4)
</style>
