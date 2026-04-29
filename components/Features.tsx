import { Head } from "fresh/runtime";

const features = [
  {
    title: "Premium Materials",
    description: "Sourced from the finest suppliers worldwide for lasting quality.",
  },
  {
    title: "Thoughtful Design",
    description: "Every detail considered. Minimal, functional, timeless.",
  },
  {
    title: "Sustainable",
    description: "Committed to responsible production and eco-friendly practices.",
  },
];

export function Features() {
  return (
    <>
      <Head>
        <style>{`
          @keyframes slideUp {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 1.4s cubic-bezier(0.16,1,0.3,1) forwards;
            opacity: 0;
          }
        `}</style>
      </Head>
      <section className="w-full px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="border-t border-charcoal/20 pt-6 group-hover:border-charcoal/40 transition-colors duration-500">
                <h3 className="font-display text-xl mb-3 text-charcoal">
                  {feature.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
