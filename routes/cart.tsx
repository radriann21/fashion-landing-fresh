import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import { Header } from "@/components/Header.tsx";

export default define.page(function Cart() {
  return (
    <>
      <Head>
        <title>Your Cart - MUSE</title>
      </Head>
      <div className="min-h-screen bg-main-bg max-w-full">
        <Header />
        <main id="main-content" className="px-6 md:px-10 py-8 pt-40">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent font-bold mb-6">
              Your Cart
            </p>
            <h1 className="text-[12vw] md:text-[5vw] font-display leading-[0.85] text-charcoal -tracking-[0.03em] m-0 p-0">
              Your Cart
            </h1>
            <div className="mt-16 py-20 text-center border-t-2 border-charcoal/10">
              <p className="text-gray-medium text-sm uppercase tracking-wider">Your cart is currently empty.</p>
              <a
                href="/"
                className="group inline-flex items-center gap-3 mt-8 px-10 py-5 bg-accent text-cream text-xs uppercase tracking-[0.25em] font-bold hover:bg-charcoal transition-all duration-300"
              >
                <span>Continue Shopping</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
});
