import { ProductCard } from "@/islands/ProductCard.tsx";

const leftProducts = [
  { name: "Minimal Tee", price: 55.00, material: "Pima Cotton", image: "/images/home-5.webp" },
  { name: "Classic Crew", price: 48.00, material: "Organic Cotton", image: "/images/home-6.webp" },
];

const rightProducts = [
  { name: "Essential Hoodie", price: 95.00, material: "French Terry Loop", image: "/images/home-7.webp" },
  { name: "Daily Jacket", price: 125.00, material: "Waxed Cotton", image: "/images/home-8.webp" },
];

export function ProductShowcase() {
  return (
    <section className="relative w-full px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <span className="editorial-number absolute top-20 right-8 text-charcoal">03</span>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent font-bold mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-[10vw] md:text-[5vw] text-charcoal tracking-[-0.04em] leading-[0.9]">
            Featured Collection
          </h2>
          <div className="divider-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold">
                Essentials
              </span>
              <div className="h-[2px] bg-charcoal/10 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {leftProducts.map((product, index) => (
                <div key={index} className="opacity-0 animate-fadeUp" style={{ animationDelay: `${index * 0.15}s` }}>
                  <ProductCard {...product} index={index} />
                </div>
              ))}
            </div>

            <p className="text-gray-medium text-sm mt-4 max-w-sm leading-relaxed border-l-2 border-accent/30 pl-4">
              Timeless basics in premium Pima and organic cotton.
              <br />
              <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-medium">4 colors available</span>
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 lg:pt-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] bg-charcoal/10 flex-1"></div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold">
                Outerwear
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {rightProducts.map((product, index) => (
                <div key={index} className="opacity-0 animate-fadeUp" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
                  <ProductCard {...product} index={index + 2} />
                </div>
              ))}
            </div>

            <p className="text-gray-medium text-sm mt-4 max-w-sm ml-auto text-right leading-relaxed border-r-2 border-accent/30 pr-4">
              Elevated layers for transitional weather.
              <br />
              <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-medium">Water-resistant finish</span>
            </p>
          </div>
        </div>

        <div className="text-center mt-20 md:mt-28">
          <a
            href="/lookbook"
            className="group inline-flex items-center gap-4 text-charcoal"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-bold group-hover:tracking-[0.4em] transition-all duration-500">
              View All Products
            </span>
            <span className="inline-block w-8 h-px bg-accent group-hover:w-12 transition-all duration-500"></span>
            <span className="text-accent group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
