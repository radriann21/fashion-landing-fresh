import { ProductCard } from "@/islands/ProductCard.tsx";

const products = [
  {
    name: "Time Off Tee",
    price: 45.0,
    image:
      "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif",
  },
  {
    name: "Essential Hoodie",
    price: 89.0,
    image:
      "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif",
  },
  {
    name: "Classic Tote",
    price: 65.0,
    image:
      "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif",
  },
  {
    name: "Minimal Cap",
    price: 35.0,
    image:
      "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif",
  },
];

export function MainProducts() {
  return (
    <section className="w-full px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.name} {...product} index={index} />
        ))}
      </div>
    </section>
  );
}
