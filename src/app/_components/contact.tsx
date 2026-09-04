"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "Email us", value: "codnext2719@gmail.com", href: "mailto:codnext2719@gmail.com" },
  { icon: Phone, label: "Call us", value: "+92 3373123169", href: "tel:+923001234567" },
  { icon: MapPin, label: "Visit us", value: "Karachi, Pakistan" },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-22 w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-2">
      <div className="mx-auto grid w-full max-w-700 gap-12 rounded-3xl border border-white/10 bg-white/2 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-14">
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-wide text-[#8a4dff]">
            Let&apos;s connect
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
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
                <a key={label} href={href} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-3">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-white/75">
              Your name
              <input
                required
                name="name"
                type="text"
                placeholder="John Doe"
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-white/3 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#5abfff]"
              />
            </label>
            <label className="text-sm font-medium text-white/75">
              Email address
              <input
                required
                name="email"
                type="email"
                placeholder="john@company.com"
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-white/3 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#5abfff]"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-white/75">
            Tell us about your project
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What can we help you build?"
              className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-white/3 px-4 py-3 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#5abfff]"
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#0097f5] to-[#9b00ed] text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
          >
            {isSubmitted ? "Message ready to send" : "Send message"}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          {isSubmitted && (
            <p className="mt-3 text-center text-xs text-[#68c7ff]" role="status">
              Thanks. We&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
