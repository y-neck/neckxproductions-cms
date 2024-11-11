<template>
  <div v-editable="blok" class="flex flex-col">
    <span
      v-if="claimOutline"
      class="sectionTitle sectionTitle_outline text-xl"
      >{{ claimOutline }}</span
    >
    <span v-if="claimText" class="sectionTitle text-xl">{{ claimText }}</span>
  </div>
</template>

<script setup lang="ts">
// Extract the `blok` prop
const props = defineProps({
  blok: { type: Object },
});

// Access claimText and claimOutline from props.blok
const claimText = props.blok?.claimText;
const claimOutline = props.blok?.claimOutline;

// Debugging logs
console.log(
  'Claim.vue: ',
  props.blok,
  claimOutline ? claimOutline : 'No claim outline',
  claimText ? claimText : 'No claim text'
);
</script>

<style scoped></style>
