import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products } from "@/lib/products";
import { ProductDetails } from "./ProductDetails";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: `${product.name} — a handcrafted Moroccan jellaba from the ${product.category} collection.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(
      products.filter(
        (item) => item.slug !== product.slug && item.category !== product.category,
      ),
    )
    .slice(0, 4);

  return (
    <main className="bg-[#f7f3ec] px-6 pt-32 pb-24 sm:px-10 sm:pt-40">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-xs tracking-[0.15em] text-stone-500"
      >
        <Link href="/" className="hover:text-amber-600">
          HOME
        </Link>
        <ChevronRight className="h-3 w-3" aria-hidden="true" />
        <Link href="/collections" className="hover:text-amber-600">
          COLLECTIONS
        </Link>
        <ChevronRight className="h-3 w-3" aria-hidden="true" />
        <span className="text-stone-700">{product.name.toUpperCase()}</span>
      </nav>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative aspect-3/4 overflow-hidden bg-stone-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-amber-600/90 px-3 py-1 text-xs tracking-[0.15em] text-white">
              {product.badge}
            </span>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ProductDetails product={product} />
        </ScrollReveal>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-amber-600">
              YOU MAY ALSO LIKE
            </div>
            <h2 className="mt-4 font-heading text-3xl text-stone-900 sm:text-4xl">
              Complete the Look
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                href={`/collections/${related.slug}`}
                className="group block"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-stone-100">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg text-stone-900">
                  {related.name}
                </h3>
                <p className="mt-1 text-sm text-amber-600">{related.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
