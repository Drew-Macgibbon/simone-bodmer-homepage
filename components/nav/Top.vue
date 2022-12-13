<template>
  <div class="max-w-full relative top-0 left-0 pl-2 pr-3 py-[12px]
       bg-black text-white lg:bg-transparent lg:mix-blend-difference lg:ml-4
      ">
      <div
      class="h-[26px] flex lg:justify-start justify-between items-center overflow-hidden transition-all duration-600 ease-in-out"
      ref="topNav"
    >
      <div class="lg:hidden">
        <Icon name="cil:hamburger-menu" class="text-[20px]"/>
      </div>
      <AppLogo class="h-[16px] lg:pl-[3.5vw] invert lg:invert-0"/>
      <div class=" lg:hidden">
        <Icon name="ri:shopping-cart-line" class="text-[20px]"/>
      </div>
    </div>
    <div class="absolute bottom-0 w-[94%] h-[2px] bg-white left-0 right-0 mx-auto 
      lg:invert lg:w-full
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
<style lang="">
  
</style>