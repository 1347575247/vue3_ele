<template>
  <div>
    <my-body></my-body>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyBody from './views/body/Body.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyBody
  }
})
</script>

<style>

</style>
