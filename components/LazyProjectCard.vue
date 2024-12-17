<template>
  <!-- <pre>{{ blok }}</pre> -->
  <NuxtLink :to="`${blok?.full_slug}`">
    <div class="project-card-container aspect-video">
      <div
        class="project-card card-tile h-full cursor-pointer relative overflow-scroll bg-accent border-2 border-primary rounded-lg"
      >
        <NuxtImg
          :src="`${blok?.content.projectImg?.filename}/m/smart`"
          :alt="`${blok?.content.projectImg?.alt}`"
          loading="lazy"
          class="project-img w-full h-full aspect-video object-cover z-[-10]"
        />
        <div
          class="sectionTitle z-10 text-sm font-semibold text-center max-h-fit p-6 absolute bottom-0 left-0 w-full bg-background bg-opacity-50 text-decoration-none hover:underline decoration-accent"
        >
          {{ blok?.content.projectTitle }}
        </div>
      </div>
    </div></NuxtLink
  >
</template>

<script setup lang="ts">
import { LazyProjectCard } from '#build/components';

const props = defineProps({
  blok: { required: true, type: Object },
  index: {
    required: true,
    type: Number,
  },
  slug: String,
});

// DEBUG:
// console.log('ProjectCard.vue: ', props.blok); // Check if `blok` data is available
// console.log('Resolved slug for ProjectCard.vue: ', props.blok.full_slug);
</script>

<style scoped></style>
