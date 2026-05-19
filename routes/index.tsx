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
        <link rel="preload" as="image" href="/images/home-1.webp" imagesrcset="/images/opt/home-1-400.webp 400w, /images/opt/home-1-800.webp 800w, /images/opt/home-1-1200.webp 1200w" imagesizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px" fetchpriority="high" />
        <link rel="preload" as="image" href="/images/home-2.webp" imagesrcset="/images/opt/home-2-400.webp 400w, /images/opt/home-2-800.webp 800w, /images/opt/home-2-1200.webp 1200w" imagesizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px" fetchpriority="high" />
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
