import { defineStore } from 'pinia'


class CartsStore {

  cart = ref < Object || undefined>(undefined);

  getCart = async () => {
    const { data } = await useFetch("http://127.0.0.1:8000/api" + `/cart/`, {
      lazy: true,
      params: {
        format: "json",
      },
      
    });
    cart.value = data;

    return data;
  };

}

export const useCartsStore = defineStore('cart', () => new CartsStore());