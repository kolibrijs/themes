<script setup lang="ts">
import Background from '../assets/page-14.vue'
</script>

<template>
  <div class="kolibry-layout section-3 dark grid">
    <div class="my-auto w-full text-center">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style lang="postcss">
.kolibry-layout.section-3 {
  color: #EBEEF2;

  h1 {
    font-size: 3em;
  }
}
</style>
