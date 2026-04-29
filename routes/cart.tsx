import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import { Header } from "@/components/Header.tsx";

export default define.page(function Cart() {
  return (
    <>
      <Head>
        <title>Your Cart - Fashion</title>
      </Head>
      <div className="cart-page min-h-screen bg-main-bg max-w-full">
        <Header />
        <main className="px-10 py-8">
          <h1 className="text-[5vw] font-display leading-10 m-0 p-0">
            Your{" "}
            <span className="cart-title-transition inline-block">Cart</span>
          </h1>
          <p className="mt-4 text-lg">Your items will appear here.</p>
        </main>
      </div>
    </>
  );
});
