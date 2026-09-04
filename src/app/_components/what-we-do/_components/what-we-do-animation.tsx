// app/_components/what-we-do/what-we-do-animation.tsx
"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDoAnimation({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".wwd-eyebrow", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 78%" },
      });

      gsap.from(".wwd-heading", {
        clipPath: "inset(0 0 100% 0)",
        y: 30,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: "top 78%" },
      });

      gsap.from(".wwd-subcopy", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.35,
        scrollTrigger: { trigger: containerRef.current, start: "top 78%" },
      });

      gsap.utils.toArray<HTMLElement>(".wwd-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.92,
          rotate: i % 2 === 0 ? -3 : 3,
          duration: 0.7,
          delay: i * 0.09,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".wwd-grid", start: "top 82%" },
        });

        const glow = card.querySelector(".wwd-icon-glow");
        if (glow) {
          gsap.fromTo(
            glow,
            { opacity: 0, scale: 0.6 },
            {
              opacity: 0.35,
              scale: 1,
              duration: 0.6,
              delay: i * 0.09 + 0.35,
              ease: "power2.out",
              scrollTrigger: { trigger: ".wwd-grid", start: "top 82%" },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative scroll-mt-22 mx-auto max-w-700 overflow-hidden px-5 py-20 sm:px-8 lg:px-13"
    >
      {children}
    </section>
  );
}