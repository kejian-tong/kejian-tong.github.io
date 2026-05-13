export interface SocialLink {
  label: string;
  href: string;
}
export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period?: string;
  location?: string;
}
export interface EducationItem extends TimelineItem {
  credential?: string;
}
export interface ExperienceItem extends TimelineItem {
  bullets?: string[];
}
export interface SkillGroup {
  title: string;
  description?: string;
  skills: string[];
}
export interface Stat {
  label: string;
  value: string;
  helper?: string;
}

export interface Paper {
  title: string;
  authors: string;
  publication: string;
  year: number;
  citedBy?: number;
  href: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface ProjectHighlight {
  label: string;
  text: string;
}

export interface ProjectSection {
  title: string;
  body: string;
}

export interface ProjectCaseStudy {
  title: string;
  description: string;
  imageAlt: string;
  intro: string;
  sourceHref?: string;
  sourceLabel?: string;
  highlights: ProjectHighlight[];
  sections?: ProjectSection[];
  notes?: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  slug: string;
  links?: ProjectLink[];
  image: string;
  github?: string;
  caseStudy: ProjectCaseStudy;
}
