
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import type { ReactNode } from "react";

// ======================================================
// ICON COMPONENT
// ======================================================

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "brain"
  | "briefcase"
  | "building"
  | "chart"
  | "check"
  | "chevron-down"
  | "clock"
  | "close"
  | "code"
  | "database"
  | "globe"
  | "health"
  | "layers"
  | "mail"
  | "map-pin"
  | "menu"
  | "phone"
  | "quote"
  | "shield"
  | "spark"
  | "users";

const paths: Record<IconName, ReactNode> = {
  "arrow-right": <path d="M5 12h14m-7-7 7 7-7 7" />,
  "arrow-up-right": <path d="M7 17 17 7M7 7h10v10" />,
  brain: (
    <>
      <path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 10a4 4 0 0 0 1 7.8A3.5 3.5 0 0 0 12 18Z" />
      <path d="M12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 10a4 4 0 0 1-1 7.8A3.5 3.5 0 0 1 12 18ZM8 8h.01M7 13h.01m9-5h.01m1 5h.01M12 12h.01" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1m-4 6v-3h2v3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-5 5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="m18 6-12 12M6 6l12 12" />,
  code: <path d="m8 17-5-5 5-5m8 10 5-5-5-5m-2-12-4 20" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18" />
    </>
  ),
  health: (
    <>
      <path d="M20.8 8.6c0 5.3-8.8 11-8.8 11s-8.8-5.7-8.8-11A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
      <path d="M7.5 12h3l1.5-3 2 6 1.5-3h2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.7a2 2 0 0 1-.6 1.9L7.7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.9-.6l2.7.5a2 2 0 0 1 1.7 2Z" />
  ),
  quote: (
    <path d="M3 11c0-4 2-6 6-7l1 2c-2 .8-3 2-3 4h3v7H3v-6Zm11 0c0-4 2-6 6-7l1 2c-2 .8-3 2-3 4h3v7h-7v-6Z" />
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
    </>
  ),
  users: (
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.9m-1-12.1a4 4 0 0 1 0 8" />
  ),
};

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

// ======================================================
// HERO TYPES AND SITE DATA
// ======================================================

export type HeroVariant =
  | "centered"
  | "editorial"
  | "halo"
  | "frame"
  | "split"
  | "wide";

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  icon: IconName;
  heroImage: string;
  heroAlt: string;
  heroVariant: HeroVariant;
  heroBadge: string;
  detail: string[];
  deliverables: string[];
  idealFor: string;
  relatedCase: string;
  engagement: string;
  faqs: { question: string; answer: string }[];
};

// Paste your original complete services array here.

export const services: Service[] = [];

// ======================================================
// CASE STUDIES
// ======================================================

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  services: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  icon: IconName;
  heroImage: string;
  heroAlt: string;
  heroVariant: HeroVariant;
  heroBadge: string;
  relatedService: string;
};

// Paste your original complete caseStudies array here.

export const caseStudies: CaseStudy[] = [];

// ======================================================
// INDUSTRIES DATA
// ======================================================

export const industries = [
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Healthcare technology",
    description:
      "Digital tools for clinical operations, patient intake and care workflows, built with the people who use them.",
    icon: "health" as const,
    image: "/images/healthcare.webp",
    imageAlt: "Healthcare professional using a mobile device",
    heroVariant: "halo" as const,
    proof: "Patient intake, AI-driven triage and preventive care applications that became the foundation for BeaverHealthAI.",
    services: ["Build Software", "Automate with AI", "See Your Data"],
  },
  {
    slug: "financial-services",
    name: "Financial services & payments",
    eyebrow: "Financial services",
    description:
      "Reliable software and integrations for payment operations, merchant platforms and the systems behind them.",
    icon: "briefcase" as const,
    image: "/images/payment-technology.webp",
    imageAlt: "Customer making a contactless payment at a checkout",
    heroVariant: "frame" as const,
    proof:
      "A payment gateway integration platform serving 150 clients and processing 4.5 million transactions each month.",
    services: ["Build Software", "Modernize", "Stay Secure & Supported"],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    eyebrow: "Legal, medical & dental practices",
    description:
      "Practical automation and connected systems that help service teams spend less time on manual follow-up.",
    icon: "building" as const,
    image: "/images/team-collaboration.webp",
    imageAlt: "Team collaborating around shared laptops",
    heroVariant: "editorial" as const,
    proof:
      "Business process and CRM automation for professional practices, including lead follow-up workflows.",
    services: ["Automate with AI", "Build Software", "Stay Secure & Supported"],
  },
];

// ======================================================
// ARTICLES
// ======================================================

