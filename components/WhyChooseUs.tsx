import {
  Flower2,
  ScrollText,
  Globe,
  LockKeyhole,
  RotateCcw,
  Award,
  Headphones,
  Gift,
} from "lucide-react";

const mainFeatures = [
  {
    title: "Handmade in Morocco",
    description:
      "Every jellaba is handcrafted by skilled Moroccan artisans using traditional techniques passed down through generations.",
    icon: Flower2,
  },
  {
    title: "Premium Fabrics",
    description:
      "We use carefully selected, high-quality fabrics that ensure elegance, comfort, and lasting beauty.",
    icon: ScrollText,
  },
  {
    title: "Worldwide Shipping",
    description:
      "No matter where you are, we deliver your order safely and beautifully to your doorstep.",
    icon: Globe,
  },
  {
    title: "Secure Payments",
    description:
      "Your security is our priority. Enjoy a smooth and secure checkout with trusted payment methods.",
    icon: LockKeyhole,
  },
];

const extraFeatures = [
  {
    title: "Easy Returns",
    description: "30-day return policy for peace of mind.",
    icon: RotateCcw,
  },
  {
    title: "Quality Guaranteed",
    description: "We stand behind the quality of every piece we create.",
    icon: Award,
  },
  {
    title: "Dedicated Support",
    description: "Our team is here to help you every step of the way.",
    icon: Headphones,
  },
  {
    title: "Exclusive Experience",
    description: "Early access to new collections and special offers.",
    icon: Gift,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#f7f3ec] px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs tracking-[0.3em] text-amber-600">
          WHY CHOOSE US
        </div>
        <h2 className="mt-4 font-heading text-4xl text-stone-900 sm:text-5xl">
          Crafted with care. Chosen with confidence.
        </h2>
        <span
          className="mx-auto mt-6 block h-px w-10 bg-amber-600/60"
          aria-hidden="true"
        />
        <p className="mt-6 text-stone-600">
          From our hands to yours, every detail is designed to offer a luxurious
          experience you can trust.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 divide-y divide-stone-200 bg-[#faf7f2] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {mainFeatures.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="group flex flex-col items-center px-8 py-12 text-center transition-colors duration-300 hover:bg-white"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f3ece0] transition-colors duration-300 group-hover:bg-amber-600">
              <Icon
                className="h-9 w-9 text-amber-600 transition-colors duration-300 group-hover:text-white"
                strokeWidth={1.25}
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-6 font-heading text-xl text-stone-900 transition-colors duration-300 group-hover:text-amber-600">
              {title}
            </h3>
            <span
              className="mt-3 block h-px w-6 bg-amber-600/60 transition-all duration-300 group-hover:w-10"
              aria-hidden="true"
            />
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-y-10 sm:grid-cols-2 sm:divide-x sm:divide-stone-200 lg:grid-cols-4">
        {extraFeatures.map(({ title, description, icon: Icon }) => (
          <div key={title} className="flex items-start gap-4 px-2 sm:px-6">
            <Icon
              className="h-8 w-8 shrink-0 text-amber-600"
              strokeWidth={1.25}
              aria-hidden="true"
            />
            <div>
              <h4 className="font-heading text-base text-stone-900">
                {title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
