<template>
  <div>
    <div class="top-text p-spacing">
      <span>推荐商家</span>
    </div>
    <assort-bar></assort-bar>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import AssortBar from './AssortBar.vue'
  export default {
    components: {AssortBar},
    setup(props, context) {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-text {
    padding-top: 0.394737rem;
    padding-bottom: 0.394737rem;
    height: 1.315789rem;
    text-align: center;
    font-size: 0.421053rem;

    &::before {
      content: "";
      height: 0.026316rem;
      width: 0.526316rem;
      display: inline-block;
      margin: 0 0.263158rem;
      background-color: #999;
      vertical-align:middle;
    }
    &::after {
      content: "";
      height: 0.026316rem;
      width: 0.526316rem;
      display: inline-block;
      margin: 0 0.263158rem;
      background-color: #999;
      vertical-align:middle;
    }
  }
</style>