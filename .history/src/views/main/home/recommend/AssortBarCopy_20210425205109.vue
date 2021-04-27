<template>
  <div>
    <ul class="assort-wrap p-spacing flex">
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
  import { ref, reactive, onMounted } from 'vue';
  import { useStore } from 'vuex';  
  import { RootState } from '@/store/types'
  import LeftDropDown from './catway/LeftDropDown.vue'

  export default {
    components: {LeftDropDown},
    setup(props, context) {
    }
  }
</script>

<style lang="scss" scoped>
  .assort-wrap {
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 1.296053rem;
  }
</style>