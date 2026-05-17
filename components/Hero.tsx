export function Hero() {
  const letters = Array.from("MUSE");

  return (
    <section className="relative w-full min-h-screen pt-40 px-6 md:px-10 overflow-hidden">
      <span className="editorial-number absolute top-20 right-8 md:right-16 text-accent">01</span>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <h1 className="text-[20vw] md:text-[12vw] leading-[0.75] uppercase font-display text-charcoal tracking-tighter">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-revealLetter hover:text-accent transition-colors duration-300 cursor-default text-shadow"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          <div className="md:col-span-2 flex flex-col justify-end md:pb-14">
            <div className="opacity-0 animate-fadeUp" style={{ animationDelay: "1s" }}>
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <p className="font-sans text-sm md:text-base text-gray-dark leading-relaxed max-w-xs font-medium">
                Thoughtfully designed apparel for those who appreciate quality,
                refined aesthetics, and clothing that transcends seasons.
              </p>
              <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-medium block mt-6">
                Est. 2026
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-charcoal/20 mt-10 md:mt-14 opacity-0 animate-fadeUp" style={{ animationDelay: "1.2s" }}></div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 text-xs uppercase tracking-widest text-gray-medium opacity-0 animate-fadeUp" style={{ animationDelay: "1.4s" }}>
          <div>
            <span className="block text-charcoal font-bold mb-1 tracking-[0.2em]">MUSE</span>
            <span className="text-gray-light text-[10px]">Editorial Craft</span>
          </div>
          <div className="hidden md:block">
            <span className="block text-charcoal font-bold mb-1 tracking-[0.2em]">Philosophy</span>
            <span className="text-gray-light text-[10px]">Timeless over trendy</span>
          </div>
          <div className="text-right">
            <a href="/lookbook" className="link-accent text-accent font-bold hover:text-charcoal transition-colors duration-300 tracking-[0.2em]">
              View Lookbook
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-5 opacity-0 animate-fadeUp" style={{ animationDelay: "1.6s" }}>
          <a
            href="/lookbook"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-cream text-xs uppercase tracking-[0.25em] hover:bg-accent-light transition-all duration-300 text-center font-medium animate-glowPulse"
          >
            <span>Explore Collection</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-10 py-5 border-2 border-cream/30 text-cream text-xs uppercase tracking-[0.25em] hover:border-cream transition-all duration-300 text-center font-medium"
          >
            <span>Our Story</span>
            <span className="inline-block text-cream/50">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
