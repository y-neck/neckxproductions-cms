<template>
  <div v-editable="blok">
    <Header />
    <img
      :src="`${blok?.content.projectImg?.filename}/m/smart`"
      :alt="`${blok?.content.projectImg?.alt} || Project image`"
      loading="lazy"
      class="w-full h-[250px] aspect-video object-cover"
    />
    <main class="flex flex-col gap-8 my-8">
      <NuxtLink
        to="/project-overview"
        class="text-decoration-none hover:underline hover:decoration-accent"
        >← Zurück zur Projektübersicht</NuxtLink
      >
      <article class="flex flex-col gap-8">
        <h1 class="text-lg font-bold" id="project-title">
          {{ blok?.content.projectTitle }}
        </h1>
        <MDC :value="blok?.content.projectDescription" tag="article" />
        <div
          v-if="blok?.content.mediaElement"
          class="media-element-iframe aspect-video object-fit"
          v-html="blok?.content.mediaElement"
        ></div>
        <MDC :value="blok?.content.Reference" />
      </article>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import { useRoute } from 'nuxt/app';

// Get the slug from the route
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
const story = await useAsyncStoryblok(`${slug}`, {
  version: config.public.storyblok_version,
});

// Resolve story to blok
console.log(`${slug} story: `, story?.value);
const blok = story?.value;
console.log('blok: ', blok);
</script>

<style scoped>
iframe {
  @apply w-full h-auto aspect-video object-cover;
}

li {
  @apply list-disc;
}
h2 {
  @apply text-lg hover:underline decoration-accent;
}
</style>
