<template>
  <div class="container mx-auto px-6">
    <div class="h-64 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('/main/pizza.jpg');">
      <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div class="px-10 max-w-xl">
          <h2 class="text-2xl text-white font-semibold">Gourmet Pizzas</h2>
          <p class="mt-2 text-gray-400">Indulge in our hand-tossed pizzas made with fresh, premium ingredients and baked to perfection.</p>
          <button class="flex items-center mt-4 px-3 py-2 bg-primary text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Order Now</span>
            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="md:flex mt-8 md:-mx-4">
      <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('/main/salad.jpg');">
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2 class="text-2xl text-white font-semibold">Fresh Salads</h2>
            <p class="mt-2 text-gray-400">Enjoy our vibrant salads, crafted with farm-fresh vegetables and house-made dressings.</p>
            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
              <span>Explore Menu</span>
              <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style="background-image: url('/main/cake.jpg');">
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2 class="text-2xl text-white font-semibold">Decadent Desserts</h2>
            <p class="mt-2 text-gray-400">Satisfy your sweet tooth with our delightful desserts, from classic cakes to innovative treats.</p>
            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
              <span>View Desserts</span>
              <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <h3 class="text-gray-600 text-2xl font-medium">Menu</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        <Products/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlusSmIcon } from "@vue-hero-icons/outline";
</script>

<style></style>
