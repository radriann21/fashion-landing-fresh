const footerLinks = {
  shop: [
    { label: "All Products", href: "/" },
    { label: "New Arrivals", href: "/" },
    { label: "Best Sellers", href: "/" },
  ],
  help: [
    { label: "FAQ", href: "/" },
    { label: "Shipping", href: "/" },
    { label: "Returns", href: "/" },
    { label: "Contact", href: "/" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full px-8 py-16 border-t border-charcoal/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-2xl text-charcoal">F</span>
          <p className="mt-4 text-sm text-gray-medium max-w-xs">
            Fashion® — Thoughtfully designed apparel 
            for the modern individual.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-charcoal mb-4 text-sm uppercase tracking-wide">Shop</h4>
          <ul className="space-y-2">
            {footerLinks.shop.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-medium hover:text-charcoal transition-colors duration-300 text-sm link-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-charcoal mb-4 text-sm uppercase tracking-wide">Help</h4>
          <ul className="space-y-2">
            {footerLinks.help.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-medium hover:text-charcoal transition-colors duration-300 text-sm link-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-charcoal mb-4 text-sm uppercase tracking-wide">Social</h4>
          <ul className="space-y-2">
            {footerLinks.social.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-medium hover:text-charcoal transition-colors duration-300 text-sm link-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-light">
          © 2026 Fashion. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-gray-light hover:text-charcoal transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-gray-light hover:text-charcoal transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
