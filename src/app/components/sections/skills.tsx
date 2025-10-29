import { skillGroups } from "@/utils/data/skills";
import { SectionHeading } from "@/app/components/ui/section-heading";
import type { SkillGroup } from "@/utils/types/content";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I ship with"
        description="A practical toolbox across languages, frameworks, and cloud infrastructure."
        align="center"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group: SkillGroup) => (
          <div
            key={group.title}
            className="min-h-[176px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5 shadow-lg shadow-blue-500/5 transition hover:border-white/20 hover:from-white/15"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
              {group.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill: string) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
