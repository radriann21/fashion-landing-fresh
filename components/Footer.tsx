const footerLinks = {
  collections: [
    { label: "All Products", href: "/" },
    { label: "New Arrivals", href: "/" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "SS26 Preview", href: "/lookbook" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/" },
    { label: "Studio Visits", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "Are.na", href: "#" },
    { label: "Twitter / X", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 py-20 border-t-2 border-charcoal/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-3xl text-charcoal hover:text-accent transition-colors duration-300 tracking-tight">
              MUSE
            </a>
            <p className="mt-4 text-sm text-gray-medium max-w-xs leading-relaxed">
              Editorial fashion for the modern individual. Thoughtfully designed, intentionally crafted.
            </p>
            <p className="mt-6 text-[10px] text-gray-light uppercase tracking-[0.2em]">
              47 Muse Lane<br />
              Creative District<br />
              London, EC2A 4NE
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-5 text-[10px] uppercase tracking-[0.3em]">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-medium hover:text-accent transition-colors duration-300 text-sm link-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-5 text-[10px] uppercase tracking-[0.3em]">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-medium hover:text-accent transition-colors duration-300 text-sm link-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-5 text-[10px] uppercase tracking-[0.3em]">
              Social
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-medium hover:text-accent transition-colors duration-300 text-sm link-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t-2 border-charcoal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-light uppercase tracking-wider">
            &copy; 2026 MUSE. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-light uppercase tracking-wider hover:text-charcoal transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] text-gray-light uppercase tracking-wider hover:text-charcoal transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-[10px] text-gray-light uppercase tracking-wider hover:text-charcoal transition-colors duration-300">
              Shipping &amp; Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
