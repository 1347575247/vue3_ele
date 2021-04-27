<template>
  <div>
    <div class="navbar-wrap">
      <ul class="navbar flex">
        <li class="navbar-item grow_shrink" v-for="(item,i) in data" :key="i">
          <router-link :to="item.link">
            <i :class="'iconfont icon-'+item.icon"></i>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script lang='ts'>
  import {defineComponent, reactive, toRefs} from 'vue'
  import {NavBarStruct} from '../../types/index'
  export default defineComponent({
    setup() {
      const items: NavBarStruct[]= [
        { 
          icon: 'shouye1',
          title: '首页',
          link: '/home'
        },
        { 
          icon: 'faxian',
          title: '发现',
          link: '/search'
        },
        { 
          icon: 'dingdan',
          title: '订单',
          link: '/order'
        },
        { 
          icon: 'wode',
          title: '我的',
          link: '/mine'
        },
        
      ]
      const navData = reactive({
        data: items
      })
      return {
        ...toRefs(navData)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .navbar{
    background: #fff;
    width: 100%;
    height: 1.394737rem;
    position: fixed;
    bottom:0;
    z-index: 999;
    box-shadow: 0 -1px 0.3px rgb(0,0,0,.05);
    .navbar-item {
      display:block;
      text-align: center;
      color: rgb(129, 129, 129);
      a{ text-decoration:none }
      .router-link-active * {
        color: #0089dc;
      }
      i {
        display: block;
        font-size:0.578947rem;
        margin-top: 0.236842rem;
        margin-bottom: 0.026316rem;
        
      }
    }
  }
</style>