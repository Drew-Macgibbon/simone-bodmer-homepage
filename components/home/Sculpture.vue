<template>
  <div 
    :class="props.number % 2 !== 0
      ? 'flex flex-col lg:flex-row justify-center items-center lg:my-[5vh] lg:gap-6 text-white w-[90%] mx-auto mb-[10vh]'
      : 'flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-6 lg:my-[5vh] text-white w-[90%] mx-auto mb-[10vh]'"
  >
    <h1 class="text-[39px] mb-2 lg:mb-8"> {{ props.number }} </h1>
    <nuxt-img
      src="/sculptures/sculpture1.png"
      :alt="props.title + 'sculpture'"
      class="max-h-[80vh] w-auto aspect-auto js-show-on-scroll mb-2 lg:mb-8 opacity-0"
      quality="80"
      sizes="sm:100vw md:80vw lg:600px"
      />
    <div class="flex flex-col leading-none text-[12.15px] min-w-[120px] text-center gap-1 lg:gap-0 lg:text-left">
      <a href="">
        <Icon name="material-symbols:play-arrow-rounded" class="mr-1" />
        {{ props.title }},
      </a>
      <p> {{ props.year }} </p>
      <p>{{ props.dimensions }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  }
})

onMounted(() => {
  const callback = (entries: Array<IntersectionObserverEntry>) => {
    
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn')
      } else {
        // entry.target.classList.remove('animate-fadeIn')
      }
    })
  }

  const observer = new IntersectionObserver(callback)

  const targets = document.querySelectorAll('.js-show-on-scroll')
  targets.forEach((target) => {
    observer.observe(target)
  })
})


</script>
<style >

</style>