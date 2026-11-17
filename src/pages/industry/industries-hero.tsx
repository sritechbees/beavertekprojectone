
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

// ============================================
// TYPES
// ============================================

export type HeroVariant =
  | "centered"
  | "editorial"
  | "halo"
  | "frame"
  | "split"
  | "wide";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  imageBadge?: string;
  variant?: HeroVariant;
  compact?: boolean;
  visual?: ReactNode;
  children?: ReactNode;
};

type RevealDirection = "up" | "down" | "left" | "right";

// ============================================
// HERO CONFIGURATION
// ============================================

const backgrounds: Record<HeroVariant, string> = {
  centered: "bg-ink",
  editorial: "bg-ink-2",
  halo: "bg-[#0d1620]",
  frame: "bg-ink",
  split: "bg-[#101a25]",
  wide: "bg-[#0c141d]",
};

const imageShapes: Record<Exclude<HeroVariant, "centered">, string> = {
  editorial: "aspect-[1.08] rounded-[2rem_2rem_6rem_2rem] -rotate-1",
  halo: "aspect-square max-w-[27rem] rounded-full",
  frame: "aspect-[1.05] rounded-[2rem] border-[0.6rem] border-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.35)]",
  split: "aspect-[1.08] rounded-[2.4rem_5rem_2.4rem_2.4rem]",
  wide: "aspect-[1.18] rounded-[3rem]",
};

const supportingSlides: Record<HeroVariant, readonly string[]> = {
  centered: [
    "/images/data-center.webp",
    "/images/analytics.webp",
    "/images/circuit-board.webp",
  ],
  editorial: [
    "/images/team-collaboration.webp",
    "/images/software-engineering.webp",
    "/images/healthcare.webp",
  ],
  halo: [
    "/images/circuit-board.webp",
    "/images/cyber-security.webp",
    "/images/data-center.webp",
  ],
  frame: [
    "/images/payment-technology.webp",
    "/images/analytics.webp",
    "/images/circuit-board.webp",
  ],
  split: [
    "/images/analytics.webp",
    "/images/software-engineering.webp",
    "/images/data-center.webp",
  ],
  wide: [
    "/images/healthcare.webp",
    "/images/team-collaboration.webp",
    "/images/payment-technology.webp",
  ],
};

