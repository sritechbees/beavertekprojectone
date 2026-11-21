
"use client";

import { useEffect } from "react";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyWeExist() {
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
      id="story"
      className="relative isolate scroll-mt-8 overflow-hidden bg-[#050507] px-5 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="story-title"
    >
      {/* Background gradient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-80 w-80 rounded-full bg-[#29B6F0]/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#7A4FD1]/[0.08] blur-[130px]"
      />

      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

        {/* Left Content */}
        <div data-aos="fade-right" className="w-full">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[linear-gradient(90deg,#29B6F0,#7A4FD1)]" />

            <p className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent uppercase sm:text-sm">
              Why we exist
            </p>
          </div>

          <h2
            id="story-title"
            className="mt-5 max-w-sm text-[30px] leading-[1.2] font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[40px] xl:text-[44px]"
          >
            A better option for growing businesses.
          </h2>

          {/* Decorative gradient accent */}
          <div className="mt-7 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]" />
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="relative w-full min-w-0"
        >
          {/* Gradient side accent */}
          <div
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-0 w-[2px] rounded-full bg-[linear-gradient(180deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]"
          />

          <div className="pl-6 sm:pl-9 lg:pl-10">
            {/* Main statement */}
            <p className="text-lg leading-8 font-medium text-[#E5E7EB] sm:text-xl sm:leading-9 lg:text-[22px] lg:leading-[1.8]">
              Most small and mid-size companies are stuck between two bad
              options. Hire a full in-house IT and engineering team, which is
              expensive and slow to build. Or buy off-the-shelf software and
              consultants who do not really know the business.
            </p>

            {/* Supporting statement */}
            <p className="mt-6 text-base leading-7 text-[#A1A1AA] sm:mt-7 sm:text-lg sm:leading-8 lg:text-[19px]">
              We started BeaverTek because there is a third option: a senior
              partner who treats your problems like our own, and who can actually
              build what you need.
            </p>

            {/* Bottom highlight */}
            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/20 bg-[#29B6F0]/[0.08]">
                <Lightbulb
                  size={19}
                  className="text-[#29B6F0]"
                />
              </span>

              <span className="text-xs font-semibold tracking-[0.12em] text-[#A1A1AA] uppercase sm:text-sm">
                A better way to build and grow
              </span>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
