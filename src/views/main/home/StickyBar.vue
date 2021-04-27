<template>
  <div>
    <sticky-header>
      <template v-slot:bottom>
        <a href="#" class="search-box">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索饿了么商家、商品名称</span>
        </a>
      </template>
    </sticky-header>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import StickyHeader from '@/components/header/StickyHeader.vue';
  export default {
    components: {StickyHeader},
    setup(props, context) {
      const featureRef = ref(0);
      const featureState = reactive({ property: 'value' });

      return {
        featureRef,
        featureState
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-box {
    display: block;
    width: 100%;
    height: 0.973684rem;
    background-color: #fff;
    color: #999;
    font-family: simsun;
    line-height: 0.973684rem;
    text-align: center;
    text-decoration: none;
    i { font-size: 0.421053rem; }
    span { margin-left: 0.105263rem; }
  }
</style>