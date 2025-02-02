<template>
  <div class="sticky-header">
    <!-- 头部的下 -->
    <div class="bottom"><slot name="bottom"></slot></div>
    <scroll-to-top></scroll-to-top>
  </div>
</template>

<script lang="ts">
  import { ref, reactive, computed, onBeforeUnmount } from 'vue';
  import { RootState } from '@/store/types'
  import { mapState, Store, useStore, mapGetters } from 'vuex';
  import ScrollToTop from '@/components/ScrollToTop.vue'

  function saveTopToStore(store: Store<RootState>, value: number) {
    // 同步保存
    store.commit('changeScrollTop', value);
  }

  export default {
    components: {ScrollToTop},
    setup(props, context) {
      let startOffTop = ref(0)
      // 需要用类型断言
      let stickyDom = document.getElementsByClassName('sticky-header') as HTMLCollectionOf<HTMLElement>
      // 拿到全局store
      let store = useStore<RootState>()

      onBeforeUnmount(() => {
        // 粘性状态重置
        stickyDom[0].style.display = 'none'
        store.commit('shouldSticky', false)
      })

      window.onscroll = (e: Event) => {
        // 浏览器兼容获取offsetTop
        let afterOffTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        // 保持scrollTop到全局状态
        saveTopToStore(store, afterOffTop)
        
        // 判断什么时候需要粘性布局
        // 当高度超过50px或者Shadow组件被挂载时
        if(afterOffTop > 50 || store.state.inShadow) {
          stickyDom[0].style.display = 'block'
        }else{
          stickyDom[0].style.display = 'none'
        }

        if(afterOffTop >= store.state.offsetTop || store.state.inShadow) {
          store.commit('shouldSticky', true)
        }else{
          store.commit('shouldSticky', false)
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
