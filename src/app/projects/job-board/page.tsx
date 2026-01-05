import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://kejian-tong.github.io";

export const metadata: Metadata = {
  title: "Job Board Platform Case Study",
  description:
    "Full-stack job discovery with scalable APIs and a responsive UI",
  alternates: {
    canonical: `${SITE_URL}/projects/job-board`,
  },
  openGraph: {
    title: "Job Board Platform Case Study",
    description:
      "Full-stack job discovery with scalable APIs and a responsive UI",
    url: `${SITE_URL}/projects/job-board`,
    images: [
      {
        url: "/image/travel.jpg",
        width: 1200,
        height: 700,
        alt: "Job board platform preview",
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Job Board Platform</h1>
      <p>
        Full‑stack job posting platform with secure authentication and a clean,
        responsive UI for fast browsing and CRUD operations.
      </p>
      <Image
        src="/image/travel.jpg"
        alt="Job board"
        width={1200}
        height={700}
        className="rounded-md"
      />

      <h2>Role</h2>
      <p>Full Stack Developer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          <strong>APIs:</strong> Node.js + Express REST endpoints for postings,
          users, and media; clean CRUD flows and validations.
        </li>
        <li>
          <strong>Auth:</strong> JWT‑based sessions with bcrypt password
          hashing; middleware guards protected routes.
        </li>
        <li>
          <strong>UI:</strong> Responsive React/Next.js front end with Bootstrap
          components and accessible patterns.
        </li>
        <li>
          <strong>Infra:</strong> Deployed on Heroku; MongoDB Atlas for data;
          Cloudinary for image storage and transformation.
        </li>
      </ul>

      <h2>Notes</h2>
      <p>Source is private; case study summarizes key design decisions.</p>
      <p className="mt-8">
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          ← Back to projects
        </a>
      </p>
    </article>
  );
}
