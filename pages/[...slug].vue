<template>
  <div v-editable="blok">
    <Header />
    <NuxtImg
      id="project-image"
      :src="
        `${blok?.content.projectImg?.filename}/m/smart` ||
        'https://a.storyblok.com/f/310287/1920x1440/1e96d3ec17/neckxproductions_banner.png/m/smart'
      "
      :alt="`${blok?.content.projectImg?.alt} Project image (decorative) || Project image`"
      preload
      class="w-full h-[250px] aspect-video object-cover"
    />
    <main class="flex flex-col gap-8 my-8">
      <NuxtLink
        to="/project-overview"
        class="text-decoration-none hover:underline hover:decoration-accent"
        >← Zurück zur Projektübersicht</NuxtLink
      >
      <article class="flex flex-col gap-8">
        <h1
          class="text-lg font-bold leading-10"
          id="project-title"
          tabindex="0"
        >
          {{ blok?.content.projectTitle }}
        </h1>
        <MDC
          v-if="blok?.content.projectDescription"
          :value="blok?.content.projectDescription"
          tag="article"
          class="prose lg:prose-lg prose-invert prose-a:text-accent prose-a:underline prose-li:list-disc max-w-none prose-img:w-full prose-img:h-auto prose-img:aspect-video prose-img:object-cover"
        />
        <iframe
          v-if="blok?.content.videoEmbed"
          :src="`https://www.youtube.com/embed/${blok?.content.videoEmbed}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
          class="w-full"
        ></iframe>
        <MDC
          v-if="blok?.content.Reference"
          :value="blok?.content.Reference"
          class="prose lg:prose-lg prose-invert prose-a:text-accent prose-a:underline prose-li:list-disc max-w-none"
        />
      </article>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/LazyFooter.vue';

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

//SEO
useSeoMeta({
  title: ` ${blok?.content.projectTitle} // neckXproductions`,
  ogTitle: ` ${blok?.content.projectTitle} // neckXproductions` /* Title of page without branding */,
  ogSiteName: 'neckXproductions' /* Overall site name */,
  ogType: 'article' /* 'website' | 'article' | 'book' | 'profile' */,
  description: `${blok.content.projectDescription}` /* Description of page without branding */,
  ogDescription: `${blok.content.projectDescription}` /* Description of page without branding */,
  creator: '©neckXproductions',
  robots: 'index, follow',
  ogImage: `${blok?.content.projectImg?.filename}/m/smart` /* Image of page when sharing */,
}); /* https://nuxt.com/docs/api/composables/use-seo-meta */
</script>

<style scoped>
iframe {
  @apply w-full h-auto aspect-video object-cover !important;
}

li {
  @apply list-disc;
}
h2 {
  @apply text-lg hover:underline decoration-accent;
}
a {
  @apply hover:underline hover:decoration-accent;
}

img :not(#project-image) {
  @apply w-full h-auto;
}
</style>
