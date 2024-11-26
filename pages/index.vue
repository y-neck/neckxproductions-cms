<template>
  <div>
    <!-- <pre>{{ story }}</pre> -->
    <Hero
      v-if="story"
      :blok="story.content"
      class="block sticky w-full top-0 -z-10"
    />
    <div id="content-wrapper" class="bg-background">
      <div
        id="header-section"
        class="translate-y-[-72px] max-md:translate-y-[-32px] z-20"
      >
        <div
          id="header-xIcon-Container"
          class="flex justify-center items-center translate-y-[32px] max-md:translate-y-[0px]"
        >
          <NuxtImg
            id="header-xIcon"
            role="img"
            aria-label="xIcon"
            src="https://a.storyblok.com/f/310287/1850x1668/d7b1985a56/x-icon.webp/m/"
            alt="x-icon, dekorativ"
            class="w-[6rem] max-md:w-[4rem] self-center pointer-events-none"
            loading="lazy"
          />
        </div>
        <Header />
      </div>
      <StoryblokComponent v-if="story" :blok="story.content" class="z-20" />
      <section id="contact" class="flex flex-col gap-8 mx-16">
        <h2 class="sectionTitle">
          <span class="sectionTitle_outline">Kon</span>
          <span>takt</span>
        </h2>
        <ContactForm />
      </section>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'neckXproductions //',
  ogTitle: 'Home' /* Title of page without branding */,
  ogSiteName: 'neckXproductions' /* Overall site name */,
  ogType: 'website' /* 'website' | 'article' | 'book' | 'profile' */,
  description:
    'Herzlich willkommen auf neckXproductions! Ich kümmere mich um deine Videoprojekte und um deine Website!',
  ogDescription:
    'Herzlich willkommen auf neckXproductions! Ich kümmere mich um deine Videoprojekte und um deine Website!',
  creator: '©neckXproductions',
  robots: 'index',
  ogImage:
    'https://a.storyblok.com/f/310287/1850x1668/d7b1985a56/x-icon.webp' /* Image of page when sharing */,
}); /* https://nuxt.com/docs/api/composables/use-seo-meta */

import Hero from '~/storyblok/components/Hero.vue';
import Header from '~/components/Header.vue';
import ContactForm from '~/components/LazyContactForm.vue';
import Footer from '~/components/LazyFooter.vue';

const config = useRuntimeConfig();
const story = await useAsyncStoryblok('home', {
  version: config.public.storyblok_version,
  resolve_relations: 'ServiceSection.servicesRef',
}); /* Fetch data from Storyblok */
console.log(story.value);
</script>

<style scoped></style>
