<template>
  <ProductsProductBox v-if="!pending && data.results" v-for="(product, index) in data.results" :key="product.id" :title="product.title" :price="product.price" :image="product.image" @addToCart="addToCart(product)" />
</template>

<script  setup>
  const config = useRuntimeConfig()

const { data, pending } = await useFetch(`/menu`, {
  lazy: true,
  baseURL: config.apiBasePath,
  params: {
    format: "json",
  },
});
</script>

<style>

</style>