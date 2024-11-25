<template>
  <div class="flex flex-col items-center w-full justify-center text-center">
    <h3 class="font-bold">{{ blok?.content?.Ausbildung }}</h3>
    <p>{{ blok?.content?.Zusatzinformation }}</p>
    <p>{{ blok?.content?.Zeitraum }}</p>
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.4 28C69.4 38.8 60.7 47.5 49.9 47.5C39.1 47.5 30.4 38.8 30.4 28"
        stroke="#EEEEEE"
        stroke-miterlimit="10"
      />
      <path d="M49.4 47.5V98" stroke="#EEEEEE" stroke-miterlimit="10" />
      <path
        d="M36.2 82.1001L49.2 98.0001"
        stroke="#EEEEEE"
        stroke-miterlimit="10"
      />
      <path
        d="M62.2 82.1001L49.2 98.0001"
        stroke="#EEEEEE"
        stroke-miterlimit="10"
      />
      <path
        d="M49.4 43.9C56.9663 43.9 63.1 37.7663 63.1 30.2C63.1 22.6337 56.9663 16.5 49.4 16.5C41.8337 16.5 35.7 22.6337 35.7 30.2C35.7 37.7663 41.8337 43.9 49.4 43.9Z"
        fill="#EEEEEE"
        stroke="#EEEEEE"
        stroke-miterlimit="10"
      />
      <path d="M49.4 17.2V2" stroke="#EEEEEE" stroke-miterlimit="10" />
    </svg>
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
</script>

<style scoped>
.educationRef:last-child svg {
  display: none;
}
</style>
