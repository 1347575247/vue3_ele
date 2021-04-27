<template>
  <div class="categories">
    <ul class="cate-list" >
      <li class="cate-item" v-for="(item, i) in data" :key="i">
        <a :href="item.link">
          <img :src="item.src" alt="">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
    <div class="special-box">
      <a href="#">
        <div class="special">
          <div class="left">
            <h2>品质套餐</h2>
            <p>搭配齐全吃得好</p>
            <p>立即抢购 ></p>
          </div>
          <a href="#" class="right"><img :src="img_src" alt=""></a>
        </div>
      </a>
    </div>
    <div class="vip-wrap">
      <div href="#" class="vip">
        <img :src="vip_icon" alt="">
        <span>超级会员</span>
        <span>•</span>
        <span>每月享12元红包</span>
        <a href="#">
          <span>立即开通</span>
          <span>></span>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
  import { ref, reactive, toRefs } from 'vue';
  import {CateItem} from '../../../types/index'

  export default {
    setup(props, context) {
      let img_src = ref("https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed")
      let all_img_src = reactive({
        vip_icon: 'https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34'
      })
      const dataList: CateItem[] = [
        {
          src: img_src,
          title: '美食',
          link: '#',
        },
        {
          src: img_src,
          title: '晚餐',
          link: '#',
        },
        {
          src: img_src,
          title: '跑腿代购',
          link: '#',
        },
        {
          src: img_src,
          title: '汉堡披萨',
          link: '#',
        },
        {
          src: img_src,
          title: '地方小吃',
          link: '#',
        },
        {
          src: img_src,
          title: '米粉面馆',
          link: '#',
        },
        {
          src: img_src,
          title: '包子粥店',
          link: '#',
        },
        {
          src: img_src,
          title: '炸鸡炸串',
          link: '#',
        },
      ]
      const featureState = reactive({
        data: dataList
      });

      return {
        ...toRefs(featureState),
        img_src, //测试用，广告图片占位
        ...toRefs(all_img_src)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cate-list {
    display: flex;
    text-align: center;
    flex-flow: wrap;
    .cate-item {
      width: 20%;
      padding: 0.263158rem 0.194737rem;
      p {font-size: 0.105263rem;}
      img { width: 1.210526rem; }

    }
  }
  // 广告区域
  .special-box {
    padding: 0.197368rem 0.315789rem;
    height: 3.157895rem;
    
    .special {
      width: 100%;
      height: 3.105263rem;
      background-image: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
      display: flex;
      justify-content: space-between;
      .left {
        > h2{ font-weight: 700; font-size: 0.421053rem; margin-top:0.394737rem; }
        p{
          &:nth-child(2) { color:#777; margin-top:0.236842rem;  }
          &:nth-child(3) { color:#af8260; margin-top: 0.315789rem; font-weight: 700; font-size: 0.394737rem; }
        }
        h2, p{ padding-left: 0.394737rem; }
      }
    }
  }
  // 充值会员样式
  .vip-wrap {
    padding: 0 0.315789rem;
    margin-top: 0.184211rem;
    .vip {
    
      background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
      img { width: 0.447368rem; }
      span {
        &:nth-child(2) {font-weight: 700; }
      }
      span {margin-left: 0.105263rem;}
      padding:0.294737rem 0.394737rem;
      a { float: right; }
      * { vertical-align: middle; }
    }
  }
  
</style>