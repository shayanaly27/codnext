// app/_components/cta-banner/cta-banner-animation.tsx
"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBannerAnimation({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      tl.from(".cta-banner", {
        opacity: 0,
        scale: 0.96,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".cta-icon",
          { opacity: 0, scale: 0.6, duration: 0.5, ease: "back.out(2)" },
          "-=0.35"
        )
        .from(
          ".cta-text > *",
          { opacity: 0, x: -12, duration: 0.4, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".cta-button",
          { opacity: 0, x: 12, duration: 0.4, ease: "power2.out" },
          "<"
        );

      // Continuous ambient pulse on the icon circle, independent of the entrance
      gsap.to(".cta-icon", {
        scale: 1.08,
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="scroll-mt-22 mx-auto max-w-700 w-full px-5 py-16 sm:px-8 lg:px-13"
    >
      {children}
    </section>
  );
}