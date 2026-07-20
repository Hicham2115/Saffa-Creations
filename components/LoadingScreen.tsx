"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export function LoadingScreen() {
  const container = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLSpanElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete: () => setVisible(false) });

    tl.from(logo.current, {
      opacity: 0,
      y: 12,
      duration: 0.9,
      ease: "power3.out",
    })
      .fromTo(
        line.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
        "-=0.3",
      )
      .to(container.current, {
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "power2.inOut",
      });
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-5 bg-[#f7f3ec]"
    >
      <span
        ref={logo}
        className="font-heading text-3xl tracking-[0.4em] text-stone-900 sm:text-4xl"
      >
        SAFFA CREATIONS
      </span>
      <span
        ref={line}
        className="h-px w-24 origin-center bg-amber-600/80 sm:w-32"
      />
    </div>
  );
}
