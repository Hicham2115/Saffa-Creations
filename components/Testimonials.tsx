import Image, { type StaticImageData } from "next/image";
import { BadgeCheck, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import amalPhoto from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_34_10 PM.png";
import salmaPhoto from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_35_24 PM.png";
import fatimaPhoto from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_37_02 PM.png";

const testimonials: {
  quote: string;
  name: string;
  location: string;
  photo: StaticImageData;
}[] = [
  {
    quote:
      "The quality is exceptional and you can feel the love in every stitch. My jellaba from Saffa Creations is my go-to for every special occasion.",
    name: "Amal E.",
    location: "Casablanca, Morocco",
    photo: amalPhoto,
  },
  {
    quote:
      "Absolutely in love with the details and the fabric. It's timeless, elegant, and makes me feel so confident every time I wear it.",
    name: "Salma K.",
    location: "Rabat, Morocco",
    photo: salmaPhoto,
  },
  {
    quote:
      "From the packaging to the final piece, everything was perfect. You can tell this brand truly values craftsmanship and its customers.",
    name: "Fatima Z.",
    location: "Marrakech, Morocco",
    photo: fatimaPhoto,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ec] px-6 py-20 sm:px-10 sm:py-28">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
        aria-hidden="true"
      />

      <ScrollReveal className="relative mx-auto max-w-3xl text-center">
        <div className="text-xs tracking-[0.3em] text-amber-600">
          CUSTOMER TESTIMONIALS
        </div>
        <h2 className="mt-4 font-heading text-4xl text-stone-900 sm:text-5xl">
          Loved by women, cherished always.
        </h2>
        <div
          className="mx-auto mt-6 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-8 bg-amber-600/60" />
          <span className="text-lg text-amber-600">&#10059;</span>
          <span className="h-px w-8 bg-amber-600/60" />
        </div>
        <p className="mt-6 text-stone-600">
          Hear from our customers who have made Saffa Creations a part of
          their most beautiful moments.
        </p>
      </ScrollReveal>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        {testimonials.map(({ quote, name, location, photo }, index) => (
          <ScrollReveal key={name} delay={index * 0.1}>
            <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-stone-200/70 bg-white px-8 py-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-[0_24px_48px_-20px_rgba(180,120,40,0.3)]">
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber-600 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100">
                <Quote
                  className="h-5 w-5 text-amber-600"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-5 leading-relaxed text-stone-700">{quote}</p>

              <span
                className="mt-6 block h-px w-8 bg-amber-600/40 transition-all duration-300 group-hover:w-12"
                aria-hidden="true"
              />

              <div className="mt-6 flex flex-col items-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-amber-100 ring-offset-2 ring-offset-white transition-all duration-300 group-hover:ring-amber-300">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <h3 className="font-heading text-lg text-stone-900">
                    {name}
                  </h3>
                  <BadgeCheck
                    className="h-4 w-4 text-amber-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-1 flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-stone-500">{location}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
