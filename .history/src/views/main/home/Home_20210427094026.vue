<template>
  <div>
    <!-- 头部块 -->
    <home-header></home-header>
    <!-- 菜单块 -->
    <home-category></home-category>
    <recommend></recommend>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { ref, reactive, defineComponent, computed } from 'vue';
  import HomeHeader from './HomeHeader.vue'
  import HomeCategory from './HomeCategory.vue'
  import Recommend from './recommend/Index.vue'
  import {RootState} from '@/store/types'
  import {mapState, useStore, Store} from 'vuex'
  
  export default defineComponent({
    components: {HomeHeader, HomeCategory, Recommend},
    setup(props, context) {
      let store = useStore<RootState>()

    }
  })
</script>

<style lang="scss" scoped>

</style>