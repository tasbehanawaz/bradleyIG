"use client";

import { FormEvent, useId, useState } from "react";

const INTEREST_OPTIONS = [
  "Partnership",
  "Operating company",
  "Investor",
  "Media",
  "Speaking",
  "Talent",
  "General",
] as const;

const fieldClass =
  "w-full border border-white/25 bg-transparent px-3 py-2.5 text-white outline-none focus-visible:border-white";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const formId = useId();
  const statusId = `${formId}-status`;
  const consentId = `${formId}-consent`;

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
    <form
      onSubmit={handleSubmit}
      className="body-stack w-full"
      noValidate={false}
      aria-describedby={status === "sent" ? statusId : undefined}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor={`${formId}-name`} className="text-sm text-white">
          Name
          <span className="sr-only"> (required)</span>
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${formId}-organization`}
          className="text-sm text-white"
        >
          Organization
        </label>
        <input
          id={`${formId}-organization`}
          name="organization"
          type="text"
          autoComplete="organization"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${formId}-email`} className="text-sm text-white">
          Business email
          <span className="sr-only"> (required)</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${formId}-interest`} className="text-sm text-white">
          Area of interest
          <span className="sr-only"> (required)</span>
        </label>
        <select
          id={`${formId}-interest`}
          name="interest"
          required
          defaultValue=""
          className="w-full border border-white/25 bg-black px-3 py-2.5 text-white outline-none focus-visible:border-white"
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
        <label htmlFor={`${formId}-message`} className="text-sm text-white">
          Message
          <span className="sr-only"> (required)</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex items-start gap-3 text-sm text-white/85">
        <input
          id={consentId}
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-white"
        />
        <label htmlFor={consentId}>
          I agree to the{" "}
          <a
            href="/privacy"
            className="text-white underline decoration-white/40 underline-offset-[0.2em] hover:text-white"
          >
            Privacy Policy
          </a>{" "}
          and understand that my inquiry will be handled through Bradley
          Innovations Group&apos;s controlled intake process.
          <span className="sr-only"> (required)</span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="border border-white bg-white px-5 py-2.5 text-sm text-black transition-colors hover:bg-white/90"
        >
          Send inquiry
        </button>
      </div>

      {status === "sent" ? (
        <p
          id={statusId}
          role="status"
          aria-live="polite"
          className="text-sm text-white/85"
        >
          Your email client should open with the inquiry. If it does not, write
          to{" "}
          <a
            href="mailto:info@bradleyinnovations.group"
            className="text-white underline decoration-white/40 underline-offset-[0.2em] hover:text-white"
          >
            info@bradleyinnovations.group
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
