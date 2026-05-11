import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";

const socialLinks = [
  { name: "Instagram", handle: "@muse.studio" },
  { name: "Pinterest", handle: "muse" },
  { name: "Are.na", handle: "muse-studio" },
  { name: "Twitter / X", handle: "@muse" },
];

export default define.page(function Contact() {
  return (
    <>
      <Head>
        <title>Contact — MUSE</title>
        <meta name="description" content="Get in touch with MUSE. Visit our studio or send us a message." />
      </Head>
      <div class="min-h-screen bg-main-bg max-w-full">
        <Header />
        <main id="main-content">
          <section class="relative w-full px-8 pt-40 pb-32 overflow-hidden">
            <span class="editorial-number absolute top-20 right-12 text-accent">07</span>
            <div class="max-w-4xl mx-auto">
              <p class="text-[10px] uppercase tracking-[0.35em] text-accent mb-6 font-bold">
                Get in Touch
              </p>
              <h1 class="font-display text-[12vw] md:text-[6vw] leading-[0.85] text-charcoal -tracking-[0.04em]">
                We'd love to<br />
                <span class="text-accent">hear from you.</span>
              </h1>
              <div class="w-20 h-[3px] bg-accent mt-8"></div>
            </div>
          </section>

          <section class="w-full px-8 py-24 border-t-2 border-charcoal/10">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 class="font-display text-3xl md:text-4xl text-charcoal mb-8 leading-tight">
                  Send a<br />
                  <span class="underline-thick">message</span>
                </h2>
                <form class="space-y-8">
                  <div>
                    <label for="name" class="block text-[10px] font-bold text-charcoal mb-2 uppercase tracking-[0.3em]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      class="w-full px-6 py-5 bg-transparent border-2 border-charcoal/10 text-charcoal placeholder-charcoal/20 focus:outline-none focus:border-accent transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-[10px] font-bold text-charcoal mb-2 uppercase tracking-[0.3em]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      class="w-full px-6 py-5 bg-transparent border-2 border-charcoal/10 text-charcoal placeholder-charcoal/20 focus:outline-none focus:border-accent transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label for="message" class="block text-[10px] font-bold text-charcoal mb-2 uppercase tracking-[0.3em]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help?"
                      class="w-full px-6 py-5 bg-transparent border-2 border-charcoal/10 text-charcoal placeholder-charcoal/20 focus:outline-none focus:border-accent transition-all duration-300 resize-none text-sm"
                    >
                    </textarea>
                  </div>
                  <button
                    type="submit"
                    class="group w-full px-10 py-5 bg-accent text-cream text-xs uppercase tracking-[0.25em] font-bold hover:bg-charcoal transition-all duration-300 inline-flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              </div>

              <div class="md:pt-20">
                <div class="space-y-10">
                  <div class="border-l-2 border-accent/30 pl-6">
                    <p class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-3">Studio</p>
                    <p class="text-charcoal text-base leading-relaxed">
                      47 Muse Lane<br />
                      Creative District<br />
                      London, EC2A 4NE
                    </p>
                  </div>
                  <div class="border-l-2 border-accent/30 pl-6">
                    <p class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-3">Email</p>
                    <a href="mailto:hello@muse.studio" class="text-charcoal text-base hover:text-accent transition-colors duration-300 link-underline">
                      hello@muse.studio
                    </a>
                  </div>
                  <div class="border-l-2 border-accent/30 pl-6">
                    <p class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-3">Hours</p>
                    <p class="text-charcoal text-base leading-relaxed">
                      Tuesday — Saturday<br />
                      11:00 — 19:00
                    </p>
                    <p class="text-gray-light text-[10px] uppercase tracking-wider mt-2">Closed Sunday — Monday</p>
                  </div>
                  <div class="border-l-2 border-accent/30 pl-6">
                    <p class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-3">Phone</p>
                    <a href="tel:+442071234567" class="text-charcoal text-base hover:text-accent transition-colors duration-300 link-underline">
                      +44 20 7123 4567
                    </a>
                  </div>
                </div>

                <div class="mt-16 pt-12 border-t-2 border-charcoal/10">
                  <p class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Follow Us</p>
                  <div class="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a key={social.name} href="#" class="group flex items-center justify-between px-5 py-4 border-2 border-charcoal/10 hover:border-accent/50 transition-all duration-300">
                        <div>
                          <p class="text-charcoal text-sm font-medium group-hover:text-accent transition-colors duration-300">{social.name}</p>
                          <p class="text-gray-light text-[10px] uppercase tracking-wider">{social.handle}</p>
                        </div>
                        <span class="text-charcoal/20 group-hover:text-accent transition-colors duration-300">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
});
