import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import linaJellaba from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_34_10 PM.png";
import nourJellaba from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_35_24 PM.png";
import yasminJellaba from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_37_02 PM.png";
import mayaJellaba from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_38_12 PM.png";

const products = [
  {.  
    name: "Lina Jellaba",
    price: "2,400.00 MAD",
    image: linaJellaba,
    badge: "NEW",
    colors: ["#f3ede1", "#b08f5f", "#6b7350"],
  },
  {
    name: "Nour Jellaba",
    price: "2,300.00 MAD",
    image: nourJellaba,
    badge: null,
    colors: ["#6b7350", "#c8a978", "#d9d5cc"],
  },
  {
    name: "Yasmin Jellaba",
    price: "2,600.00 MAD",
    image: yasminJellaba,
    badge: "NEW",
    colors: ["#f3ede1", "#c8a978", "#d9d5cc"],
  },
  {
    name: "Maya Jellaba",
    price: "2,200.00 MAD",
    image: mayaJellaba,
    badge: null,
    colors: ["#b08f5f", "#f3ede1", "#3a3a3a"],
  },
] as const;

export function FeaturedProducts() {
  return (
    <section className="bg-[#f7f3ec] px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-amber-600">
          FEATURED PRODUCTS
        </div>
        <h2 className="mt-4 font-heading text-4xl text-stone-900 sm:text-5xl">
          Timeless pieces. Modern elegance.
        </h2>
        <span
          className="mx-auto mt-6 block h-px w-10 bg-amber-600/60"
          aria-hidden="true"
        />
        <p className="mt-6 text-stone-600">
          A curated selection of our most-loved jellabas, crafted with
          exceptional attention to detail and made to be cherished.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.name} className="group">
            <div className="relative aspect-3/4 overflow-hidden bg-stone-100">
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
                className="absolute top-3 right-3 text-white transition-opacity hover:opacity-70"
              >
                <Heart className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <h3 className="mt-4 font-heading text-lg text-stone-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-amber-600">{product.price}</p>

            <div className="mt-3 flex items-center gap-2">
              {product.colors.map((color, index) => (
                <span
                  key={color + index}
                  className="h-4 w-4 rounded-full border border-stone-300"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="#"
          className="flex items-center gap-2 border border-amber-600/70 px-8 py-3 text-xs tracking-[0.2em] text-amber-600 transition-colors hover:bg-amber-600/10"
        >
          VIEW ALL COLLECTION
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
