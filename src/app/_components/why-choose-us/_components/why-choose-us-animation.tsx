// app/_components/why-choose-us/why-choose-us-animation.tsx
"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsAnimation({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".wcu-copy > *", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.from(".wcu-card", {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".wcu-stats", start: "top 82%" },
      });

      // Count-up per stat number, in sync with each card's own stagger delay
      sectionRef.current
        ?.querySelectorAll<HTMLElement>(".wcu-value")
        .forEach((el, i) => {
          const target = Number(el.dataset.target);
          const suffix = el.dataset.suffix ?? "";
          const counter = { val: 0 };

          gsap.to(counter, {
            val: target,
            duration: 1.1,
            delay: 0.15 + i * 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: ".wcu-stats", start: "top 82%" },
            onUpdate: () => {
              el.textContent = `${Math.round(counter.val)}${suffix}`;
            },
          });
        });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="why-codnext"
      ref={sectionRef}
      className="relative scroll-mt-22 mx-auto max-w-700 w-full overflow-hidden px-5 py-5 sm:px-8 lg:px-13"
    >
      {children}
    </section>
  );
}