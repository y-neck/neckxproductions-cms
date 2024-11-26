<template>
  <!-- <pre>{{ story }}</pre> -->
  <div>
    <Header />
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
      class="pb-8"
      preload
    />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: ' projekte // neckXproductions',
  ogTitle: 'Projektübersicht' /* Title of page without branding */,
  ogSiteName: 'neckXproductions' /* Overall site name */,
  ogType: 'website' /* 'website' | 'article' | 'book' | 'profile' */,
  description:
    'Hier findest du eine Auswahl von Projekten, welche ich bereits erfolgreich durchführen durfte.',
  ogDescription:
    'Hier findest du eine Auswahl von Projekten, welche ich bereits erfolgreich durchführen durfte.',
  creator: '©neckXproductions',
  robots: 'index, follow',
  ogImage:
    'https://a.storyblok.com/f/310287/1850x1668/d7b1985a56/x-icon.webp' /* Image of page when sharing */,
}); /* https://nuxt.com/docs/api/composables/use-seo-meta */

import Header from '~/components/Header.vue';
import Footer from '~/components/LazyFooter.vue';

const config = useRuntimeConfig();
const story = await useAsyncStoryblok('project-overview', {
  version: config.public.storyblok_version,
  resolve_relations: 'ProjectSection.projectRef',
}); /* Fetch data from Storyblok */
// DEBUG:
console.log(story.value);
</script>

<style scoped></style>
