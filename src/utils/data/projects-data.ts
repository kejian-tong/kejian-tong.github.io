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
  github?: string; // optional external repo link
}

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
  },
];
