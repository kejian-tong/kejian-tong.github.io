import type { SocialLink } from "@/domain/content";
import { siteConfig } from "@/config/site";

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
  name: siteConfig.name,
  role: siteConfig.role,
  summary:
    "I'm a Software Engineer and AI Researcher specializing in backend architecture, distributed systems, artificial intelligence, and machine learning. I focus on building scalable, intelligent systems that power modern enterprise workflows and data-driven services.",
  profileImage: "/profile.png",
  email: siteConfig.email,
  location: siteConfig.location,
  // Add your resume URL here when you want to show it again (e.g., Google Drive or PDF link)
  // resumeUrl: "",
  devUsername: siteConfig.devUsername,
  showBlog: false,
  socialLinks: [...siteConfig.socialLinks] satisfies SocialLink[],
  highlights: [
    "Backend engineering & distributed systems",
    "AI/ML research & applied machine learning",
    "Full‑stack development with modern frameworks",
  ],
  technicalFocus: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Large Language Models",
    "Java",
    "Python",
    "TypeScript",
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
