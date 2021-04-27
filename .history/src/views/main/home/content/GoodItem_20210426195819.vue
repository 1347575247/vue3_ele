<template>
  <div class="good-item pink">
    <div class="img-box red">
      <img src="https://cube.elemecdn.com/d/d1/e777be0b578fabb2e2a50234697fcjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
    </div>
    <div class="desc">
      <div class="title-box">
        <h2>欧也酒汇红酒洋酒行（大运店）</h2>
        <div class="feedback">
          <span class="iconfont iconxuanzekuang"></span>
          <span>...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';

  export default {
    setup(props, context) {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .good-item {
    display: flex;
    height: 3.947368rem;

    .img-box {
      height: 100%;
      width: 18.4%;
      img {
        width: 100%;
      }
    }
    .desc {
      width: auto;
      flex-grow: 1;
      padding: 0.078947rem 0 0 0.263158rem;
      .title-box {
        display: flex;
        justify-content: space-between;
        
        // 反馈按钮
        .feedback {
          .iconxuanzekuang { font-size: 0.315789rem; }
          span { vertical-align: top; }
        }
      }
    }
  }
</style>