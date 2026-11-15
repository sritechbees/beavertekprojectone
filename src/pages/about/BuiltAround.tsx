
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// Local ArrowIcon component
function ArrowIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
    >
      ↗
    </span>
  );
}

// Local SectionHeading component
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="mb-7 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#29B6F0]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

// Industry data
const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Technology solutions designed to improve healthcare operations and patient experiences.",
  },
  {
    icon: "💳",
    title: "Financial Services",
    description:
      "Secure, scalable technology solutions for modern financial services.",
  },
  {
    icon: "🏢",
    title: "Professional Services",
    description:
      "Practical technology solutions that help professional teams work smarter.",
  },
];

const industryLinks = ["/products", "/case-studies", "/services"];

const industryLinkLabels = [
  "Explore BeaverHealthAI",
  "See case studies",
  "Explore services",
];

const industryVisuals = [
  "bg-[radial-gradient(circle_at_75%_22%,rgba(41,197,246,0.38),transparent_36%),linear-gradient(135deg,#1d1e24,#121316)]",
  "bg-[radial-gradient(circle_at_75%_22%,rgba(155,81,224,0.44),transparent_36%),linear-gradient(135deg,#1d1e24,#121316)]",
  "bg-[radial-gradient(circle_at_75%_22%,rgba(93,124,230,0.35),transparent_36%),linear-gradient(135deg,#1d1e24,#121316)]",
];

export default function BuiltAround() {
  useEffect(() => {
    AOS.init({
      duration: 800,
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
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-20"
    >
      {/* SUBTLE BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#29B6F0]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#7A4FD1]/[0.05] blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Built around{" "}
                <span className="bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] bg-clip-text text-transparent">
                  your world.
                </span>
              </>
            }
            description="Practical technology experience across the industries and teams we serve."
          />
        </div>

        {/* INDUSTRY CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              data-aos="fade-up"
              data-aos-delay={index * 180}
              className="group relative min-h-[380px] overflow-hidden rounded-2xl bg-[#050507] sm:min-h-[390px]"
            >
              {/* CARD BACKGROUND */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 animate-ambient-drift transition-transform duration-700 group-hover:scale-110 motion-reduce:animate-none ${industryVisuals[index]}`}
              />

              {/* CARD OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/55 to-transparent transition duration-500 group-hover:via-[#121316]/35" />

              {/* CARD CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur transition duration-300 group-hover:rotate-6 group-hover:border-[#29B6F0]/60 group-hover:bg-[#29B6F0]/15">
                  {industry.icon}
                </span>

                <p className="mt-4 text-[10px] font-bold tracking-[0.18em] text-[#29B6F0]">
                  INDUSTRY 0{index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {industry.description}
                </p>

                <Link
                  href={industryLinks[index]}
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 hover:text-[#29B6F0]"
                >
                  {industryLinkLabels[index]}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
