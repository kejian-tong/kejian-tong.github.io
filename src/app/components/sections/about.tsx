"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { contactsData } from "@/utils/data/contacts-data";
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
            Engineer focused on scalable, reliable systems.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-white/70">
            <p>
              I’m a Software Engineer specializing in backend architecture,
              distributed systems, and microservice-based application design. I
              focus on building scalable, reliable, and high-performance
              platforms that power modern enterprise workflows and data-driven
              services.
            </p>
            <p>
              In recent projects, I’ve designed and optimized distributed
              microservices with Kafka, Redis, and RESTful APIs, enabling
              asynchronous communication and real-time data processing at scale.
              I’ve also containerized and deployed applications using Docker and
              CI/CD pipelines, ensuring efficient delivery and consistent system
              behavior across multiple environments.
            </p>
            <p>
              My work emphasizes system scalability, fault tolerance, and
              performance optimization—from designing event-driven pipelines to
              fine-tuning database queries for high-concurrency workloads. I
              value clean architecture, well-documented APIs, and automation
              that drives engineering efficiency.
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
