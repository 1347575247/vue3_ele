<template>
  <div class="shadow-box"></div>
</template>

<script lang='ts'>
  import { ref, reactive, onMounted, provide } from 'vue';

  export default {
    components: {},
    setup(props, context) {

      onMounted(() => {
        console.log("Shadow onMounted...")
      })

      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .shadow-box {
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    transition: all .3s ease-in-out;
    z-index: 3;
  }
</style>