import { Heart, Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 text-white sm:px-10">
      <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] lg:flex">
        <a href="#">COLLECTIONS</a>
        <a href="#">NEW ARRIVALS</a>
      </nav>

      <a href="#" className="text-center">
        <div className="font-heading text-xl tracking-[0.35em] sm:text-2xl">
          SAFFA CREATIONS
        </div>
        <div className="mt-1 text-[0.65rem] tracking-[0.3em] text-white/80">
          SINCE 2016 · MOROCCO
        </div>
      </a>

      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] lg:flex">
          <a href="#">SEARCH</a>
          <a href="#">ABOUT</a>
          <a href="#">OUR STORY</a>
        </nav>
        <button type="button" aria-label="Search" className="lg:hidden">
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" aria-label="Wishlist">
          <Heart className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" aria-label="Cart">
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
