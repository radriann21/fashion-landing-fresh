export function About() {
  return (
    <section className="relative w-full px-6 md:px-10 py-24 md:py-32 overflow-hidden bg-charcoal text-cream">
      <span className="editorial-number absolute top-10 left-8 text-cream/10">04</span>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[10px] uppercase tracking-[0.35em] text-accent-light font-bold mb-6">
          Our Philosophy
        </p>
        <h2 className="font-display text-[10vw] md:text-[4.5vw] leading-[0.9] text-cream tracking-[-0.03em]">
          Elegant. Timeless.
        </h2>
        <div className="w-16 h-[2px] bg-accent-light/30 mx-auto mt-8 mb-8"></div>
        <p className="text-xl md:text-2xl font-sans font-light text-cream/80 max-w-2xl mx-auto leading-relaxed italic">
          &ldquo;Clothing is the most intimate form of design.
          It deserves the same rigor as architecture.&rdquo;
        </p>
        <p className="mt-8 text-cream/60 text-sm max-w-xl mx-auto leading-relaxed">
          Every piece in our collection is designed with intention.
          Crafted for those who appreciate quality, refined aesthetics,
          and clothing that transcends seasons.
        </p>
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-cream text-xs uppercase tracking-[0.25em] font-bold hover:bg-accent-light hover:text-charcoal transition-all duration-300"
          >
            <span>Read Our Story</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/lookbook"
            className="text-xs uppercase tracking-[0.25em] text-cream/50 hover:text-cream transition-colors duration-300 font-medium"
          >
            View Collections
          </a>
        </div>
      </div>
    </section>
  );
}
