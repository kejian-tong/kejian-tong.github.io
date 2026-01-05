"use client";

import { personalData } from "@/utils/data/personal-data";
import { FadeInView } from "@/app/components/ui/fade-in-view";

// Quick Facts card removed per request to simplify About section.

export default function AboutSection() {
  return (
    <section id="about" className="relative mt-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <FadeInView className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            About
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Software Engineer & AI Researcher
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-white/70">
            <p>
              I&apos;m a Software Engineer and AI Researcher specializing in
              backend architecture, distributed systems, artificial
              intelligence, and machine learning. I focus on building scalable,
              intelligent systems that power modern enterprise workflows and
              data-driven services.
            </p>
            <p>
              I earned my Master of Science in Computer Science from
              Northeastern University and have published peer-reviewed research
              in IEEE and international conferences. My academic work focuses on
              intelligent systems, natural language processing, and large-scale
              machine learning applications.
            </p>
            <p>
              In industry, I&apos;ve designed and optimized distributed
              microservices with modern technologies, enabling real-time data
              processing at scale. I combine strong engineering principles with
              research insights to build practical AI solutions that solve
              real-world problems.
            </p>
          </div>
          {personalData.technicalFocus &&
          personalData.technicalFocus.length > 0 ? (
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Technical Focus
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {personalData.technicalFocus.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </FadeInView>
      </div>
    </section>
  );
}
