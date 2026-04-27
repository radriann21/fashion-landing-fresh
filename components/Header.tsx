export function Header() {
  return (
    <header className="w-full px-10 py-8 flex items-center justify-between animate-topFadeIn opacity-0">
      <div>
        <span className="font-bold text-2xl italic">F</span>
        <span className="font-bold text-2xl italic">f</span>
      </div>
      <ul className="flex items-center gap-x-6 font-semibold text-xl">
        <a href="/">
          <li className="relative group cursor-pointer">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="/cart">
          <li className="relative group cursor-pointer">
            <span className="cart-title-transition inline-block">Cart</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
      </ul>
    </header>
  );
}
