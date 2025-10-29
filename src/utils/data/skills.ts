import type { SkillGroup } from "@/utils/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "Python", "JavaScript", "C++", "C"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "NestJS", "Django", "REST", "gRPC"],
  },
  {
    title: "Architecture",
    skills: [
      "Domain-driven design",
      "Event-driven",
      "CQRS",
      "SAGA",
      "Observability",
    ],
  },
  {
    title: "Frontend & UI",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloud & Data",
    skills: [
      "AWS",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Platform & DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Git", "Microservices"],
  },
];
