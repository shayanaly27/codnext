// app/_components/footer/footer-animation.tsx
"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterAnimation({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
      });

      // Brand block leads, sliding down into place
      tl.from(".footer-brand > *", {
        opacity: 0,
        y: -24,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      })
        .from(
          ".footer-social",
          { opacity: 0, y: -16, duration: 0.4, stagger: 0.06, ease: "power2.out" },
          "-=0.3"
        )
        // Each link column slides down, columns staggered left to right
        .from(
          ".footer-column",
          { opacity: 0, y: -28, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.35"
        )
        // Individual links within columns settle just after their column
        .from(
          ".footer-link",
          { opacity: 0, y: -10, duration: 0.35, stagger: 0.02, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".footer-bottom",
          { opacity: 0, y: -12, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="border-t border-white/10">
      {children}
    </footer>
  );
}