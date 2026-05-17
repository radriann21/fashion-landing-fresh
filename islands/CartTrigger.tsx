import { cartCount, cartOpen } from "@/lib/cart.ts";

export function CartTrigger() {
  return (
    <button
      type="button"
      className="link-accent hover:text-accent transition-colors duration-300 relative"
      onClick={() => cartOpen.value = true}
      aria-label={`Shopping bag with ${cartCount.value} items`}
    >
      Bag ({cartCount.value})
    </button>
  );
}
