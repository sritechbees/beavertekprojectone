"use client";

import { useState, type FormEvent } from "react";

const interestOptions = [
  "Automate with AI",
  "Build software",
  "See my data",
  "Modernize my systems",
  "Security & managed support",
  "BeaverHealthAI product demo",
  "Advance Analytics & BI",
  "Application Development",
  "Quality Assurance",
  "Maintenance & Support",
  "Something else",
];

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submission = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      const result: { success?: boolean; error?: string } = await response.json();
      if (!response.ok || !result.success) {
        setErrorMessage(result.error || "We could not send your message. Please try again.");
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setErrorMessage("We could not reach the server. Please try again in a moment.");
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="contact-form-heading">
        <span className="contact-form-step">01 <span>/</span> YOUR PROJECT</span>
        <h2>Tell us what you&apos;re working on.</h2>
        <p>
          Let&apos;s work together. Email us at{" "}
          <a href="mailto:info@beavertek.com">info@beavertek.com</a> or message us here.
          A senior engineer will get back to you within one business day.
        </p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Your name <b>*</b></span>
          <input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Jane Smith" />
        </label>
        <label className="form-field">
          <span>Work email <b>*</b></span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="jane@company.com" />
        </label>
        <label className="form-field">
          <span>Phone <small>Optional</small></span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+1 (555) 000-0000" />
        </label>
        <label className="form-field">
          <span>Company <small>Optional</small></span>
          <input name="company" autoComplete="organization" maxLength={120} placeholder="Your company" />
        </label>
        <label className="form-field form-field-wide">
          <span>What can we help with? <b>*</b></span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {interestOptions.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
        </label>
        <label className="form-field form-field-wide">
          <span>Tell us a little about it <b>*</b></span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={5}
            placeholder="What are you looking to build, improve or solve?"
          />
        </label>
      </div>

      <label className="form-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-submit-row">
        <button className="button button-yellow form-submit" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending your message…" : "Send project inquiry"}
          <span aria-hidden="true">{state === "sending" ? "…" : "↗"}</span>
        </button>
        <p>Please don&apos;t include sensitive or patient information.</p>
      </div>

      <div className="form-status" aria-live="polite" role="status">
        {state === "success" && (
          <p className="form-success">Thanks for reaching out. Your message has been sent to our team.</p>
        )}
        {state === "error" && <p className="form-error">{errorMessage}</p>}
      </div>
    </form>
  );
}