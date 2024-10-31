<script setup>
const props = defineProps({
  blok: { required: true, type: Object },
});
console.log(props.blok);
</script>

<template>
  <main v-editable="blok">
    <!-- Connection to Storyblok Preview-->
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <!-- Fetch all bloks/components -->
  </main>
</template>
