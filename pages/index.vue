<template>
  <div class="flex flex-col mb-20 bg-black w-[96%] mx-auto">
    <HomeHero />
    <HomeIntro />
    <home-sculpture v-for="sculpture in sculptures" :key="sculpture.id" :number="Number(sculpture.id)" :title="sculpture.title" :dimensions="sculpture.dimensions" :year="Number(sculpture.year)" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)

const sculptures = [
    { id: 1, title: "Springtime", year: "2021", dimensions: "18.5 x 21.5 x 14" },
    { id: 2, title: "Credenza", year: "2021", dimensions: "41 x 56.5 x 13" },
    { id: 3, title: "Side Tables", year: "2021", dimensions: "21.5 x 13.5 x 14" },
    { id: 4, title: "Cloud Perch", year: "2021", dimensions: "15 H x 16 W x 10 D" },
    { id: 5, title: "Gone Fishing", year: "2021", dimensions: "18.5 x 21.5 x 14" },
    { id: 6, title: "Dinner Party", year: "2021", dimensions: "16 x 8 x 8" },
    { id: 7, title: "Tulip Standing Lamp I", year: "2021", dimensions: "52 x 24 x 21" },
    { id: 8, title: "Tulip Standing Lamp II", year: "2021", dimensions: "64 x 30 x 21" },
    { id: 9, title: "Table Lamp I", year: "2021", dimensions: "22 H x 15 W x 8 D" },
    { id: 10, title: "Table Lamp II", year: "2021", dimensions: "23 H x 12 W 9 D" },
    { id: 11, title: "Soft Option", year: "2021", dimensions: "12 x 36 x 20" },
    { id: 12, title: "Vice Caress", year: "2021", dimensions: "47 x 22 x 14" },
    { id: 13, title: "Star Head", year: "2021", dimensions: "47 x 22 x 14" },
    { id: 14, title: "Chair II", year: "2021", dimensions: "40 H x 20 W x 30 D" },
]

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
