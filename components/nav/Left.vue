<template>
  <div class="flex pl-[20px] h-auto leading-none w-full sticky top-[150px] font-semibold">
    <ul class="text-[14.15px] h-auto hidden lg:inline-block">
      <li v-for="page in pages" :key="page.name" class="mb-1.5">
        <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
        <ul v-if="page.children" class="pl-2">
          <li v-for="child in page.children" :key="child.name">
            <NuxtLink :to="{ path: `${page.path =+ child.path}` }">{{ child.name }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>    
  </div>
</template>

<script setup>
const pages = [
  {
    name: 'SHOP',
    path: '/shop',
    children: null
  },
  {
    name: 'Works:',
    path: '/works',
    children: [
      { name: 'Sculpture', path: '/sculpture' },
      { name: 'Furniture', path: '/furniture' },
      { name: 'Interiors', path: '/interiors' },
      { name: 'Permanent', path: '/permanent' },
      { name: 'Works on Paper', path: '/works-on-paper' },
      { name: 'Colaborators', path: '/colaborators' }
    ]
  },
  {
    name: 'ABOUT',
    path: '/about',
    children: [
      { name: 'Contact', path: '/contact' },
      { name: 'Press', path: '/press' }
    ]
  },
  {
    name: 'LIBRARY',
    path: '/library',
    children: null
  },
]
</script>

<style lang="">
  
</style>