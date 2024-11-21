<template>
  <section v-editable="blok">
    <h2 class="sectionTitle text-blue-700 text-2xl">
      <span class="sectionTitle_outline">{{ blok?.content.sectionTitle1 }}</span
      ><span>{{ blok?.content.sectionTitle2 }}</span>
    </h2>
    <div>{{ blok?.content.sectionContent }}</div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { required: true, type: Object },
});
</script>

<style scoped></style>
