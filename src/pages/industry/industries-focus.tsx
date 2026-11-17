
"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import type { ReactNode } from "react";

/* =========================================
   REVEAL ANIMATION
========================================= */

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

/* =========================================
   AMBIENT BACKGROUND GLOW
========================================= */

export function AmbientGlow() {
  const prefersReducedMotion = useReducedMotion();
  const gradientId = `ambient-amoeba-${useId().replaceAll(":", "")}`;

  const amoebaShapes = [
    "M 817 72 C 871 44 950 65 983 120 C 1022 184 976 255 908 275 C 843 294 769 265 742 211 C 709 145 749 95 817 72 Z",
    "M 289 84 C 346 57 411 81 434 132 C 461 192 425 245 365 263 C 307 280 244 252 226 204 C 203 143 235 105 289 84 Z",
    "M 596 305 C 646 276 718 292 744 341 C 774 397 737 451 678 470 C 619 490 552 465 535 418 C 515 365 547 329 596 305 Z",
  ];

  const paths = [
    { x: [0, 70, 25, -60, -25, 0], y: [0, -55, 35, 70, 20, 0] },
    { x: [0, -65, -18, 55, 35, 0], y: [0, -45, 60, 30, -55, 0] },
    { x: [0, 55, -55, -20, 60, 0], y: [0, 65, 25, -60, -30, 0] },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        animate={{
          x: [0, 26, -14, 0],
          y: [0, -18, 12, 0],
          scale: [1, 1.1, 0.96, 1],
        }}
        className="absolute -right-36 -top-32 size-[32rem] rounded-full bg-brand-orchid/20 blur-3xl"
        transition={{
          duration: prefersReducedMotion ? 0 : 20,
          ease: "easeInOut",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      />

      <motion.div
        animate={{
          x: [0, -22, 18, 0],
          y: [0, 16, -12, 0],
          scale: [1, 0.94, 1.08, 1],
        }}
        className="absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-brand-cyan/[0.12] blur-3xl"
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
          {amoebaShapes.map((shape, index) => (
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
          ))}
        </g>
      </motion.svg>
    </div>
  );
}

/* =========================================
   INDUSTRIES FOCUS
========================================= */

const sectors = [
  "Financial services and payments",
  "Healthcare and clinical operations",
  "Retail, hospitality, and consumer technology",
  "Mid-market enterprise operations",
];

export default function IndustriesFocus() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <AmbientGlow />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
            Industry perspective
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            Who we work with
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-white/60">
            Most of our clients are small and mid-size companies in:
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {sectors.map((sector, index) => (
            <Reveal delay={index * 0.06} key={sector}>
              <div className="group flex h-full items-start gap-4 border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-brand-cyan/35 hover:bg-white/[0.06] sm:p-6">
                <span className="mt-0.5 text-xs font-bold tracking-[0.16em] text-brand-cyan">
                  0{index + 1}
                </span>

                <p className="text-base font-medium leading-6 text-white/85">
                  {sector}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="relative mx-auto mt-10 max-w-7xl border-l-2 border-brand-cyan/70 pl-5 text-sm leading-7 text-white/60 sm:pl-7">
        If you do not see your industry above, that is fine. The pattern of
        work is more important than the vertical.
      </Reveal>
    </section>
  );
}

/* =========================================
   ABOUT APPROACH
========================================= */

const principles = [
  ["01", "Listen first"],
  ["02", "Design carefully"],
  ["03", "Ship working software"],
];

export function AboutApproach() {
  return (
    <section className="relative isolate overflow-hidden bg-mist/65 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <AmbientGlow />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            02 / The approach
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
            How we work
          </h2>
        </Reveal>

        <div>
          <Reveal className="max-w-3xl text-lg leading-8 text-ink/75 sm:text-xl sm:leading-9">
            <p>
              We are not a body shop. Every engagement is led by senior people
              who have done the work before. We listen first, design carefully,
              and ship working software. We treat your data, your customers,
              and your operations with the same seriousness we would give a
              regulated enterprise — because at the size you are operating,
              mistakes cost more, not less.
            </p>
          </Reveal>

          <div className="mt-10 grid overflow-hidden rounded-3xl border border-ink/10 bg-white sm:grid-cols-3">
            {principles.map(([number, title], index) => (
              <Reveal
                className={`relative p-6 sm:p-7 ${
                  index > 0
                    ? "border-t border-ink/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
                delay={index * 0.06}
                key={number}
              >
                <span className="text-xs font-bold tracking-[0.15em] text-brand-blue">
                  {number}
                </span>

                <h3 className="mt-8 text-lg font-semibold leading-snug text-ink">
                  {title}
                </h3>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-orchid via-brand-blue to-brand-cyan"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   ABOUT BELIEFS
========================================= */

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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            04 / Our principles
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
            What we believe
          </h2>
        </Reveal>

        <div className="space-y-3">
          {beliefs.map((belief, index) => (
            <Reveal delay={index * 0.05} key={belief}>
              <div className="group flex items-start gap-5 border border-ink/8 bg-white p-5 transition duration-300 hover:border-brand-blue/30 hover:shadow-[0_16px_50px_rgba(11,15,20,0.07)] sm:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-xs font-bold text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  0{index + 1}
                </span>

                <p className="pt-1 text-base leading-7 text-ink sm:text-lg">
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
