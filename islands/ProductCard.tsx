import { motion } from "motion/react";

interface ProductCardProps {
  name?: string;
  price?: number;
  image?: string;
  showAddToCart?: boolean;
  delay?: number;
  index?: number;
}

export function ProductCard({
  name = "Off by Design",
  price = 20.3,
  image = "/images/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.avif",
  showAddToCart = true,
  delay = 0,
  index = 0,
}: ProductCardProps) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <motion.article 
      className="flex flex-col cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay || index * 0.15 }}
    >
      <div className="hover-card-overlay image-hover-zoom rounded-sm overflow-hidden bg-cream">
        <img
          src={image}
          alt={name}
          className="w-full aspect-3/4 object-cover"
        />
        {showAddToCart && (
          <div className="overlay">
            <button
              type="button"
              className="px-6 py-3 bg-cream text-charcoal font-medium text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Añadir al carrito
            </button>
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-between mt-3 px-1">
        <p className="text-base font-medium text-charcoal group-hover:text-gray-dark transition-colors duration-300">
          {name}
        </p>
        <span className="text-sm text-gray-medium">
          {formatter.format(price)}
        </span>
      </div>
    </motion.article>
  );
}
