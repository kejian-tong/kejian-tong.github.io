import { educations } from "@/utils/data/educations";
import { SectionHeading } from "@/app/components/ui/section-heading";
import type { EducationItem } from "@/utils/types/content";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeading eyebrow="Education" title="Foundations of my craft" />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {educations.map((edu: EducationItem) => (
          <li
            key={edu.id}
            className="rounded-2xl border border-white/10 bg-black/30 p-5"
          >
            <p className="text-base font-semibold text-white">{edu.title}</p>
            <p className="mt-1 text-sm text-white/80">{edu.organization}</p>
            <p className="mt-1 text-sm text-white/60">
              {edu.period}
              {edu.location ? ` · ${edu.location}` : ""}
            </p>
            {edu.credential ? (
              <p className="mt-2 text-sm text-white/70">{edu.credential}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
