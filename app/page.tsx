import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Community } from "@/components/Community";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Philosophy />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Community />
    </>
  );
}