export const articles = [
  {
    slug: "where-ai-fits-in-a-growing-business",
    category: "AI & automation",
    title: "Where AI fits in a growing business",
    readTime: "5 min read",
    intro:
      "A practical way to find the workflow where automation can make a measurable difference.",
    image: "/images/circuit-board.webp",
    imageAlt: "Blue illuminated traces across a circuit board",
    paragraphs: [
      "Start with the work, not the model. Look for a recurring process with clear inputs, repeatable steps and a meaningful cost when it is slow or inconsistent.",
      "Map the current workflow before choosing a tool. Identify the people involved, the systems they use, the decisions they make and the points where work gets stuck.",
      "Then define a small first outcome. A focused pilot makes it easier to test usefulness, understand data boundaries and learn what the team needs before expanding.",
    ],
  },
  {
    slug: "modernize-without-breaking-what-works",
    category: "Modernization",
    title: "Modernize without breaking what works",
    readTime: "4 min read",
    intro:
      "A staged approach to moving legacy systems forward while protecting day-to-day operations.",
    image: "/images/data-center.webp",
    imageAlt: "Server racks and network cabling in a data center",
    paragraphs: [
      "Most established businesses rely on a mixture of old and new technology. The first step is understanding how those systems connect to the work people do every day.",
      "Map critical workflows, dependencies and data ownership before making a change. That picture helps separate what must be replaced from what can be improved in place.",
      "A sequence of smaller releases creates room to validate assumptions, manage cut-over risk and keep the business operating throughout the transition.",
    ],
  },
  {
    slug: "build-dashboards-people-trust",
    category: "Data & analytics",
    title: "Build dashboards people trust",
    readTime: "4 min read",
    intro:
      "Useful reporting starts with a decision to support and a shared definition of the numbers.",
    image: "/images/analytics.webp",
    imageAlt: "Business analytics charts displayed on a computer monitor",
    paragraphs: [
      "A dashboard is only as useful as the questions it helps someone answer. Begin with the decisions leaders and operators need to make, then work backward to the information required.",
      "Agree on definitions and data sources before polishing charts. When teams use different versions of the same metric, a more attractive visualization will not solve the underlying problem.",
      "Keep the first version focused. A small set of trusted measures can be more actionable than a dense screen that tries to display everything.",
    ],
  },
];

export const serviceOptions = [
  "Automate with AI",
  "Build software",
  "See my data",
  "Modernize my systems",
  "Security & managed support",
  "BeaverHealthAI product demo",
  "Something else",
];

// ======================================================
// SECTION HEADING
// ======================================================

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="mb-4 bg-gradient-to-r from-[#B93FC9] via-[#7A4FD1] to-[#29B6F0] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
        {eyebrow}
      </p>

      <h2
        className={`text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#111318]"
        }`}
      >
        {title}
      </h2>

      <span
        aria-hidden="true"
        className={`mt-5 block h-1 w-20 rounded-full bg-gradient-to-r from-[#B93FC9] via-[#3E7BD6] to-[#29B6F0] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? "text-white/65" : "text-[#667085]"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}

      {children && <div className="mt-7">{children}</div>}
    </div>
  );
}

// ======================================================
// REVEAL ANIMATION AND AMBIENT BACKGROUND
// ======================================================

type RevealDirection = "up" | "down" | "left" | "right";

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      transition={{
        delay,
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: [0.22, 0.8, 0.2, 1],
      }}
      viewport={{ amount: 0.15, once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function AmbientGlow() {
  const prefersReducedMotion = useReducedMotion();
  const gradientId = `ambient-amoeba-${useId().replaceAll(":", "")}`;

  const amoebaShapes = [
    "M 817 72 C 871 44 950 65 983 120 C 1022 184 976 255 908 275 C 843 294 769 265 742 211 C 709 145 749 95 817 72 Z",
    "M 289 84 C 346 57 411 81 434 132 C 461 192 425 245 365 263 C 307 280 244 252 226 204 C 203 143 235 105 289 84 Z",
    "M 596 305 C 646 276 718 292 744 341 C 774 397 737 451 678 470 C 619 490 552 465 535 418 C 515 365 547 329 596 305 Z",
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 26, -14, 0], y: [0, -18, 12, 0], scale: [1, 1.1, 0.96, 1] }}
        className="absolute -right-36 -top-32 size-[32rem] rounded-full bg-[#B93FC9]/20 blur-3xl"
        transition={{
          duration: prefersReducedMotion ? 0 : 20,
          ease: "easeInOut",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      />

      <motion.div
        animate={{ x: [0, -22, 18, 0], y: [0, 16, -12, 0], scale: [1, 0.94, 1.08, 1] }}
        className="absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-[#29B6F0]/[0.12] blur-3xl"
        transition={{
          duration: prefersReducedMotion ? 0 : 25,
          ease: "easeInOut",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      />

      <motion.svg
        className="absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 500"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#4889E5" stopOpacity=".38" />
            <stop offset="48%" stopColor="#9762E4" stopOpacity=".26" />
            <stop offset="76%" stopColor="#C453D6" stopOpacity=".32" />
            <stop offset="100%" stopColor="#2ECAE0" stopOpacity=".3" />
          </linearGradient>
        </defs>

        <g
          fill={`url(#${gradientId})`}
          opacity=".55"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
        >
          {amoebaShapes.map((shape, index) => {
            const paths = [
              { x: [0, 70, 25, -60, -25, 0], y: [0, -55, 35, 70, 20, 0] },
              { x: [0, -65, -18, 55, 35, 0], y: [0, -45, 60, 30, -55, 0] },
              { x: [0, 55, -55, -20, 60, 0], y: [0, 65, 25, -60, -30, 0] },
            ];

            return (
              <motion.g
                animate={
                  prefersReducedMotion
                    ? { x: 0, y: 0, scale: 1 }
                    : {
                        ...paths[index],
                        scale: [1, 1.04, 0.98, 1],
                      }
                }
                className="origin-center"
                key={`amoeba-${index}`}
                transition={{
                  duration: prefersReducedMotion ? 0 : 26 + index * 4,
                  ease: "easeInOut",
                  repeat: prefersReducedMotion ? 0 : Infinity,
                }}
              >
                <path d={shape} />
              </motion.g>
            );
          })}
        </g>
      </motion.svg>
    </div>
  );
}

