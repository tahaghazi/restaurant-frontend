<template>
  <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div class="flex items-end justify-end h-56 w-full bg-cover" :style="`    background-position: center;background-image: url('${image}');`">
      <button class="p-2 rounded-full bg-primary text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500" @click="emit('addToCart')">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase" v-text="title"></h3>
      <span class="text-gray-500 mt-2 font-medium text-primary">${{ price }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  price: Number,
  image: String,
});
const emit = defineEmits(["addToCart"]);
</script>

<style></style>
