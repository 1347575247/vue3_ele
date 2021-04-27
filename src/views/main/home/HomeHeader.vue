<template>
  <div>
    <base-header>
      <template v-slot:left>
        <div class="location">
           <span class="iconfont icon-iconlocation"></span>
           <span class="address t_ellipsis">深圳大学222222222</span>
           <i class="iconfont icon-xiala"></i>
        </div>
      </template>
      <template v-slot:bottom>
        <a href="#" class="search-box">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索饿了么商家、商品名称</span>
        </a>
      </template>
    </base-header>
    <sticky-header></sticky-header>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import BaseHeader from '@/components/header/Header.vue';
  import StickyHeader from './StickyBar.vue';
  export default {
    components: {BaseHeader, StickyHeader},
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
  .location {
    color: #fff;
    width: 100%;
    .address {
      margin-left: 0.052632rem;
      display: inline-block;
      max-width: 80%;
    }
    >span {
      font-size: 0.473684rem;
      font-weight:700;
      vertical-align: middle;
    }
    i {
      margin-left: 0.105263rem;
      font-size: 0.263158rem;
      vertical-align: middle;
    }
  }

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