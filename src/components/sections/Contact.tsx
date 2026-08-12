"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.projectType) {
      next.projectType = "Select a project type.";
    }
    if (!values.message.trim() || values.message.trim().length < 20) {
      next.message = "Please share at least 20 characters about the project.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }
      setStatus("success");
      setServerMessage(data.message || "Message received.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Something went wrong. Please email me directly.",
      );
    }
  }

  return (
    <section id="contact" className="section-pad border-t border-[var(--border)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Have a project in mind? Let's build it."
            description="Share the product goal, constraints, and timeline. I’ll respond with clarity on scope and next steps."
          />

          <div className="mt-8 space-y-4 text-sm text-[var(--fg-muted)]">
            <p>
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--fg)] hover:text-[var(--accent)]">
                {siteConfig.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={siteConfig.phoneHref} className="text-[var(--fg)] hover:text-[var(--accent)]">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] hover:text-[var(--accent)]"
              >
                github.com/deepaksharma0000
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] hover:text-[var(--accent)]"
              >
                deepak-sharma-b46102232
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Name</span>
                <input
                  className="input-field"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <span className="mt-1 block text-xs text-[var(--danger)]">{errors.name}</span> : null}
              </label>

              <label className="block text-sm">
                <span className="mb-2 block font-medium">Email</span>
                <input
                  className="input-field"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? (
                  <span className="mt-1 block text-xs text-[var(--danger)]">{errors.email}</span>
                ) : null}
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Project type</span>
                <select
                  className="input-field"
                  name="projectType"
                  value={form.projectType}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, projectType: e.target.value }))
                  }
                  aria-invalid={Boolean(errors.projectType)}
                >
                  <option value="">Select type</option>
                  <option value="fullstack">Full-Stack Web App</option>
                  <option value="backend">Backend / API</option>
                  <option value="saas">SaaS Product</option>
                  <option value="fintech">FinTech / Trading</option>
                  <option value="mobile">React Native App</option>
                  <option value="integration">API Integrations</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType ? (
                  <span className="mt-1 block text-xs text-[var(--danger)]">{errors.projectType}</span>
                ) : null}
              </label>

              <label className="block text-sm">
                <span className="mb-2 block font-medium">Budget (optional)</span>
                <select
                  className="input-field"
                  name="budget"
                  value={form.budget}
                  onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                >
                  <option value="">Prefer not to say</option>
                  <option value="under-2k">Under $2k</option>
                  <option value="2k-5k">$2k – $5k</option>
                  <option value="5k-10k">$5k – $10k</option>
                  <option value="10k-plus">$10k+</option>
                  <option value="retainer">Monthly retainer</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="mb-2 block font-medium">Message</span>
              <textarea
                className="input-field min-h-36 resize-y"
                name="message"
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                aria-invalid={Boolean(errors.message)}
                placeholder="What are you building, and what do you need help with?"
              />
              {errors.message ? (
                <span className="mt-1 block text-xs text-[var(--danger)]">{errors.message}</span>
              ) : null}
            </label>

            <button
              type="submit"
              className="button-primary mt-6 w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {serverMessage ? (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-[var(--accent)]" : "text-[var(--danger)]"
                }`}
                role="status"
              >
                {serverMessage}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
