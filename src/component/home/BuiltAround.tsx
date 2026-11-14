
"use client";

import type { ReactNode } from "react";
import Link from "next/link";

/* =========================================
   INDUSTRIES DATA
========================================= */

const industries = [
  {
    title: "Healthcare",
    description:
      "Healthcare software engineering, BeaverHealthAI products, intake and triage.",
    image: "/healthcare-team.jpg",
    icon: "+",
    link: "#products",
    linkText: "Explore BeaverHealthAI",
  },
  {
    title: "Financial services & payments",
    description:
      "Payment platforms, integrations and data systems built for day-to-day operations.",
    image: "/financial-services.jpg",
    icon: "↗",
    link: "#work",
    linkText: "See case studies",
  },
  {
    title: "Professional services",
    description:
      "CRM and lead automation for legal, medical and dental practices.",
    image: "/office-background.jpg",
    icon: "⌘",
    link: "#services",
    linkText: "Explore services",
  },
];

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#29B6F0]">
        <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
        {eyebrow}
      </span>

      <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B7280]">
        {description}
      </p>
    </div>
  );
}

/* =========================================
   INDUSTRY BACKGROUND VISUALS
========================================= */

const industryVisuals = [
  "bg-[radial-gradient(circle_at_75%_22%,rgba(41,182,240,0.38),transparent_36%),linear-gradient(135deg,#1A1A1E,#000000)]",
  "bg-[radial-gradient(circle_at_75%_22%,rgba(122,79,209,0.44),transparent_36%),linear-gradient(135deg,#1A1A1E,#000000)]",
  "bg-[radial-gradient(circle_at_75%_22%,rgba(62,123,214,0.35),transparent_36%),linear-gradient(135deg,#1A1A1E,#000000)]",
];

/* =========================================
   BUILT AROUND SECTION
========================================= */

export default function BuiltAround() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built around{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                your world.
              </span>
            </>
          }
          description="Practical technology experience across the industries and teams we serve."
        />

        {/* INDUSTRY CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="group relative min-h-[440px] overflow-hidden rounded-3xl bg-[#121212] shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3E7BD6]/15"
              style={{
                animation: "industryFadeUp 0.8s ease-out both",
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* BACKGROUND VISUAL */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 transition-transform duration-1000 group-hover:scale-110 ${industryVisuals[index]}`}
              />

              {/* IMAGE */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen transition-all duration-700 group-hover:scale-110 group-hover:opacity-35"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 transition-all duration-500 group-hover:via-black/55" />

              {/* CARD CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 group-hover:-translate-y-2">

                {/* ICON */}
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-2xl text-[#29B6F0] backdrop-blur transition-all duration-300 group-hover:rotate-6 group-hover:border-[#29B6F0]/60 group-hover:bg-[#29B6F0]/15 group-hover:text-white">
                  {industry.icon}
                </span>

                {/* INDUSTRY NUMBER */}
                <p className="mt-5 text-xs font-bold tracking-widest text-[#29B6F0]">
                  INDUSTRY 0{index + 1}
                </p>

                {/* TITLE */}
                <h3 className="mt-2 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#29B6F0]">
                  {industry.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-7 text-[#D4D4D8]">
                  {industry.description}
                </p>

                {/* LINK */}
                <a
                  href={industry.link}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 hover:text-[#29B6F0]"
                >
                  {industry.linkText}

                  <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes industryFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
