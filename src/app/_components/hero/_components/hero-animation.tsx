"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroAnimation({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 16, duration: 0.6 })
        .from(".hero-heading", { opacity: 0, y: 24, duration: 0.7 }, "-=0.35")
        .from(".hero-copy", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-cta",
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
          "-=0.35"
        )
        .from(
          ".hero-feature",
          { opacity: 0, y: 10, duration: 0.4, stagger: 0.06 },
          "-=0.25"
        )
        .from(
          ".hero-graphic",
          { opacity: 0, scale: 0.92, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        )
        // Strip every inline style GSAP added once the whole sequence
        // finishes, so nothing is left overriding normal layout/CSS.
        .set(
          ".hero-badge, .hero-heading, .hero-copy, .hero-cta, .hero-feature, .hero-graphic",
          { clearProps: "all" }
        );

      return () => {
        tl.kill();
      };
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="scroll-mt-22 mx-auto max-w-700 px-5 pt-8 sm:px-8 lg:px-13 lg:pt-5"
    >
      {children}
    </section>
  );
}