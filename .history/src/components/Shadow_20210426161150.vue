<template>
  <div class="shadow-box" @click="destroy">
  </div>
</template>

<script lang='ts'>
  import { ref, reactive, onMounted, provide, onUnmounted } from 'vue'
  import {store} from '@/utils/store'

  export default {
    components: {},
    setup(props, context) {
      onMounted(() => {
        store.state.inShadow = true
        console.log("Shadow onMounted...")
      })

      onUnmounted(() => {
        store.state.inShadow = false
        console.log("Shadow onUnMounted...")
      })

      const destroy = () => {
        store.commit('shadowClick', true)
      }

      return {
        destroy,
        store
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