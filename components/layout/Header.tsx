"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolledPast(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const scrolled = !isHome || scrolledPast;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 transition-all duration-300 sm:px-10",
        scrolled
          ? "bg-[#f7f3ec]/95 py-4 text-stone-900 shadow-sm backdrop-blur-sm"
          : "bg-transparent text-white",
      )}
    >
      <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] lg:flex">
        <Link href="/collections">COLLECTIONS</Link>
        <Link href="/collections">NEW ARRIVALS</Link>
      </nav>

      <Link href="/" className="text-center">
        <div className="font-heading text-xl tracking-[0.35em] sm:text-2xl">
          SAFFA CREATIONS
        </div>
        <div
          className={cn(
            "mt-1 text-[0.65rem] tracking-[0.3em] transition-colors duration-300",
            scrolled ? "text-stone-500" : "text-white/80",
          )}
        >
          SINCE 2016 · MOROCCO
        </div>
      </Link>

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
