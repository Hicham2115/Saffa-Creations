"use client";

import { useState } from "react";
import { Heart, Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/lib/products";

const SIZES = ["S", "M", "L", "XL"] as const;

export function ProductDetails({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<(typeof SIZES)[number]>("M");
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-amber-600">
        <span className="h-px w-8 bg-amber-600/60" aria-hidden="true" />
        {product.category.toUpperCase()}
      </div>

      <h1 className="mt-4 font-heading text-4xl text-stone-900 sm:text-5xl">
        {product.name}
      </h1>
      <p className="mt-3 text-lg text-amber-600">{product.price}</p>

      <p className="mt-6 max-w-md text-stone-600">
        Handcrafted by artisans in Morocco, this piece is cut from
        premium fabric and finished with hand-stitched embroidery —
        made to be worn for years, not seasons.
      </p>

      <div className="mt-8">
        <span className="text-xs tracking-[0.2em] text-stone-500">COLOR</span>
        <div className="mt-3 flex items-center gap-3">
          {product.colors.map((color, index) => (
            <button
              key={color + index}
              type="button"
              aria-label={`Select color option ${index + 1}`}
              aria-pressed={selectedColor === index}
              onClick={() => setSelectedColor(index)}
              className={`rounded-full border-2 p-0.5 transition-colors ${
                selectedColor === index ? "border-amber-600" : "border-transparent"
              }`}
            >
              <span
                className="block h-7 w-7 rounded-full border border-stone-300"
                style={{ backgroundColor: color }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <span className="text-xs tracking-[0.2em] text-stone-500">SIZE</span>
        <div className="mt-3 flex flex-wrap gap-3">
          {SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              aria-pressed={selectedSize === size}
              className={`h-11 w-11 border text-sm transition-colors ${
                selectedSize === size
                  ? "border-amber-600 bg-amber-600 text-white"
                  : "border-stone-300 text-stone-700 hover:border-amber-600/70"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center border border-stone-300">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((quantity) => Math.max(1, quantity - 1))}
            className="flex h-12 w-12 items-center justify-center text-stone-600 hover:text-amber-600"
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="w-10 text-center text-sm text-stone-900">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((quantity) => quantity + 1)}
            className="flex h-12 w-12 items-center justify-center text-stone-600 hover:text-amber-600"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="flex h-12 flex-1 items-center justify-center bg-stone-900 px-8 text-xs tracking-[0.2em] text-white transition-colors hover:bg-stone-800"
        >
          ADD TO BAG
        </button>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="flex h-12 w-12 items-center justify-center border border-stone-300 text-stone-600 transition-colors hover:border-amber-600/70 hover:text-amber-600"
        >
          <Heart className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-10 space-y-3 border-t border-stone-200 pt-8 text-sm text-stone-600">
        <div className="flex items-center gap-3">
          <Truck className="h-4 w-4 text-amber-600" aria-hidden="true" />
          Free shipping across Morocco on orders over 2,000 MAD
        </div>
        <div className="flex items-center gap-3">
          <RotateCcw className="h-4 w-4 text-amber-600" aria-hidden="true" />
          14-day returns on unworn pieces
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-4 w-4 text-amber-600" aria-hidden="true" />
          Handcrafted &amp; quality-checked by our atelier
        </div>
      </div>
    </div>
  );
}
