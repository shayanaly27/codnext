// app/_components/contact/contact-animation.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactAnimation() {
  useGSAP(() => {
    gsap.from(".contact-eyebrow, .contact-heading, .contact-copy", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 78%" },
    });

    gsap.from(".contact-detail", {
      opacity: 0,
      y: 16,
      duration: 0.5,
      stagger: 0.08,
      delay: 0.25,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 78%" },
    });

    gsap.from(".contact-form", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 78%" },
    });
  });

  return null;
}