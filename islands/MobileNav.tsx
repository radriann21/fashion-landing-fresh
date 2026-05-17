import { mobileNavOpen } from "@/lib/mobile-nav.ts";

export function MobileNav() {
  return (
    <button
      type="button"
      class="md:hidden flex flex-col gap-1.5 p-2 -mr-2 min-h-11 min-w-11 items-center justify-center cursor-pointer"
      onClick={() => mobileNavOpen.value = true}
      aria-label="Open menu"
      aria-expanded={mobileNavOpen.value}
      aria-controls="mobile-nav-panel"
    >
      <span class="block w-6 h-[2px] bg-charcoal" />
      <span class="block w-6 h-[2px] bg-charcoal" />
      <span class="block w-6 h-[2px] bg-charcoal" />
    </button>
  );
}
