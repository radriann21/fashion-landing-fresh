import { MobileNav } from "@/islands/MobileNav.tsx";
import { MobileNavPanel } from "@/islands/MobileNavPanel.tsx";
import { CartTrigger } from "@/islands/CartTrigger.tsx";
import { CartDrawer } from "@/islands/CartDrawer.tsx";
import { AuthModal } from "@/islands/AuthModal.tsx";

const navLinks = [
  { label: "Shop", href: "/" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <>
      <header className="w-full px-6 md:px-10 py-6 flex items-center justify-between animate-topFadeIn opacity-0 fixed top-0 left-0 right-0 z-50 bg-main-bg/95 backdrop-blur-md border-b border-charcoal/10">
        <a href="/" className="group flex items-center gap-2" aria-label="MUSE — Home">
          <span className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-accent transition-colors duration-300 tracking-tight">
            MUSE
          </span>
          <span className="hidden sm:block w-6 h-px bg-accent mt-1"></span>
        </a>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-x-10 font-medium text-xs text-charcoal uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-accent hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <CartTrigger />
            </li>
          </ul>
        </nav>

        <MobileNav />
      </header>
      <MobileNavPanel />
      <CartDrawer />
      <AuthModal />
    </>
  );
}
