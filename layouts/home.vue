<template>
  <div
  class="grid grid-cols-[40px_1fr_40px] w-full relative bg-black p-0 m-0
  lg:grid-cols-[140px_1fr_120px]
  ">
    <!--
    Left Col
    1/0/0
    1/0/0
    0/0/0
    -->
    <div class="w-full row-start-1 row-span-2 col-span-1 col-start-1 z-20 relative mix-blend-difference text-white glass-bg">
      <div class="lg:hidden">
        <Icon name="cil:hamburger-menu" class="absolute top-[14px] left-1.5 text-[24px] text-white"/>
    </div>
      <nav-left />
      <div class="right-0 top-0 w-[6px] h-full bg-white absolute" />
    </div>
    <!--
    Top Col
    0/1/1
    0/0/0
    0/0/0
    -->
    <!-- Fixed Top, LG: Row 1 Span 2 -->
    <div class="w-full col-span-2 col-start-2 row-start-1 row-span-1 z-[1000] mix-blend-difference lg:invert">
      <nav-top />
    </div>
    <!--
    Right Col
    0/0/0
    0/0/1
    0/0/1
    -->
    <div class="w-full h-full flex z-20 mix-blend-difference col-span-1 col-start-3 row-span-2 row-start-2 relative glass-bg
    ">
    <div class="left-0 w-[2px] bg-white top-0 h-full
    "/>
  </div>
    <!--
    Middle Col
    0/0/0
    0/1/0
    0/0/0
    -->
    <slot class="z-40 mix-blend-difference bg-black w-full h-[100vh] col-span-1 col-start-2 row-span-3 row-start-1 absolute" />
    <!--
    Footer Col
    0/0/0
    0/0/0
    1/1/0
    -->
    <app-footer class="bottom-0 col-span-2 col-start-1 row-span-1 row-start-3 z-[1000] lg:right-[160px]"/>
  </div>
</template>

<script setup lang="ts">

const sizes = {
  leftWidth: 140,
  rightWidth: 120,
  topHeight: 50,
  bottomHeight: 50,
}

</script>

<style>
/*
Layout transition animation
https://nuxt.com/docs/getting-started/transitions
*/

@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&display=swap');

.big-title {
  font-family: 'Merienda', cursive;
}

a:hover {
  font-style: italic;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
