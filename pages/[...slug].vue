<template>
  <div v-editable="blok">
    <Header />
    <img
      :src="`${blok?.projectImg?.filename}/m/smart`"
      :alt="`${blok?.projectImg?.alt} || Project image`"
      loading="lazy"
      class="w-full h-[250px] aspect-video object-cover"
    />
    <main>
      <NuxtLink
        to="/project-overview"
        class="text-decoration-none hover:underline hover:decoration-accent"
        >← Zurück zur Projektübersicht</NuxtLink
      >
      <h1 class="text-lg font-bold">{{ blok?.projectTitle }}</h1>
      <div v-html="resolvedRichText" class="prose"></div>
      <span>{{ resolvedReference }}</span>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import { useRoute } from 'nuxt/app';

// Get the slug from the route
// const slug = useRoute().params.slug;
const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/') // Join array parts with '/'
  : route.params.slug;
if (!slug) {
  console.error('Slug is not defined');
  throw new Error('Slug is not defined');
}

// Fetch the content for the project based on the slug
const config = useRuntimeConfig();
const story = await useAsyncStoryblok(`projects/${slug}`, {
  version: config.public.storyblok_version,
});

console.log(`${slug} story: `, story.value);
const blok = story.value?.content;
console.log('blok: ', blok);

const resolvedRichText = computed(() =>
  renderRichText(blok?.projectDescription)
);
const resolvedReference = computed(() => renderRichText(blok?.Reference));
</script>

<style scoped></style>
