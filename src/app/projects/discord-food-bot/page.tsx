import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Food Delivery Bot Case Study",
  description:
    "Java/JDA bot for food ordering and restaurant info with MongoDB Atlas and Fly.io",
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Discord Food Delivery Bot</h1>
      <p>
        A conversational assistant built on Discord to browse restaurants and
        place food orders.
        <br />
        <a
          href="https://github.com/kejian-tong/FoodDeliveryDiscordBot"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub ↗
        </a>
      </p>
      <img src="/image/real-estate.jpg" alt="Discord food bot" />

      <h2>Role</h2>
      <p>Backend Engineer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          Created an innovative Discord bot for food ordering and restaurant
          information using Java/JDA and MongoDB Atlas
        </li>
        <li>
          Employed dependency injection & MVC design patterns, applying OOP
          concepts for a modular and maintainable architecture
        </li>
        <li>
          Built and deployed the app using Gradle on Fly.io, ensuring a seamless
          user experience
        </li>
      </ul>

      <p>
        <a href="/#projects">← Back to projects</a>
      </p>
    </article>
  );
}
