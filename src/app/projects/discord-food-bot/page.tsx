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
        Conversational assistant on Discord for browsing restaurants and placing
        orders.
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
          <strong>Platform:</strong> Java + JDA powers intents, commands, and
          interactive flows; MongoDB Atlas persists restaurant and order data.
        </li>
        <li>
          <strong>Architecture:</strong> Dependency injection and MVC patterns
          yield modular handlers and testable services.
        </li>
        <li>
          <strong>Delivery:</strong> Built with Gradle and deployed on Fly.io
          for low‑touch operations and quick rollbacks.
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
