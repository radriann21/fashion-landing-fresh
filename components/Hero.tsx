export function Hero() {
  const letters = Array.from("FASHION");

  return (
    <section className="w-full min-h-screen pt-32 px-8 overflow-hidden">
      <h1 className="text-[18vw] leading-[0.85] uppercase font-display text-charcoal tracking-tighter">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fadeUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
        <span className="inline-block opacity-0 animate-fadeUp text-[4vw] align-top ml-2" style={{ animationDelay: "1s" }}>®</span>
      </h1>
      
      <div className="w-full h-[2px] bg-charcoal mt-4 opacity-0 animate-fadeUp" style={{ animationDelay: "1.2s" }}></div>
      
      <div className="w-full grid grid-cols-3 gap-8 mt-6 text-sm uppercase tracking-wide text-gray-dark">
        <div className="opacity-0 animate-fadeUp" style={{ animationDelay: "1.4s" }}>
          <span className="font-semibold text-charcoal">FASHION</span>
        </div>
        <div className="opacity-0 animate-fadeUp max-w-xs" style={{ animationDelay: "1.6s" }}>
          <p className="font-semibold text-charcoal mb-1">WHY</p>
          <p className="text-gray-medium leading-relaxed">
            Created by people focused on comfort and class, this store and 
            signature collection celebrates our collective creativity and passion 
            for apparel. Carefully designed.
          </p>
        </div>
        <div className="opacity-0 animate-fadeUp flex flex-col gap-2 items-end" style={{ animationDelay: "1.8s" }}>
          <a href="#" className="link-underline hover:text-charcoal transition-colors">Visit Website</a>
          <a href="#" className="link-underline hover:text-charcoal transition-colors">Shipping & Returns</a>
          <span className="text-gray-light mt-2">© 2026</span>
        </div>
      </div>
    </section>
  );
}
