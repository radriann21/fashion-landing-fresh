import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";

const collections = [
  { 
    name: "AW25", 
    label: "Autumn / Winter 2025", 
    pieces: 12,
    note: "Wool, shearling, and structured silhouettes. A study in warmth and restraint.",
    fabrics: ["Italian Wool", "Japanese Denim", "Shearling"],
    images: [
      "/images/collection-1-1.webp",
      "/images/collection-1-2.webp",
      "/images/collection-1-3.webp",
      "/images/collection-1-4.webp",
    ],
  },
  { 
    name: "SS25", 
    label: "Spring / Summer 2025", 
    pieces: 15,
    note: "Lightweight linens and relaxed tailoring. Architecture meets air.",
    fabrics: ["Irish Linen", "Pima Cotton", "Tencel"],
    images: [
      "/images/collection-2-1.webp",
      "/images/collection-2-2.webp",
      "/images/collection-2-3.webp",
      "/images/collection-2-4.webp",
    ],
  },
  { 
    name: "AW24", 
    label: "Autumn / Winter 2024", 
    pieces: 10,
    note: "The debut collection. Raw edges, heavy textures, and a manifesto in cloth.",
    fabrics: ["Harris Tweed", "Organic Cotton", "Recycled Wool"],
    images: [
      "/images/collection-3-1.webp",
      "/images/collection-3-2.webp",
      "/images/collection-3-3.webp",
      "/images/collection-3-4.webp",
    ],
  },
];

export default define.page(function Lookbook() {
  return (
    <>
      <Head>
        <title>Lookbook — MUSE</title>
        <meta name="description" content="Browse the MUSE collection lookbook. Editorial fashion photography and curated pieces." />
      </Head>
      <div class="min-h-screen bg-main-bg max-w-full">
        <Header />
        <main id="main-content">
          <section class="relative w-full px-8 pt-40 pb-32 overflow-hidden">
            <span class="editorial-number absolute top-20 left-12 text-accent">04</span>
            <div class="max-w-4xl mx-auto">
              <p class="text-[10px] uppercase tracking-[0.35em] text-accent mb-6 font-bold">
                Collections
              </p>
              <h1 class="font-display text-[12vw] md:text-[6vw] leading-[0.85] text-charcoal -tracking-[0.04em]">
                The Editorial<br />
                <span class="text-outline text-[14vw] md:text-[7vw] text-outline-accent">archive.</span>
              </h1>
            </div>
          </section>

          <section class="w-full px-8 py-12 border-t-2 border-charcoal/10">
            <div class="max-w-6xl mx-auto space-y-32">
              {collections.map((collection, index) => (
                <div key={collection.name} class="group cursor-pointer">
                  <div class="flex flex-col sm:flex-row items-start justify-between mb-10 gap-4 sm:gap-0">
                    <div class="flex items-start gap-4 sm:gap-6">
                      <span class="text-[9px] font-bold text-accent mt-2 tracking-[0.3em] uppercase">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span class="text-4xl sm:text-6xl md:text-7xl font-display text-charcoal group-hover:text-accent group-focus-within:text-accent transition-colors duration-500 leading-none">
                          {collection.name}
                        </span>
                        <p class="text-gray-dark text-sm max-w-md mt-4 leading-relaxed border-l-2 border-accent/30 pl-4 group-hover:border-accent group-focus-within:border-accent transition-colors duration-500">
                          {collection.note}
                        </p>
                      </div>
                    </div>
                    <div class="text-right flex-shrink-0 self-start sm:self-auto">
                      <p class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                        {collection.label}
                      </p>
                      <p class="text-[10px] text-gray-light mt-2 uppercase tracking-wider">
                        {collection.pieces} pieces
                      </p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {Array.from({ length: 4 }, (_, i) => {
                      const images = (collection as { images?: string[] }).images;
                      return (
                        <div
                          key={i}
                          class="aspect-[3/4] overflow-hidden"
                        >
                          {images
                            ? (
                              <img
                                src={images[i]}
                                alt={`${collection.name} — ${String(i + 1).padStart(2, '0')}`}
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105"
                                loading="lazy"
                              />
                            )
                            : (
                              <div class="w-full h-full bg-cream-dark group-hover:bg-cream transition-colors duration-700 flex items-center justify-center relative">
                                <span class="text-[10px] uppercase tracking-[0.2em] text-gray-light/50">
                                  {collection.name} — {String(i + 1).padStart(2, '0')}
                                </span>
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>

                    <div class="mt-6 flex items-center gap-6">
                    <div class="h-[2px] bg-accent/30 w-16 group-hover:w-24 group-focus-within:w-24 transition-all duration-500"></div>
                    <div class="h-[2px] bg-charcoal/10 flex-1"></div>
                    <span class="text-[10px] uppercase tracking-[0.35em] text-gray-light group-hover:text-accent group-focus-within:text-accent font-bold transition-colors duration-300 flex-shrink-0">
                      View Collection
                    </span>
                    <div class="h-[2px] bg-charcoal/10 flex-1"></div>
                  </div>

                  <div class="flex gap-4 mt-6 flex-wrap">
                    {collection.fabrics.map((fabric) => (
                      <span key={fabric} class="text-[9px] uppercase tracking-[0.2em] text-gray-light border border-charcoal/10 px-3 py-1.5 group-hover:border-accent/30 group-focus-within:border-accent/30 transition-colors duration-300">
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section class="relative w-full px-8 py-32 bg-accent text-white text-center overflow-hidden">
            <span class="editorial-number absolute top-10 right-12 text-white/10">05</span>
            <span class="editorial-number absolute bottom-10 left-8 text-white/10">06</span>
            <div class="max-w-xl mx-auto relative z-10">
              <p class="text-[9px] uppercase tracking-[0.4em] text-accent-light font-bold mb-6">
                Coming Soon
              </p>
              <h2 class="font-display text-5xl md:text-6xl text-white leading-[0.9] tracking-tight">
                SS26 Preview
              </h2>
              <div class="w-16 h-[3px] bg-white/30 mx-auto mt-8 mb-8"></div>
              <p class="text-white/70 text-sm leading-relaxed max-w-md mx-auto">
                Our upcoming spring collection. Light fabrics, relaxed silhouettes, 
                a new palette. Minimalism with warmth.
              </p>
              <div class="mt-10 flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/40">
                <span>100% Linen</span>
                <span className="w-px h-4 bg-white/20"></span>
                <span>6 Colors</span>
                <span className="w-px h-4 bg-white/20"></span>
                <span>March 2026</span>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
});
