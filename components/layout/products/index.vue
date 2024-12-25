<template>
  <ProductsProductBox v-if="data?.results" v-for="(product, index) in data.results.slice(0, 8)" :key="product.id" :title="product.title" :price="product.price" :image="product.image" @addToCart="addToCart(product)" />
</template>

<script setup>
const config = useRuntimeConfig();
const data = await useProxy("/menu/", { method: "GET" }); // Call your custom fetch function
const {
  status,

  token,
} = useAuth();
const addToCart = async (product) => {
  const cartData = await useProxy("/orders/", {
    method: "POST",
    params: {
      format: "json",
    },
    body: {
      menu_item: product.id,
      quantity: 1,
    },
  });

  console.log(cartData);
};

</script>

<style></style>
