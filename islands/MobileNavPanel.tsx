import { useSignalEffect } from "@preact/signals";
import { mobileNavOpen } from "@/lib/mobile-nav.ts";
import { cartCount, cartOpen } from "@/lib/cart.ts";

const navLinks = [
  { label: "Shop", href: "/" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileNavPanel() {
  useSignalEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileNavOpen.value ? "hidden" : "";
  });

  const close = () => {
    mobileNavOpen.value = false;
  };

  return (
    <nav
      id="mobile-nav-panel"
      class={`md:hidden fixed inset-0 z-55 bg-main-bg/95 backdrop-blur-xl flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        mobileNavOpen.value
          ? "opacity-100 pointer-events-auto translate-x-0"
          : "opacity-0 pointer-events-none translate-x-6"
      }`}
      style="padding-top: calc(env(safe-area-inset-top) + 1.25rem); padding-bottom: calc(env(safe-area-inset-bottom) + 1.5rem);"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!mobileNavOpen.value}
    >
      <div class="flex items-center justify-between px-6 sm:px-10 pb-5 border-b border-cream/10">
        <a
          href="/"
          class="font-display text-2xl text-cream tracking-tight hover:text-accent-light transition-colors duration-300"
          onClick={close}
        >
          MUSE
        </a>
        <button
          type="button"
          class="text-cream/60 hover:text-cream w-11 h-11 -mr-2 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          onClick={close}
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      <div class="flex-1 flex flex-col justify-center px-6 sm:px-10 overflow-y-auto">
        <span class="block text-cream/40 text-[10px] uppercase tracking-[0.4em] mb-8">
          Menu
        </span>
        <ul class="space-y-5 sm:space-y-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                class="font-display text-5xl sm:text-6xl text-cream hover:text-accent-light transition-colors duration-300 inline-block leading-none"
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div class="px-6 sm:px-10 pt-6 border-t border-cream/10 flex items-center justify-between">
        <button
          type="button"
          class="text-cream/70 hover:text-accent-light text-xs uppercase tracking-[0.3em] transition-colors duration-300 cursor-pointer flex items-center gap-3"
          onClick={() => {
            close();
            cartOpen.value = true;
          }}
        >
          <span>BAG</span>
          <span class="text-cream/40">({cartCount.value})</span>
        </button>
        <span class="text-cream/30 text-[10px] uppercase tracking-[0.3em]">
          MUSE · AW25
        </span>
      </div>
    </nav>
  );
}
