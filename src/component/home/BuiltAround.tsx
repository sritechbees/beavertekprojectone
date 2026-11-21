
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
    image: "/home/healthcare.jpeg",
    icon: "+",
    link: "#products",
    linkText: "Explore BeaverHealthAI",
  },
  {
    title: "Financial services & payments",
    description:
      "Payment platforms, integrations and data systems built for day-to-day operations.",
    image: "/home/finance.jpeg",
    icon: "↗",
    link: "#work",
    linkText: "See case studies",
  },
  {
    title: "Professional services",
    description:
      "CRM and lead automation for legal, medical and dental practices.",
    image: "/home/Professional.jpeg",
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
    <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-10 lg:mb-12">
      <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/[0.07] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#29B6F0]">
        <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
        {eyebrow}
      </span>

      <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-[38px] md:text-[44px] lg:text-[50px]">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}

/* =========================================
   INDUSTRY BACKGROUND VISUALS
========================================= */

const industryVisuals = [
  "from-[#29B6F0]/20 via-[#101820]/10 to-transparent",
  "from-[#7A4FD1]/25 via-[#171020]/10 to-transparent",
  "from-[#3E7BD6]/25 via-[#101827]/10 to-transparent",
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

  /* =========================================
     SMOOTH SCROLL WITH TOP OFFSET
  ========================================= */

  useEffect(() => {
    const handleIndustryLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>(
        'a[href^="#products"], a[href^="#work"], a[href^="#services"]'
      );

      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash) return;

      const section = document.querySelector(hash);
      if (!section) return;

      event.preventDefault();

      window.history.replaceState(null, "", hash);

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        40;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    };

    document.addEventListener("click", handleIndustryLinkClick);

    return () => {
      document.removeEventListener("click", handleIndustryLinkClick);
    };
  }, []);

  return (
    <section
      id="industries"
      className="relative isolate overflow-hidden bg-[#000000] py-12 text-white sm:py-14 md:py-16 lg:py-20"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#05070D_0%,#000000_55%,#08090E_100%)]"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/[0.07] blur-[120px] sm:h-[420px] sm:w-[420px]"
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#7A4FD1]/[0.08] blur-[120px] sm:h-[450px] sm:w-[450px]"
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(41,182,240,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,0.18)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />

      {/* MAIN CONTAINER */}

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-7 lg:px-10">

        {/* SECTION HEADING */}

        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                <span className="font-extrabold tracking-[-0.04em]">
                  Built around{" "}
                </span>
                <span className="bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text font-black tracking-[-0.04em] text-transparent">
                  your world.
                </span>
              </>
            }
            description="Practical technology experience across the industries and teams we serve."
          />
        </div>

        {/* INDUSTRY CARDS */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">

          {industries.map((industry, index) => (
            <article
              key={industry.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative isolate flex min-h-[340px] flex-col overflow-hidden rounded-[20px] border border-white/[0.10] bg-[#101014] shadow-[0_15px_45px_rgba(0,0,0,0.30)] transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0]/50 hover:shadow-[0_22px_55px_rgba(41,182,240,0.13)] sm:min-h-[350px] lg:min-h-[360px]"
            >

              {/* IMAGE SECTION */}

              <div className="relative h-[155px] shrink-0 overflow-hidden sm:h-[165px] lg:h-[170px]">

                {/* IMAGE */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${industry.image}')`,
                  }}
                />

                {/* IMAGE COLOR OVERLAY */}

                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${industryVisuals[index]} opacity-70 transition-opacity duration-500 group-hover:opacity-40`}
                />

                {/* BOTTOM IMAGE OVERLAY */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/10 to-black/10"
                />

                {/* ICON */}

                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/45 text-2xl font-semibold text-[#29B6F0] shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#29B6F0]/60 group-hover:bg-[#29B6F0]/15 sm:right-5 sm:top-5">
                  {industry.icon}
                </span>

                {/* IMAGE HOVER ACCENT */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-700 group-hover:w-full" />
              </div>

              {/* CARD CONTENT */}

              <div className="relative flex flex-1 flex-col px-4 pb-4 pt-2.5 sm:px-5 sm:pb-5 sm:pt-3">

                {/* TITLE */}

                <h3 className="text-lg font-extrabold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-xl">
                  {industry.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-2 text-[13px] leading-6 text-[#A0A0A8] sm:text-sm">
                  {industry.description}
                </p>

                {/* LINK */}

                <a
                  href={industry.link}
                  className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-3 text-[13px] font-bold text-white transition-colors duration-300 hover:text-[#29B6F0] sm:text-sm"
                >
                  {industry.linkText}

                  <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>

              {/* CARD BOTTOM GRADIENT */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-700 group-hover:w-full" />

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
