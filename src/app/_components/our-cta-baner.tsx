import Link from "next/link";
import { Send, ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-22 mx-auto max-w-700 w-full px-5 py-16 sm:px-8 lg:px-13">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a3fe0] to-[#9b00ed] px-6 py-10 sm:px-10 lg:px-14">
        {/* Decorative network graphic, right side */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 300"
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[220px] w-[280px] -translate-y-1/2 opacity-25 sm:block lg:right-24 lg:h-[260px] lg:w-[340px]"
        >
          <g stroke="white" strokeWidth="1" fill="none">
            <path d="M60 150 L150 80 L260 100 L320 180 L220 230 L100 220 Z" />
            <path d="M150 80 L100 220" />
            <path d="M260 100 L100 220" />
            <path d="M150 80 L320 180" />
          </g>
          <g fill="white">
            <circle cx="60" cy="150" r="4" />
            <circle cx="150" cy="80" r="4" />
            <circle cx="260" cy="100" r="5" />
            <circle cx="320" cy="180" r="4" />
            <circle cx="220" cy="230" r="4" />
            <circle cx="100" cy="220" r="5" />
          </g>
        </svg>

        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-5 sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Send className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/80">
                Let&apos;s build something amazing together and bring your
                ideas to life.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex h-12 w-fit shrink-0 items-center gap-2 rounded-lg bg-[#0a0d16] px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}