import { ArrowUp } from "lucide-react";

const aboutLinks = ["Our Story", "Craftsmanship", "Journal"];
const supportLinks = ["Contact Us", "Shipping & Returns", "FAQ's"];
const socialLinks = ["Instagram", "Facebook", "Pinterest"];

const ornamentPattern = [
  "square",
  "diamond",
  "square",
  "diamond",
  "diamond",
  "diamond",
  "square",
  "diamond",
  "square",
] as const;

function OrnamentGrid() {
  return (
    <div className="grid grid-cols-3 gap-3" aria-hidden="true">
      {ornamentPattern.map((shape, i) =>
        shape === "diamond" ? (
          <div key={i} className="flex h-10 w-10 items-center justify-center">
            <div className="h-6 w-6 rotate-45 bg-[#c8a078]" />
          </div>
        ) : (
          <div key={i} className="flex h-10 w-10 items-center justify-center">
            <div className="h-4 w-4 bg-[#c8a078]" />
          </div>
        ),
      )}
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-heading text-xl text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-stone-400 transition-colors hover:text-[#c8a078]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <section className="bg-[#f7f3ec] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-4xl leading-tight text-stone-900 sm:text-5xl">
              Ready for a jellaba made just for you?
            </h2>
            <p className="mt-4 max-w-sm text-stone-600">
              Our atelier is for women who believe in considered
              craftsmanship. Tell us your measurements, fabric, and
              embroidery preferences — we&apos;ll bring it to life by hand.
            </p>
          </div>

          <div>
            <div className="border-b border-stone-900">
              <div className="flex flex-col sm:flex-row sm:divide-x sm:divide-stone-300">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-stone-300 bg-transparent px-0 py-4 text-stone-900 placeholder:text-stone-500 focus:outline-none sm:border-b-0 sm:pr-6"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent px-0 py-4 text-stone-900 placeholder:text-stone-500 focus:outline-none sm:pl-6"
                />
              </div>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="mt-6 w-full border-b border-stone-900 bg-transparent px-0 py-4 text-stone-900 placeholder:text-stone-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Anything we should know?"
              className="mt-6 w-full border-b border-stone-900 bg-transparent px-0 py-4 text-stone-900 placeholder:text-stone-500 focus:outline-none"
            />

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-stone-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-24">
          <OrnamentGrid />

          <div>
            <div className="font-heading text-4xl text-white sm:text-5xl">
              Saffa Creations
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterColumn title="About Us" links={aboutLinks} />
              <FooterColumn title="Support" links={supportLinks} />
              <FooterColumn title="Social" links={socialLinks} />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-stone-800 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-stone-400">
            <p>Copyright © Saffa Creations</p>
            <a href="#" className="hover:text-[#c8a078]">
              Terms of Service
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#c8a078]"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center border border-stone-700">
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
