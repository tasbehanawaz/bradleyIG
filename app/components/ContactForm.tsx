"use client";

import { FormEvent, useState } from "react";

const INTEREST_OPTIONS = [
  "Partnership",
  "Operating company",
  "Investor",
  "Media",
  "Speaking",
  "Talent",
  "General",
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const organization = String(data.get("organization") || "");
    const email = String(data.get("email") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `BIG website inquiry — ${interest || "General"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Organization: ${organization}`,
        `Email: ${email}`,
        `Area of interest: ${interest}`,
        "",
        message,
      ].join("\n")
    );

    // Routes through the shared inbox until a CRM endpoint is wired.
    window.location.href = `mailto:info@bradleyinnovations.group?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="body-stack max-w-xl">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-text-main">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="border border-gold-dim/30 bg-transparent px-3 py-2 text-text-main outline-none focus:border-gold"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="organization" className="text-sm text-text-main">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="border border-gold-dim/30 bg-transparent px-3 py-2 text-text-main outline-none focus:border-gold"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-text-main">
          Business email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="border border-gold-dim/30 bg-transparent px-3 py-2 text-text-main outline-none focus:border-gold"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="interest" className="text-sm text-text-main">
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className="border border-gold-dim/30 bg-bg px-3 py-2 text-text-main outline-none focus:border-gold"
        >
          <option value="" disabled>
            Select one
          </option>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-text-main">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border border-gold-dim/30 bg-transparent px-3 py-2 text-text-main outline-none focus:border-gold resize-y"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-text-body">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1"
        />
        <span>
          I agree to the{" "}
          <a href="/privacy">Privacy Policy</a> and understand that my
          inquiry will be handled through Bradley Innovations Group&apos;s
          controlled intake process.
        </span>
      </label>

      <div>
        <button
          type="submit"
          className="border border-gold bg-transparent px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-bg"
        >
          Send inquiry
        </button>
      </div>

      {status === "sent" ? (
        <p className="text-sm text-text-body">
          Your email client should open with the inquiry. If it does not, write
          to{" "}
          <a href="mailto:info@bradleyinnovations.group">
            info@bradleyinnovations.group
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
