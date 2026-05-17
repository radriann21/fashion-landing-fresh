import { useSignal } from "@preact/signals";
import { motion, AnimatePresence } from "motion/react";
import { authModalOpen } from "@/lib/cart.ts";

export function AuthModal() {
  const form = useSignal<"login" | "register">("login");

  const shouldReduceMotion = typeof document !== "undefined"
    ? globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  return (
    <AnimatePresence>
      {authModalOpen.value && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-80]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => authModalOpen.value = false}
          />

          <motion.div
            className="fixed inset-0 z-90 flex items-center justify-center p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="w-full max-w-sm bg-main-bg border border-charcoal/10 p-8 relative"
              role="dialog"
              aria-modal="true"
              aria-label={form.value === "login" ? "Sign in" : "Create account"}
            >
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-light hover:text-charcoal transition-colors duration-200 text-lg cursor-pointer"
                onClick={() => authModalOpen.value = false}
                aria-label="Close"
              >
                ✕
              </button>

              <div className="mb-8">
                <h2 className="text-lg font-display text-charcoal tracking-tight">
                  {form.value === "login" ? "Sign in" : "Create account"}
                </h2>
                <p className="text-[10px] text-gray-light uppercase tracking-[0.2em] mt-2">
                  {form.value === "login"
                    ? "Sign in to continue shopping"
                    : "Register to save your bag"}
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {form.value === "register" && (
                  <div>
                    <label htmlFor="auth-name" className="sr-only">Full name</label>
                    <input
                      id="auth-name"
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/10 text-sm text-charcoal placeholder:text-gray-light focus:outline-none focus:border-accent transition-colors duration-200"
                      autoComplete="name"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="auth-email" className="sr-only">Email</label>
                  <input
                    id="auth-email"
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/10 text-sm text-charcoal placeholder:text-gray-light focus:outline-none focus:border-accent transition-colors duration-200"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="auth-password" className="sr-only">Password</label>
                  <input
                    id="auth-password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/10 text-sm text-charcoal placeholder:text-gray-light focus:outline-none focus:border-accent transition-colors duration-200"
                    autoComplete={form.value === "login" ? "current-password" : "new-password"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-accent-light transition-colors duration-300 cursor-pointer"
                >
                  {form.value === "login" ? "Sign In" : "Create Account"}
                </button>
              </form>

              <p className="mt-6 text-center text-[10px] text-gray-light uppercase tracking-[0.2em]">
                {form.value === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-charcoal underline hover:text-accent transition-colors duration-200 cursor-pointer"
                      onClick={() => form.value = "register"}
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-charcoal underline hover:text-accent transition-colors duration-200 cursor-pointer"
                      onClick={() => form.value = "login"}
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
