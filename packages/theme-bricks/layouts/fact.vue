<template>
  <div class="kolibry-layout fact">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.kolibry-layout.fact {
  background-image: url("../assets/page-4.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @apply text-center py-15 h-full grid;

  h1 {
    @apply text-6xl leading-15;
  }
}
</style>
