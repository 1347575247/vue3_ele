<template>
  <div class="sticky-header" id="sticky-header">
    <!-- 头部的下 -->
    <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script lang="ts">
  import { ref, reactive } from 'vue';
  import { RootState } from '@/store/types'
  import { Store, useStore } from 'vuex';

  function saveTopToStore(value: number) {

  }

  export default {
    setup(props, context) {
      let startOffTop = ref(0)
      let stickyDom = document.getElementById('sticky-header')
      let store = useStore<RootState>()
      window.onscroll = (e: Event) => {
        let afterOffTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        saveTopToStore(afterOffTop)
        console.log(afterOffTop)
        if(afterOffTop > 50 && stickyDom !== null) {
          stickyDom.style.display = 'block'
        }else if(afterOffTop <= 50 && stickyDom !== null){
          stickyDom.style.display = 'none'
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
