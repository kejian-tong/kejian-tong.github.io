"use client";

import { motion } from "framer-motion";
import { educations } from "@/content/educations";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeInView } from "@/components/ui/fade-in-view";
import type { EducationItem } from "@/domain/content";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading eyebrow="Education" title="Foundations of my craft" />
      </FadeInView>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {educations.map((edu: EducationItem, index) => {
          const detailLine = [edu.period, edu.location]
            .filter(Boolean)
            .join(" · ");

          return (
            <motion.li
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-white/10 bg-black/30 p-5"
            >
              <p className="text-base font-semibold text-white">{edu.title}</p>
              <p className="mt-1 text-sm text-white/80">{edu.organization}</p>
              {detailLine ? (
                <p className="mt-1 text-sm text-white/60">{detailLine}</p>
              ) : null}
              {edu.credential ? (
                <p className="mt-2 text-sm text-white/70">{edu.credential}</p>
              ) : null}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
