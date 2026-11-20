
"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* =========================================
   INDUSTRIES DATA - ORIGINAL CONTENT
========================================= */

const industries = [
  {
    title: "Healthcare",
    description:
      "Healthcare software engineering, BeaverHealthAI products, intake and triage.",
    image: "/visuals/white-healthcare-visual.webp",
    icon: "+",
    link: "#products",
    linkText: "Explore BeaverHealthAI",
  },
  {
    title: "Financial services & payments",
    description:
      "Payment platforms, integrations and data systems built for day-to-day operations.",
    image: "/home/hero1.webp",
    icon: "↗",
    link: "#work",
    linkText: "See case studies",
  },
  {
    title: "Professional services",
    description:
      "CRM and lead automation for legal, medical and dental practices.",
    image: "/home/hero3.webp",
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
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">

      <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/[0.07] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#29B6F0]">
        <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
        {eyebrow}
      </span>

      <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-[42px] md:text-[46px] lg:text-[54px]">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

/* =========================================
   INDUSTRY BACKGROUND VISUALS
========================================= */

const industryVisuals = [
  "bg-[radial-gradient(circle_at_75%_22%,rgba(41,182,240,0.25),transparent_42%),linear-gradient(135deg,#161A20,#000000)]",
  "bg-[radial-gradient(circle_at_75%_22%,rgba(122,79,209,0.28),transparent_42%),linear-gradient(135deg,#161A20,#000000)]",
  "bg-[radial-gradient(circle_at_75%_22%,rgba(62,123,214,0.25),transparent_42%),linear-gradient(135deg,#161A20,#000000)]",
];

/* =========================================
   BUILT AROUND SECTION
========================================= */

export default function BuiltAround() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
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
      id="industries"
      className="relative isolate overflow-hidden bg-[#000000] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =====================================
          BACKGROUND VISUALS
      ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#05070D_0%,#000000_55%,#08090E_100%)]"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#29B6F0]/[0.07] blur-[130px]"
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#7A4FD1]/[0.08] blur-[130px]"
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(41,182,240,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,0.18)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />

      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADING */}

        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                <span className="block font-extrabold tracking-tight">
                  Built around
                </span>

                <span className="mt-2 block bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text font-black tracking-tight text-transparent">
                  your world.
                </span>
              </>
            }
            description="Practical technology experience across the industries and teams we serve."
          />
        </div>

        {/* =====================================
            INDUSTRY CARDS
        ===================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {industries.map((industry, index) => (
            <article
              key={industry.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative isolate min-h-[420px] overflow-hidden rounded-3xl border border-white/[0.09] bg-[#101014] shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0]/40 hover:shadow-[0_20px_55px_rgba(41,182,240,0.12)] sm:min-h-[440px]"
            >
              {/* BACKGROUND VISUAL */}

              <div
                aria-hidden="true"
                className={`absolute inset-0 -z-20 transition-transform duration-1000 group-hover:scale-110 ${industryVisuals[index]}`}
              />

              {/* IMAGE */}

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-35 mix-blend-screen transition-all duration-700 group-hover:scale-110 group-hover:opacity-45"
                style={{
                  backgroundImage: `url('${industry.image}')`,
                }}
              />

              {/* DARK OVERLAY */}

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/15 transition-all duration-500 group-hover:via-black/65"
              />

              {/* CARD CONTENT */}

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">

                {/* ICON */}

                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#29B6F0]/30 bg-[#29B6F0]/[0.10] text-2xl font-semibold text-[#29B6F0] backdrop-blur-md transition-all duration-500 group-hover:border-transparent group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1)] group-hover:text-white">
                  {industry.icon}
                </span>

                {/* INDUSTRY TITLE */}

                <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-2xl">
                  {industry.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 text-sm leading-7 text-[#D4D4D8] sm:text-[15px]">
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

              {/* BOTTOM GRADIENT HOVER */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-700 group-hover:w-full" />

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
