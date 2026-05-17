import { ProductCard } from "@/islands/ProductCard.tsx";

const products = [
  {
    name: "Time Off Tee",
    price: 45.0,
    material: "Japanese Cotton",
    image: "/images/home-1.webp",
  },
  {
    name: "Essential Hoodie",
    price: 89.0,
    material: "French Terry",
    image: "/images/home-2.webp",
  },
  {
    name: "Classic Tote",
    price: 65.0,
    material: "Waxed Canvas",
    image: "/images/home-3.webp",
  },
  {
    name: "Minimal Cap",
    price: 35.0,
    material: "Italian Wool",
    image: "/images/home-4.webp",
  },
];

export function MainProducts() {
  return (
    <section className="relative w-full px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <span className="editorial-number absolute bottom-10 left-8 text-charcoal">02</span>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-6 mb-14">
          <div className="h-[2px] bg-accent/40 flex-1"></div>
          <span className="text-xs uppercase tracking-[0.35em] text-accent font-bold">
            Featured
          </span>
          <div className="h-[2px] bg-charcoal/10 flex-1"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
