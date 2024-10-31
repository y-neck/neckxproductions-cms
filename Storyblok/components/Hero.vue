<template>
  <section v-editable="blok">
    <img class="w-full" :src="blok.image.filename" :alt="blok.image.alt" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { required: true, type: Object },
});
</script>
