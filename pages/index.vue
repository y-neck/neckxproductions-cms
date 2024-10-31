<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const story = await useAsyncStoryblok('home', {
  version: config.public.storyblok_version,
}); /* Fetch data from Storyblok */
console.log(story.value);
</script>

<style scoped></style>
