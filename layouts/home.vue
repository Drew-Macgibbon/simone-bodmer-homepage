<template>
  <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[140px_1fr_123px] w-full h-full relative bg-black p-0 m-0">
    <h4 class="text-[13.15px] font-extrabold fixed top-[20px] right-[20px] z-30 text-white mix-blend-difference"> Cart 0</h4>
    <div class="w-[100vw] h-[calc(100vh+100px)] absolute left-0 bg-cover -top-[95px] z-0" :style="{ 'background-image': `url('./hero-bg.webp')` }" />
    <div class="w-full h-full row-start-1 row-span-2 col-span-1 col-start-1 z-20 relative mix-blend-difference text-white">
      <nav-left />
      <div class="right-0 top-0 w-[6px] h-full bg-white absolute" />
    </div>
    <nav-top class="col-span-2 col-start-2 z-20 mix-blend-difference" />
    <slot class="z-20 relative mix-blend-difference col-span-1 col-start-2 row-span-2 row-start-2 bg-black" />
    <div class="w-full relative flex z-20 mix-blend-difference col-span-1 col-start-3 row-span-2 row-start-2">
      <div class="left-0 w-[2px] bg-white h-full top-[20px] absolute" />
    </div>
    <div class="w-full h-[100vh] left-0 absolute bottom-[70px] z-0 bg-no-repeat " :style="{ 'background-image': `url('./footer-image.jpg')` }" />
    <app-footer class="col-span-3 col-start-1 row-span-1 row-start-3 z-10"/>
  </div>
</template>

<script>

</script>

<style>
/*
Layout transition animation
https://nuxt.com/docs/getting-started/transitions
*/


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
