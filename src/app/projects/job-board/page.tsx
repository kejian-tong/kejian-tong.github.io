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
      <p>A robust full‑stack job posting app with secure auth and a responsive UI.</p>
      <img src="/image/travel.jpg" alt="Job board" />

      <h2>Role</h2>
      <p>Full Stack Developer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          Developed a robust full‑stack job posting app with a Node.js backend,
          React.js frontend, and REST APIs for efficient CRUD operations
        </li>
        <li>
          Implemented secure authentication middleware using JWT, protecting
          user data with bcrypt encryption
        </li>
        <li>
          Crafted responsive and visually appealing web designs using HTML,
          CSS, Bootstrap, and JavaScript, ensuring a user‑friendly experience
        </li>
        <li>
          Deployed the application on Heroku, storing job and user data on
          MongoDB Atlas and managing image data on Cloudinary
        </li>
      </ul>

      <h2>Notes</h2>
      <p>GitHub link: N/A</p>
      <p>
        <a href="/#projects">← Back to projects</a>
      </p>
    </article>
  );
}
