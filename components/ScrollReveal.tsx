"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(el.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
