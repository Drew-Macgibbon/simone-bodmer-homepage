<template>
<div class="max-w-full relative top-0 left-0 py-[12px] px-[10px] lg:px-12
       text-black lg:mix-blend-difference glass-bg
      ">
      <div
      class="h-[26px] flex justify-between items-center overflow-hidden transition-all duration-600 ease-in-out w-full"
      ref="topNav"
    >
      <AppLogo class="h-[16px] invert lg:invert-0"/>
      <div>
        <Icon name="ri:shopping-cart-line" class="text-[24px] text-white lg:text-black"/>
      </div>
    </div>
    <div class="absolute bottom-0 h-[4px] bg-white left-0 right-0 mx-auto 
      lg:invert w-full
    "/>
  </div>
</template>

<script setup>

const previousScroll = ref(0)
const topNav = ref(null)


const handleScroll = (event) => {
  if (event.target.scrollingElement.scrollTop > previousScroll.value && window) {
    console.log('scrolling down', topNav.value.style)
    topNav.value.style.height = '0px'
  } else {
    console.log('scrolling up')
    topNav.value.style.height = '30px'
  }
  previousScroll.value = event.target.scrollingElement.scrollTop
}

onMounted(() => {
  console.log('window', window)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


</script>
<style>

.glass-bg {
  background: rgba(2, 76, 98, 0.29);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
}
  
</style>