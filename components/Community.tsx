import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import leftPhoto from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_34_10 PM.png";
import rightPhoto from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_37_02 PM.png";

export function Community() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_420px_1fr] lg:gap-8">
        <ScrollReveal className="relative aspect-4/5 overflow-hidden">
          <Image
            src={leftPhoto}
            alt="Customer wearing a Saffa Creations jellaba"
            fill
            className="object-cover"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:px-4">
          <div className="flex items-center gap-2 text-xs tracking-widest text-stone-500">
            <span aria-hidden="true">—</span> FROM THE COMMUNITY
          </div>

          <h2 className="mt-4 font-heading text-4xl leading-[1.05] text-stone-900 sm:text-5xl">
            Worn
            <br />
            <span className="text-[#c8a078] italic">by you.</span>
          </h2>

          <span
            className="mt-6 block h-px w-10 bg-[#c8a078]"
            aria-hidden="true"
          />

          <p className="mt-6 text-stone-600">
            Tag us in your moment. We re-share our favourites every Friday —
            and send a thank-you box of Moroccan mint tea when we do.
          </p>

          <blockquote className="mt-6 border-l-2 border-[#c8a078] pl-4 font-heading text-lg leading-relaxed text-stone-700 italic">
            &ldquo;A jellaba becomes itself the moment it starts becoming
            yours.&rdquo;
          </blockquote>

          <p className="mt-4 text-sm tracking-widest text-[#c8a078]">
            @SAFFACREATIONS
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 border border-stone-300 px-6 py-3 text-xs tracking-[0.2em] text-stone-900 transition-colors hover:border-[#c8a078] hover:text-[#c8a078]"
          >
            FOLLOW ON INSTAGRAM
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </ScrollReveal>

        <ScrollReveal
          delay={0.2}
          className="relative aspect-4/5 overflow-hidden lg:mt-20"
        >
          <Image
            src={rightPhoto}
            alt="Customer wearing a Saffa Creations jellaba"
            fill
            className="object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
