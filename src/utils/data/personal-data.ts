import type { SocialLink } from "@/utils/types/content";

export interface PersonalData {
  name: string;
  role: string;
  summary: string;
  profileImage: string;
  email: string;
  location: string;
  // Optional placeholder for future resume URL; keep empty when not in use.
  resumeUrl?: string;
  devUsername: string;
  // Feature flag to control rendering of the Writing/Blog section without deleting code
  showBlog?: boolean;
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
  // Add your resume URL here when you want to show it again (e.g., Google Drive or PDF link)
  // resumeUrl: "",
  devUsername: "olivertong",
  showBlog: false,
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kejian-tong" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tongoliver/" },
  ],
  highlights: [
    "Distributed systems & cloud architecture",
    "Backend engineering with Java, Go, Python, and Node.js",
    "Full‑stack delivery with React, Next.js, and TypeScript",
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
