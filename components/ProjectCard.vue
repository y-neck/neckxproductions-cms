<template>
  <!-- <pre>{{ blok }}</pre> -->
  <div class="project-card-container aspect-video">
    <div
      class="project-card card-tile h-full cursor-pointer relative overflow-scroll bg-accent border-2 border-primary rounded-lg"
    >
      <img
        :src="`${blok?.content.projectImg?.filename}/m/smart`"
        :alt="`${blok?.content.projectImg?.alt}`"
        loading="lazy"
        class="project-img w-full h-full aspect-video object-cover z-[-10]"
      />
      <NuxtLink
        :to="`${blok?.content.slug}`"
        class="sectionTitle z-10 text-sm font-semibold text-center max-h-fit p-6 absolute bottom-0 left-0 w-full bg-background bg-opacity-50 text-decoration-none hover:underline decoration-accent"
        >{{ blok?.content.projectTitle }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { required: true, type: Object },
  index: {
    required: true,
    type: Number,
  },
});

// Log the received props to ensure data is correct
console.log('ProjectCard.vue: ', props.blok); // Check if `blok` data is available
</script>

<style scoped></style>
