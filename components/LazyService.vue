<template>
  <!--   {{ blok }} -->
  <div
    :class="{
      service: true,
      'even-style': isEven,
      'odd-style': !isEven,
    }"
  >
    <div v-if="isEven" class="service-container">
      <div class="service_description">
        <h2 class="service-title">
          <span class="sectionTitle sectionTitle_outline">{{
            blok?.content.serviceTitleOutline
          }}</span
          ><span class="sectionTitle">{{ blok?.content.serviceTitle }}</span>
        </h2>
        <p class="service_description_text">
          {{ blok?.content.serviceDescription }}
        </p>
      </div>
      <div class="overflow-wrapper">
        <div class="even-style-service-container self-center">
          <div class="skew-container flex">
            <NuxtImg
              v-if="isImage"
              :src="`${blok?.content.imgVideo?.filename}/m/smart`"
              :alt="`${blok?.content.imgVideo?.alt}`"
              loading="lazy"
              class="h-full aspect-auto object-cover pointer-events-none"
            />
            <div class="externalIframe" v-else-if="blok?.content.iframe">
              <div
                v-html="blok?.content.iframe"
                class="translate-x-[36px]"
              ></div>
            </div>
            <video
              v-else="isVideo"
              class="pointer-events-none w-full h-auto aspect-video object-cover"
              :alt="`${blok?.content.imgVideo?.alt}`"
              height="300px"
              width="100%"
              muted
              autoplay
              loop
              loading="lazy"
            >
              <source :src="`${blok?.content.imgVideo?.filename}`" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isEven" class="service-container">
      <div
        class="overflow-wrapper odd-style-service-container w-1/2 md-max:self-center max-h-[300px]"
      >
        <NuxtImg
          v-if="isImage"
          :src="`${blok?.content.imgVideo?.filename}/m/smart`"
          :alt="`${blok?.content.imgVideo?.alt}`"
          loading="lazy"
          class="h-full aspect-auto object-cover pointer-events-none"
        />

        <div class="externalIframe" v-else-if="blok?.content.iframe">
          <div v-html="blok?.content.iframe" class="translate-x-[-36px]"></div>
        </div>
        <video
          v-else="isVideo"
          class="pointer-events-none w-full h-auto aspect-video object-cover"
          :alt="`${blok?.content.imgVideo?.alt}`"
          height="300px"
          width="100%"
          muted
          autoplay
          loop
          loading="lazy"
        ></video>
      </div>
      <div class="service_description lg:ml-[60px] lg:text-right lg:self-end">
        <h2 class="service-title">
          <span class="sectionTitle sectionTitle_outline">{{
            blok?.content.serviceTitleOutline
          }}</span
          ><span class="sectionTitle">{{ blok?.content.serviceTitle }}</span>
        </h2>
        <p class="service_description_text text-right">
          {{ blok?.content.serviceDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { required: true, type: Object },
  index: {
    required: true,
    type: Number,
  },
});

// Check if the index is even
const isEven = computed(() => props.index % 2 === 0);

// Content checks
const isImage = computed(() =>
  /\.(webp|jpg|png|jpeg)$/i.test(props.blok?.content.imgVideo?.filename)
);
// Check for video files hosted on Storyblok (e.g., .webm)
const isVideo = computed(() =>
  /\.(webm|mp4|mov)$/i.test(props.blok?.content.imgVideo?.filename)
);
// Check for external video links (e.g., YouTube, Vimeo)
const isExternalVideo = computed(() =>
  /(youtube|youtu\.be|vimeo)/i.test(props.blok?.content.imgVideo?.filename)
);
</script>

<style scoped>
.service {
  @apply flex flex-col gap-8 w-full;
}

.overflow-wrapper {
  @apply overflow-hidden w-full flex justify-center;
}

.service-container {
  @apply flex flex-col lg:flex-row gap-8 max-h-fit justify-center;
}

.service_description {
  @apply flex flex-col gap-8 w-full justify-center;
}

.even-style-service-container {
  overflow: hidden;
  width: 80%;
  position: relative;
  transform: skewX(30deg);
  margin-right: -200px;
}

.even-style-service-container .skew-container {
  transform: skewX(-30deg);
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left top;
  display: flex;
  justify-content: right;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  max-height: 300px;
  pointer-events: none;
}

.odd-style-service-container {
  overflow: hidden;
  width: 80%;
  position: relative;
  transform: skewX(-30deg);
  height: 100%;
  margin-left: -60px;
}

.odd-style-service-container img {
  transform: skewX(30deg);
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left top;
  overflow: hidden;
  pointer-events: none;
}
</style>
