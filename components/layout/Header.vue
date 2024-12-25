<template>
  <header class="bg-white pb-3">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="w-full text-gray-600 md:flex md:items-center">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
          </svg>
          <span class="mx-1 text-sm">NY</span>
        </div>
        <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
          Zid Cafe
        </div>
        <div class="flex items-center justify-end w-full space-x-2">
          <NuxtLink to="/cart" class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </NuxtLink>

          <div class="flex">
            <NuxtLink to="/login" v-if="status != 'authenticated'" type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      <nav class="hidden sm:flex sm:justify-center sm:items-center mt-4">
        <div class="flex flex-col sm:flex-row">
          <NuxtLink class="mt-3 text-gray-600 hover:text-primary sm:mx-3 sm:mt-0" to="/">Home</NuxtLink>
          <NuxtLink class="mt-3 text-gray-600 hover:text-primary sm:mx-3 sm:mt-0" to="/cart">Cart</NuxtLink>
          <a class="mt-3 text-gray-600 hover:text-primary sm:mx-3 sm:mt-0" href="#">About</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { status } = useAuth();
</script>

<style></style>
