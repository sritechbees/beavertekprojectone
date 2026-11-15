
"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-3">
      <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3E7BD6]">
        {children}
      </p>
    </div>
  );
}

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


function CircularTechDesign() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-[210px] top-1/2 z-0 h-[480px] w-[480px] -translate-y-1/2 opacity-60 sm:-right-[190px] sm:h-[540px] sm:w-[540px] lg:-right-[135px] lg:h-[590px] lg:w-[590px]"
    >
      <svg
        viewBox="0 0 700 700"
        fill="none"
        className="h-full w-full animate-[spin_120s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <radialGradient id="techCircleGradient">
            <stop offset="0%" stopColor="#29B6F0" stopOpacity="0.06" />
            <stop offset="55%" stopColor="#3E7BD6" stopOpacity="0.025" />
            <stop offset="100%" stopColor="#7A4FD1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="techRingGradient">
            <stop offset="0%" stopColor="#29B6F0" />
            <stop offset="50%" stopColor="#3E7BD6" />
            <stop offset="100%" stopColor="#7A4FD1" />
          </linearGradient>
        </defs>

        {/* SOFT CENTER */}
        <circle
          cx="350"
          cy="350"
          r="285"
          fill="url(#techCircleGradient)"
        />

        {/* OUTER RINGS */}
        <circle
          cx="350"
          cy="350"
          r="320"
          stroke="#DCE3EA"
          strokeWidth="1.5"
        />

        <circle
          cx="350"
          cy="350"
          r="305"
          stroke="#E5EAF0"
          strokeWidth="1"
          strokeDasharray="2 7"
        />

        {/* OUTER RADIAL MARKS */}
        {Array.from({ length: 72 }).map((_, index) => (
          <line
            key={index}
            x1="350"
            y1={index % 6 === 0 ? "30" : "38"}
            x2="350"
            y2={index % 6 === 0 ? "57" : "49"}
            stroke="#BFCAD5"
            strokeWidth={index % 6 === 0 ? "3" : "1.5"}
            opacity={index % 6 === 0 ? "0.65" : "0.4"}
            transform={`rotate(${index * 5} 350 350)`}
          />
        ))}

        {/* MAIN SEGMENTED RING */}
        <circle
          cx="350"
          cy="350"
          r="265"
          stroke="#E4E9EF"
          strokeWidth="18"
          strokeDasharray="24 9"
          opacity="0.75"
        />

        {/* ACCENT ARC */}
        <circle
          cx="350"
          cy="350"
          r="265"
          stroke="url(#techRingGradient)"
          strokeWidth="3"
          strokeDasharray="65 1600"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* SECONDARY RINGS */}
        <circle
          cx="350"
          cy="350"
          r="225"
          stroke="#DCE3EA"
          strokeWidth="1.5"
        />

        <circle
          cx="350"
          cy="350"
          r="205"
          stroke="#DCE3EA"
          strokeWidth="1"
          strokeDasharray="3 8"
        />

        {/* INNER SEGMENTS */}
        <circle
          cx="350"
          cy="350"
          r="175"
          stroke="#E4E9EF"
          strokeWidth="12"
          strokeDasharray="38 12"
          opacity="0.7"
        />

        <circle
          cx="350"
          cy="350"
          r="150"
          stroke="#DCE3EA"
          strokeWidth="1.5"
        />

        {/* CENTER ORBIT */}
        <circle
          cx="350"
          cy="350"
          r="118"
          stroke="#E5EAF0"
          strokeWidth="1"
          strokeDasharray="3 7"
        />

        <circle
          cx="350"
          cy="350"
          r="95"
          stroke="#DCE3EA"
          strokeWidth="1.5"
        />

        <circle
          cx="350"
          cy="350"
          r="72"
          fill="#29B6F0"
          fillOpacity="0.025"
          stroke="#E5EAF0"
          strokeWidth="1.5"
        />

        {/* CENTER DOT */}
        <circle cx="350" cy="350" r="5" fill="#29B6F0" opacity="0.4" />

        {/* ORBIT NODES */}
        <circle cx="350" cy="85" r="5" fill="#29B6F0" opacity="0.65" />
        <circle cx="615" cy="350" r="5" fill="#7A4FD1" opacity="0.5" />
        <circle cx="350" cy="615" r="5" fill="#3E7BD6" opacity="0.5" />
        <circle cx="85" cy="350" r="5" fill="#29B6F0" opacity="0.5" />

        {/* SMALL DECORATIVE DOTS */}
        <circle cx="537" cy="163" r="3" fill="#29B6F0" opacity="0.5" />
        <circle cx="163" cy="537" r="3" fill="#7A4FD1" opacity="0.5" />
        <circle cx="537" cy="537" r="3" fill="#3E7BD6" opacity="0.5" />
        <circle cx="163" cy="163" r="3" fill="#29B6F0" opacity="0.5" />
      </svg>
    </div>
  );
}


export default function BigCompanyThinking() {
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
      id="about"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* CIRCULAR TECH BACKGROUND DESIGN */}
      <CircularTechDesign />

      {/* SUBTLE BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -left-40 -top-20 z-0 h-72 w-72 rounded-full bg-[#29B6F0]/[0.035] blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="lg:sticky lg:top-24">
            <Eyebrow>Who we are</Eyebrow>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl lg:text-[52px]">
              Big-company thinking.
              <span className="mt-2 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
                Built for growing teams.
              </span>
            </h2>

            <div className="mt-8 hidden h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] lg:block" />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="flex flex-col">
            <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>
                BeaverTek is a passionate and forward-thinking IT services
                provider based in Orange County, California, with an extended
                presence in Chennai, India. With over eight decades of
                collective consulting experience across Fortune 500 companies
                and diverse industries, we bring deep expertise, innovative
                thinking and unwavering dedication to every client engagement.
              </p>

              <p>
                At BeaverTek, we specialize in delivering customized IT services
                designed to grow with your business. Whether you&apos;re
                modernizing your infrastructure or unlocking the power of your
                data, we provide the expertise to help you succeed.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7" data-aos="fade-up" data-aos-delay="100">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#29B6F0] hover:to-[#7A4FD1] hover:shadow-lg hover:shadow-[#29B6F0]/15"
              >
                Discover BeaverTek
                <ArrowIcon />
              </Link>
            </div>

            {/* LOCATION CARD */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-10 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0]/40 hover:shadow-xl hover:shadow-slate-200/50 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Our locations
                </p>
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#29B6F0] motion-reduce:animate-none" />
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-[0.12em] text-slate-900 sm:text-base">
                    IRVINE, CA
                  </p>
                </div>

                <div className="flex min-w-8 flex-1 items-center">
                  <span className="h-[2px] w-full rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-[0.12em] text-slate-900 sm:text-base">
                    CHENNAI, INDIA
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-xs font-medium text-slate-500">
                  One team, across time zones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
