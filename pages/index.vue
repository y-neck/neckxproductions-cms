<template>
  <div>
    <!-- <pre>{{ story }}</pre> -->
    <!-- Import first component -->
    <Hero v-if="story" :blok="story.content" class="block sticky top-0 z-1" />
    <div
      id="header-section"
      class="translate-y-[-72px] max-md:translate-y-[-32px] z-10"
    >
      <div
        id="header-xIcon-Container"
        class="flex justify-center items-center translate-y-[32px] max-md:translate-y-[0px]"
      >
        <img
          id="header-xIcon"
          role="img"
          aria-label="xIcon"
          src="https://a.storyblok.com/f/310287/1850x1668/d7b1985a56/x-icon.webp/m/"
          alt="x-icon, dekorativ"
          class="w-[6rem] max-md:w-[4rem] self-center pointer-events-none"
        />
      </div>
      <Header />
    </div>
    <StoryblokComponent v-if="story" :blok="story.content" class="z-10" />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/storyblok/components/Hero.vue';
import Header from '~/storyblok/globals/Header.vue';

const config = useRuntimeConfig();
const story = await useAsyncStoryblok('home', {
  version: config.public.storyblok_version,
}); /* Fetch data from Storyblok */
console.log(story.value);
</script>

<style scoped></style>
