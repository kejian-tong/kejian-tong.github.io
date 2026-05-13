import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/config/site";
import { getProjectBySlug, projectsData } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonical = absoluteUrl(`/projects/${project.slug}`);
  const title = `${project.caseStudy.title} Case Study`;

  return {
    title,
    description: project.caseStudy.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: project.caseStudy.description,
      url: canonical,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 700,
          alt: project.caseStudy.imageAlt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{project.caseStudy.title}</h1>
      <p>
        {project.caseStudy.intro}
        {project.caseStudy.sourceHref ? (
          <>
            <br />
            <a
              href={project.caseStudy.sourceHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.caseStudy.sourceLabel ?? "View source"} ↗
            </a>
          </>
        ) : null}
      </p>

      <Image
        src={project.image}
        alt={project.caseStudy.imageAlt}
        width={1200}
        height={700}
        className="rounded-md"
        priority
      />

      <h2>Role</h2>
      <p>{project.role}</p>

      <h2>Highlights</h2>
      <ul>
        {project.caseStudy.highlights.map((highlight) => (
          <li key={highlight.label}>
            <strong>{highlight.label}:</strong> {highlight.text}
          </li>
        ))}
      </ul>

      {project.caseStudy.sections?.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}

      {project.caseStudy.notes ? (
        <>
          <h2>Notes</h2>
          <p>{project.caseStudy.notes}</p>
        </>
      ) : null}

      <p className="mt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          ← Back to projects
        </Link>
      </p>
    </article>
  );
}
