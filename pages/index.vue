<template>
  <div>
    <!-- Import first component -->
    <Hero v-if="story" :blok="story.content" />
    <!-- <pre>{{ story }}</pre> -->
    <h1>Home</h1>
  </div>
</template>

<script setup lang="ts">
import Hero from '~/Storyblok/components/Hero.vue';
import Header from '~/components/Header.vue';

const config = useRuntimeConfig();
const story = await useAsyncStoryblok('home', {
  version: config.public.storyblok_version,
}); /* Fetch data from Storyblok */
console.log(story.value);
</script>

<style scoped></style>
