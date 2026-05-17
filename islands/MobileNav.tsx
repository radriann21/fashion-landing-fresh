import { useSignal } from "@preact/signals";

const navLinks = [
  { label: "Shop", href: "/" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const open = useSignal(false);

  return (
    <>
      <button
        type="button"
        class="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        onClick={() => open.value = !open.value}
        aria-label={open.value ? "Close menu" : "Open menu"}
        aria-expanded={open.value}
      >
        <span class={`block w-6 h-[2px] bg-charcoal transition-transform duration-300 ${open.value ? "rotate-45 translate-y-[3.5px]" : ""}`} />
        <span class={`block w-6 h-[2px] bg-charcoal transition-opacity duration-300 ${open.value ? "opacity-0" : ""}`} />
        <span class={`block w-6 h-[2px] bg-charcoal transition-transform duration-300 ${open.value ? "-rotate-45 translate-y-[-3.5px]" : ""}`} />
      </button>

      {open.value && (
        <div class="fixed inset-0 top-0 left-0 w-full h-full z-40 md:hidden">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => open.value = false} />
          <nav class="relative z-50 bg-black/90 w-80 h-full ml-auto px-12 py-32 shadow-2xl border-l-2 border-accent/20">
            <ul class="space-y-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    class="font-display text-5xl text-cream hover:text-accent-light transition-colors duration-300 block"
                    onClick={() => open.value = false}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div class="mt-16 pt-10 border-t border-cream/10">
              <a href="/cart" class="text-cream/40 hover:text-cream text-xs uppercase tracking-[0.3em] transition-colors duration-300" onClick={() => open.value = false}>
                Bag (0)
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
