<template>
  <header
    class="flex flex-col md:flex-row bg-background px-16 py-4 justify-center md:justify-between align-center max-md:items-center"
  >
    <NuxtImg
      role="img"
      aria-label="neckXproductions Logo"
      id="header-logo"
      src="https://a.storyblok.com/f/310287/2925x400/82879cfbe9/neckxproductions_white.webp/m/"
      alt="neckXproductions-logo"
      class="h-[36px] w-auto object-fit pointer-events-none"
      loading="lazy"
    />

    <nav class="flex gap-[60px] justify-center items-center md:justify-end">
      <NuxtLink
        v-for="({ navItem, url }, index) in [
          { navItem: 'Home', url: '/' },
          { navItem: 'Portfolio', url: '/about' },
          { navItem: 'Kontakt', url: '/#contact' },
        ]"
        :key="index"
        :to="url"
        class="fontSize-md text-decoration-none hover:underline hover:decoration-accent transition ease-in-out duration-300"
        :aria-label="navItem"
      >
        {{ navItem }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
