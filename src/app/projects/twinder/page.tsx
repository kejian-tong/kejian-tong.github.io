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
        <br />
        <a
          href="https://github.com/kejian-tong/DistributedSystemDatingApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub ↗
        </a>
      </p>
      <img src="/image/crefin.jpg" alt="Twinder cover" />

      <h2>Role</h2>
      <p>Backend Engineer</p>

      <h2>Highlights</h2>
      <ul>
        <li>
          Developed a distributed cloud-based dating service in Java to process
          an average of 500 million daily requests, with a Redis cache layer for
          fast request processing and AWS EC2 as cloud hosting for high
          performance
        </li>
        <li>
          Optimized data distribution and processing by implementing a Kafka
          cluster with batch compression and Kafka partitions to distribute
          application data to multiple consumers for separate processing tasks,
          reducing dispatching time from 200 ms to 100 ms
        </li>
        <li>
          Implemented the CQRS (Command and Query Responsibility Segregation)
          data storage pattern, optimizing read/write operations for speed.
          Utilized a MongoDB shard cluster for efficient data distribution,
          achieving a 99.98% uptime and ensuring seamless scaling during
          high-traffic periods
        </li>
        <li>
          Conducted stress tests with 2 million requests using self-built
          multi-threaded clients and JMeter, to compare product performance
          before/after applying the above scaling strategies, showing results in
          a throughput uplift from 2000 to 6600 requests/s and a latency
          decrease from 200 to 30 ms
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
