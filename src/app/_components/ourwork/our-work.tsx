// app/_components/our-work/our-work.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OurWorkAnimation from "./_components/our-work-animation";
import WorkTrack, { type Project } from "./_components/work-track";

const projects: Project[] = [
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
  return (
    <section
      id="work"
      className="scroll-mt-22 mx-auto w-full max-w-700 overflow-hidden px-5 py-10 sm:px-8 lg:px-10"
    >
      <div className="ow-header flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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

      <WorkTrack projects={projects} />
      <OurWorkAnimation />
    </section>
  );
}