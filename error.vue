<template>
  <div>
    <Header />
    <main class="flex flex-col gap-8">
      <h2 class="sectionTitle">Das ist gerade nicht passiert.</h2>
      <h2 class="sectionTitle_outline">Du hast nichts gesehen...</h2>
      <section class="flex flex-col gap-8 justify-center items-center">
        <h1 class="sectionTitle_outline font-bold text-[10rem] text-accent">
          {{ error?.statusCode }}
        </h1>
        <img
          :src="`https://http.cat/${error?.statusCode}`"
          alt="`https.cat-${error.statusCode}`"
          class="w-1/4 max-h-[300px] fit aspect-auto"
        />
        <NuxtLink
          to="/"
          class="sectionTitle hover:underline hover:decoration-accent transition-all duration-300"
          >Ganz schnell zurück zur Startseite</NuxtLink
        >
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/LazyFooter.vue';

import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

//SEO
useSeoMeta({
  title: `Error // neckXproductions`,
  ogTitle: 'Error' /* Title of page without branding */,
  ogSiteName: 'neckXproductions' /* Overall site name */,
  ogType: 'website' /* 'website' | 'article' | 'book' | 'profile' */,
  description:
    'Das hätte unter keinen Umständen passieren dürfen! Schnell zurück!',
  ogDescription:
    'Das hätte unter keinen Umständen passieren dürfen! Schnell zurück!',
  creator: '©neckXproductions',
  robots: 'noindex, nofollow',
  ogImage:
    'https://a.storyblok.com/f/310287/1850x1668/d7b1985a56/x-icon.webp' /* Image of page when sharing */,
}); /* https://nuxt.com/docs/api/composables/use-seo-meta */
</script>
