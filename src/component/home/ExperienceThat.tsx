
"use client";

import type { ReactNode } from "react";

/* =========================================
   REASONS DATA
========================================= */

const reasons = [
  {
    title: "Senior people, start to finish.",
    description:
      "The engineers who scope your project are the ones who build it.",
  },
  {
    title: "US leadership, global engineering.",
    description:
      "Strategy and architecture in California; engineering execution in Chennai.",
  },
  {
    title: "We run our own products.",
    description:
      "BeaverHealthAI is built and operated by our team. We know production, not just prototypes.",
  },
  {
    title: "Built for regulated work.",
    description:
      "Healthcare and payments experience means security and compliance are designed in, not bolted on.",
  },
];

/* =========================================
   EYEBROW COMPONENT
========================================= */

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#29B6F0]" : "text-[#3E7BD6]"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
      {children}
    </span>
  );
}

/* =========================================
   EXPERIENCE THAT SECTION
========================================= */

export default function ExperienceThat() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden bg-[#050507] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#29B6F0]/10 blur-[120px] animate-[ambientDrift_12s_ease-in-out_infinite]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/4 h-96 w-96 rounded-full bg-[#7A4FD1]/10 blur-[120px] animate-[ambientFloat_10s_ease-in-out_infinite]"
      />

      {/* GRID BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(41,182,240,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,0.12)_1px,transparent_1px)] [background-size:55px_55px] [mask-image:linear-gradient(to_left,black,transparent_90%)]"
      />

      <div className="container relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">

        {/* LEFT CONTENT */}
        <div className="animate-[fadeUp_0.9s_ease-out_both]">
          <Eyebrow light>Why BeaverTek</Eyebrow>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Experience that
            <span className="mt-2 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              stays with the work.
            </span>
          </h2>

          <p className="mt-7 max-w-md leading-8 text-[#D4D4D8]">
            We know you have plenty of options. Here&apos;s why companies
            choose BeaverTek. Senior guidance, hands-on engineering and
            a team that understands what it takes to keep technology
            working in the real world.
          </p>
        </div>

        {/* RIGHT REASONS LIST */}
        <div className="divide-y divide-white/10">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group grid gap-5 py-8 transition-all duration-500 hover:translate-x-2 sm:grid-cols-[50px_1fr_30px] animate-[fadeUp_0.8s_ease-out_both]"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* NUMBER */}
              <span className="pt-1 text-sm font-bold text-[#29B6F0] transition-colors duration-300 group-hover:text-[#B93FC9]">
                0{index + 1}
              </span>

              {/* CONTENT */}
              <div>
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-2xl">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#A0A0A8] transition-colors duration-300 group-hover:text-[#D4D4D8]">
                  {reason.description}
                </p>
              </div>

              {/* ARROW */}
              <span className="text-2xl text-[#29B6F0] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B93FC9]">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>

      {/* ANIMATION KEYFRAMES */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ambientDrift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-25px, 30px);
          }
        }

        @keyframes ambientFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          section *,
          section *::before,
          section *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
