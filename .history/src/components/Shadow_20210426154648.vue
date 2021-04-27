<template>
  <div class="shadow-box" @click="back">
  </div>
</template>

<script lang='ts'>
  import { ref, reactive, onMounted, provide, onUnmounted } from 'vue';
  import router from '@/router/index'
  import { RootState } from '@/store/types'
  import { useStore } from 'vuex'

  export default {
    components: {},
    setup(props, context) {
      const store = useStore<RootState>()
      onMounted(() => {
        store.state.inShadow = true
        console.log("Shadow onMounted...")
      })

      onUnmounted(() => {
        store.state.inShadow = false
        console.log("Shadow onUnMounted...")
      })

      const back = () => {

        console.log(router)
        router.replace("/home")
      }

      return {
        back
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