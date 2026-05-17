import { signal, computed } from "@preact/signals";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const cartItems = signal<CartItem[]>([]);
export const cartOpen = signal(false);
export const authModalOpen = signal(false);

export const cartCount = computed(() => cartItems.value.length);

export const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price, 0)
);

export function addToCart(item: CartItem) {
  const exists = cartItems.value.find((i) => i.id === item.id);
  if (!exists) {
    cartItems.value = [...cartItems.value, item];
  }
  cartOpen.value = true;
}

export function removeFromCart(id: string) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
}
