import Link from "next/link";
import { contactsData } from "@/utils/data/contacts-data";
import { personalData } from "@/utils/data/personal-data";

const socialLinks = [
  { label: "GitHub", href: contactsData.github },
  { label: "LinkedIn", href: contactsData.linkedIn },
  { label: "DEV", href: `https://dev.to/${contactsData.devUsername}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-gradient-to-b from-transparent via-white/5 to-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Let’s build something exceptional
          </p>
          <p className="mt-3 text-2xl font-semibold text-white">
            {personalData.name}
          </p>
          <p className="mt-2 text-sm text-white/60">
            {personalData.role} · {personalData.location}
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm text-white/70 sm:flex-row sm:gap-12">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
              Contact
            </p>
            <div className="space-y-2">
              <a
                className="block transition hover:text-white"
                href={`mailto:${contactsData.email}`}
              >
                {contactsData.email}
              </a>
              <p>{contactsData.location}</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-black/30 py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {personalData.name}. Crafted with care.
          </p>
          <p>
            Built with Next.js, Tailwind CSS, and a sprinkle of Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
