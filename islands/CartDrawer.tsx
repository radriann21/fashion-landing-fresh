import { motion, AnimatePresence } from "motion/react";
import { cartItems, cartTotal, cartOpen, authModalOpen, removeFromCart } from "@/lib/cart.ts";

export function CartDrawer() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const shouldReduceMotion = typeof document !== "undefined"
    ? globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  return (
    <AnimatePresence>
      {cartOpen.value && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-60"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => cartOpen.value = false}
          />

          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-md bg-main-bg border-l border-charcoal/10 z-70 flex flex-col"
            initial={shouldReduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
              <h2 className="text-xs uppercase tracking-[0.25em] text-charcoal font-bold">
                BAG ({cartItems.value.length})
              </h2>
              <button
                type="button"
                className="text-gray-light hover:text-charcoal transition-colors duration-200 text-lg cursor-pointer"
                onClick={() => cartOpen.value = false}
                aria-label="Close bag"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cartItems.value.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-gray-light text-xs uppercase tracking-wider">
                    Your bag is empty
                  </p>
                  <button
                    type="button"
                    className="mt-6 px-8 py-3 bg-accent text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent-light transition-colors duration-300 cursor-pointer"
                    onClick={() => cartOpen.value = false}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {cartItems.value.map((item) => (
                    <li key={item.id} className="flex gap-4 group">
                      <div className="w-20 h-24 shrink-0 rounded-sm overflow-hidden bg-charcoal/5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-charcoal truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-light mt-1">
                          {formatter.format(item.price)}
                        </p>
                        <button
                          type="button"
                          className="text-[9px] uppercase tracking-[0.2em] text-gray-light hover:text-red-400 transition-colors duration-200 mt-3 cursor-pointer"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cartItems.value.length > 0 && (
              <div className="border-t border-charcoal/10 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-light text-xs uppercase tracking-wider">Total</span>
                  <span className="font-medium text-charcoal">
                    {formatter.format(cartTotal.value)}
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full py-4 bg-accent text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-accent-light transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    cartOpen.value = false;
                    authModalOpen.value = true;
                  }}
                >
                  Checkout
                </button>

                <button
                  type="button"
                  className="w-full py-3 border border-charcoal/20 text-charcoal text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal/5 transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    cartOpen.value = false;
                    authModalOpen.value = true;
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
