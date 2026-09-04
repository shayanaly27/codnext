// app/_components/contact/contact-form.tsx
"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-white/75">
          Your name
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
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
            autoComplete="email"
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
  );
}   