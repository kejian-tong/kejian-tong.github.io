"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/utils/data/skills";
import { SectionHeading } from "@/app/components/ui/section-heading";
import type { SkillGroup } from "@/utils/types/content";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Skills"
          title="Tools I ship with"
          description="A practical toolbox across languages, frameworks, and cloud infrastructure."
          align="center"
        />
      </motion.div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group: SkillGroup, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="min-h-[176px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5 shadow-lg shadow-blue-500/5 transition-shadow hover:border-white/20 hover:from-white/15 hover:shadow-xl hover:shadow-blue-500/20"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
