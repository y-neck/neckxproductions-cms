<template>
  <!-- <pre>{{ story }}</pre> -->
  <div>
    <Header />
    <StoryblokComponent v-if="story" :blok="story.content" class="pb-8" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

const config = useRuntimeConfig();
const story = await useAsyncStoryblok('project-overview', {
  version: config.public.storyblok_version,
  resolve_relations: 'ProjectSection.projectRef',
}); /* Fetch data from Storyblok */
console.log(story.value);
</script>

<style scoped></style>
