import type { SocialLink } from "@/utils/types/content";

export interface PersonalData {
  name: string;
  role: string;
  summary: string;
  profileImage: string;
  email: string;
  location: string;
  resumeUrl: string;
  devUsername: string;
  socialLinks: SocialLink[];
  highlights: string[];
  technicalFocus?: string[];
}

export const personalData: PersonalData = {
  name: "Kejian Tong",
  role: "Software Engineer",
  summary:
    "I’m a Software Engineer specializing in backend architecture, distributed systems, and microservice-based application design. I focus on building scalable, reliable, and high-performance platforms that power modern enterprise workflows and data-driven services.",
  profileImage: "/profile.png",
  email: "tongcs2021@gmail.com",
  location: "Seattle, WA",
  resumeUrl:
    "https://drive.google.com/file/d/1jmwN3PGg5uebcsy_Fnvsg95fhE5YNaHv/view?usp=sharing",
  devUsername: "olivertong",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kejian-tong" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tongoliver/" },
  ],
  highlights: [
    "Distributed systems & cloud architecture",
    "Backend engineering with Java, Spring, and Node.js",
    "Full-stack delivery with React, Next.js, and modern UX",
  ],
  technicalFocus: [
    "Java",
    "Go",
    "Python",
    "TypeScript",
    "Node.js",
    "React",
    "Redis",
    "Kafka",
    "Docker",
    "Microservices",
    "REST API",
    "MongoDB",
    "MySQL",
    "Linux",
    "Cloud Platforms",
    "CI/CD",
  ],
};
