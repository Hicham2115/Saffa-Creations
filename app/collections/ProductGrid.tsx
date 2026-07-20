"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products, productCategories, type ProductCategory } from "@/lib/products";

type Filter = ProductCategory | "All";

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visibleProducts = useMemo(
    () =>
      filter === "All"
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  );

  return (
    <section className="bg-[#f7f3ec] px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
        {(["All", ...productCategories] as Filter[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`border px-5 py-2 text-xs tracking-[0.15em] transition-colors ${
              filter === category
                ? "border-amber-600 bg-amber-600 text-white"
                : "border-stone-300 text-stone-600 hover:border-amber-600/70 hover:text-amber-600"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-center text-sm text-stone-500">
        {visibleProducts.length} product
        {visibleProducts.length === 1 ? "" : "s"}
      </p>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-4">
        {visibleProducts.map((product, index) => (
          <ScrollReveal key={product.slug} delay={(index % 4) * 0.08}>
            <div className="group">
              <Link
                href={`/collections/${product.slug}`}
                className="relative block aspect-3/4 overflow-hidden bg-stone-100"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-600/90 px-2.5 py-1 text-[0.65rem] tracking-[0.15em] text-white">
                    {product.badge}
                  </span>
                )}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={(event) => event.preventDefault()}
                  className="absolute top-3 right-3 text-white transition-opacity hover:opacity-70"
                >
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </button>
              </Link>

              <Link href={`/collections/${product.slug}`}>
                <h3 className="mt-4 font-heading text-lg text-stone-900">
                  {product.name}
                </h3>
              </Link>
              <p className="mt-1 text-sm text-amber-600">{product.price}</p>

              <div className="mt-3 flex items-center gap-2">
                {product.colors.map((color, colorIndex) => (
                  <span
                    key={color + colorIndex}
                    className="h-4 w-4 rounded-full border border-stone-300"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {visibleProducts.length === 0 && (
        <p className="mt-16 text-center text-stone-500">
          No products in this collection yet.
        </p>
      )}
    </section>
  );
}
