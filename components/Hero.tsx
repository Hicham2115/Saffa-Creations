import Image from "next/image";
import { ArrowRight } from "lucide-react";
import bgHero from "@/app/assets/bghero.png";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={bgHero}
        alt="Model wearing an embroidered Moroccan jellaba in a courtyard"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col justify-end px-6 pb-10 text-white sm:px-10 sm:pb-14">
          <div className="max-w-2xl mt-40">
            <div className="mb-8 flex flex-wrap items-center gap-4 text-xs tracking-[0.25em]">
              <span className="border border-amber-300/70 px-3 py-1 text-amber-300">
                NEW COLLECTION
              </span>
              <span className="text-white/80">
                LUXURY MOROCCAN JELLABAS · 2026 COLLECTION
              </span>
            </div>

            <h1 className="font-heading text-6xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              WHERE
              <br />
              TRADITION
              <br />
              MEETS
              <br />
              ELEGANCE
            </h1>

            <p className="mt-8 max-w-md font-heading text-lg leading-relaxed tracking-wide text-white/90 sm:text-xl">
              Handcrafted jellabas inspired by Moroccan heritage, made for the
              modern woman.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-8 sm:mt-20 sm:flex-row sm:items-end">
            <blockquote className="flex items-center gap-4">
              <span className="h-10 w-px bg-amber-300/70" aria-hidden="true" />
              <span className="font-heading text-lg tracking-wide text-white/90 italic">
                &ldquo;Every stitch tells a story.&rdquo;
              </span>
            </blockquote>

            <a
              href="#"
              className="flex items-center gap-2 border border-amber-300/70 px-6 py-3 text-xs tracking-[0.2em] text-amber-200 transition-colors hover:bg-amber-300/10"
            >
              SHOP THE COLLECTION
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
