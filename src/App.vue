<template>
  <div ref="root"></div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import StarMap from './lib/StarMap';

export default {
  setup() {
    const root = ref(null);

    onMounted(() => {
      new StarMap(root.value);
    });

    return {
      root,
    };
  },
};
</script>

<style>
body {
  background: rgb(7, 4, 25);
  color: white;
}
</style>
