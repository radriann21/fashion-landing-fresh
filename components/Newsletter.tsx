import { Head } from "fresh/runtime";

export function Newsletter() {
  return (
    <>
      <Head>
        <style>{`
          @keyframes expandWidth {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(245, 237, 230, 0.1); }
            50% { box-shadow: 0 0 40px rgba(245, 237, 230, 0.2); }
          }
          .animate-expand {
            animation: expandWidth 2s cubic-bezier(0.16,1,0.3,1) forwards;
          }
          .animate-glow {
            animation: glowPulse 4s ease-in-out infinite;
          }
        `}</style>
      </Head>
      <section className="w-full px-8 py-24 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream/20"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-cream/20"></div>
        </div>
        
        <div className="max-w-xl mx-auto text-center relative">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-light mb-4 animate-fadeUp opacity-0">
            Newsletter
          </p>
          
          <h2 className="font-display text-4xl mb-6 animate-revealBlur opacity-0">
            Stay Updated
          </h2>
          
          <div className="w-24 h-px bg-cream/30 mx-auto mb-8 animate-expand"></div>
          
          <p className="text-gray-light mb-10 text-sm animate-fadeUp opacity-0 stagger-2">
            Subscribe for exclusive drops and early access to new collections.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 animate-fadeUp opacity-0 stagger-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-transparent border border-cream/30 text-cream placeholder-gray-light focus:outline-none focus:border-cream/60 transition-all duration-500 focus:animate-glow"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-cream text-charcoal font-medium hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
          
          <p className="mt-8 text-xs text-gray-medium animate-fadeUp opacity-0 stagger-5">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </>
  );
}
