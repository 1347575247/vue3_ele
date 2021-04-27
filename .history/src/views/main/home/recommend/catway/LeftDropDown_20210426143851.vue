<template>
  <div v-if='true'>
    <ul class="choose-box">
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
      <li>综合排序</li>
    </ul>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  export default {
    components: {},
    setup(props, context) {

      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .choose-box {
    position: fixed;
    top: 1.717105rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    width: 100%;
    li {
      padding:0.605263rem 0 0 0.473684rem;
      width: 100%;
    }
    padding-bottom: 0.710526rem;
  }
</style>