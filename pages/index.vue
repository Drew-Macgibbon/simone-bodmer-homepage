<template>
  <div class="flex flex-col gap-[20vh] bg-black">
    <HomeHero />
    <home-sculpture  number="1" title="Credenza" dimensions="41 x 56.5 x 13" year="2021" image="/sculptures/sculpture1.png" />
    <home-sculpture  number="2" title="Credenza" dimensions="41 x 56.5 x 13" year="2021" image="/sculptures/sculpture1.png" />
    <home-sculpture  number="3" title="Credenza" dimensions="41 x 56.5 x 13" year="2021" image="/sculptures/sculpture1.png" />
    <home-sculpture  number="4" title="Credenza" dimensions="41 x 56.5 x 13" year="2021" image="/sculptures/sculpture1.png" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)

definePageMeta({
    layout: "home",
});

</script>

<style>
.container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    max-width: 1440px;
    margin: 0 auto;
}

.tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tile:nth-child(1) {
    grid-column: span 4;
    grid-row: span 2;
}

.tile:nth-child(2),
.tile:nth-child(3) {
    grid-column: span 2;
}

.tile:nth-child(4),
.tile:nth-child(5) {
    grid-column: span 3;
}

@media screen and (max-width: 650px) {
    .container {
        display: block;
    }

    .tile {
        margin-bottom: 1rem;
    }
}
</style>
