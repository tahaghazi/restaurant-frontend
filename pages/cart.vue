<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
            <CartItem v-for="item in order_items" :key="item.id" :order_id="item.id" :menu_item="item.menu_item" :ordered="item.ordered" :price="item.price" :quantity="item.quantity" @removeFromCart="remove(item.id)"></CartItem>
          </div>
        </div>

        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">${{ data.total_cost }}</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd class="text-base font-medium text-green-600">-$0</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">5%</dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">${{ (data.total_cost + (data.total_cost * 5 /100),2).toFixed(2) }}</dd>
              </dl>
            </div>

            <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>

            <div class="flex items-center justify-center gap-2">
            <button @click="complete" type="button" class="flex h-[50px] items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black w-full">
          <span><span> Complete </span></span>
        </button>
            </div>
          </div>

          <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <form class="space-y-4">
              <div>
                <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                <input type="text" id="voucher" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
              </div>
              <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CartItem from "~/components/layout/CartItem.vue";
const order_items = ref([])
// Initial data fetch
const fetchData = async () => {
  const data = await useProxy("/cart");
  order_items.value = data.order_items;
  return data;
};

// Fetch cart data
let data = await fetchData();

// Remove item from cart
const remove = async (id: number) => {
  try {
    // Make DELETE request
    await useFetch(`http://127.0.0.1:8000/api/orders/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: useAuth().token,
      },
    });

    // Re-fetch data after removal
    data = await fetchData();
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

const complete = async () => {
  try {
    // Make POST request
await useProxy(`/cart/${data.id}/`, {
      method: "PATCH",
      body:{
        status: "COMPLETED",
      }
     
    });


    navigateTo("/bill/"+data.id);
  } catch (error) {
    console.error("Error completing order:", error);
}}


</script>

<style scoped></style>
