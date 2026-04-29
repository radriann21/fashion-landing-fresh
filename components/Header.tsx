export function Header() {
  return (
    <header className="w-full px-10 py-8 flex items-center justify-between animate-topFadeIn opacity-0 fixed top-0 left-0 right-0 z-50 bg-main-bg/90 backdrop-blur-sm">
      <a href="/" className="group flex items-center gap-1">
        <span className="font-display text-2xl text-charcoal group-hover:scale-105 transition-transform duration-300">F</span>
      </a>
      <nav>
        <ul className="flex items-center gap-x-8 font-medium text-lg text-charcoal">
          <li>
            <a href="/" className="link-underline hover:text-gray-medium transition-colors duration-300">
              Shop
            </a>
          </li>
          <li>
            <a href="/cart" className="link-underline hover:text-gray-medium transition-colors duration-300">
              <span className="cart-title-transition inline-block">Bag (0)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
