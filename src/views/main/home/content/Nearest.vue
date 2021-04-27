<template>
  <div class="p-spacing">
    <good-list></good-list>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import GoodList from './GoodList.vue'

  export default {
    components: {GoodList},
    setup(props, context) {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>