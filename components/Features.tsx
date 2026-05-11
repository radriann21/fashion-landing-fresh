const features = [
  {
    title: "Premium Materials",
    description: "Sourced from the finest mills in Italy, Japan, and Scotland. Every fabric is hand-selected for durability, handfeel, and character.",
  },
  {
    title: "Thoughtful Design",
    description: "No unnecessary details. Every seam, stitch, and silhouette is considered. Minimalism executed with precision.",
  },
  {
    title: "Sustainable Practice",
    description: "Small-batch production, zero-waste pattern cutting, and a commitment to reducing our footprint without compromise.",
  },
];

export function Features() {
  return (
    <section className="relative w-full px-6 md:px-10 py-24 md:py-32">
      <span className="editorial-number absolute bottom-10 right-8 text-charcoal">05</span>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[2px] bg-charcoal/20 flex-1"></div>
          <span className="text-xs uppercase tracking-[0.35em] text-accent font-bold">
            Why MUSE
          </span>
          <div className="h-[2px] bg-charcoal/20 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-default">
              <div className="border-t-[3px] border-accent/30 pt-8 group-hover:border-accent transition-colors duration-500">
                <span className="text-4xl font-display text-accent/20 group-hover:text-accent/40 transition-colors duration-500 block mb-2 leading-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl mb-4 text-charcoal group-hover:text-accent transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
