
"use client";

import { useEffect } from "react";
import {
  BriefcaseBusiness,
  UsersRound,
  Headset,
  BrainCircuit,
} from "lucide-react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// =========================================
// ENGAGEMENT MODELS DATA
// =========================================

const engagementModels = [
  {
    title: "Fixed-scope project",
    description:
      "A defined deliverable, fixed price after a paid discovery.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Dedicated team",
    description:
      "A US-based lead and India engineering team, on a monthly retainer.",
    icon: UsersRound,
  },
  {
    title: "Managed services",
    description:
      "Monthly support, monitoring and maintenance for what we build or inherit.",
    icon: Headset,
  },
  {
    title: "Fractional CTO",
    description:
      "Senior technology and architecture guidance for companies without a technical leader.",
    icon: BrainCircuit,
  },
];

// =========================================
// EYEBROW
// =========================================

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#3E7BD6] sm:text-xs">
      {children}
    </p>
  );
}

// =========================================
// ENGAGEMENT ITEM
// =========================================

function EngagementItem({
  model,
  index,
}: {
  model: (typeof engagementModels)[number];
  index: number;
}) {
  const Icon = model.icon;

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay={index * 100}
      className="group relative flex gap-4 py-5 sm:gap-6 sm:py-7"
    >
      {/* TITLE ICON */}

      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 transition-all duration-500 group-hover:from-[#29B6F0]/20 group-hover:via-[#7A4FD1]/20 group-hover:to-[#B93FC9]/20 sm:h-12 sm:w-12">
        <Icon
          size={22}
          strokeWidth={1.8}
          className="text-[#3E7BD6] transition-all duration-500 group-hover:scale-110 group-hover:text-[#7A4FD1] sm:h-6 sm:w-6"
        />

        <span className="absolute inset-0 rounded-xl border border-[#3E7BD6]/10 transition-colors duration-500 group-hover:border-[#7A4FD1]/30" />
      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1">
        <h3 className="text-[19px] font-bold leading-snug tracking-[-0.025em] text-[#101828] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-[21px] lg:text-[23px]">
          {model.title}
        </h3>

        <p className="mt-2 max-w-lg text-[14px] leading-7 text-[#667085] sm:text-[15px] sm:leading-7 lg:text-[15.5px]">
          {model.description}
        </p>

        {/* GRADIENT UNDERLINE */}

        <div className="mt-3 h-[2px] w-9 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] opacity-60 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
      </div>
    </article>
  );
}

// =========================================
// MAIN THE RIGHT SHAPE SECTION
// =========================================

export default function TheRightShape() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section
      id="engage"
      className="relative isolate overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
    >
      {/* =====================================
          BACKGROUND DESIGN
      ===================================== */}

      {/* BASE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFD_55%,#FCFAFF_100%)]"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 z-0 h-[260px] w-[260px] animate-pulse rounded-full bg-[#29B6F0]/10 blur-[110px] sm:h-[350px] sm:w-[350px]"
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[25%] z-0 h-[280px] w-[280px] animate-pulse rounded-full bg-[#7A4FD1]/10 blur-[110px] sm:h-[380px] sm:w-[380px]"
        style={{ animationDelay: "1.5s" }}
      />

      {/* MAGENTA GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[35%] z-0 h-[260px] w-[260px] animate-pulse rounded-full bg-[#B93FC9]/10 blur-[110px] sm:h-[350px] sm:w-[350px]"
        style={{ animationDelay: "2s" }}
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] [background-image:linear-gradient(rgba(41,182,240,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(122,79,209,0.08)_1px,transparent_1px)] [background-size:50px_50px]"
      />

      {/* TOP GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-[#29B6F0]/40 to-transparent"
      />

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="container relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-7 px-4 sm:gap-9 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">

        {/* LEFT CONTENT */}

        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="lg:sticky lg:top-28 lg:h-fit"
        >
          <Eyebrow>How we engage</Eyebrow>

          <h2 className="max-w-xl text-[32px] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl md:text-5xl lg:text-[54px]">
            The right shape
            <span className="mt-1 block bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
              for the work.
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-[16px] leading-7 text-[#667085] sm:mt-5 sm:text-[15px] sm:leading-8">
            Start with a clear problem. Choose the engagement that fits
            what you need.
          </p>

          {/* DECORATIVE GRADIENT LINE */}

          <div className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:mt-7 sm:w-20" />
        </div>

        {/* RIGHT CONTENT */}

        <div className="relative">
          <div className="relative">
            {engagementModels.map((model, index) => (
              <EngagementItem
                key={model.title}
                model={model}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-[#7A4FD1]/40 to-transparent"
      />
    </section>
  );
}
