// app/_components/contact/contact.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import ContactAnimation from "./_components/contact-animation";
import ContactForm from "./_components/contact-form";

const contactDetails = [
  { icon: Mail, label: "Email us", value: "codnext2719@gmail.com", href: "mailto:codnext2719@gmail.com" },
  { icon: Phone, label: "Call us", value: "+92 3373123169", href: "tel:+923001234567" },
  { icon: MapPin, label: "Visit us", value: "Karachi, Pakistan" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-22 w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-2"
    >
      <div className="mx-auto grid w-full max-w-700 gap-12 rounded-3xl border border-white/10 bg-white/2 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-14">
        <div className="flex flex-col justify-center">
          <span className="contact-eyebrow text-xs font-semibold tracking-wide text-[#8a4dff]">
            Let&apos;s connect
          </span>
          <h2 className="contact-heading mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="contact-copy mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
            Tell us what you are building, and we&apos;ll get back to you with a
            thoughtful plan for bringing it to life.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-[#5abfff]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/40">{label}</span>
                    <span className="mt-1 block text-sm font-medium text-white/80">{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="contact-detail flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="contact-detail flex items-center gap-3">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <ContactForm />
      </div>
      <ContactAnimation />
    </section>
  );
}