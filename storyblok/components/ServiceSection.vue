<template>
  <section v-editable="blok">
    <!-- Only render the services that are not undefined -->
    <Service
      v-for="(service, index) in blok.servicesRef"
      :key="service._uid"
      :blok="service"
      :index="index"
    />
  </section>
</template>

<script setup lang="ts">
import Service from '~/components/LazyService.vue';

// accept blok as prop
const props = defineProps({
  blok: { required: true, type: Object },
});
</script>

<style scoped></style>
