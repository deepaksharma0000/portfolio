export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  duration: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  placeholder?: boolean;
};

/**
 * Employment employer/dates from Experience Letter are marked for manual update.
 * Contributions below are grounded in verified project repositories only.
 */
export const experiences: ExperienceItem[] = [
  {
    id: "employment-placeholder",
    role: "Full-Stack Developer",
    company: "[UPDATE: Company from Experience Letter]",
    companyNote:
      "Replace with employer name, official title, and exact dates from your Experience / Relieving letters.",
    duration: "[UPDATE: Employment dates]",
    location: "India",
    summary:
      "Professional full-stack engineering role. Keep this entry aligned with your official documents.",
    responsibilities: [
      "Update with responsibilities from your Experience Letter",
      "Do not invent metrics, titles, or client names",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    placeholder: true,
  },
  {
    id: "fintech-trading",
    role: "Full-Stack / Backend Engineer",
    company: "Algo Trading & FinTech Platforms",
    companyNote: "Trustifyee, Darixo Solution, Prime Alpha, live trading adapters",
    duration: "Production systems",
    summary:
      "Built multi-broker trading backends with signal fan-out, session management, order execution queues, and admin/subscriber dashboards.",
    responsibilities: [
      "Designed broker adapter layers for Angel One, Upstox, Alice Blue, and Zerodha integrations",
      "Implemented signal broadcast, eligibility checks, BullMQ trade workers, and WebSocket order updates",
      "Hardened websocket reconnect behavior and production deployment runbooks (PM2 / VPS)",
      "Worked with AWS Amplify Auth (Cognito) on trading admin frontends and AWS S3 for uploads",
    ],
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "MySQL",
      "Redis",
      "BullMQ",
      "WebSockets",
      "AWS Cognito",
      "AWS S3",
      "React",
      "PM2",
    ],
  },
  {
    id: "saas-platforms",
    role: "Full-Stack Developer",
    company: "SaaS & Marketplace Products",
    companyNote: "GarageOS, PoojaPath, CLIPRANT, Hire Job Portal",
    duration: "Multi-app product delivery",
    summary:
      "Delivered multi-tenant and multi-app platforms spanning admin dashboards, customer apps, React Native clients, payments, and real-time operations.",
    responsibilities: [
      "Built GarageOS multi-tenant garage SaaS with Socket.io job tracking and Razorpay payments",
      "Shipped PoojaPath hyperlocal marketplace with geo-aware delivery flows, Redis/BullMQ, Twilio, and Razorpay",
      "Developed CLIPRANT AI video editing monorepo (Next.js + Fastify + MongoDB + Redis + Stripe)",
      "Built Hire job portal backend + React Native apps with subscriptions, Socket chat, Redis, and Razorpay",
    ],
    technologies: [
      "Next.js",
      "React",
      "React Native",
      "Express",
      "Fastify",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Stripe",
      "Razorpay",
      "Twilio",
      "Docker",
    ],
  },
  {
    id: "booking-commerce",
    role: "Full-Stack Developer",
    company: "Booking & Commerce Applications",
    companyNote: "Hotel Ribolla, Barber Booking, LunaLinks, Unik Naturals, B2B Baarat",
    duration: "Client & product builds",
    summary:
      "Delivered booking systems and e-commerce experiences with auth, dashboards, media handling, and mobile companions.",
    responsibilities: [
      "Built Hotel Ribolla full-stack platform with QR in-room dining, bookings, and admin panels",
      "Implemented Barber booking with transactional slot protection, RBAC admin, and notifications",
      "Developed jewelry/e-commerce storefronts and APIs (LunaLinks, Unik Naturals)",
      "Contributed to B2B Baarat React Native + Express/MongoDB/Socket.io stack",
    ],
    technologies: [
      "Next.js",
      "React",
      "React Native",
      "Express",
      "Prisma",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
      "Firebase",
    ],
  },
];
