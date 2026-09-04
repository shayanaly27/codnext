"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categoryStyles: Record<string, string> = {
  "Web Application": "bg-[#2fb8ff]/15 text-[#5cc8ff] border-[#2fb8ff]/30",
  "Mobile App": "bg-[#a338ff]/15 text-[#c085ff] border-[#a338ff]/30",
};

const projects = [
  {
    title: "Analytics Dashboard",
    category: "Web Application",
    description: "Data analytics platform for real-time business insights.",
    image: "/images/work/01_analytics_dashboard.png",
    href: "/work/analytics-dashboard",
  },
  {
    title: "FitTrack Mobile App",
    category: "Mobile App",
    description: "Health & fitness tracking application with analytics.",
    image: "/images/work/02_fittrack_mobile_app.png",
    href: "/work/fittrack",
  },
  {
    title: "NextShop E-Commerce",
    category: "Web Application",
    description: "Modern e-commerce platform with admin panel.",
    image: "/images/work/03_nextshop_ecommerce.png",
    href: "/work/nextshop",
  },
  {
    title: "FinSmart Dashboard",
    category: "Web Application",
    description: "Financial management & analytics dashboard.",
    image: "/images/work/04_finsmart_dashboard.png",
    href: "/work/finsmart",
  },
];

export default function OurWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = cardRefs.current.findIndex((el) => el === visible.target);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { root: track, threshold: [0.6] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section id="work" className="scroll-mt-22 mx-auto w-full max-w-700 overflow-hidden px-5 py-10 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold tracking-wide text-[#8a4dff]">
            Our work
          </span>
          <h2 className="mt-3 text-[32px] font-bold text-white sm:text-[38px]">
            Projects We&apos;re Proud Of
          </h2>
        </div>

        <Link
          href="/work"
          className="inline-flex h-11 w-fit items-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-[#a338ff]/50"
        >
          View All Projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-10 flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)]"
          >
            <Link
              href={project.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 transition-colors hover:border-[#813dff]/40"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-white/3">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${
                    categoryStyles[project.category] ?? "bg-white/10 text-white/70 border-white/15"
                  }`}
                >
                  {project.category}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-2 flex flex-1 items-end justify-between gap-3">
                  <p className="text-sm leading-relaxed text-white/50">
                    {project.description}
                  </p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/60 transition-colors group-hover:text-white" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {projects.map((project, i) => (
          <button
            key={project.title}
            type="button"
            aria-label={`Go to ${project.title}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-6 bg-linear-to-r from-[#0097f5] to-[#9b00ed]"
                : "w-2 bg-white/20 hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}