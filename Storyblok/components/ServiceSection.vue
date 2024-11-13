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
import { ref, onMounted } from 'vue';
import Service from '~/components/Service.vue';

// accept blok as prop
const props = defineProps({
  blok: { required: true, type: Object },
});

// const config = useRuntimeConfig();
// const services = ref([]); // This will hold the actual service objects

// // Resolve the service references (servicesRef) into actual service data
// onMounted(async () => {
//   const story = await useAsyncStoryblok('home', {
//     version: config.public.storyblok_version,
//   });

//   // Check if story is successfully retrieved
//   console.log('Home story:', story.value);

//   const serviceSection = story.value?.content?.body.find(
//     (blok) => blok.component === 'serviceSection'
//   );

//   if (serviceSection) {
//     const servicePromises = serviceSection.servicesRef.map(async (uuid) => {
//       try {
//         const serviceStory = await useAsyncStoryblok(`service/${uuid}`, {
//           version: config.public.storyblok_version,
//         });
//         return serviceStory.value?.content || undefined;
//       } catch (error) {
//         console.error(`Failed to fetch service with UUID ${uuid}:`, error);
//         return undefined;
//       }
//     });

//     const resolvedServices = await Promise.all(servicePromises);
//     services.value = resolvedServices.filter(
//       (service) => service !== undefined
//     );

//     console.log('Resolved services:', services.value);
//   } else {
//     console.warn('No serviceSection found in the home story content.');
//   }
// });
</script>

<style scoped></style>
