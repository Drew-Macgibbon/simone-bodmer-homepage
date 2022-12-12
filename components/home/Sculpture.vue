<template>
  <div class="flex flex-row justify-center items-center h-[100vh] w-full text-white" :style="props.number % 2 === 0 ? { 'flex-direction': 'row-reverse' } : null">
    <h1 class="h-full top-0 text-[39px]"> {{ props.number }} </h1>
    <img :src="props.image" alt="sculpture" class="w-auto h-full">
    <div class="flex flex-col leading-none text-[12px]">
      <a href="">{{ props.title }}</a>
      <p> {{ props.year }} </p>
      <p>{{ props.dimensions }}</p>
    </div>
  </div>
</template>

<script setup>

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
  image: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  }
})

console.log('sdsf', props.number % 2)

</script>
<style >
  
</style>