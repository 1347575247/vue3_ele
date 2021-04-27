<template>
  <div class="scroll-top">
    <img :src="src" alt="">
  </div>
</template>

<script lang='ts'>

  import { ref, reactive, toRefs } from 'vue';
  import base64 from '@/assets/js/base64'

  const {scrollToTop} = base64
  export default {
    setup(props, context) {
      const base64Data = reactive({
        src: scrollToTop,
      })

      return {
        ...toRefs(base64Data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-top {
    position: fixed;
    bottom: 1.842105rem;
    right: 0.157895rem;
    background-color: #fff;
    border-radius:50%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 1.315789rem;
    height: 1.315789rem;
    img {
      width: 1.052632rem;
      margin: auto;
    }
  }
</style>