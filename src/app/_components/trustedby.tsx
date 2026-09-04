import { Zap, Cloud, CreditCard, Code2, Database, Globe } from "lucide-react";

const clients = [
  { name: "zenith", icon: Zap },
  { name: "Cloudify", icon: Cloud },
  { name: "Payrix", icon: CreditCard },
  { name: "swiftlogix", icon: Code2 },
  { name: "DataNova", icon: Database },
  { name: "NextWave", icon: Globe },
];

export default function TrustedBy() {
  return (
    <div className="mt-5 border-t border-white/10 pt-10">
      <p className="text-center text-sm font-semibold tracking-wide text-white/45 sm:text-base">
        Trusted by innovative businesses
      </p>

      <div className="group relative mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused] sm:gap-20">
          {[...clients, ...clients].map(({ name, icon: Icon }, i) => (
            <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-2.5 text-white/50">
              <Icon className="h-5 w-5 shrink-0 sm:h-8 sm:w-8" aria-hidden="true" />
              <span className="text-base font-semibold sm:text-3xl">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}