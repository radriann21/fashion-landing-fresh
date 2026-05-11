import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { Header } from "@/components/Header.tsx";
import { Hero } from "@/components/Hero.tsx";
import { MainProducts } from "@/components/MainProducts.tsx";
import { About } from "@/components/About.tsx";
import { Features } from "@/components/Features.tsx";
import { Newsletter } from "@/components/Newsletter.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProductShowcase } from "@/components/ProductShowcase.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>MUSE — Thoughtfully Designed Apparel</title>
        <meta name="description" content="Editorial fashion for the modern individual. Thoughtfully designed apparel crafted with intention." />
      </Head>
      <div class="min-h-screen bg-main-bg max-w-full">
        <Header />
        <main id="main-content">
          <Hero />
          <MainProducts />
          <ProductShowcase />
          <About />
          <Features />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
});
