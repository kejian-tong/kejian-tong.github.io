import type { SocialLink } from "@/domain/content";

export const siteConfig = {
  name: "Kejian Tong",
  role: "Software Engineer / AI Researcher",
  url: "https://kejian-tong.github.io",
  lastUpdated: "2026-05-13",
  email: "tongcs2021@gmail.com",
  location: "Seattle, WA",
  devUsername: "olivertong",
  defaultTitle: "Kejian Tong | Software Engineer | AI Researcher",
  titleTemplate: "%s | Kejian Tong",
  description:
    "Official personal website of Kejian Tong — Software Engineer and AI Researcher specializing in backend architecture, distributed systems, agentic AI, LLM, RAG, prompt engineering, MCP, and NLP.",
  keywords: [
    "Kejian Tong",
    "Software Engineer",
    "AI Researcher",
    "Distributed Systems",
    "Machine Learning",
    "Large Language Models",
    "Natural Language Processing",
    "Backend Engineering",
  ],
  entityTitle: "Kejian Tong - Software Engineer and AI Researcher",
  entityDescription:
    "Kejian Tong is a software engineer and AI researcher specializing in artificial intelligence, machine learning, deep learning, large language models, and natural language processing. He earned his Master of Science in Computer Science from Northeastern University.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kejian-tong" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tongoliver/" },
  ] satisfies SocialLink[],
};

export function absoluteUrl(path = "/") {
  if (!path || path === "/") {
    return siteConfig.url;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath.replace(/\/+$/, "")}`;
}

export function getSocialLink(label: string) {
  return siteConfig.socialLinks.find((link) => link.label === label);
}

export function getDevToUrl(username = siteConfig.devUsername) {
  return username ? `https://dev.to/${username}` : null;
}
