<template>
  <h2 class="sectionTitle">Projekte</h2>
  <div class="grid-wrapper">
    <div
      id="project-grid"
      v-editable="blok"
      class="grid grid-cols-2 gap-x-8 gap-y-6 max-md:grid-cols-1"
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
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';

const props = defineProps({
  blok: { required: true, type: Object },
});
</script>

<style scoped></style>
