import { Heart, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const ratingBreakdown = [
  { stars: 5, count: 1975 },
  { stars: 4, count: 129 },
  { stars: 3, count: 32 },
  { stars: 2, count: 8 },
  { stars: 1, count: 3 },
];

const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);

type Review = {
  initial: string;
  name: string;
  location: string;
  timeAgo: string;
  meta: string;
  headline: string;
  body: string;
  product: string;
  helpful: number;
  reply?: { name: string; role: string; text: string };
};

const reviews: Review[] = [
  {
    initial: "L",
    name: "Layla M.",
    location: "Paris",
    timeAgo: "3 weeks ago",
    meta: "5'6\" / 168cm · Special occasions · Owned 4 months",
    headline: "Honestly, it's the only jellaba I reach for now.",
    body: "I bought the Lina in ivory back in the spring and it hasn't left my closet since. The embroidery still looks as crisp as day one, and the fabric has softened into something that feels like it's always belonged to me. I keep finding excuses to wear it.",
    product: "LINA JELLABA · IVORY",
    helpful: 47,
    reply: {
      name: "Safaa",
      role: "Founder, Saffa Creations",
      text: "Layla — thank you for this. The hood settles in after the first few wears; mine did the same. If you're ever near one of our stockists, stop in — coffee on us. — S",
    },
  },
  {
    initial: "H",
    name: "Hafsa K.",
    location: "London",
    timeAgo: "1 mo ago",
    meta: "Everyday wear · 3 months",
    headline: "Worth every dirham.",
    body: "I was hesitant about the price at first, but the quality changed my mind within a week. The stitching is impeccable and it moves with you instead of against you. This is the piece I recommend to every friend asking where to start.",
    product: "NOUR JELLABA · SAGE",
    helpful: 21,
  },
  {
    initial: "A",
    name: "Amira J.",
    location: "New York",
    timeAgo: "3 mo ago",
    meta: "Wedding gift · 5 months",
    headline: "I cried unboxing it. That's the review.",
    body: "My mother bought it for our engagement dinner. The box, the tissue, the little card — everything felt considered. And then I put it on and understood why she'd been talking about this brand for months.",
    product: "YASMIN JELLABA · IVORY",
    helpful: 63,
  },
];

function ReviewCard({
  review,
  featured = false,
}: {
  review: Review;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-stone-800 bg-stone-900/40 ${
        featured ? "p-5 sm:p-6" : "p-5"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 font-heading text-sm text-stone-900">
            {review.initial}
          </div>
          <div>
            <div className="font-heading text-sm text-white">
              {review.name}
            </div>
            <div className="text-[0.6rem] tracking-widest text-stone-500">
              VERIFIED BUYER · {review.location.toUpperCase()}
            </div>
          </div>
        </div>
        <span className="shrink-0 text-[0.7rem] text-stone-500">
          {review.timeAgo}
        </span>
      </div>

      <div className="mt-3 flex gap-0.5 text-[#c8a078]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[#c8a078]" aria-hidden="true" />
        ))}
      </div>

      <p className="mt-2 text-[0.7rem] tracking-wide text-stone-500">
        {review.meta}
      </p>

      <h3
        className={`mt-3 font-heading text-white ${
          featured ? "text-lg sm:text-xl" : "text-base"
        }`}
      >
        {review.headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-300">
        {review.body}
      </p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-stone-700 px-3 py-1 text-[0.65rem] tracking-widest text-stone-300">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c8a078]" aria-hidden="true" />
        {review.product}
      </div>

      <div className="mt-5 flex items-center gap-1.5 border-t border-stone-800 pt-3 text-[0.65rem] tracking-widest text-stone-500">
        <Heart className="h-3 w-3" aria-hidden="true" />
        HELPFUL · {review.helpful}
      </div>

      {review.reply && (
        <div className="mt-4 rounded-lg border-l-2 border-[#c8a078] bg-stone-800/40 px-4 py-3">
          <div className="flex items-center gap-2 text-[0.65rem] tracking-widest">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 font-heading text-[0.6rem] text-stone-900">
              {review.reply.name.charAt(0)}
            </span>
            <span className="font-medium text-white">
              {review.reply.name.toUpperCase()}
            </span>
            <span className="text-stone-500">
              {review.reply.role.toUpperCase()}
            </span>
          </div>
          <p className="mt-2 font-heading text-sm leading-relaxed text-stone-300 italic">
            {review.reply.text}
          </p>
        </div>
      )}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-stone-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[380px_1fr]">
        <ScrollReveal className="border-b border-stone-800 px-6 py-12 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0 lg:py-16">
          <div className="flex items-center gap-2 text-xs tracking-widest text-[#c8a078]">
            <span aria-hidden="true">—</span> CUSTOMER REVIEWS
          </div>

          <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-white sm:text-4xl">
            Two thousand women.
            <br />
            One <span className="text-[#c8a078] italic">thing in common.</span>
          </h2>

          <div className="mt-8">
            <div className="flex items-end gap-1">
              <span className="font-heading text-4xl text-white">4.9</span>
              <span className="mb-0.5 text-sm text-stone-400">/5</span>
            </div>
            <div className="mt-1.5 flex gap-1 text-[#c8a078]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-[#c8a078]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-2 text-[0.7rem] tracking-widest text-stone-400">
              FROM {totalReviews.toLocaleString()} VERIFIED BUYERS · 96%
              RECOMMEND
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            {ratingBreakdown.map(({ stars, count }) => (
              <div
                key={stars}
                className="flex items-center gap-3 text-[0.7rem] text-stone-400"
              >
                <span className="w-5 shrink-0 tracking-wide">{stars}★</span>
                <div className="h-1 flex-1 rounded-full bg-stone-800">
                  <div
                    className="h-full rounded-full bg-[#c8a078]"
                    style={{ width: `${(count / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right">
                  {count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="px-6 py-12 sm:px-10 lg:py-16">
          <ScrollReveal>
            <ReviewCard review={reviews[0]} featured />
          </ScrollReveal>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {reviews.slice(1).map((review, index) => (
              <ScrollReveal key={review.name} delay={(index + 1) * 0.1}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
