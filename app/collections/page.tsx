import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/app/assets/banner.png";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductGrid } from "./ProductGrid";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore the full Saffa Creations collection of handcrafted Moroccan jellabas.",
};

export default function CollectionsPage() {
  return (
    <main className="bg-[#f7f3ec]">
      <div className="relative flex h-[45vh] min-h-80 w-full items-end overflow-hidden">
        <Image
          src={banner}
          alt="Saffa Creations collections banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <ScrollReveal className="relative z-10 w-full px-6 pb-12 text-center text-white sm:px-10 sm:pb-16">
          <div className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-amber-300">
            <span className="h-px w-8 bg-amber-300/60" aria-hidden="true" />
            ALL PRODUCTS
            <span className="h-px w-8 bg-amber-300/60" aria-hidden="true" />
          </div>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl">
            Our Collections
          </h1>
          <p className="mt-4 font-heading text-lg text-white/85 italic">
            Timeless designs. Handcrafted with heritage.
          </p>
        </ScrollReveal>
      </div>

      <ProductGrid />
    </main>
  );
}
