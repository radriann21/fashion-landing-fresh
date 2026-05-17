export function Newsletter() {
  return (
    <section className="relative w-full px-6 md:px-10 py-32 md:py-40 bg-accent text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream/20"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-cream/20"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-cream/10"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-cream/10"></div>
      </div>

      <span className="editorial-number absolute top-10 left-8 text-cream/5">06</span>
      <span className="editorial-number absolute bottom-10 right-8 text-cream/5">07</span>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <p className="text-[9px] uppercase tracking-[0.45em] text-accent-light font-bold mb-6 animate-fadeUp opacity-0">
          Newsletter
        </p>

        <h2 className="font-display text-4xl md:text-5xl mb-6 animate-revealBlur opacity-0 leading-[0.9] tracking-tight">
          Stay Updated
        </h2>

        <div className="divider-accent mx-auto mb-8"></div>

        <p className="text-cream/50 mb-10 text-sm animate-fadeUp opacity-0 stagger-2 max-w-sm mx-auto leading-relaxed">
          Subscribe for exclusive drops, early access to new collections, and studio updates.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 animate-fadeUp opacity-0 stagger-3 max-w-lg mx-auto">
          <label for="newsletter-email" class="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-5 bg-transparent border border-cream/20 text-cream placeholder-cream/30 focus:outline-none focus:border-accent-light transition-all duration-300 text-sm uppercase tracking-wider"
            autocomplete="email"
          />
          <button
            type="submit"
            class="px-10 py-5 bg-accent text-cream text-xs uppercase tracking-[0.25em] font-bold hover:bg-accent-light hover:text-white transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-8 text-[10px] text-cream/30 animate-fadeUp opacity-0 stagger-5 uppercase tracking-wider">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
