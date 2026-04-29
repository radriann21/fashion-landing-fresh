import { Head } from "fresh/runtime";

export function About() {
  return (
    <>
      <Head>
        <style>{`
          @keyframes revealText {
            0% { 
              transform: translateY(60px); 
              opacity: 0;
              filter: blur(8px);
            }
            100% { 
              transform: translateY(0); 
              opacity: 1;
              filter: blur(0);
            }
          }
          @keyframes drawLineCenter {
            0% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
            100% { transform: scaleX(0); }
          }
          .animate-revealText {
            animation: revealText 1.2s cubic-bezier(0.16,1,0.3,1) forwards;
            opacity: 0;
          }
          .animate-lineCenter {
            animation: drawLineCenter 3s cubic-bezier(0.16,1,0.3,1) infinite;
            transform-origin: center;
          }
        `}</style>
      </Head>
      <section className="w-full px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-gray-medium mb-8">
            Our Philosophy
          </p>
          <h2 className="font-display text-[6vw] md:text-[4vw] leading-tight text-charcoal">
            Elegant. Timeless.
            <br />
            <span className="italic font-sans font-light">Distinctly Fashion.</span>
          </h2>
          <p className="mt-8 text-gray-dark text-lg max-w-2xl mx-auto">
            Every piece in our collection is designed with intention. 
            Crafted for those who appreciate quality, refined aesthetics, 
            and clothing that transcends seasons.
          </p>
        </div>
      </section>
    </>
  );
}