// ======================================================
// ABOUT APPROACH
// ======================================================

const principles = [
  ["01", "Listen first"],
  ["02", "Design carefully"],
  ["03", "Ship working software"],
];

export function AboutApproach() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F7FA] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <AmbientGlow />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3E7BD6]">
            02 / The approach
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#3E7BD6] sm:text-4xl">
            How we work
          </h2>
        </Reveal>

        <div>
          <Reveal className="max-w-3xl text-lg leading-8 text-[#111318]/75 sm:text-xl sm:leading-9">
            <p>
              We are not a body shop. Every engagement is led by senior people
              who have done the work before. We listen first, design carefully,
              and ship working software. We treat your data, your customers,
              and your operations with the same seriousness we would give a
              regulated enterprise — because at the size you are operating,
              mistakes cost more, not less.
            </p>
          </Reveal>

          <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#111318]/10 bg-white sm:grid-cols-3">
            {principles.map(([number, title], index) => (
              <Reveal
                className={`relative p-6 sm:p-7 ${
                  index > 0
                    ? "border-t border-[#111318]/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
                delay={index * 0.06}
                key={number}
              >
                <span className="text-xs font-bold tracking-[0.15em] text-[#3E7BD6]">
                  {number}
                </span>

                <h3 className="mt-8 text-lg font-semibold leading-snug text-[#111318]">
                  {title}
                </h3>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#B93FC9] via-[#3E7BD6] to-[#29B6F0]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================================================
// ABOUT BELIEFS
// ======================================================

const beliefs = [
  "Technology should solve a business problem, not create new ones.",
  "Senior people doing senior work — no junior hand-offs.",
  "Working software beats slide decks every time.",
  "Long relationships beat one-time projects. Most of our clients have been with us for years.",
];

export function AboutBeliefs() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <AmbientGlow />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3E7BD6]">
            04 / Our principles
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#3E7BD6] sm:text-4xl">
            What we believe
          </h2>
        </Reveal>

        <div className="space-y-3">
          {beliefs.map((belief, index) => (
            <Reveal delay={index * 0.05} key={belief}>
              <div className="group flex items-start gap-5 border border-[#111318]/10 bg-white p-5 transition duration-300 hover:border-[#3E7BD6]/30 hover:shadow-[0_16px_50px_rgba(11,15,20,0.07)] sm:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] text-xs font-bold text-[#3E7BD6] transition-colors group-hover:bg-[#3E7BD6] group-hover:text-white">
                  0{index + 1}
                </span>

                <p className="pt-1 text-base leading-7 text-[#111318] sm:text-lg">
                  {belief}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// INDUSTRIES GRID
// ======================================================

export function IndustriesGrid() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F7FA] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <AmbientGlow />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-2xl">
          <SectionHeading
            description="Explore the industry experience, relevant work, and capabilities BeaverTek brings to each engagement."
            eyebrow="Where we focus"
            title="Relevant experience. Practical technology."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal delay={index * 0.07} key={industry.slug}>
              <Link
                className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-white bg-white shadow-[0_12px_40px_rgba(11,15,20,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,15,20,0.12)]"
                href={`/industries/${industry.slug}`}
              >
                <div className="relative h-52 overflow-hidden bg-[#050507]">
                  <Image
                    alt={industry.imageAlt}
                    className="object-cover transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={industry.image}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/85 via-[#050507]/10 to-transparent" />

                  <span className="absolute bottom-5 left-5 flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-[#050507]/40 text-white backdrop-blur-md transition-colors group-hover:bg-[#3E7BD6]">
                    <Icon name={industry.icon} />
                  </span>

                  <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-[#050507]/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                    {industry.eyebrow}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111318]">
                    {industry.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#667085]">
                    {industry.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#111318] transition-colors group-hover:text-[#3E7BD6]">
                    Explore this industry

                    <Icon
                      name="arrow-right"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className="mt-7 block h-1 w-full bg-gradient-to-r from-[#B93FC9] via-[#3E7BD6] to-[#29B6F0] opacity-65"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
