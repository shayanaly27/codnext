import Link from "next/link";
import { Code2, Smartphone, Cloud, MousePointer2, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions built to solve your unique business challenges.",
    href: "/services/custom-software",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description: "High-performance web and mobile apps that deliver seamless user experiences.",
    href: "/services/web-mobile",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Scalable, secure and efficient cloud architectures with modern DevOps practices.",
    href: "/services/cloud-devops",
  },
  {
    icon: MousePointer2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive and user-centered designs that turn ideas into impact.",
    href: "/services/ui-ux",
  },


  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Reliable support and proactive maintenance to keep your product running at its best.",
    href: "/services/maintenance",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="relative scroll-mt-22 mx-auto max-w-700 overflow-hidden px-5 py-20 sm:px-8 lg:px-13">
      {/* Dot-grid background accent, top right */}
      <div
        className="pointer-events-none absolute -top-10 right-0 h-72 w-72 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(circle, black, transparent 70%)",
        }}
      />

      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2fb8ff" />
            <stop offset="100%" stopColor="#a338ff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative">
        <span className="text-xs font-semibold tracking-wide text-[#8a4dff]">
          What we do
        </span>
        <h2 className="mt-3 text-[32px] font-bold text-white sm:text-[38px]">
          End-to-End Digital Solutions
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
          We design, develop and deliver digital products that help businesses
          scale and stand out.
        </p>
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map(({ icon: Icon, title, description, href }) => (
          <div
            key={title}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#813dff]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(163,56,255,0.25)]"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-0 rounded-xl bg-[#813dff]/0 blur-lg transition-colors duration-300 group-hover:bg-[#813dff]/25" />
              <Icon
                className="relative h-6 w-6"
                stroke="url(#icon-gradient)"
                style={{ filter: "drop-shadow(0 0 6px rgba(163,56,255,0.35))" }}
              />
            </div>

            <h3 className="mt-5 text-[17px] font-semibold text-white">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
              {description}
            </p>

            <Link
              href={href}
              aria-label={`Learn more about ${title}`}
              className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-[#0097f5] hover:to-[#9b00ed] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a338ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}