import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="I build software that has to work in the real world."
          />
        </Reveal>

        <Reveal delayMs={80}>
          <div className="space-y-5 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            <p>
              I&apos;m Deepak Sharma, a Full-Stack Developer with{" "}
              <span className="text-[var(--fg)]">3+ years</span> of hands-on experience
              shipping production applications across FinTech, SaaS, marketplaces, booking
              systems, and mobile products.
            </p>
            <p>
              On the backend I work with Node.js, Express/Fastify, TypeScript, REST APIs,
              WebSockets, queues, and integration-heavy services — including broker APIs,
              payments, webhooks, and cloud auth/storage. On the frontend I build with
              React, Next.js, Tailwind CSS, and React Native when the product needs a
              native client.
            </p>
            <p>
              My approach is practical: understand the business constraint, design a clear
              architecture, implement the critical path carefully, and harden the edge
              cases — double bookings, reconnect storms, rate limits, session expiry, and
              multi-tenant workflows.
            </p>
            <p>
              If you need someone who can own features across UI, API, database, and
              deployment — and explain the trade-offs clearly — that&apos;s the work I do.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
