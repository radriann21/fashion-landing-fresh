import { Head } from "fresh/runtime";

export function Hero() {
  const letters = Array.from("FASHION");

  return (
    <>
      <Head>
        <style>
          {`
              @keyframes revealUp {
              0% {
                transform: translateY(100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }

            .animate-letter {
              animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
              opacity: 0;
              display: inline-block;
            }

            @keyframes revealFromRight {
              0% {
                transform: translateX(100px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }

            .animate-text-right {
              animation: revealFromRight 1s cubic-bezier(0.16,1,0.3,1) forwards;
              opacity: 0;
              animation-delay: 1s;
            }

            @keyframes drawLine {
              0% {
                transform: scaleX(0);
              }
              100% {
                transform: scaleX(1);
              }
            }

            .animate-line {
              transform-origin: left;
              animation: drawLine 1s cubic-bezier(0.16,1,0.3,1) forwards;
              transform: scaleX(0);
              animation-delay: 0.8s;
            }
            `}
        </style>
      </Head>
      <section className="w-full h-[450px] p-8 overflow-hidden">
        <h1 className="text-[16vw] uppercase font-display font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="animate-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <div className="w-full h-1 bg-black animate-line"></div>
        <div className="w-full flex items-end justify-end">
          <p className="animate-text-right text-lg text-right w-1/2">
            Created by people focused on comfor and class, this store and
            signature collection celebrates our collective creativity and
            passion for apparel.
          </p>
        </div>
      </section>
    </>
  );
}
