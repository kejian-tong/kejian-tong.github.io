export interface SocialLink {
  label: string;
  href: string;
}
export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  location?: string;
}
export interface EducationItem extends TimelineItem {
  credential?: string;
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
