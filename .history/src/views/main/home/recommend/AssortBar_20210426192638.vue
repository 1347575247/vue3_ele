<template>
  <div>
    <ul class="assort-wrap p-spacing flex">
      <li class="assort-item" @click="chooseCatDefault">
        <span>销量最高</span>
        <i class="iconfont icon-xiala"></i>
      </li>
      <li class="assort-item">
        <router-link to="/nearest">
          <span>距离最近</span>
          <i class="iconfont"></i>
        </router-link>
      </li>
      <li class="assort-item">
        <span>销量最高</span>
        <i class="iconfont"></i>
      </li>
      <li class="assort-item" @click="chooseFilterDefault"> 
        <span>筛选</span>
        <i class="iconfont icon-xiala"></i>
      </li>
    </ul>

    <!-- 粘性下拉菜单 -->
    <assort-bar-copy></assort-bar-copy>
    <!-- 左侧下拉菜单 -->
    <left-drop-down></left-drop-down>
    <!-- 筛选按钮下拉菜单 -->
  </div>
</template>

<script lang='ts'>
  import { ref, reactive, onMounted, provide } from 'vue';
  import { useStore } from 'vuex';  
  import { RootState } from '@/store/types'
  import LeftDropDown from './catway/LeftDropDown.vue'
  // 引入copy组件，用来做粘性布局
  import AssortBarCopy from './AssortBarCopy.vue'

  export default {
    components: {LeftDropDown, AssortBarCopy},
    setup(props, context) {
      let carBarOffsetTop = 0
      let isLeftListShow = ref(false)
      let store = useStore<RootState>()
      onMounted(() => {
        const catBar = document.getElementsByClassName('assort-wrap')[0] as HTMLElement

        carBarOffsetTop = catBar.offsetTop

        store.commit('initOffsetTop', carBarOffsetTop)

      })

      // 选择分类菜单
      const chooseCatDefault = (e: Event) => {
        // 让侧遍选择列表展示或消失
        isLeftListShow.value = !isLeftListShow.value

        // 让滚动条滚动到一定位置
        window.scrollTo({left:0, top:600})
        
      }

      // 选择筛选条件
      const chooseFilterDefault = (e: Event) => {

      }

      provide('isShow', isLeftListShow)

      return {
        chooseCatDefault
      }
    }
  }
</script>

<style lang="scss" scoped>
  .assort-wrap {
    justify-content: space-between;
    padding: 0.235789rem 0.394737rem;
  }
</style>