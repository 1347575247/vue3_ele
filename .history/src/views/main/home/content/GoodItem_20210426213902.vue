<template>
  <div class="good-item">
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
      <div class="star-box">
        <img :src="src" alt="">
        <span class="">5 月售4单</span>
      </div>
      <div class="discount-box">
        <h2>￥0起送 | 满39免配送费 | ￥100/人</h2>
        <span>4.81km | 满62分钟</span>
      </div>
      <div class="cate sm-font">
        名酒坊
      </div>
    </div>
    
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import imgSrc from '@/assets/js/star'

  const data = imgSrc.data
  export default {
    setup(props, context) {
      const src = ref(data)
      return {
        src
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
      padding: 0.131579rem 0 0 0.263158rem;
      .title-box {
        display: flex;
        justify-content: space-between;

        h2 { 
          font-weight: bold;
          font-size:0.394737rem;
        }
        
        // 反馈按钮
        .feedback {
          .iconxuanzekuang { font-size: 0.315789rem; }
          span { vertical-align: middle; }
          span:nth-child(2) {display:inline-block;  margin-top: -0.252632rem; }
        }
      }
      // 星星区域
      .star-box {
        margin-top:0.263158rem;
        img {width:1.447368rem; vertical-align:middle;}
        span {margin-left: 0.157895rem; font-size:.293333rem; opacity: .6;}
      }
      .discount-box {
        width: 100%;
        h2 {
          margin-top:0.263158rem;
        }
      }
      .cate {
        padding: 0.052632rem 0.105263rem;
        width: 1.615789rem;
        font-size: 0.263158rem;
        border: 0.026316rem solid black;
        opacity: .3;
      }
    }
  }
</style>