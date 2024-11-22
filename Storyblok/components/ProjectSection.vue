<template>
  <h2 class="sectionTitle">
    <span class="sectionTitle_outline">Pro</span><span>jekte</span>
  </h2>

  <Carousel
    id="project-slider"
    v-slot="{ canScrollNext }"
    :class="[
      { 'md:hidden': enableSlider === true },
      'w-full max-w-xs mx-auto flex justify-center items-center',
    ]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(project, index) in blok.projectRef"
        :key="project._uid"
        v-editable="project"
      >
        <ProjectCard :blok="project" :index="index" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext v-if="canScrollNext" />
  </Carousel>

  <div
    id="project-grid"
    v-editable="blok"
    :class="[
      { 'max-md:hidden': enableSlider === true },
      'grid grid-cols-2 gap-x-8 gap-y-6 max-md:grid-cols-1',
    ]"
    role="grid"
  >
    <ProjectCard
      v-for="(project, index) in blok.projectRef"
      :key="project._uid"
      :blok="project"
      :index="index"
      role="gridcell"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const props = defineProps({
  blok: { required: true, type: Object },
});

console.log('ProjectSection.vue props:', props);

// Handle project display
const enableSlider = ref(props.blok?.enableSlider);
</script>

<style scoped></style>
