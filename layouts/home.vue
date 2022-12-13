<template>
  <div
    class="grid grid-cols-[40px_1fr_40px] w-full relative bg-black p-0 m-0
      lg:grid-cols-[140px_1fr_123px]
    ">
    <!-- Fixed Top Right -->
    <a class="text-[13.15px] font-extrabold fixed top-[20px] right-2 z-[1000] text-white mix-blend-difference hidden
        lg:flex lg:right-[22px] cursor-pointer
      ">
      <h4>Cart 0</h4>
    </a>
    <!-- Hero Image -->
    <div class="w-[calc(100vw+8rem)] h-[calc(100vh+8rem)] absolute left-0 bg-cover bg-no-repeat z-0 max-w-full bg-[right_-100px_top_50px] max-h-[100vh]
    lg:h-[calc(100vh+95px)] lg:w-[calc(100vw+95px)] lg:bg-[center_top_-95px]
     "
      :style="{ 'background-image': `url('./hero-bg.webp')` }" />
    <!-- Left Col -->
    <div class="w-full h-full row-start-1 row-span-3 col-span-1 col-start-1 z-20 relative mix-blend-difference text-white">
      <nav-left />
      <div class="right-0 top-0 w-[6px] h-full bg-white absolute" />
    </div>
    <!-- Fixed Top, LG: Row 1 Span 2 -->
    <div class="fixed top-0 left-0 w-full lg:relative lg:col-span-2 lg:col-start-2 z-[1000] mix-blend-difference lg:invert">
      <nav-top />
    </div>
    <!-- Middle Col -->
    <slot class="z-20 relative mix-blend-difference col-span-1 col-start-2 row-span-3 row-start-1 lg:row-start-2 bg-black w-full" />
    <!-- Right Col -->
    <div class="w-full h-full flex z-20 mix-blend-difference col-span-1 col-start-3 row-span-3 row-start-1 relative
      lg:row-start-2  lg:row-span-2
     ">
      <div class="left-0 w-[2px]  bg-white top-0 absolute mt-[70px] h-[calc(100%-70px)]
      lg:h-[calc(100%-20px)] lg:mt-[20px]
      "/>
    </div>
    <!-- Footer section -->
    <div class="w-full h-[100vh] relative flex z-10 col-span-3 col-start-1 row-span-1 row-start-3">
      <div class="w-full h-full left-0 absolute z-0 bg-no-repeat bg-cover flex items-end bg-center" :style="{ 'background-image': `url('./footer-image.jpg')` }">
        <p class="pb-[60px] text-center w-full mix-blend-difference text-[12.15px] font-extrabold text-white
        lg:pl-[18vw] lg:text-left
        ">FILM BY HANS NEUMANN AND BASIL FAUCIER</p>
      </div>
    </div>
    <!-- Footer Menu -->
    <app-footer class="col-span-3 col-start-1 row-span-1 row-start-4 relative z-[1000]"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
/*
Layout transition animation
https://nuxt.com/docs/getting-started/transitions
*/

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
