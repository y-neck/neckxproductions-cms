<template>
  <section
    v-editable="blok"
    class="flex flex-col md:flex-row gap-8"
  >
    <div
      class="about-img-container overflow-hidden skew-x-[-30deg] mx-[-60px] min-w-[40%]"
    >
      <img
        id="about-img"
        class="skew-x-[30deg] w-full h-full object-cover relative object-left-top overflow-hidden min-w-[40%] pl-16"
        v-if="sectionImage"
        :src="`${sectionImage?.filename}/m/smart`"
        :alt="sectionImage.alt"
      />
    </div>
    <div class="intro-text min-w-[40%] flex flex-col gap-8 md:ml-16">
      <span id="intro-title" class="text-md">{{ introTitle }}</span>
      <p id="intro-text" class="">{{ introText }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object },
});

// Access claimText and claimOutline from props.blok
const sectionImage = props.blok?.sectionImage;
const introTitle = props.blok?.introTitle;
const introText = props.blok?.introText;

// Debugging logs
console.log('PageIntro.vue: ', props.blok);
</script>

<style scoped></style>
