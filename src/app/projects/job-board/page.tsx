import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Board Platform Case Study",
  description:
    "Full-stack job discovery with scalable APIs and a responsive UI",
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Job Board Platform</h1>
      <p>
        Full‑stack job posting platform with secure authentication and a clean,
        responsive UI for fast browsing and CRUD operations.
      </p>
      <img src="/image/travel.jpg" alt="Job board" />

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
