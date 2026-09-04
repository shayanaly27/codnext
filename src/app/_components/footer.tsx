import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://codnext.dev", label: "Website" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Maintenance & Support", href: "/services/maintenance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
      { label: "Technologies", href: "/technologies" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-700 px-5 py-5 sm:px-8 lg:px-13">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/images/logo/codnext-logo.png"
                alt="CodNext"
                width={185}
                height={52}
                className="h-auto w-36"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Building innovative software solutions that drive growth and
              create impact.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-[#813dff]/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns + contact */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white">Let&apos;s Connect</h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:hello@codnext.dev"
                    className="flex items-start gap-2.5 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    hello@codnext.dev
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923001234567"
                    className="flex items-start gap-2.5 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                    +92 300 1234567
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/50">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  Karachi, Pakistan
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 CodNext. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-[#ff5c5c]">♥</span> by CodNext Team
          </p>
        </div>
      </div>
    </footer>
  );
}