// app/_components/our-work/our-work-animation.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurWorkAnimation() {
  useGSAP(() => {
    gsap.from(".ow-header > *", {
      opacity: 0,
      y: 16,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ow-header", start: "top 78%" },
    });

    gsap.from(".ow-card", {
      opacity: 0,
      y: 24,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ow-track", start: "top 82%" },
    });

    gsap.from(".ow-dots", {
      opacity: 0,
      duration: 0.4,
      delay: 0.4,
      scrollTrigger: { trigger: ".ow-track", start: "top 82%" },
    });
  });

  return null;
}