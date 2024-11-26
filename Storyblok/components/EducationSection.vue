<template>
  <section v-editable="blok">
    <h2 class="sectionTitle">
      <span class="sectionTitle_outline">Aus</span><span>bildung</span>
    </h2>
    <div
      id="edu-wrapper my-8"
      class="flex flex-col md:flex-row justify-center md:gap-16"
    >
      <div class="flex flex-col gap-8 items-center">
        <EduCard
          v-for="(edu, index) in blok.educationRef"
          :key="edu?._uid || index"
          :blok="edu"
          :index="index"
        />
      </div>
      <NuxtImg
        v-if="blok?.eduImg"
        :src="`${blok?.eduImg?.filename}/m/smart`"
        :alt="`${blok?.eduImg?.alt} || 'Education image'`"
        loading="lazy"
        class="w-full md:w-1/2 object-cover"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import EduCard from '~/components/LazyEduCard.vue';

const props = defineProps({
  blok: { required: true, type: Object },
});
</script>

<style scoped></style>
