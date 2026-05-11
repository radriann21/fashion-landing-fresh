import { motion } from "motion/react";

interface ProductCardProps {
  name?: string;
  price?: number;
  image?: string;
  material?: string;
  showAddToCart?: boolean;
  delay?: number;
  index?: number;
}

export function ProductCard({
  name = "Off by Design",
  price = 20.3,
  image = "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif",
  material,
  showAddToCart = true,
  delay = 0,
  index = 0,
}: ProductCardProps) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const shouldReduceMotion = typeof document !== "undefined"
    ? globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  return (
    <motion.article
      className="flex flex-col group"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
      whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay || index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="hover-card-overlay image-hover-zoom rounded-sm overflow-hidden bg-cream" tabIndex={0}>
        <img
          src={image}
          alt={name}
          className="w-full aspect-3/4 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {showAddToCart && (
          <div className="overlay" aria-hidden={!showAddToCart}>
            <button
              type="button"
              className="px-6 py-3 min-h-11 bg-charcoal text-cream font-medium text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              aria-label={`Add ${name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col mt-3 px-1">
        <div className="flex items-center justify-between">
          <p className="text-sm md:text-base font-medium text-charcoal group-hover:text-accent transition-colors duration-300">
            {name}
          </p>
          <span className="text-xs md:text-sm font-medium text-gray-dark">
            {formatter.format(price)}
          </span>
        </div>
        {material && (
          <p className="text-[10px] text-gray-light uppercase tracking-[0.15em] mt-1.5">
            {material}
          </p>
        )}
      </div>
    </motion.article>
  );
}
