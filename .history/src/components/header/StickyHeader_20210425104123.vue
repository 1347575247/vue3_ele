<template>
  <div class="sticky-header">
    <!-- 头部的下 -->
    <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  export default {
    setup(props, context) {
      let startOffTop = ref(0)
      let stickyDom = document.getElementsByClassName('sticky-header')
      window.onscroll = e => {
        let afterOffTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        console.log([...stickyDom][0])
        if(afterOffTop > 50) {
          [...stickyDom][0].style.display = 'block'
        }else{
          [...stickyDom][0].style.display = 'none'
        }
      }

      return {
      }
    }
}
</script>

<style lang="scss" scoped>
.sticky-header {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 0 0.315789rem 0.197368rem;
  position: -webkit-sticky;
  position: fixed;
  z-index: 999;
  display: none;
  top: 0;
  width: 100%;
  .bottom {
      margin: 0.368421rem 0 0 0;
  }
}
</style>
