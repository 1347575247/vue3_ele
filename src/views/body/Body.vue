<template>
  <div class="body">
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
  import NavBar from '@/components/navbar/NavBar.vue'
  export default defineComponent({
    components: {
      NavBar
    }
  })
</script>

<style lang="scss" scoped>

</style>