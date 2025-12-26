import type { Metadata } from "next";
import Image from "next/image";

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
        Community‑powered campsite reviews with rich media uploads and an
        intuitive browsing experience.
        <br />
        <a
          href="https://github.com/kejian-tong/CampSite"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub ↗
        </a>
      </p>
      <Image
        src="/image/ayla.jpg"
        alt="Campsite review"
        width={1200}
        height={700}
        className="rounded-md"
      />

      <h2>Role</h2>
      <p>Full Stack Developer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          <strong>Experience:</strong> Users browse campsites, post reviews, and
          discuss via comments in a responsive UI.
        </li>
        <li>
          <strong>APIs:</strong> RESTful endpoints enable full CRUD; MongoDB
          Atlas stores content; Cloudinary handles images.
        </li>
        <li>
          <strong>Delivery:</strong> Bootstrap + CSS for styling; Node.js
          toolchain with NPM; deployed on Heroku.
        </li>
      </ul>

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
