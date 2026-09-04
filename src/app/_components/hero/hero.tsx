import Image from "next/image";
import Link from "next/link";
import { UserCheck, CheckCircle2, Code2, Clock } from "lucide-react";

const features = [
  { icon: UserCheck, label: "Client Focused" },
  { icon: CheckCircle2, label: "Result Driven" },
  { icon: Code2, label: "Clean Code" },
  { icon: Clock, label: "On-Time Delivery" },
];

const clients = ["zenith", "Cloudify", "Payrix", "swiftlogix", "DataNova", "NextWave"];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-22 mx-auto max-w-700 px-5 pt-8 sm:px-8 lg:px-13 lg:pt-5">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#4fb8ff]">
            Building digital excellence
          </span>

          <h1 className="mt-6 text-[42px] font-bold leading-[1.1] text-white sm:text-[52px]">
            We Build Modern Software That{" "}
            <span className="bg-linear-to-r from-[#3b74ff] to-[#a338ff] bg-clip-text text-transparent">
              Drives Growth
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
            CodNext is a software house focused on building powerful,
            scalable and future-ready digital solutions for startups,
            businesses and enterprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="flex h-13 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#0097f5] to-[#9b00ed] px-6 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Explore Our Services
              <span aria-hidden="true" className="text-lg">↗</span>
            </Link>
            <Link
              href="/work"
              className="flex h-13 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-[15px] font-semibold text-white"
            >
              View Our Work
              <span aria-hidden="true" className="text-lg">▶</span>
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/70">
                <Icon className="h-4 w-4 text-[#a338ff]" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: hero graphic */}
        <div className="relative mx-auto h-[min(100vw,32rem)] w-full max-w-lg sm:max-w-xl lg:h-128 lg:max-w-none">
          <Image
            src="/images/placeholder/hero-graphic.png"
            alt="CodNext 3D logo mark on a glowing podium"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

     
    </section>
  );
}