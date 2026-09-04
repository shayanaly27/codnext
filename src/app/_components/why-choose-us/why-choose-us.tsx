// app/_components/why-choose-us/why-choose-us.tsx
import Link from "next/link";
import { Rocket, Users, ShieldCheck, Headset } from "lucide-react";
import WhyChooseUsAnimation from "./_components/why-choose-us-animation";

const stats = [
  { icon: Rocket, value: "10+", label: "Projects Delivered", gradientId: "grad-1" },
  { icon: Users, value: "8+", label: "Happy Clients", gradientId: "grad-2" },
  { icon: ShieldCheck, value: "100%", label: "Commitment", gradientId: "grad-3" },
  { icon: Headset, value: "24/7", label: "Support", gradientId: "grad-4" },
];

const gradients = [
  { id: "grad-1", from: "#a338ff", to: "#7a3dff" },
  { id: "grad-2", from: "#813dff", to: "#2fb8ff" },
  { id: "grad-3", from: "#3b74ff", to: "#2fb8ff" },
  { id: "grad-4", from: "#2fb8ff", to: "#1e90ff" },
];

// Splits "10+" -> { number: 10, suffix: "+" }, "24/7" -> { number: 24, suffix: "/7" }
function splitValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: Number(match[1]), suffix: match[2] };
}

export default function WhyChooseUs() {
  return (
    <WhyChooseUsAnimation>
      {/* Dot-grid background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 60% 60% at 70% 50%, black, transparent)",
        }}
      />

      <svg width="0" height="0" className="absolute">
        <defs>
          {gradients.map(({ id, from, to }) => (
            <linearGradient key={id} id={id} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,460px)_1fr] lg:items-center lg:gap-12">
        {/* Left: copy */}
        <div className="wcu-copy">
          <span className="text-xs font-semibold tracking-wide text-[#8a4dff]">
            Why choose CodNext
          </span>

          <h2 className="mt-4 text-[32px] font-bold leading-[1.2] sm:text-[38px]">
            <span className="block text-white">Your Vision.</span>
            <span className="block text-white">Our Expertise.</span>
            <span className="block">
              <span className="bg-linear-to-r from-[#2fb8ff] to-[#3b74ff] bg-clip-text text-transparent">
                Limitless{" "}
              </span>
              <span className="bg-linear-to-r from-[#813dff] to-[#e13db0] bg-clip-text text-transparent">
                Possibilities.
              </span>
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-white/55">
            We combine creativity, technology and strategy to deliver software
            that makes a real difference.
          </p>

          <Link
            href="/about"
            className="relative mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-lg px-6 text-sm font-semibold text-white"
            style={{
              background:
                "linear-gradient(var(--background),var(--background)) padding-box, linear-gradient(to right,#2fb8ff,#e13db0) border-box",
              border: "1px solid transparent",
            }}
          >
            Know More About Us
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Right: stat cards */}
        <div className="wcu-stats grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, gradientId }) => {
            const { number, suffix } = splitValue(value);
            return (
              <div
                key={label}
                className="wcu-card flex flex-col rounded-2xl border border-white/10 bg-white/2 p-6"
              >
                <Icon
                  className="h-12 w-12"
                  stroke={`url(#${gradientId})`}
                  style={{ filter: "drop-shadow(0 0 8px rgba(163,56,255,0.4))" }}
                />
                <span
                  className="wcu-value mt-6 text-3xl font-bold text-white sm:text-4xl"
                  data-target={number}
                  data-suffix={suffix}
                >
                  0{suffix}
                </span>
                <span className="mt-4 text-sm text-white/55">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </WhyChooseUsAnimation>
  );
}