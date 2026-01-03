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
  role: "Software Engineer / AI Researcher",
  summary:
    "I'm a Software Engineer and AI Researcher specializing in backend architecture, distributed systems, artificial intelligence, and machine learning. I focus on building scalable, intelligent systems that power modern enterprise workflows and data-driven services.",
  profileImage: "/profile.png",
  email: "tongcs2021@gmail.com",
  location: "Seattle, WA",
  // Add your resume URL here when you want to show it again (e.g., Google Drive or PDF link)
  // resumeUrl: "",
  devUsername: "olivertong",
  showBlog: false,
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kejian-tong" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tongoliver/" },
  ],
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
