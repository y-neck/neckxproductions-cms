<template>
  <div v-editable="blok">
    <NuxtImg
      v-if="heroImg"
      class="aspect-auto object-cover w-full max-h-[400px]"
      :src="`${heroImg?.filename}/m/smart`"
      :alt="heroImg.alt || 'hero-img'"
      :title="heroImg.title || 'hero-img'"
      preload
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { required: true, type: Object },
});
// Attempt to extract heroImg safely
const heroImg = props.blok?.body?.[0]?.heroImg;

// DEBUG:
console.log('heroImg: ', heroImg);
</script>
