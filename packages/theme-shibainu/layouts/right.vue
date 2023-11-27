<script setup lang="ts">
import Background from '../assets/page-9.vue'
</script>

<template>
  <div class="kolibry-layout default-4">
    <div class="pl-[30%] text-right p-5">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.kolibry-layout.default-4 {
  color: #EBEEF2;
}
</style>
