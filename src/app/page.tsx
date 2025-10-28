import HeroSection from "@/app/components/sections/hero";
import AboutSection from "@/app/components/sections/about";
import SkillsSection from "@/app/components/sections/skills";
import ProjectsSection from "@/app/components/sections/projects";
import EducationSection from "@/app/components/sections/education";
import ContactSection from "@/app/components/sections/contact";
import BlogSection, { type BlogPost } from "@/app/components/sections/blog";
import { personalData } from "@/utils/data/personal-data";

async function getBlogPosts(): Promise<BlogPost[]> {
  if (!personalData.devUsername) return [];
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`
    );
    if (!response.ok) return [];
    const articles = (await response.json()) as BlogPost[];
    return articles.filter((article) => article.cover_image).slice(0, 3);
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const posts = await getBlogPosts();
  return (
    <div className="space-y-24">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </div>
  );
}
