"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "COLLECTIONS", href: "/collections" },
  { label: "NEW ARRIVALS", href: "/collections" },
];

const secondaryLinks = [
  { label: "SEARCH", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "OUR STORY", href: "#" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledPast, setScrolledPast] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolledPast(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrolled = !isHome || scrolledPast || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 transition-all duration-300 sm:px-10",
        scrolled
          ? "bg-[#f7f3ec]/95 py-4 text-stone-900 shadow-sm backdrop-blur-sm"
          : "bg-transparent text-white",
      )}
    >
      <div className="flex items-center lg:w-48">
        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] lg:flex">
          {primaryLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

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

      <div className="flex items-center justify-end gap-6 lg:w-48">
        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] lg:flex">
          {secondaryLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
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

      {menuOpen && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-stone-200 bg-[#f7f3ec]/95 px-6 py-6 text-stone-900 shadow-sm backdrop-blur-sm sm:px-10 lg:hidden">
          {[...primaryLinks, ...secondaryLinks].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-stone-200 py-3 text-xs tracking-[0.2em] last:border-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
