import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";

const values = [
  { title: "Quality First", desc: "We work exclusively with heritage mills in Italy and Japan. Every fabric is tested for longevity before it reaches our cutting table." },
  { title: "Small Batches", desc: "We produce in limited quantities. This ensures quality control, reduces waste, and means every piece carries a number." },
  { title: "Radical Transparency", desc: "We publish our supplier list. We name our factories. We believe accountability is the only way forward." },
];

const team = [
  { name: "Ana Voss", role: "Creative Director" },
  { name: "Marcus Chen", role: "Head of Design" },
  { name: "Lena Okafor", role: "Production Lead" },
  { name: "Hugo Barnes", role: "Art Director" },
];

const timeline = [
  { year: "2023", event: "MUSE founded in a London studio" },
  { year: "2024", event: "First collection, AW24, sells out in 72 hours" },
  { year: "2025", event: "Expanded to SS25 and opened studio doors" },
  { year: "2026", event: "AW26 preview — our most ambitious collection" },
];

export default define.page(function About() {
  return (
    <>
      <Head>
        <title>About — MUSE</title>
        <meta name="description" content="The story behind MUSE — editorial fashion crafted with intention." />
      </Head>
      <div class="min-h-screen bg-main-bg max-w-full">
        <Header />
        <main id="main-content">
          <section class="relative w-full px-8 pt-40 pb-32 overflow-hidden">
            <span class="editorial-number absolute top-20 right-12 text-accent">01</span>
            <div class="max-w-4xl mx-auto">
              <p class="text-[10px] uppercase tracking-[0.35em] text-accent mb-6 font-bold">
                Our Story
              </p>
              <h1 class="font-display text-[12vw] md:text-[6vw] leading-[0.85] text-charcoal -tracking-[0.04em]">
                Crafted with<br />
                <span class="text-outline-accent text-[14vw] md:text-[7vw]">intention.</span>
              </h1>
              <div class="w-20 h-[3px] bg-accent mt-8"></div>
            </div>
          </section>

          <section class="w-full px-8 py-24 border-t-2 border-charcoal/10">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              <div class="opacity-0 animate-slideRight">
                <span class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-8 block">The Beginning</span>
                <h2 class="font-display text-4xl md:text-5xl text-charcoal mb-8 leading-[0.9] tracking-tight">
                  A quiet<br />
                  <span class="underline-thick">rebellion</span>
                </h2>
                <p class="text-gray-dark text-base leading-relaxed border-l-2 border-accent/30 pl-5">
                  MUSE began as a quiet rebellion against fast fashion. In an industry
                  built on disposability, we wanted to create pieces that last — not just
                  in construction, but in relevance.
                </p>
                <p class="text-gray-dark text-base leading-relaxed mt-6">
                  Every garment is designed with a single question in mind:
                  will this still feel right five years from now? If the answer isn't an
                  immediate yes, it doesn't make the cut.
                </p>
              </div>
              <div class="opacity-0 animate-slideLeft">
                <span class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-8 block">Our Studio</span>
                <h2 class="font-display text-4xl md:text-5xl text-charcoal mb-8 leading-[0.9] tracking-tight">
                  Where it<br />
                  <span class="text-accent">happens</span>
                </h2>
                <p class="text-gray-dark text-base leading-relaxed">
                  Based in a London atelier, our team works directly with mills and
                  artisans who share our philosophy. We know the hands
                  that make our clothes — from the spinners of our cotton to the
                  craftspeople who cut and sew each piece.
                </p>
                <p class="text-gray-dark text-base leading-relaxed mt-6 border-r-2 border-accent/30 pr-5 text-right">
                  This isn't the fastest way to produce clothing. But it is the most
                  honest one.
                </p>
              </div>
            </div>
          </section>

          <section class="relative w-full px-8 py-28 bg-accent text-white overflow-hidden">
            <span class="editorial-number absolute bottom-10 right-12 text-white/10">02</span>
            <span class="editorial-number absolute top-10 left-8 text-white/10">03</span>
            <div class="max-w-4xl mx-auto text-center relative z-10">
              <p class="text-[9px] uppercase tracking-[0.4em] text-accent-light font-bold mb-8">
                Our Values
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
                {values.map((v, i) => (
                  <div key={v.title} class="text-left border-t-2 border-white/20 pt-8">
                    <span class="text-3xl font-display text-cream/10 block mb-3">0{i + 1}</span>
                    <h3 class="font-display text-xl text-cream mb-3">{v.title}</h3>
                    <p class="text-cream/60 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section class="w-full px-8 py-24">
            <div class="max-w-4xl mx-auto">
              <span class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-8 block text-center">Timeline</span>
              <div class="relative">
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/10 -translate-x-1/2"></div>
                {timeline.map((item, i) => (
                  <div key={item.year} class={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div class={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <p class="text-gray-dark text-sm leading-relaxed max-w-xs ml-auto">{item.event}</p>
                    </div>
                    <div class="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <span class="text-cream text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <div class="flex-1">
                      <span class="font-display text-3xl text-charcoal block mb-1">{item.year}</span>
                      <p class="text-gray-dark text-sm leading-relaxed md:hidden">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section class="w-full px-8 py-24 bg-accent text-white">
            <div class="max-w-4xl mx-auto text-center">
              <p class="text-[9px] uppercase tracking-[0.4em] text-white/80 mb-8 font-bold">The Team</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member) => (
                  <div key={member.name} class="group">
                    <div class="aspect-square bg-cream/5 rounded-sm mb-4 flex items-center justify-center overflow-hidden">
                      <span class="font-display text-4xl md:text-5xl text-cream/10 group-hover:text-cream/20 transition-colors duration-500">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p class="text-cream text-sm font-medium">{member.name}</p>
                    <p class="text-cream/40 text-[10px] uppercase tracking-[0.2em] mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section class="w-full px-8 py-28 text-center">
            <div class="max-w-4xl mx-auto">
              <h2 class="font-display text-5xl md:text-6xl text-charcoal mb-4 leading-[0.9] tracking-tight">
                Visit Our Studio
              </h2>
              <div class="w-16 h-[3px] bg-accent mx-auto mt-6 mb-8"></div>
              <p class="text-gray-dark text-base max-w-md mx-auto mb-10 leading-relaxed">
                We welcome visitors by appointment. See the collection in person and
                experience the quality firsthand. Coffee included.
              </p>
              <a
                href="/contact"
                class="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-accent-light hover:text-white transition-all duration-300"
              >
                <span>Book an Appointment</span>
                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
});
