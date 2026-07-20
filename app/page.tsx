import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedProducts } from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Philosophy />
      <FeaturedProducts />
    </>
  );
}
