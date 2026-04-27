import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { Header } from "@/components/Header.tsx";
import { Hero } from "@/components/Hero.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Fashion</title>
      </Head>
      <div class="min-h-screen bg-main-bg max-w-full">
        <Header />
        <Hero />
      </div>
    </>
  );
});
