"use client";

import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { FadeInView } from "@/app/components/ui/fade-in-view";
import { contactsData } from "@/utils/data/contacts-data";
import { getDevToUrl } from "@/utils/data/site-config";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function getErrorMessage(err: unknown) {
  if (err && typeof err === "object") {
    const maybeError = err as { message?: unknown; text?: unknown };
    if (typeof maybeError.text === "string") return maybeError.text;
    if (typeof maybeError.message === "string") return maybeError.message;
  }
  return "";
}

export default function ContactSection() {
  const devToUrl = getDevToUrl(contactsData.devUsername);
  const socials = [
    { label: "GitHub", href: contactsData.github },
    { label: "LinkedIn", href: contactsData.linkedIn },
    ...(devToUrl ? [{ label: "DEV", href: devToUrl }] : []),
  ].filter((item) => item.href);

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    // honeypot to reduce spam
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const emailEnabled = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return; // ignore rapid double-submits
    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      title: form.title.trim(),
      message: form.message.trim(),
      company: form.company.trim(),
    };
    const emailValid = /\S+@\S+\.\S+/.test(trimmed.email);

    if (trimmed.company) return; // honeypot: silently drop
    if (!trimmed.name || !trimmed.email || !trimmed.title || !trimmed.message) {
      toast.error("Please fill in your name, email, title, and message.");
      return;
    }
    if (!emailValid) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!emailEnabled) {
      toast.error("Email form isn't configured yet. Falling back to mailto.");
      const subject = encodeURIComponent(trimmed.title);
      const body = encodeURIComponent(
        `${trimmed.message}\n\nFrom: ${trimmed.name} <${trimmed.email}>`,
      );
      window.location.href = `mailto:${contactsData.email}?subject=${subject}&body=${body}`;
      return;
    }
    setSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          // Align keys with your EmailJS template: {{name}}, {{email}}, {{title}}, {{message}}, {{time}}
          name: trimmed.name || "",
          email: trimmed.email,
          title: trimmed.title,
          message: trimmed.message,
          time: new Date().toString(),
        },
        { publicKey: PUBLIC_KEY }
      );
      toast.success("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", title: "", message: "", company: "" });
    } catch (err: unknown) {
      // Improve diagnostics: surface common EmailJS errors
      const msg = getErrorMessage(err);
      if (msg.includes("origin") || msg.includes("Origin is not allowed")) {
        toast.error(
          "EmailJS blocked this domain. Add your site URL to Allowed Origins in EmailJS settings."
        );
      } else if (msg.includes("template") || msg.includes("service")) {
        toast.error(
          "EmailJS service/template mismatch. Check Service ID, Template ID, and variables."
        );
      } else {
        toast.error("Unable to send right now. Please email me directly.");
      }
      if (typeof window !== "undefined") {
        // Log raw error for debugging in browser console without exposing to users
        // eslint-disable-next-line no-console
        console.error("EmailJS send error:", err);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading
          eyebrow="Contact"
          title="Let's collaborate"
          description="Have an idea or role that could be a great fit? I'd love to hear from you."
          align="center"
        />
      </FadeInView>
      <FadeInView delay={0.2}>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-white/10 bg-black/30 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wide text-white/50"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/25"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wide text-white/50"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/25"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-title"
                className="block text-xs font-semibold uppercase tracking-wide text-white/50"
              >
                Title
              </label>
              <input
                id="contact-title"
                type="text"
                name="title"
                required
                value={form.title}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/25"
                placeholder="How can I help?"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wide text-white/50"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/25"
                placeholder="Share a bit about your idea or opportunity..."
              />
            </div>
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="hidden"
              aria-hidden="true"
              autoComplete="off"
              tabIndex={-1}
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
              {!emailEnabled ? (
                <a
                  href={`mailto:${contactsData.email}`}
                  className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  Email me directly
                </a>
              ) : null}
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 transition hover:text-white"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
