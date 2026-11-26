
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

// =========================================
// CASE STUDIES DATA
// =========================================

const caseStudies = [
  {
    category: "PAYMENTS & INTEGRATIONS",
    title: "Payment platform",
    description:
      "Building a platform to support high-volume payment transactions.",
    image: "/home/finance.jpeg",
    tag: "PAYMENTS",
   
    link: "/contact/contacthero/",
    linkText: "Discuss your project",
  },
  {
    category: "HEALTHCARE & AI",
    title: "AI in real hospitals",
    description:
      "Healthcare AI work that grew into the BeaverHealthAI product line.",
    image: "/home/healthai.jpg",
    tag: "HEALTHCARE AI",
    
    link: "https://www.beaverhealth.ai/",
    linkText: "Explore BeaverHealthAI",
  },
  {
    category: "DATA & ANALYTICS",
    title: "Data that drives decisions",
    description:
      "Tableau dashboards that help teams make clearer decisions with their data.",
    image: "/home/data that.jpg",
    tag: "DATA & ANALYTICS",
   
    link: "/contact/contacthero/",
    linkText: "Discuss your project",
  },
];

// =========================================
// SECTION HEADING
// =========================================

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
    <div
      className="mx-auto mb-9 max-w-3xl text-center sm:mb-11 lg:mb-14"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs">
        {eyebrow}
      </p>

      <h2 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl md:text-[42px] lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:mt-4 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

// =========================================
// CASE STUDY ITEM
// =========================================

function CaseStudyItem({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <article
      data-aos={isReversed ? "fade-left" : "fade-right"}
      data-aos-duration="900"
      data-aos-delay={index * 100}
      className="group relative grid items-center gap-5 border-b border-white/10 py-6 last:border-b-0 sm:gap-7 sm:py-8 md:grid-cols-2 md:gap-9 lg:gap-14 lg:py-10"
    >
      {/* IMAGE AREA */}

      <div
        className={`relative ${
          isReversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="relative h-[210px] overflow-hidden rounded-2xl bg-[#10141D] sm:h-[270px] md:h-[260px] lg:h-[300px]">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* IMAGE OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* IMAGE GRADIENT */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(41,182,240,0.10),transparent_45%,rgba(185,63,201,0.12))] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

          {/* TAG */}

          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px]">
            {study.tag}
          </span>

          

          {/* IMAGE BOTTOM ACCENT */}

          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-700 group-hover:w-full" />
        </div>
      </div>

      {/* CONTENT AREA */}

      <div
        className={`relative ${
          isReversed ? "md:order-1" : "md:order-2"
        }`}
      >
        {/* CATEGORY */}

        <p className="text-[10px] font-bold tracking-[0.19em] text-[#29B6F0] sm:text-xs">
          {study.category}
        </p>

        {/* TITLE */}

        <h3 className="mt-3 max-w-xl text-[25px] font-bold leading-tight tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#29B6F0] sm:mt-4 sm:text-3xl lg:text-[36px]">
          {study.title}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-3 max-w-lg text-[13px] leading-7 text-[#A0A0A8] sm:mt-4 sm:text-sm sm:leading-8">
          {study.description}
        </p>

        {/* LINK */}

        <Link
          href={study.link}
          className="group/link mt-5 inline-flex items-center gap-2 text-xs font-bold text-white transition-colors duration-300 hover:text-[#29B6F0] sm:mt-6 sm:text-sm"
        >
          {study.linkText}

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          />
        </Link>

        {/* SMALL GRADIENT LINE */}

        <div className="mt-5 h-[2px] w-12 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-24 sm:mt-6" />
      </div>
    </article>
  );
}

// =========================================
// MAIN CASE STUDIES SECTION
// =========================================

export default function CaseStudies() {
  useEffect(() => {
    AOS.init({
      duration: 900,
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
      id="work"
      className="relative isolate overflow-hidden bg-[#05070D] py-10 text-white sm:py-12 lg:py-16"
    >
      {/* =====================================
          ANIMATED BACKGROUND
      ===================================== */}

      {/* BASE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#05070D_0%,#080B14_50%,#05070D_100%)]"
      />

      {/* ANIMATED CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-[300px] w-[300px] animate-pulse rounded-full bg-[#29B6F0]/10 blur-[110px] sm:h-[420px] sm:w-[420px]"
      />

      {/* ANIMATED VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[30%] -z-10 h-[320px] w-[320px] animate-pulse rounded-full bg-[#7A4FD1]/10 blur-[120px] sm:h-[450px] sm:w-[450px]"
        style={{ animationDelay: "1.5s" }}
      />

      {/* BOTTOM MAGENTA GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[35%] -z-10 h-[300px] w-[300px] animate-pulse rounded-full bg-[#B93FC9]/10 blur-[120px] sm:h-[400px] sm:w-[400px]"
        style={{ animationDelay: "2s" }}
      />

      {/* MOVING GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(41,182,240,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(122,79,209,0.15)_1px,transparent_1px)] [background-size:55px_55px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      {/* GRADIENT LIGHT LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#29B6F0]/50 to-transparent"
      />

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* SECTION HEADER */}

        <SectionHeading
          eyebrow="Case studies"
          title={
            <>
              <span className="font-extrabold tracking-tight">
                Work that moves{" "}
              </span>

              <span className="bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text font-extrabold tracking-tight text-transparent">
                things forward.
              </span>
            </>
          }
          description="Real engineering challenges across payments, healthcare and data."
        />

        {/* CASE STUDIES SHOWCASE */}

        <div className="relative mx-auto max-w-6xl">

          {/* VERTICAL GRADIENT ACCENT */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 left-0 top-8 hidden w-px bg-gradient-to-b from-[#29B6F0]/50 via-[#7A4FD1]/40 to-transparent md:block"
          />

          {/* CASE STUDIES */}

          <div className="md:pl-6">
            {caseStudies.map((study, index) => (
              <CaseStudyItem
                
                study={study}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7A4FD1]/50 to-transparent"
      />
    </section>
  );
}
