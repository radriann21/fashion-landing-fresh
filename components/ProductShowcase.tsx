import { ProductCard } from "@/islands/ProductCard.tsx";

const leftProducts = [
  { name: "Minimal Tee", price: 55.00, image: "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif" },
  { name: "Classic Crew", price: 48.00, image: "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif" },
];

const rightProducts = [
  { name: "Essential Hoodie", price: 95.00, image: "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif" },
  { name: "Daily Jacket", price: 125.00, image: "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif" },
];

export function ProductShowcase() {
  return (
    <section className="w-full px-8 py-24">
      {/* Title Section */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-medium mb-4">
          Curated Selection
        </p>
        <h2 className="font-display text-[5vw] md:text-[3vw] text-charcoal">
          Featured Collection
        </h2>
        <div className="w-24 h-[2px] bg-charcoal mx-auto mt-6"></div>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="vertical-text text-xs uppercase tracking-[0.3em] text-gray-medium h-24">
              Essentials
            </span>
            <div className="h-px bg-charcoal/20 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pl-8">
            {leftProducts.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>

          <p className="text-gray-medium text-sm pl-8 mt-6 max-w-sm">
            Timeless basics designed for everyday comfort. 
            Crafted from premium cotton for a perfect fit.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-8 lg:pt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-charcoal/20 flex-1"></div>
            <span className="vertical-text text-xs uppercase tracking-[0.3em] text-gray-medium h-24 rotate-180">
              Outerwear
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pr-8">
            {rightProducts.map((product, index) => (
              <ProductCard key={index} {...product} index={index + 2} />
            ))}
          </div>

          <p className="text-gray-medium text-sm pr-8 mt-6 max-w-sm ml-auto text-right">
            Elevated layers for transitional weather. 
            Designed with attention to detail and functionality.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <a 
          href="/" 
          className="inline-flex items-center gap-3 text-charcoal group"
        >
          <span className="text-sm uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-500">
            View All Products
          </span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width={1.5} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