// ============================================
// PAGE HERO
// ============================================

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  imageBadge,
  variant = "centered",
  compact = false,
  visual,
  children,
}: PageHeroProps) {
  const hasVisual = Boolean(imageSrc || visual);
  const imageVariant = variant === "centered" ? "editorial" : variant;

  const backgroundImages = Array.from(
    new Set([
      ...(imageSrc ? [imageSrc] : []),
      ...supportingSlides[variant],
    ]),
  );

  return (
    <section
      className={`relative isolate overflow-hidden ${backgrounds[variant]}`}
    >
      <HeroBackgroundSlideshow
        images={backgroundImages}
        key={backgroundImages.join("|")}
      />

      <AmbientGlow />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(72,137,229,0.18),transparent_44%)]" />

      {variant !== "centered" && (
        <div className="pointer-events-none absolute -right-36 -top-40 size-[30rem] rounded-full border border-white/[0.04]" />
      )}

      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-6 ${
          compact
            ? "py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
            : "py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        } ${
          hasVisual
            ? "lg:grid-cols-[1fr_0.92fr]"
            : "max-w-4xl text-center"
        }`}
      >
        <Reveal
          className={hasVisual ? "max-w-2xl" : "mx-auto"}
          direction={hasVisual ? "left" : "up"}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-ink/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan shadow-sm backdrop-blur-md transition-colors duration-300 hover:border-brand-orchid/50 hover:text-white">
            <span className="size-1.5 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(46,202,224,0.8)]" />
            {eyebrow}
          </span>

          <h1 className="mt-7 bg-gradient-to-r from-white via-brand-purple to-brand-cyan bg-clip-text font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-transparent transition-[filter] duration-300 hover:drop-shadow-[0_0_24px_rgba(46,202,224,0.2)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p
            className={`mt-6 text-lg leading-8 text-slate-300 ${
              hasVisual ? "max-w-xl" : "mx-auto max-w-2xl"
            }`}
          >
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-9 flex flex-wrap gap-3 ${
                hasVisual ? "" : "justify-center"
              }`}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(72,137,229,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-cyan hover:shadow-[0_16px_44px_rgba(46,202,224,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                >
                  {primaryCta.label}

                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/60 hover:bg-brand-blue/10 hover:text-brand-cyan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {children && (
            <div
              className={`mt-8 flex flex-wrap gap-3 ${
                hasVisual ? "" : "justify-center"
              }`}
            >
              {children}
            </div>
          )}
        </Reveal>

        {imageSrc ? (
          <Reveal
            className="relative mx-auto w-full max-w-[34rem]"
            direction="right"
          >
            {variant === "halo" && (
              <div className="pointer-events-none absolute -inset-5 rounded-full border border-brand-blue/20" />
            )}

            <figure
              className={`group relative isolate w-full overflow-hidden border border-white/10 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(72,137,229,0.22)] ${
                imageShapes[imageVariant]
              }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-ink/60 via-ink/10 to-ink/70" />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-white/[0.04]" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-orchid/10 via-transparent to-brand-cyan/15 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              {variant === "frame" && (
                <div className="pointer-events-none absolute inset-3 rounded-[1.3rem] border border-white/20" />
              )}

              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                {imageBadge && (
                  <span className="rounded-full border border-white/15 bg-ink/60 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                    {imageBadge}
                  </span>
                )}

                <span
                  aria-hidden="true"
                  className="ml-auto grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-lg text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan group-hover:text-ink"
                >
                  ↗
                </span>
              </div>

              {variant === "editorial" && (
                <span className="absolute right-6 top-6 size-2 rounded-full bg-brand-cyan shadow-[0_0_16px_rgba(46,202,224,0.8)]" />
              )}
            </figure>
          </Reveal>
        ) : (
          visual
        )}
      </div>
    </section>
  );
}

// ============================================
// INDUSTRIES HERO
// ============================================

export default function IndustriesHero() {
  return (
    <PageHero
      description="Most of our clients are small and mid-size companies. We bring senior technology experience to the systems and workflows that matter in your industry."
      eyebrow="Industries"
      imageAlt="Team collaborating around shared laptops"
      imageBadge="Healthcare · Payments · Business operations"
      imageSrc="/images/team-collaboration.webp"
      title="Industry context. Engineering that gets the details right."
      variant="wide"
    />
  );
}

// ============================================
// ABOUT HERO
// ============================================

export function AboutHero() {
  return (
    <PageHero
      description="BeaverTek is a technology partner for small and mid-size companies. We help businesses modernize their systems, make sense of their data, build the software they need, and keep their digital operations running securely. Based in Orange County, California, with a strong engineering team in India, we bring decades of Fortune 500 experience to the work in front of you — without the Fortune 500 price tag."
      eyebrow="About BeaverTek"
      imageAlt="Team collaborating around shared laptops"
      imageBadge="Irvine, California · Chennai, India"
      imageSrc="/images/team-collaboration.webp"
      title="Senior technology people. Built for businesses that don't have a CTO."
      variant="editorial"
    />
  );
}

// ============================================
// REVEAL ANIMATION
// ============================================

const offsets: Record<
  RevealDirection,
  { x: number; y: number }
> = {
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

// ============================================
// AMBIENT GLOW
// ============================================

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
          <linearGradient
            id={gradientId}
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
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

// ============================================
// ABOUT APPROACH
// ============================================

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

// ============================================
// ABOUT BELIEFS
// ============================================

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

// ============================================
// HERO BACKGROUND SLIDESHOW
// ============================================

const rotationInterval = 7800;

export function HeroBackgroundSlideshow({
  images,
}: {
  images: readonly string[];
}) {
  const imageKey = images.join("|");

  const slides = useMemo(
    () => imageKey.split("|").filter(Boolean),
    [imageKey],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const reducedMotionEnabled = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      prefersReducedMotion === true ||
      reducedMotionEnabled ||
      slides.length < 2
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, rotationInterval);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, slides.length]);

  const activeImage = slides[activeIndex % slides.length];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          animate={{
            opacity: prefersReducedMotion ? 0.58 : 0.7,
            scale: prefersReducedMotion ? 1 : 1.08,
          }}
          className="absolute inset-0"
          exit={{ opacity: prefersReducedMotion ? 0.58 : 0 }}
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, scale: 1.025 }
          }
          key={activeImage}
          transition={{
            opacity: {
              duration: prefersReducedMotion ? 0 : 1.5,
              ease: "easeInOut",
            },
            scale: {
              duration: prefersReducedMotion
                ? 0
                : rotationInterval / 1000,
              ease: "linear",
            },
          }}
        >
          <Image
            alt=""
            className="object-cover object-center"
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            src={activeImage}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/52 to-ink/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/52 via-transparent to-ink/20" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_30%,rgba(196,83,214,0.13),transparent_44%),radial-gradient(ellipse_at_20%_85%,rgba(46,202,224,0.1),transparent_42%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_right,black,transparent_85%)]" />
    </div>
  );
}

// ============================================
// ICON COMPONENT
// ============================================

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
  code: (
    <>
      <path d="m8 17-5-5 5-5m8 10 5-5-5-5m-2-12-4 20" />
    </>
  ),
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
    <>
      <path d="M3 11c0-4 2-6 6-7l1 2c-2 .8-3 2-3 4h3v7H3v-6Zm11 0c0-4 2-6 6-7l1 2c-2 .8-3 2-3 4h3v7h-7v-6Z" />
    </>
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
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.9m-1-12.1a4 4 0 0 1 0 8" />
    </>
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
