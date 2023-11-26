<script setup lang="ts">
import Background from '../assets/page-3.vue'
</script>

<template>
  <div class="kolibri-layout section section-1 grid">
    <div class="my-auto w-full px-10 pt-15">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.kolibri-layout.section-1 {
  color: #EBEEF2;
}
</style>
