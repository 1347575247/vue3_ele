<template>
  <div class="header pink">
    <!-- 头部的左中右 -->
    <ul class="header-top-wrap ">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </ul>
    <!-- 头部的下 -->
    <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.header {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 0.526316rem 0.315789rem 7.5px;
  .header-top-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      margin-left: px;
    }
    
  }
  .bottom {
      margin: 0.368421rem 0 0 0;
  }
}
</style>
