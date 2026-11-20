
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Listen first",
    description:
      "We start by understanding your business, your people, and the problem you need to solve.",
    accent: "#29B6F0",
    delay: 0,
  },
  {
    title: "Design carefully",
    description:
      "Senior people shape a practical approach around your needs, your systems, and your goals.",
    accent: "#7A4FD1",
    delay: 150,
  },
  {
    title: "Ship working software",
    description:
      "We build and deliver dependable solutions—not just recommendations or slide decks.",
    accent: "#B93FC9",
    delay: 300,
  },
];

export default function HowWeWork() {
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
      id="approach"
      aria-labelledby="approach-title"
      className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Soft Gradient Glows */}
        <div className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-[#29B6F0]/[0.07] blur-[120px] sm:h-[480px] sm:w-[480px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#7A4FD1]/[0.07] blur-[130px] sm:h-[500px] sm:w-[500px]" />

        {/* Top Right Gradient Circle */}
        <div className="absolute -right-20 -top-24 h-[280px] w-[280px] rounded-full border border-[#29B6F0]/[0.10] sm:h-[380px] sm:w-[380px]" />

        <div className="absolute -right-10 -top-14 h-[200px] w-[200px] rounded-full border border-[#7A4FD1]/[0.08] sm:h-[290px] sm:w-[290px]" />

        {/* Bottom Left Decorative Circle */}
        <div className="absolute -bottom-32 -left-24 h-[280px] w-[280px] rounded-full border border-[#B93FC9]/[0.08] sm:h-[380px] sm:w-[380px]" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #3E7BD6 1px, transparent 1px), linear-gradient(to bottom, #3E7BD6 1px, transparent 1px)",
            backgroundSize: "55px 55px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* Subtle Geometric Shape */}
        <div className="absolute right-[8%] top-[18%] hidden h-[220px] w-[220px] rotate-45 rounded-[40px] border border-[#29B6F0]/[0.08] lg:block xl:h-[280px] xl:w-[280px]" />

        <div className="absolute bottom-[12%] left-[8%] hidden h-28 w-28 rotate-45 rounded-[25px] border border-[#7A4FD1]/[0.07] lg:block" />

        {/* Small Gradient Accent */}
        <div className="absolute left-[48%] top-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#29B6F0]/20 to-transparent blur-[1px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

          {/* Left Content */}
          <div data-aos="fade-right" className="max-w-xl">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E7BD6] sm:text-xs"
            >
              How we work
            </p>

            <h2
              id="approach-title"
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-[clamp(2.1rem,4.5vw,3.7rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#161E2F]"
            >
              <span>Senior people stay </span>
              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
                close to the work.
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 text-[15px] leading-7 text-[#5b6878] sm:text-base sm:leading-8 lg:text-[17px]"
            >
              We are not a body shop. Every engagement is led by senior people
              who have done the work before. We treat your data, your customers,
              and your operations with the same seriousness we would give a
              regulated enterprise because at the size you are operating,
              mistakes cost more, not less.
            </p>

            {/* Gradient Divider */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9]"
            />
          </div>

          {/* Right Process Design */}
          <div className="relative">

            {/* Connecting Line */}
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-[25px] top-12 hidden w-px bg-gradient-to-b from-[#29B6F0]/50 via-[#7A4FD1]/40 to-[#B93FC9]/50 sm:block"
            />

            <div className="space-y-4 sm:space-y-5">
              {steps.map((step) => (
                <div
                  key={step.title}
                  data-aos="fade-left"
                  data-aos-delay={step.delay}
                  data-aos-duration="900"
                  className="group relative"
                >
                  <div className="flex items-stretch gap-4 sm:gap-5">

                    {/* Accent Marker */}
                    <div className="relative z-10 flex w-[50px] shrink-0 items-center justify-center">
                      <div
                        className="h-3 w-3 rounded-full ring-[6px] ring-white transition-all duration-500 group-hover:scale-125"
                        style={{ backgroundColor: step.accent }}
                      />
                    </div>

                    {/* Content Panel */}
                    <div className="relative flex-1 overflow-hidden rounded-[18px] border border-[#E9EDF3] bg-white px-5 py-6 shadow-[0_5px_22px_rgba(22,30,47,0.035)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#3E7BD6]/25 group-hover:shadow-[0_15px_35px_rgba(62,123,214,0.09)] sm:px-7 sm:py-7">

                      {/* Left Gradient Edge */}
                      <div
                        className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-40 transition-transform duration-500 group-hover:scale-y-100"
                        style={{
                          background: `linear-gradient(180deg, ${step.accent}, #7A4FD1)`,
                        }}
                      />

                      <div className="relative pl-2">
                        <h3 className="text-[20px] font-bold tracking-[-0.03em] text-[#161E2F] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-[22px]">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-lg text-[14px] leading-7 text-[#647184] sm:text-[15px] sm:leading-8">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
