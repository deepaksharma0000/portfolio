export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

/**
 * Only technologies verified across Deepak's local project repositories.
 * Intentionally excludes unverified stack items (e.g. NestJS, Drizzle, EventBridge, SQS).
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Product UIs that stay fast, accessible, and production-ready.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Native",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, auth, queues, and event-driven execution paths.",
    skills: [
      "Node.js",
      "Express.js",
      "Fastify",
      "Python",
      "TypeScript",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "BullMQ",
      "Event-driven architecture",
      "JWT Auth",
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Schema design, ORMs, and caching for real workloads.",
    skills: [
      "MongoDB",
      "MySQL",
      "Mongoose",
      "Prisma",
      "Knex",
      "Redis",
      "SQL",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud services and deployment practices used in production work.",
    skills: [
      "AWS Cognito (Amplify Auth)",
      "AWS S3",
      "Docker",
      "Nginx",
      "PM2",
      "Git",
      "GitHub",
      "VPS deployment",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Payments, messaging, and third-party / broker platforms.",
    skills: [
      "Stripe",
      "Razorpay",
      "Twilio",
      "SendGrid",
      "Webhooks",
      "Angel One SmartAPI",
      "Upstox",
      "Alice Blue",
      "Zerodha Kite",
      "Firebase",
      "Cloudinary",
    ],
  },
];
