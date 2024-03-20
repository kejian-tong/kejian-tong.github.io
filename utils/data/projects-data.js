import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Scalable Distributed System for Dating Application",
    description:
      "At the core of Twinder is a RESTful service that we have meticulously designed using the CQRS pattern. This service efficiently handles user swipes, optimizes matches, and seamlessly facilitates communication between users. With our expertise in load balancing, RabbitMQ, Kafka, and Redis, Twinder ensures efficient scaling and enables asynchronous messaging",
    tools: [
      "Java",
      "MongoDB",
      "Postman API",
      "Redis",
      "Load Balancing",
      "CQRS",
      "RabbitMQ",
      "Apache Kafka",
      "Amazon EC2",
    ],
    role: "Backend Engineer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Job Board Application",
    description:
      "A full-stack job board application was created using Node.js, React.js, and REST APIs, featuring responsive designs and optimized CRUD operations, which garnered over 10,000 postings in its first three months, deployed on Heroku with data managed on MongoDB Atlas and Cloudinary.",
    tools: [
      "ReactJS",
      "NodeJS",
      "REST API",
      "HTML",
      "CSS",
      "MongoDB",
      "JavaScript",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Food Delivery Discord Bot ",
    description:
      "An innovative Discord bot for food ordering and restaurant info was developed using Java/JDA and MongoDB Atlas, featuring a modular architecture through OOP, MVC patterns, and dependency injection, deployed on Fly.io with Gradle",
    tools: ["Java", "JDA", "MongoDB"],
    code: "",
    role: "Backend Engineer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Campsite Review Application",
    description:
      "A full-stack JavaScript application was developed, featuring interactive review browsing and commenting capabilities, enhanced by RESTful APIs, MongoDB Atlas, and Cloudinary, with deployment on Heroku.",
    tools: [
      "RESTful API",
      "Redux",
      "HTML",
      "Bootstrap",
      "MongoDB",
      "NodeJS",
      "JavaScript",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
