import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campsite Review Explorer Case Study",
  description:
    "Full‑stack JavaScript app for browsing campsite reviews with CRUD APIs, MongoDB Atlas, and Cloudinary",
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Campsite Review Explorer</h1>
      <p>
        Community‑powered campsite reviews with rich media uploads and a clean
        browsing experience.
        <br />
        <a
          href="https://github.com/kejian-tong/CampSite"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub ↗
        </a>
      </p>
      <img src="/image/ayla.jpg" alt="Campsite review" />

      <h2>Role</h2>
      <p>Full Stack Developer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          Developed a full‑stack JavaScript application, enabling users to
          browse reviews and post comments through an interactive website
        </li>
        <li>
          Created RESTful APIs with comprehensive CRUD functionality, leveraging
          MongoDB Atlas for data storage and Cloudinary for image management
        </li>
        <li>
          Employed HTML for website structure, enhanced aesthetics with
          Bootstrap and CSS, utilized NPM alongside Node.js for UI development,
          and deployed the application on Heroku
        </li>
      </ul>

      <p>
        <a href="/#projects">← Back to projects</a>
      </p>
    </article>
  );
}
