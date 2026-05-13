import type { Project } from "@/domain/content";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Scalable Distributed Service for Twinder",
    summary:
      "Distributed Java dating service handling ~500M daily requests with Redis caching and AWS EC2; CQRS storage and Kafka partitions reduced dispatch time 200ms→100ms; stress tests showed 2k→6.6k req/s and 200→30ms latency.",
    tags: [
      "Java",
      "Spring",
      "MongoDB",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "AWS EC2",
    ],
    role: "Backend Engineer",
    slug: "twinder",
    image: "/image/crefin.jpg",
    github: "https://github.com/kejian-tong/DistributedSystemDatingApp",
    caseStudy: {
      title: "Twinder Microservice",
      description:
        "A scalable, event-driven service for high-volume swipe and match workloads",
      imageAlt: "Twinder microservice preview",
      intro:
        "Event-driven backend designed for traffic spikes and consistent latency across a social matching workload.",
      sourceHref: "https://github.com/kejian-tong/DistributedSystemDatingApp",
      sourceLabel: "View source on GitHub",
      highlights: [
        {
          label: "Scale",
          text: "Java microservices processed about 500M daily requests with Redis caching and AWS EC2 autoscaling for sustained performance.",
        },
        {
          label: "Streaming",
          text: "Kafka batch compression and partitioning fanned out workloads to consumers, cutting dispatch time from 200ms to 100ms.",
        },
        {
          label: "CQRS + Sharding",
          text: "CQRS storage design accelerated reads and writes while a sharded MongoDB cluster supported 99.98% uptime under peak load.",
        },
        {
          label: "Performance testing",
          text: "Multi-threaded clients and JMeter drove 2M requests, improving throughput from 2k to 6.6k req/s and latency from 200ms to 30ms.",
        },
      ],
      sections: [
        {
          title: "Architecture",
          body: "The system ingests swipe events at high volume, emits them to Kafka topics, updates read projections, and pushes match candidates into Redis. RabbitMQ supports targeted fan-out to user-specific queues for real-time updates.",
        },
      ],
      notes:
        "Reach out if you want to walk through design choices, bottlenecks, and tradeoffs in more detail.",
    },
  },
  {
    id: 2,
    title: "Job Board Platform",
    summary:
      "Full‑stack job posting app with Node.js REST APIs and React UI; JWT auth with bcrypt; responsive design; deployed on Heroku with MongoDB Atlas and Cloudinary.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    role: "Full Stack Developer",
    slug: "job-board",
    image: "/image/travel.jpg",
    caseStudy: {
      title: "Job Board Platform",
      description:
        "Full-stack job discovery with scalable APIs and a responsive UI",
      imageAlt: "Job board platform preview",
      intro:
        "Full-stack job posting platform with secure authentication and a clean, responsive UI for fast browsing and CRUD operations.",
      highlights: [
        {
          label: "APIs",
          text: "Node.js and Express REST endpoints support postings, users, and media with clean CRUD flows and validations.",
        },
        {
          label: "Authentication",
          text: "JWT-based sessions with bcrypt password hashing and route guards protect authenticated workflows.",
        },
        {
          label: "UI",
          text: "Responsive React/Next.js front end uses Bootstrap components and accessible interaction patterns.",
        },
        {
          label: "Infrastructure",
          text: "Deployed on Heroku with MongoDB Atlas for data and Cloudinary for image storage and transformation.",
        },
      ],
      notes: "Source is private; this case study summarizes key design decisions.",
    },
  },
  {
    id: 3,
    title: "Discord Food Delivery Bot",
    summary:
      "Discord bot for food ordering and restaurant info using Java/JDA and MongoDB Atlas; DI & MVC architecture; built with Gradle and deployed on Fly.io.",
    tags: ["Java", "JDA", "MongoDB", "Fly.io"],
    role: "Backend Engineer",
    slug: "discord-food-bot",
    image: "/image/real-estate.jpg",
    github: "https://github.com/kejian-tong/FoodDeliveryDiscordBot",
    caseStudy: {
      title: "Discord Food Delivery Bot",
      description:
        "Java/JDA bot for food ordering and restaurant info with MongoDB Atlas and Fly.io",
      imageAlt: "Discord food delivery bot preview",
      intro:
        "Conversational assistant on Discord for browsing restaurants and placing orders.",
      sourceHref: "https://github.com/kejian-tong/FoodDeliveryDiscordBot",
      sourceLabel: "View source on GitHub",
      highlights: [
        {
          label: "Platform",
          text: "Java and JDA power intents, commands, and interactive flows while MongoDB Atlas persists restaurant and order data.",
        },
        {
          label: "Architecture",
          text: "Dependency injection and MVC patterns keep handlers modular and services testable.",
        },
        {
          label: "Delivery",
          text: "Gradle builds and Fly.io deployment support low-touch operations and quick rollbacks.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Campsite Review Explorer",
    summary:
      "Full‑stack JS app for browsing campsite reviews and comments; RESTful APIs with CRUD; MongoDB Atlas for data and Cloudinary for images; deployed on Heroku.",
    tags: ["Node.js", "Express", "MongoDB", "Redux", "Heroku"],
    role: "Full Stack Developer",
    slug: "campsite-review",
    image: "/image/ayla.jpg",
    github: "https://github.com/kejian-tong/CampSite",
    caseStudy: {
      title: "Campsite Review Explorer",
      description:
        "Full-stack JavaScript app for browsing campsite reviews with CRUD APIs, MongoDB Atlas, and Cloudinary",
      imageAlt: "Campsite review explorer preview",
      intro:
        "Community-powered campsite reviews with rich media uploads and an intuitive browsing experience.",
      sourceHref: "https://github.com/kejian-tong/CampSite",
      sourceLabel: "View source on GitHub",
      highlights: [
        {
          label: "Experience",
          text: "Users browse campsites, post reviews, and discuss via comments in a responsive UI.",
        },
        {
          label: "APIs",
          text: "RESTful endpoints enable full CRUD, MongoDB Atlas stores content, and Cloudinary handles images.",
        },
        {
          label: "Delivery",
          text: "Bootstrap and CSS provide styling while a Node.js toolchain supports Heroku deployment.",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
