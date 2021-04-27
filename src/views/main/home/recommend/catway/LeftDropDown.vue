<template>
  <div v-if='isShow'>
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
    <shadow></shadow>
  </div>
</template>

<script>
  import { ref, reactive, inject } from 'vue';
  import Shadow from '@/components/Shadow.vue'
  export default {
    components: {Shadow},
    setup(props, context) {
      let isShow = inject('isShow', false)
      return {
        isShow
      }
    }
  }
</script>

<style lang="scss" scoped>
  .choose-box {
    position: fixed;
    top: 2.417105rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    width: 100%;
    z-index: 4;
    li {
      padding:0.605263rem 0 0 0.473684rem;
      width: 100%;
    }
    padding-bottom: 0.710526rem;
  }
</style>