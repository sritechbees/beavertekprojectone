
"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const beliefs = [
  "Technology should solve a business problem, not create new ones.",
  "Senior people doing senior work — no junior hand-offs.",
  "Working software beats slide decks every time.",
  "Long relationships beat one-time projects. Most of our clients have been with us for years.",
];

export default function WhatWeBelieve() {
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
      id="beliefs"
      className="relative isolate scroll-mt-8 overflow-hidden bg-[#050507] px-5 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="beliefs-title"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#29B6F0]/[0.09] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#7A4FD1]/[0.10] blur-[130px]"
      />

      {/* Decorative diagonal shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 -z-10 h-64 w-64 rotate-45 rounded-[3rem] border border-white/[0.035]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        {/* Left Content */}
        <div data-aos="fade-right" className="max-w-xl">
          <p className="inline-flex bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent uppercase sm:text-sm">
            What we believe
          </p>

          <h2
            id="beliefs-title"
            className="mt-5 max-w-lg text-[32px] leading-[1.15] font-extrabold tracking-[-0.045em] text-white sm:text-[42px] lg:text-[48px] xl:text-[54px]"
          >
            Good technology starts with{" "}
            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              good principles.
            </span>
          </h2>
        </div>

        {/* Right Content */}
        <div className="relative" data-aos="fade-left">
          <div className="space-y-3 sm:space-y-4">
            {beliefs.map((belief, index) => (
              <div
                key={belief}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101014] px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#29B6F0]/40 hover:bg-[#14151B] sm:gap-5 sm:px-6 sm:py-6"
              >
                {/* Gradient hover accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(90deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] transition-all duration-500 group-hover:w-full"
                />

                {/* Gradient check icon */}
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/20 bg-[linear-gradient(135deg,rgba(41,182,240,0.12),rgba(122,79,209,0.14))] transition-all duration-300 group-hover:scale-105 group-hover:border-[#29B6F0]/40 sm:h-10 sm:w-10">
                  <Check
                    size={19}
                    strokeWidth={2.5}
                    className="text-[#29B6F0]"
                  />
                </span>

                {/* Original belief text - unchanged */}
                <p className="text-[15px] leading-7 font-medium tracking-[-0.015em] text-white/75 transition-colors duration-300 group-hover:text-white sm:text-[17px] sm:leading-8 lg:text-[18px]">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
