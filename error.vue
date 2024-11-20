<template>
  <div>
    <Header />
    <main class="flex flex-col gap-8">
      <h2 class="sectionTitle">Das ist gerade nicht passiert.</h2>
      <h2 class="sectionTitle_outline">Du hast nichts gesehen...</h2>
      <section class="flex flex-col gap-8 justify-center items-center">
        <h1 class="sectionTitle_outline font-bold text-[10rem] text-accent">
          {{ error?.statusCode }}
        </h1>
        <img
          :src="`https://http.cat/${error?.statusCode}`"
          alt="`https.cat-${error.statusCode}`"
          class="w-1/4 max-h-[300px] fit aspect-auto"
        />
        <NuxtLink
          to="/"
          class="sectionTitle hover:underline hover:decoration-accent transition-all duration-300"
          >Ganz schnell zurück zur Startseite</NuxtLink
        >
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
