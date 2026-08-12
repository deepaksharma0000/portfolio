export type Service = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description:
      "End-to-end product delivery with Next.js/React frontends and Node.js APIs shaped for production use.",
    outcomes: [
      "Auth, dashboards, and customer flows",
      "Clean TypeScript architecture",
      "Deployable, maintainable codebases",
    ],
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description:
      "Scalable REST APIs, business logic, queues, and service boundaries for real operational workloads.",
    outcomes: [
      "Express/Fastify services",
      "JWT auth and role models",
      "Webhook and job processing",
    ],
  },
  {
    id: "realtime",
    title: "Realtime Systems",
    description:
      "Socket.IO/WebSocket features for live tracking, chat, trading updates, and operational boards.",
    outcomes: [
      "Live status and notifications",
      "Resilient reconnect patterns",
      "Event-driven fan-out",
    ],
  },
  {
    id: "integrations",
    title: "Payments & Third-Party Integrations",
    description:
      "Stripe, Razorpay, Twilio, broker APIs, storage, and webhook-driven external systems.",
    outcomes: [
      "Checkout and subscriptions",
      "Messaging and OTP flows",
      "Broker/API adapters",
    ],
  },
  {
    id: "cloud",
    title: "AWS & Cloud Integration",
    description:
      "Cloud-backed auth and storage patterns used in production work, plus Docker/Nginx/PM2 deployment support.",
    outcomes: [
      "AWS Cognito / Amplify Auth",
      "AWS S3 uploads",
      "VPS + container deploy setups",
    ],
  },
  {
    id: "database",
    title: "Database Architecture",
    description:
      "MongoDB, MySQL, Redis, and ORM/query layers designed around real product data models.",
    outcomes: [
      "Schema and indexing strategy",
      "Prisma / Mongoose / Knex",
      "Caching and queue backing stores",
    ],
  },
  {
    id: "mobile",
    title: "React Native Apps",
    description:
      "Mobile companions and primary apps for job portals, trading, and field/business workflows.",
    outcomes: [
      "Auth and secure storage",
      "API-driven screens",
      "Push and realtime updates",
    ],
  },
  {
    id: "saas",
    title: "SaaS Product Engineering",
    description:
      "Multi-tenant admin/customer systems with subscriptions, roles, and operational tooling.",
    outcomes: [
      "Admin + customer surfaces",
      "Billing and entitlements",
      "Production observability basics",
    ],
  },
];

export const strengths = [
  {
    title: "Real production systems",
    detail:
      "Work spans trading platforms, multi-tenant SaaS, marketplaces, and booking products — not demo CRUDs.",
  },
  {
    title: "Backend depth",
    detail:
      "Comfortable owning auth, queues, webhooks, broker adapters, and failure-prone realtime paths.",
  },
  {
    title: "Full-stack ownership",
    detail:
      "Can shape the UI and the API together so product flows stay coherent from click to database.",
  },
  {
    title: "Integration-heavy delivery",
    detail:
      "Payments, SMS, cloud auth/storage, and third-party broker APIs are part of shipped work.",
  },
  {
    title: "Maintainable architecture",
    detail:
      "Prefers typed shared packages, clear service boundaries, and deployable project structure.",
  },
  {
    title: "Problem-solving under constraints",
    detail:
      "Examples include double-booking protection, reconnect storms, rate limits, and multi-user fan-out.",
  },
];
