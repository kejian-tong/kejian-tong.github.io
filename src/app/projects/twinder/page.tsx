import type { Metadata } from "next";
import Image from "next/image";

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
        Event‑driven backend designed for traffic spikes and consistent latency
        across a social matching workload.
        <br />
        <a
          href="https://github.com/kejian-tong/DistributedSystemDatingApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub ↗
        </a>
      </p>
      <Image
        src="/image/crefin.jpg"
        alt="Twinder cover"
        width={1200}
        height={700}
        className="rounded-md"
      />

      <h2>Role</h2>
      <p>Backend Engineer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          <strong>Scale:</strong> Java microservices processed ~
          <strong>500M daily requests</strong> with a Redis caching layer and
          AWS EC2 autoscaling for sustained performance.
        </li>
        <li>
          <strong>Streaming:</strong> Kafka cluster with batch compression and
          partitioning fanned out workloads to multiple consumers, cutting
          dispatch time from <strong>200ms → 100ms</strong>.
        </li>
        <li>
          <strong>CQRS + Sharding:</strong> CQRS storage design accelerated
          reads/writes; a sharded MongoDB cluster delivered
          <strong> 99.98% uptime</strong> with seamless scale under peak load.
        </li>
        <li>
          <strong>Perf testing:</strong> Multi‑threaded clients and JMeter drove
          <strong>2M</strong> requests to benchmark improvements: throughput
          <strong>2k → 6.6k req/s</strong>, latency{" "}
          <strong>200ms → 30ms</strong>.
        </li>
      </ul>

      <h2>Architecture</h2>
      <p>
        The system ingests swipe events at high volume, emitting them to Kafka
        topics. A set of workers transforms events, updating projections and
        pushing match candidates into Redis. RabbitMQ is used for targeted
        fan‑out to user‑specific queues for real‑time updates.
      </p>

      <h2>Notes</h2>
      <p>
        If you want to learn more or see code, reach out—happy to walk through
        design choices and tradeoffs.
      </p>
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
