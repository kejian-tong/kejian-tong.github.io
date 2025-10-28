"use client";

import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { contactsData } from "@/utils/data/contacts-data";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const socials = [
    { label: "GitHub", href: contactsData.github },
    { label: "LinkedIn", href: contactsData.linkedIn },
    { label: "DEV", href: `https://dev.to/${contactsData.devUsername}` },
  ];

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
    if (!emailEnabled) {
      toast.error("Email form isn't configured yet. Falling back to mailto.");
      window.location.href = `mailto:${contactsData.email}?subject=${encodeURIComponent(
        form.title
      )}&body=${encodeURIComponent(form.message)}`;
      return;
    }
    if (form.company) return; // honeypot: silently drop
    if (!form.email || !form.title || !form.message) {
      toast.error("Please fill in your email, title, and message.");
      return;
    }
    setSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          from_name: form.name || "",
          from_email: form.email,
          subject: form.title,
          message: form.message,
          to_email: contactsData.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      toast.success("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", title: "", message: "", company: "" });
    } catch (err) {
      toast.error("Unable to send right now. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s collaborate"
        description="Have an idea or role that could be a great fit? I’d love to hear from you."
        align="center"
      />
      <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-white/10 bg-black/30 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                Your email
              </label>
              <input
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
              <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                Name (optional)
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/25"
                placeholder="Your name"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
              Title
            </label>
            <input
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
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
              Message
            </label>
            <textarea
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
            autoComplete="off"
            tabIndex={-1}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={submitting}
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
              className="text-sm text-white/80 transition hover:text-white"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
