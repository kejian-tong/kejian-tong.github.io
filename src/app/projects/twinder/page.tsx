import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twinder Microservice Case Study",
  description:
    "A scalable, event-driven service for high-volume swipe and match workloads",
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Twinder Microservice</h1>
      <p>
        Designing for spikes and consistency across a social matching workload.
      </p>
      <img src="/image/crefin.jpg" alt="Twinder cover" />

      <h2>Role</h2>
      <p>Backend Engineer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          CQRS-aligned design separated write-heavy swipe ingestion from
          read-optimized match queries
        </li>
        <li>
          Kafka for event streaming, RabbitMQ for targeted fanout, Redis for hot
          paths
        </li>
        <li>
          MongoDB with strategic compound indexes to balance write throughput
          and query performance
        </li>
        <li>
          Horizontal scaling on AWS EC2 with autoscaling policies and health
          probes
        </li>
      </ul>

      <h2>Architecture</h2>
      <p>
        The system ingests swipe events at high volume, emitting them to Kafka
        topics. A set of workers transforms events, updating projections and
        pushing match candidates into Redis. RabbitMQ is used for targeted
        fan-out to user-specific queues for real-time updates.
      </p>

      <h2>Notes</h2>
      <p>
        If you want to learn more or see code, reach out—happy to walk through
        design choices and tradeoffs.
      </p>
      <p>
        <a href="/#projects">← Back to projects</a>
      </p>
    </article>
  );
}
