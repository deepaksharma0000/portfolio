export type ArchitectureLayer = {
  label: string;
  detail?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  challenges: string[];
  architecture: ArchitectureLayer[];
  technologies: string[];
  frontend?: string[];
  backend?: string[];
  database?: string[];
  cloud?: string[];
  integrations?: string[];
  image: string;
  featured?: boolean;
  github?: string;
  liveUrl?: string;
  results?: string[];
};

export const projects: Project[] = [
  {
    id: "trustifyee",
    slug: "trustifyee-algo-trading",
    title: "Trustifyee — Multi-Broker Algo Trading Platform",
    category: "FinTech / Copy Trading",
    shortDescription:
      "Production-oriented algo trading platform with signal fan-out, broker adapters, queued execution, and live order tracking.",
    description:
      "Trustifyee is a multi-user algo trading system where admin strategies broadcast trade signals to eligible subscribers. Each subscriber’s orders are executed through broker adapters (Angel One, Upstox, Alice Blue, Zerodha) with session lifecycle management, BullMQ workers, reconciliation, and WebSocket notifications.",
    problem:
      "Copy/algo trading breaks down when broker auth, rate limits, multi-user fan-out, and order tracking are handled naively. Sessions expire, reconnect storms overwhelm APIs, and shared credentials create unsafe execution paths.",
    solution:
      "Built an event-driven execution pipeline: signal broadcast → eligibility/readiness checks → trade outbox → BullMQ workers → per-user broker adapters → OMS/audit trail → WebSocket updates. Added token refresh scheduling, rate limiting, and production deployment hardening.",
    role: "Full-Stack / Backend Engineer — architecture, broker integrations, execution workers, realtime updates, and production readiness work.",
    features: [
      "Multi-broker adapter layer (Angel One, Upstox, Alice Blue, Zerodha)",
      "Strategy signal broadcast with subscriber eligibility filtering",
      "BullMQ trade queue with worker concurrency and rate limits",
      "Encrypted broker credential handling and session refresh",
      "Position tracking, reconciliation, and auto-exit workers",
      "Admin/subscriber dashboards with Amplify Auth support",
      "WebSocket notifications for execution results",
    ],
    challenges: [
      "Preventing websocket reconnect storms under unstable network conditions",
      "Isolating per-user broker sessions while supporting queued multi-user fan-out",
      "Respecting broker API rate limits during large broadcasts",
      "Making production deployment (PM2 / VPS) operable with clear runbooks",
    ],
    architecture: [
      { label: "Admin Dashboard / Signal Creator", detail: "React admin UI" },
      { label: "Signal Broadcast Engine", detail: "Eligibility + fan-out" },
      { label: "Trade Outbox + BullMQ Workers", detail: "Queued execution" },
      {
        label: "Broker Adapters + Session Manager",
        detail: "Angel One / Upstox / Alice Blue / Zerodha",
      },
      { label: "MongoDB + Redis", detail: "State, tokens, queues" },
      { label: "WebSocket Notifications", detail: "Live order updates" },
    ],
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "WebSockets",
      "React",
      "AWS Amplify Auth",
      "PM2",
    ],
    frontend: ["React", "TypeScript", "AWS Amplify Auth (Cognito)"],
    backend: ["Node.js", "Express", "TypeScript", "BullMQ", "WebSockets"],
    database: ["MongoDB", "Redis"],
    cloud: ["AWS Cognito via Amplify", "VPS + PM2"],
    integrations: ["Angel One SmartAPI", "Upstox", "Alice Blue", "Zerodha Kite"],
    image: "/projects/trustifyee.svg",
    featured: true,
  },
  {
    id: "garageos",
    slug: "garageos",
    title: "GarageOS — Multi-Tenant Garage Management SaaS",
    category: "SaaS / Automotive",
    shortDescription:
      "Enterprise garage platform with admin dashboard, customer app, realtime job tracking, inventory, and Razorpay payments.",
    description:
      "GarageOS is a production-grade multi-tenant SaaS for automotive workshops. It covers garage operations, vehicles, appointments, job cards, inventory, invoicing, notifications, and live service tracking across admin and customer surfaces.",
    problem:
      "Workshops need one system for bookings, technicians, inventory, billing, and customer updates — without building separate fragile tools for each workflow.",
    solution:
      "Delivered a monorepo with Express API + Socket.io, React admin dashboard, customer mobile-first web app, shared Zod validators, Redis support, Razorpay payments, and Docker/nginx production packaging.",
    role: "Full-Stack Developer — API, realtime services, admin/customer apps, payments, and deployment structure.",
    features: [
      "Multi-tenant garage management",
      "Appointments, job cards, inventory, invoicing",
      "Realtime job board via Socket.io",
      "Email + OTP authentication flows",
      "Razorpay payment integration with webhooks",
      "Swagger API docs and Docker production stack",
    ],
    challenges: [
      "Keeping admin and customer apps type-safe through shared packages",
      "Realtime job-state sync without brittle polling",
      "Packaging a multi-service product for Docker/nginx deployment",
    ],
    architecture: [
      { label: "Admin Dashboard", detail: "React + Vite + Tailwind" },
      { label: "Customer App", detail: "Mobile-first React web" },
      { label: "REST API + Socket.io", detail: "Express TypeScript" },
      { label: "MongoDB + Redis", detail: "Persistence + cache" },
      { label: "Razorpay + Notifications", detail: "Payments & SMS hooks" },
      { label: "Docker + Nginx", detail: "Production deploy" },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Socket.IO",
      "Razorpay",
      "Docker",
      "Nginx",
      "Zod",
    ],
    frontend: ["React", "TypeScript", "Tailwind CSS", "Socket.IO Client"],
    backend: ["Node.js", "Express", "TypeScript", "Socket.IO"],
    database: ["MongoDB", "Redis"],
    cloud: ["Docker", "Nginx"],
    integrations: ["Razorpay", "SMS notifications"],
    image: "/projects/garageos.svg",
  },
  {
    id: "cliprant",
    slug: "cliprant",
    title: "CLIPRANT — AI Video Editing Platform",
    category: "SaaS / Media",
    shortDescription:
      "Turborepo monorepo for an AI-assisted video editor with Next.js web client, Fastify API, MongoDB, Redis queues, and Stripe billing.",
    description:
      "CLIPRANT is an AI-powered video editing platform inspired by modern creator tools. The monorepo shares editor engine/types across clients and provides auth, projects, media, render jobs, collaboration websockets, and billing.",
    problem:
      "Video editing products need a flexible timeline model, async render/AI jobs, collaborative editing, and subscription billing — not a simple CRUD app.",
    solution:
      "Architected a Turborepo with Next.js 15 web app, Fastify API, MongoDB for nested timeline/AI payloads, Redis for render queues/rate limits, websocket collaboration, and Stripe billing routes.",
    role: "Full-Stack Developer — monorepo architecture, API services, editor web app integration, billing, and realtime collaboration hooks.",
    features: [
      "Timeline-oriented project/media model",
      "Async render and AI job pipeline via Redis queues",
      "Websocket collaboration channel",
      "Stripe subscription/billing flows",
      "Shared TypeScript packages across apps",
      "Docker-friendly local infrastructure",
    ],
    challenges: [
      "Modeling nested timeline JSON for editing + AI jobs",
      "Separating interactive editor state from durable server jobs",
      "Designing a monorepo that can grow into mobile/desktop clients",
    ],
    architecture: [
      { label: "Next.js Web Editor", detail: "App Router + Zustand" },
      { label: "Fastify API", detail: "Auth, media, render, billing" },
      { label: "Redis Queues", detail: "Render / AI jobs" },
      { label: "MongoDB", detail: "Projects, assets, jobs" },
      { label: "Stripe", detail: "Subscriptions" },
      { label: "WebSockets", detail: "Collaboration" },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Fastify",
      "MongoDB",
      "Redis",
      "Stripe",
      "WebSockets",
      "Turborepo",
      "Zustand",
    ],
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
    backend: ["Node.js", "Fastify", "TypeScript", "WebSockets"],
    database: ["MongoDB", "Redis"],
    integrations: ["Stripe"],
    image: "/projects/cliprant.svg",
  },
  {
    id: "hire",
    slug: "hire-job-portal",
    title: "Hire — Job Portal Platform",
    category: "Mobile / Marketplace",
    shortDescription:
      "Job portal with Express/Prisma API, React Native seeker + admin apps, Razorpay subscriptions, notifications, and Socket chat.",
    description:
      "Hire is a dual-role job platform focused on Admin and Job Seeker experiences. Admins manage companies, jobs, subscribers, and refunds. Seekers browse, apply, subscribe to premium access, receive notifications, and chat around company profiles.",
    problem:
      "Job marketplaces need clean role boundaries, monetization, resume workflows, and realtime communication — without confusing employer/seeker surfaces.",
    solution:
      "Implemented a TypeScript Express backend with Prisma/MongoDB, Redis, Razorpay subscriptions, Socket.io chat scaffolding, S3-ready uploads, and React Native apps for seekers and admins.",
    role: "Full-Stack Developer — backend APIs, subscription/payment flows, mobile feature delivery, and realtime messaging foundations.",
    features: [
      "Admin company/job/subscriber management",
      "Seeker profiles, resumes, applications, saved jobs",
      "Premium subscription via Razorpay",
      "In-app notifications and chat rooms",
      "React Native seeker + admin experiences",
      "Redis-backed infrastructure and API docs",
    ],
    challenges: [
      "Simplifying roles to Admin + Job Seeker without breaking product flow",
      "Gating applications behind subscription while keeping admin overrides",
      "Coordinating mobile UX with backend notification/chat systems",
    ],
    architecture: [
      { label: "React Native Apps", detail: "Seeker + Admin" },
      { label: "Express API", detail: "TypeScript + Prisma" },
      { label: "MongoDB + Redis", detail: "Data + cache" },
      { label: "Razorpay", detail: "Subscriptions/refunds" },
      { label: "Socket.io", detail: "Chat ready layer" },
      { label: "Object Storage", detail: "Resume/photo uploads" },
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Razorpay",
      "AWS S3",
    ],
    frontend: ["React Native", "Redux Toolkit / RTK Query"],
    backend: ["Express", "TypeScript", "Prisma", "Socket.IO"],
    database: ["MongoDB", "Redis"],
    cloud: ["AWS S3"],
    integrations: ["Razorpay"],
    image: "/projects/hire.svg",
  },
  {
    id: "poojapath",
    slug: "poojapath",
    title: "PoojaPath — Hyperlocal Devotional Marketplace",
    category: "Marketplace / Logistics",
    shortDescription:
      "Blinkit-style pooja samagri marketplace with Next.js customer/admin apps, Express API, geo utilities, Socket tracking, Twilio, and Razorpay.",
    description:
      "PoojaPath is a hyperlocal marketplace dedicated to pooja/devotional supplies. It includes customer ordering, vendor operations, delivery rider coordination, wallet flows, and live tracking simulation over Socket.io.",
    problem:
      "Local ritual-supply shopping needs catalog search, geo-aware fulfillment, payments, and live delivery updates — not a generic e-commerce template.",
    solution:
      "Built a clean-architecture monorepo: Express/Mongoose backend, Next.js customer and admin apps, shared GeoJSON/types utilities, Redis/BullMQ support, Twilio messaging, and Razorpay payments.",
    role: "Full-Stack Developer — backend modules, realtime tracking, customer/admin web apps, and payment/messaging integrations.",
    features: [
      "Customer catalog + checkout experience",
      "Vendor geofence approval admin panel",
      "Delivery rider coordination",
      "Socket.io live coordinate updates",
      "Twilio + email notifications",
      "Razorpay payments and wallet support",
    ],
    challenges: [
      "Modeling geo-aware vendor/delivery workflows",
      "Keeping shared types consistent across three apps",
      "Balancing realtime tracking with resilient order state",
    ],
    architecture: [
      { label: "Customer Web", detail: "Next.js 15" },
      { label: "Admin Panel", detail: "Next.js vendor ops" },
      { label: "Express API", detail: "Modular TypeScript services" },
      { label: "MongoDB + Redis", detail: "Orders + queues" },
      { label: "Socket.io", detail: "Live tracking" },
      { label: "Twilio + Razorpay", detail: "Messaging & payments" },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Twilio",
      "Razorpay",
    ],
    frontend: ["Next.js", "React", "Tailwind CSS", "Socket.IO Client"],
    backend: ["Express", "TypeScript", "BullMQ", "Socket.IO"],
    database: ["MongoDB", "Redis"],
    integrations: ["Twilio", "Razorpay"],
    image: "/projects/poojapath.svg",
  },
  {
    id: "hotel-ribolla",
    slug: "hotel-ribolla",
    title: "Hotel Ribolla — Luxury Hotel Management Platform",
    category: "Hospitality / Full-Stack",
    shortDescription:
      "Hotel platform with room booking, QR in-room dining, guest dashboard, and admin operations on Next.js + Express + Prisma.",
    description:
      "Hotel Ribolla is a full-stack hotel management website covering public marketing pages, room booking, QR-based restaurant/room-service ordering, guest dashboard, and admin controls for rooms, menu, bookings, and orders.",
    problem:
      "Hotels need guest-facing booking/ordering plus operational admin tools in one cohesive product experience.",
    solution:
      "Implemented a Next.js 15 frontend with Express/Prisma API, QR menu flows, auth-protected admin/guest areas, and Dockerized local infrastructure.",
    role: "Full-Stack Developer — frontend product surfaces, API models/routes, booking/order flows, and admin tooling.",
    features: [
      "Public rooms/booking/restaurant/contact pages",
      "QR code in-room dining and order tracking",
      "Guest dashboard",
      "Admin bookings, orders, rooms, and menu management",
      "Typed API with Prisma data layer",
    ],
    challenges: [
      "Connecting QR guest journeys to reliable order tracking",
      "Keeping marketing UX premium while supporting operational admin flows",
    ],
    architecture: [
      { label: "Next.js Web", detail: "Public + guest + admin" },
      { label: "Express API", detail: "TypeScript" },
      { label: "Prisma ORM", detail: "MongoDB datastore" },
      { label: "QR Ordering", detail: "Room service checkout" },
      { label: "Docker Compose", detail: "Local/prod-like setup" },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "MongoDB",
      "JWT",
      "Docker",
    ],
    frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    backend: ["Express", "TypeScript", "Prisma"],
    database: ["MongoDB"],
    image: "/projects/hotel.svg",
  },
  {
    id: "barber",
    slug: "barber-booking",
    title: "Barber Shop Booking System",
    category: "Booking / SaaS",
    shortDescription:
      "Production-ready barber booking platform with Next.js frontend, Express/MongoDB API, transactional slots, RBAC admin, and notifications.",
    description:
      "A complete barber shop booking product with premium shop website, mobile-first booking wizard, customer dashboard, and role-based admin panel for barbers/services/slots/holidays.",
    problem:
      "Appointment products fail when double-booking, slot math, reminders, and staff roles are treated as afterthoughts.",
    solution:
      "Implemented backend-calculated availability, MongoDB unique indexes + transactions for double-booking protection, JWT auth, cron reminders, and pluggable notification providers.",
    role: "Full-Stack Developer — booking engine, auth, admin RBAC, and Next.js customer experience.",
    features: [
      "Step-by-step booking flow",
      "Dynamic slot availability",
      "Double-booking protection",
      "Customer dashboard + cancellations",
      "Admin RBAC (SUPER_ADMIN, ADMIN, BARBER)",
      "Scheduled appointment reminders",
    ],
    challenges: [
      "Enforcing conflict-free bookings under concurrent requests",
      "Keeping slot rules configurable without breaking UX",
    ],
    architecture: [
      { label: "Next.js Frontend", detail: "Booking + dashboards" },
      { label: "Express API", detail: "Controller/Service/Model" },
      { label: "MongoDB + Mongoose", detail: "Transactional booking writes" },
      { label: "Cron Reminders", detail: "Notification providers" },
      { label: "Docker Compose", detail: "Local stack" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Socket.IO",
      "Firebase Admin",
      "Docker",
    ],
    frontend: ["Next.js", "TanStack Query", "React Hook Form", "Zod"],
    backend: ["Express", "TypeScript", "Mongoose"],
    database: ["MongoDB"],
    integrations: ["Firebase Admin", "Email/SMS/WhatsApp providers"],
    image: "/projects/barber.svg",
  },
  {
    id: "prime-alpha",
    slug: "prime-alpha-trading",
    title: "Prime Alpha — Trading System",
    category: "FinTech / Mobile",
    shortDescription:
      "Trading backend and React Native app with broker integrations, BullMQ workloads, secure mobile auth, and realtime client updates.",
    description:
      "Prime Alpha combines a Node/TypeScript trading backend (broker tooling, queues, reporting utilities) with a React Native mobile client featuring biometrics, secure keychain storage, and Socket.io updates.",
    problem:
      "Retail trading products need secure mobile access and reliable backend job processing around broker operations.",
    solution:
      "Built Express/MongoDB/Redis services with BullMQ processing and a React Native app using secure storage, biometrics, and realtime sockets.",
    role: "Full-Stack Developer — backend services and React Native client integration.",
    features: [
      "Broker-oriented backend services",
      "BullMQ + Redis job processing",
      "React Native trading companion app",
      "Biometric + keychain-secured access",
      "Socket.io client updates",
    ],
    challenges: [
      "Keeping mobile credentials secure while supporting active trading sessions",
      "Coordinating async backend jobs with mobile UX expectations",
    ],
    architecture: [
      { label: "React Native App", detail: "Secure mobile client" },
      { label: "Express API", detail: "TypeScript services" },
      { label: "MongoDB + Redis", detail: "Data + queues" },
      { label: "BullMQ Workers", detail: "Async processing" },
      { label: "Socket.io", detail: "Realtime updates" },
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Alice Blue SDK",
    ],
    frontend: ["React Native", "TanStack Query", "Zustand"],
    backend: ["Express", "TypeScript", "BullMQ"],
    database: ["MongoDB", "Redis"],
    integrations: ["Alice Blue", "Nodemailer"],
    image: "/projects/prime-alpha.svg",
  },
  {
    id: "b2b-baarat",
    slug: "b2b-baarat",
    title: "B2B Baarat — Mobile + Backend Platform",
    category: "Mobile / Enterprise",
    shortDescription:
      "React Native + Express platform with maps, camera, QR, Firebase messaging, geolocation, and Socket.io realtime features.",
    description:
      "B2B Baarat is a mobile-first business platform backed by an Express/MongoDB API. The React Native app includes maps, camera capture, QR flows, Firebase messaging, and realtime socket communication.",
    problem:
      "Field/business workflows need rich native device capabilities wired to a reliable API and push/realtime channels.",
    solution:
      "Delivered a React Native client with maps/camera/QR/geolocation and an Express + Mongoose + Socket.io backend with Firebase messaging support.",
    role: "Full-Stack / Mobile Developer — API and React Native feature implementation.",
    features: [
      "React Native navigation and device features",
      "Maps, geolocation, camera, and QR flows",
      "Firebase cloud messaging",
      "Express API with MongoDB",
      "Socket.io realtime channel",
    ],
    challenges: [
      "Integrating multiple native modules cleanly",
      "Keeping mobile UX responsive against realtime backend events",
    ],
    architecture: [
      { label: "React Native App", detail: "Maps, camera, QR, FCM" },
      { label: "Express API", detail: "TypeScript/Node" },
      { label: "MongoDB", detail: "Mongoose models" },
      { label: "Socket.io", detail: "Realtime sync" },
      { label: "Firebase Messaging", detail: "Push notifications" },
    ],
    technologies: [
      "React Native",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "Firebase",
      "TypeScript",
    ],
    frontend: ["React Native", "React Navigation"],
    backend: ["Express", "Socket.IO"],
    database: ["MongoDB"],
    integrations: ["Firebase Messaging"],
    image: "/projects/b2b.svg",
  },
  {
    id: "lunalinks",
    slug: "lunalinks-commerce",
    title: "LunaLinks — Jewelry Commerce Stack",
    category: "E-commerce",
    shortDescription:
      "Jewelry storefront and TypeScript Express/MongoDB API with auth, media uploads, and catalog workflows.",
    description:
      "LunaLinks is an e-commerce jewelry experience with a React storefront and Express/TypeScript backend for catalog, authentication, uploads, and transactional email support.",
    problem:
      "Specialty retail needs a polished catalog UX plus a maintainable Node API for products and content operations.",
    solution:
      "Built React frontend experiences and a Mongoose-backed Express API with JWT auth, multer uploads, and nodemailer flows.",
    role: "Full-Stack Developer — storefront and commerce API.",
    features: [
      "Product catalog browsing",
      "JWT-authenticated API",
      "Media upload pipeline",
      "Transactional email support",
    ],
    challenges: [
      "Structuring product media and catalog data for a visually driven storefront",
    ],
    architecture: [
      { label: "React Storefront", detail: "Vite/React UI" },
      { label: "Express API", detail: "TypeScript" },
      { label: "MongoDB", detail: "Mongoose" },
      { label: "Uploads + Email", detail: "Multer / Nodemailer" },
    ],
    technologies: [
      "React",
      "JavaScript",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    frontend: ["React", "Vite"],
    backend: ["Express", "TypeScript"],
    database: ["MongoDB"],
    image: "/projects/lunalinks.svg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((project) => project.featured) ?? projects[0];
}
