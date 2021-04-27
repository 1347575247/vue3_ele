<template>
  <div class="good-list">
    <good-item v-for="(item, i) in 20" :key="i"></good-item>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import GoodItem from './GoodItem.vue'

  export default {
    components: {GoodItem},
    setup(props, context) {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>