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
        A fast, clean job discovery experience with pragmatic filtering and
        media-rich posts.
      </p>
      <img src="/image/travel.jpg" alt="Job board" />

      <h2>Role</h2>
      <p>Full Stack Developer</p>

      <h2>Highlights</h2>
      <ul>
        <li>RESTful Node.js APIs with Express, cached lookups with Redis</li>
        <li>MongoDB Atlas for flexible schemas and geo search</li>
        <li>Cloudinary-backed media uploads and transformation</li>
        <li>Responsive React/Next.js UI with accessible components</li>
      </ul>

      <h2>Notes</h2>
      <p>
        This case study focuses on pragmatic choices to deliver value quickly
        while keeping the door open for scale.
      </p>
      <p>
        <a href="/#projects">← Back to projects</a>
      </p>
    </article>
  );
}
