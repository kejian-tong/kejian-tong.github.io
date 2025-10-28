import Link from "next/link";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { contactsData } from "@/utils/data/contacts-data";

export default function ContactSection() {
  const socials = [
    { label: "GitHub", href: contactsData.github },
    { label: "LinkedIn", href: contactsData.linkedIn },
    { label: "DEV", href: `https://dev.to/${contactsData.devUsername}` },
  ];

  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s collaborate"
        description="Have an idea or role that could be a great fit? I’d love to hear from you."
        align="center"
      />
      <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-white/10 bg-black/30 p-6 text-center">
        <p className="text-white/70">Prefer email?</p>
        <a
          href={`mailto:${contactsData.email}`}
          className="mt-3 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          {contactsData.email}
        </a>
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
