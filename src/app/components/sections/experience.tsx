"use client";

import { experiences } from "@/utils/data/experience";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { FadeInView } from "@/app/components/ui/fade-in-view";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </FadeInView>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <FadeInView key={exp.id} delay={index * 0.1}>
            <li className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-base font-semibold text-white">
                {exp.organization}
              </p>
              <p className="mt-1 text-sm text-white/70">{exp.title}</p>
              {exp.location ? (
                <p className="mt-1 text-xs text-white/40">{exp.location}</p>
              ) : null}
            </li>
          </FadeInView>
        ))}
      </ul>
    </section>
  );
}
