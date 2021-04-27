<template>
  <div>
    <!-- 头部块 -->
    <home-header></home-header>
    <!-- 菜单块 -->
    <home-category></home-category>
    <recommend></recommend>
    首页
    <div v-for="i in 100" :key="i">{{i}}</div>
    
  </div>
</template>

<script lang="ts">
  import { ref, reactive, defineComponent, computed } from 'vue';
  import HomeHeader from './HomeHeader.vue'
  import HomeCategory from './HomeCategory.vue'
  import Recommend from './recommend/Index.vue'
  import {RootState} from '@/store/types'
  import {mapState, useStore, Store} from 'vuex'

  function useCommonStore(store: Store<RootState>) {
    let scrollTop = store.state.scrollTop
  }

  export default defineComponent({
    components: {HomeHeader, HomeCategory, Recommend},
    setup(props, context) {
      let store = useStore<RootState>()
      let {} = useCommonStore(store)
      console.log(store)
    }
  })
</script>

<style lang="scss" scoped>

</style>