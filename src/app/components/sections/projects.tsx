"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/utils/data/projects-data";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { FadeInView } from "@/app/components/ui/fade-in-view";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="End-to-end systems and products I've designed, built, and shipped."
        />
      </FadeInView>
      {/* Use a clean 2x2 layout on larger screens */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30"
          >
            <div className="relative h-44 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-slate-200 underline-offset-4 hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  {project.role}
                </span>
              </div>
              <p className="line-clamp-2 text-sm text-white/70">
                {project.summary}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-slate-200"
                >
                  Case study
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
