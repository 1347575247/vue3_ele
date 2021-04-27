<template>
  <div>
    我的
  </div>
</template>

<script>
  import { ref, reactive, defineComponent } from 'vue';

  export default defineComponent({
    setup(props, context) {
      const featureRef = ref(0);
      const featureState = reactive({ property: 'value' });

      return {
        featureRef,
        featureState
      }
    }
  })
</script>

<style lang="scss" scoped>

</style>