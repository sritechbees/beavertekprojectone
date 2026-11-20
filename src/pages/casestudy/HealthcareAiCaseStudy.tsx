
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const workflowSteps = [
  {
    number: "01",
    title: "Patient intake",
    description: "A clearer starting point",
    gradient: "from-[#29B6F0] to-[#3E7BD6]",
  },
  {
    number: "02",
    title: "AI-driven triaging",
    description: "Support for care teams",
    gradient: "from-[#3E7BD6] to-[#7A4FD1]",
  },
  {
    number: "03",
    title: "Preventive care",
    description: "Tools for proactive care",
    gradient: "from-[#7A4FD1] to-[#B93FC9]",
  },
];

export default function HealthcareAiCaseStudy() {
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
    <article
      id="healthcare"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white px-4 py-14 text-[#111827] sm:scroll-mt-28 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="healthcare-title"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-[#29B6F0]/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-15%] right-[-8%] h-[400px] w-[400px] rounded-full bg-[#7A4FD1]/[0.06] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,24,39,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-9 flex flex-col gap-3 border-b border-black/10 pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <p
            data-aos="fade-right"
            className="text-[10px] font-bold tracking-[0.2em] text-[#258FC4] uppercase sm:text-xs"
          >
            02 / Healthcare
          </p>

          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[11px] tracking-wide text-[#64748B] sm:text-xs"
          >
            Build software <span className="px-2 text-[#7A4FD1]">·</span> See
            your data
          </p>
        </div>

        {/* MAIN CONTENT - INTERCHANGED SIDES */}
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16">
          {/* LEFT SIDE - HEALTHCARE WORKFLOW VISUAL */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative min-w-0 overflow-hidden rounded-2xl border border-[#E5EAF0] bg-[#F8FAFC] p-4 shadow-[0_20px_70px_rgba(15,23,42,0.07)] sm:rounded-3xl sm:p-6 md:p-8"
          >
            {/* VISUAL GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/[0.09] blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#7A4FD1]/[0.08] blur-[100px]"
            />

            {/* VISUAL HEADER */}
            <div
              data-aos="fade-down"
              data-aos-delay="150"
              className="relative flex flex-wrap items-center justify-between gap-3"
            >
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#263449] uppercase sm:text-xs">
                  Connected care workflow
                </p>

                <p className="mt-1.5 text-[10px] text-[#8491A3] sm:text-xs">
                  A connected patient journey
                </p>
              </div>

              <span className="rounded-full border border-[#29B6F0]/25 bg-[#29B6F0]/[0.07] px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-[#258FC4] uppercase sm:text-[10px]">
                Illustrative
              </span>
            </div>

            {/* CENTER WORKFLOW */}
            <div className="relative mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.number}
                  data-aos="fade-left"
                  data-aos-delay={250 + index * 150}
                  className="relative flex min-w-0 items-center gap-3 sm:gap-4"
                >
                  {/* NUMBER AND CONNECTOR */}
                  <div className="flex shrink-0 flex-col items-center self-stretch">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${step.gradient} font-mono text-[11px] font-bold text-white shadow-[0_5px_16px_rgba(41,182,240,0.15)] sm:h-11 sm:w-11 sm:rounded-2xl sm:text-xs`}
                    >
                      {step.number}
                    </span>

                    {index < workflowSteps.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-gradient-to-b from-[#29B6F0]/50 via-[#7A4FD1]/40 to-[#B93FC9]/30" />
                    )}
                  </div>

                  {/* STEP CARD */}
                  <div className="group flex min-w-0 flex-1 items-center justify-between gap-2 rounded-xl border border-[#E5EAF0] bg-white px-3 py-4 transition-all duration-300 hover:border-[#3E7BD6]/40 hover:shadow-[0_8px_25px_rgba(41,182,240,0.07)] sm:rounded-2xl sm:px-5 sm:py-5">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#172033] sm:text-sm md:text-base">
                        {step.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#8491A3] sm:text-xs">
                        {step.description}
                      </p>
                    </div>

                    <span
                      className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${step.gradient} shadow-[0_0_12px_rgba(41,182,240,0.25)]`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM VISUAL LABEL */}
            <div
              data-aos="fade-up"
              data-aos-delay="650"
              className="relative mt-7 flex items-center gap-3 border-t border-black/10 pt-5 sm:mt-8"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 to-[#7A4FD1]/50" />

              <span className="text-center text-[9px] font-semibold tracking-[0.15em] text-[#8491A3] uppercase sm:text-[10px]">
                Connected healthcare ecosystem
              </span>

              <span className="h-px flex-1 bg-gradient-to-r from-[#7A4FD1]/50 to-[#B93FC9]/50" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="min-w-0">
            <p
              data-aos="fade-up"
              className="mb-4 text-[10px] font-bold tracking-[0.22em] text-[#258FC4] uppercase sm:text-xs"
            >
              Healthcare technology
            </p>

            {/* TITLE */}
            <h2
              id="healthcare-title"
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-xl text-[1.7rem] leading-[1.16] font-extrabold tracking-[-0.04em] text-[#111827] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem]"
            >
              Healthcare software,{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                shaped around care.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-xl text-sm leading-7 text-[#64748B] sm:mt-7 sm:text-base sm:leading-8"
            >
              Healthcare providers were dealing with front-desk workflows,
              paper intake, and reactive care. They needed software designed
              around clinical teams and the realities of patient care.
            </p>

            {/* CHALLENGE */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 max-w-xl border-l-2 border-l-[#3E7BD6] pl-5 sm:mt-10"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#258FC4] uppercase sm:text-xs">
                The challenge
              </p>

              <p className="mt-2 text-sm leading-7 text-[#64748B] sm:text-base">
                Bring patient workflows into a connected suite built for
                clinical teams.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE BUILT */}
        <div className="mt-12 grid gap-6 border-t border-black/10 pt-8 sm:mt-16 sm:gap-8 md:grid-cols-[0.5fr_1.5fr] lg:pt-10">
          <div>
            <p
              data-aos="fade-right"
              className="text-[10px] font-bold tracking-[0.2em] text-[#258FC4] uppercase sm:text-xs"
            >
              What we built
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base"
            >
              A connected suite of healthcare applications for patient intake,
              AI-driven triaging, and preventive care. This work became the
              foundation of BeaverHealthAI.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="300"
              href="https://beaverhealth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full border border-[#DCE3EB] bg-white px-5 py-3 text-xs font-semibold text-[#172033] transition-all duration-300 hover:border-[#29B6F0]/50 hover:bg-[#29B6F0]/[0.05] hover:text-[#258FC4] sm:text-sm"
            >
              Explore BeaverHealthAI

              <span
                className="text-[#258FC4] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
