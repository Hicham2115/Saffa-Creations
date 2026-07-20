import Image from "next/image";
import { HandHeart, Sparkles, Leaf, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import philosophy from "@/app/assets/philosophy.png";

const values = [
  {
    title: "Heritage",
    description:
      "Inspired by Moroccan tradition and crafted with deep respect for our culture.",
    icon: HandHeart,
  },
  {
    title: "Craftsmanship",
    description:
      "Handcrafted by skilled artisans using generations of traditional techniques.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    description: "We choose the finest fabrics and details to ensure beauty that lasts.",
    icon: Leaf,
  },
  {
    title: "Made in Morocco",
    description:
      "Proudly designed and crafted in Morocco, supporting local communities.",
    icon: MapPin,
  },
];

export function Philosophy() {
  return (
    <section className="bg-[#f7f3ec] px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative aspect-4/5">
          <Image
            src={philosophy}
            alt="Woman seated in a Moroccan courtyard wearing an embroidered jellaba"
            fill
            className="object-cover"
          />
        </ScrollReveal>

        <div className="flex flex-col justify-center">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-amber-600">
              <span className="h-px w-8 bg-amber-600/60" aria-hidden="true" />
              OUR PHILOSOPHY
            </div>

            <h2 className="mt-6 font-heading text-4xl leading-tight text-stone-900 sm:text-5xl">
              Rooted in heritage.
              <br />
              <span className="text-amber-600 italic">Made for today.</span>
            </h2>

            <p className="mt-6 max-w-md text-stone-600">
              At Saffa Creations, every jellaba is a celebration of Moroccan
              heritage and the women who keep it alive. We blend time-honored
              techniques with modern elegance to create pieces that are both
              meaningful and timeless.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
              {values.map(({ title, description, icon: Icon }) => (
                <div key={title}>
                  <Icon
                    className="h-7 w-7 text-amber-600"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 min-h-10 text-xs font-medium tracking-[0.15em] text-stone-900">
                    {title.toUpperCase()}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-14 flex items-center gap-4">
              <span className="h-px w-8 bg-amber-600/60" aria-hidden="true" />
              <blockquote className="font-heading text-lg leading-relaxed text-stone-700 italic">
                &ldquo;When you wear a jellaba, you carry a story of elegance,
                culture, and soul.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
