<template>
  <ProductsProductBox v-if="!pending && data.results" v-for="(product, index) in data.results" :key="product.id" :title="product.title" :price="product.price" :image="product.image" @addToCart="addToCart(product)" />
</template>

<script  setup>
  const config = useRuntimeConfig()
  console.log(config.apiBasePath)

const { data, pending } = await useFetch('http://127.0.0.1:8000/api'  + `/menu`, {
  lazy: true,
  params: {
    format: "json",
  },
});
</script>

<style>

</style>