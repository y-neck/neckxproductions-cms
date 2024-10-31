<template>
  <section v-editable="blok">
    <p class="text-blue-700 text-2xl">{{ blok.text }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: { required: true, type: Object },
});
</script>
