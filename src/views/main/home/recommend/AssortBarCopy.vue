<template>
  <div>
    <ul class="assort-wrap p-spacing flex" v-if='store.state.isSticky'>
      <li class="assort-item" @click="chooseCatDefault">
        <span>销量最高</span>
        <i class="iconfont icon-xiala"></i>
      </li>
      <li class="assort-item">
        <span>距离最近</span>
        <i class="iconfont"></i>
      </li>
      <li class="assort-item">
        <span>销量最高</span>
        <i class="iconfont"></i>
      </li>
      <li class="assort-item">
        <span>筛选</span>
        <i class="iconfont icon-xiala"></i>
      </li>
    </ul>

    <!-- 左侧下拉菜单 -->
   <left-drop-down></left-drop-down>
    <!-- 筛选按钮下拉菜单 -->
  </div>
</template>

<script lang='ts'>
  import { ref, reactive, onMounted, computed } from 'vue';
  import { useStore, mapGetters, mapState } from 'vuex';  
  import { RootState } from '@/store/types'
  import LeftDropDown from './catway/LeftDropDown.vue'

  export default {
    components: {LeftDropDown},
    setup(props, context) {
      let store = useStore<RootState>()
      console.log(store.state)
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  .assort-wrap {
    width: 100%;
    background-color:#fff;
    justify-content: space-between;
    position: fixed;
    z-index: 4;
    top: 1.496053rem;
    padding: 0.235789rem 0.394737rem;
  }
</style>