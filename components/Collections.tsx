import Image from "next/image";
import { ArrowRight } from "lucide-react";
import womenJellabas from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_34_10 PM.png";
import luxuryCollection from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_35_24 PM.png";
import weddingCollection from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_37_02 PM.png";
import newArrivals from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_38_12 PM.png";

const collections = [
  {
    title: "Women Jellabas",
    description: "Everyday elegance, redefined.",
    image: womenJellabas,
  },
  {
    title: "Luxury Collection",
    description: "Premium fabrics. Exceptional details.",
    image: luxuryCollection,
  },
  {
    title: "Wedding Collection",
    description: "Made for your most memorable moments.",
    image: weddingCollection,
  },
  {
    title: "New Arrivals",
    description: "The latest pieces, just in.",
    image: newArrivals,
  },
];

export function Collections() {
  return (
    <section className="bg-[#f7f3ec] px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-amber-600">
          <span className="h-px w-8 bg-amber-600/60" aria-hidden="true" />
          FEATURED COLLECTIONS
          <span className="h-px w-8 bg-amber-600/60" aria-hidden="true" />
        </div>
        <h2 className="mt-4 font-heading text-4xl text-stone-900 sm:text-5xl md:text-6xl">
          Explore Our Collections
        </h2>
        <p className="mt-4 font-heading text-lg italic text-stone-600">
          Timeless designs. Handcrafted with heritage.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <a
            key={collection.title}
            href="#"
            className="group relative block aspect-2/4 overflow-hidden"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="font-heading text-2xl leading-tight uppercase">
                {collection.title}
              </h3>
              <span
                className="mt-3 block h-px w-8 bg-amber-300"
                aria-hidden="true"
              />
              <p className="mt-3 text-sm text-white/85">
                {collection.description}
              </p>
              <span className="mt-3 flex items-center gap-1 text-xs tracking-[0.2em] text-amber-300">
                SHOP NOW
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
