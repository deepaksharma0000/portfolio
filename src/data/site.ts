export const siteConfig = {
  name: "Deepak Sharma",
  title: "Full-Stack Developer",
  tagline:
    "Full-Stack Developer building scalable web applications, APIs & real-world digital products.",
  summary:
    "I design and ship production systems across FinTech, SaaS, marketplaces, and booking platforms — from React/Next.js interfaces to Node.js APIs, real-time services, broker integrations, and cloud-backed deployments.",
  yearsExperience: "3+",
  email: "Deepaksharmacs45@gmail.com",
  phone: "+91 8770918364",
  phoneHref: "tel:+918770918364",
  github: "https://github.com/deepaksharma0000",
  linkedin: "https://www.linkedin.com/in/deepak-sharma-b46102232",
  location: "India",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    {
      value: "3+",
      label: "Years Experience",
      detail: "Shipping production full-stack software",
    },
    {
      value: "10+",
      label: "Production Projects",
      detail: "Verified from real repositories",
    },
    {
      value: "Full-Stack",
      label: "Delivery Scope",
      detail: "Frontend, APIs, data & cloud",
    },
    {
      value: "Realtime",
      label: "Systems Built",
      detail: "Sockets, queues & broker APIs",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
