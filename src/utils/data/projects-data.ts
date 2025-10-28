export interface ProjectLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  slug: string;
  links?: ProjectLink[];
  image: string; // served from /public
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Scalable Distributed Service for Twinder",
    summary:
      "Designed a CQRS-aligned microservice that keeps high-volume swipe traffic responsive and match generation real-time with Kafka, RabbitMQ, and Redis orchestration.",
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
  },
  {
    id: 2,
    title: "Job Board Platform",
    summary:
      "Full-stack job discovery experience with responsive React UI, Node.js REST APIs, and MongoDB Atlas powering 10K+ postings in the first three months.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    role: "Full Stack Developer",
    slug: "job-board",
    image: "/image/travel.jpg",
  },
  {
    id: 3,
    title: "Discord Food Delivery Bot",
    summary:
      "Conversational ordering assistant with Java/JDA, MongoDB Atlas, and Fly.io deployment, modularized through dependency injection for rapid feature drops.",
    tags: ["Java", "JDA", "MongoDB", "Fly.io"],
    role: "Backend Engineer",
    slug: "discord-food-bot",
    image: "/image/real-estate.jpg",
  },
  {
    id: 4,
    title: "Campsite Review Explorer",
    summary:
      "Community-powered campsite reviews leveraging RESTful APIs, geospatial search, and rich media uploads with Cloudinary integration.",
    tags: ["Node.js", "Express", "MongoDB", "Redux", "Heroku"],
    role: "Full Stack Developer",
    slug: "campsite-review",
    image: "/image/ayla.jpg",
  },
];
