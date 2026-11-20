
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Productsoftware() {
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

  const careJourney = [
    ["01", "Patient intake"],
    ["02", "Triage review"],
    ["03", "Ongoing care"],
  ];

  return (
    <section
      id="product"
      className="relative isolate scroll-mt-8 overflow-hidden bg-white"
      aria-labelledby="products-text"
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[280px] w-[280px] rounded-full bg-[#29B6F0]/[0.07] blur-[100px] sm:h-[400px] sm:w-[400px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[280px] w-[280px] rounded-full bg-[#7A4FD1]/[0.07] blur-[110px] sm:h-[400px] sm:w-[400px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[5%] top-10 hidden h-64 w-64 rounded-full border border-[#29B6F0]/10 sm:block sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[8%] top-20 hidden h-48 w-48 rounded-full border border-[#7A4FD1]/10 sm:block sm:h-64 sm:w-64"
        aria-hidden="true"
      />

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-5 py-12 sm:gap-10 sm:px-7 sm:py-16 md:px-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-20 xl:gap-14 xl:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-10 min-w-0">

          {/* EYEBROW */}
          <p
            data-aos="fade-up"
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#258FC0] sm:mb-5 sm:gap-2.5 sm:px-3.5 sm:text-xs sm:tracking-[0.17em]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_10px_#29B6F0]" />
            Our product · BeaverHealthAI
          </p>

          {/* TITLE */}
          <h1
            id="products-title"
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-2xl text-[32px] leading-[1.13] font-semibold tracking-[-0.04em] text-[#111827] min-[390px]:text-[35px] sm:text-[42px] md:text-[46px] lg:text-[44px] xl:text-[53px]"
          >
            Healthcare software,{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              shaped around care.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 max-w-xl text-[13px] leading-7 text-[#526174] sm:mt-5 sm:text-base sm:leading-8 lg:text-[15px] xl:text-base"
          >
            A connected healthcare platform for patient intake, AI-driven
            triage, remote monitoring, and predictive analytics built for
            hospitals, clinics, and public health programs.
          </p>

          {/* BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-7 sm:gap-x-6"
          >
            <a
              href="https://beaverhealth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_8px_24px_rgba(41,182,240,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(41,182,240,0.25)] sm:min-h-[50px] sm:px-6 sm:text-sm"
            >
              Visit BeaverHealthAI
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>

            <a
              href="#productcard"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("productcard")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold text-[#34445B] transition-colors duration-300 hover:text-[#29B6F0] sm:text-sm"
            >
              Explore product details
              <span className="text-base text-[#29B6F0]">↓</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - BEAVERTEK DASHBOARD */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none"
        >
          {/* OUTER GLOW */}
          <div className="pointer-events-none absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-[#29B6F0]/15 via-[#7A4FD1]/10 to-[#B93FC9]/15 blur-xl sm:-inset-4 sm:rounded-[2.5rem]" />

          {/* DASHBOARD CONTAINER */}
          <div className="relative overflow-hidden rounded-2xl border border-[#DCE7F0] bg-white p-3.5 shadow-[0_16px_50px_rgba(31,65,95,0.09)] sm:rounded-3xl sm:p-5 md:p-6">

            {/* TOP GRADIENT LINE */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

            {/* HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#E8EEF3] pb-3.5 sm:gap-3 sm:pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3E7BD6] sm:text-xs">
                  BeaverHealthAI
                </p>

                <p className="mt-1 text-[11px] font-medium text-[#34445B] sm:text-sm">
                  Connected care workspace
                </p>
              </div>

              <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/[0.06] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#258FC0] min-[390px]:text-[9px] sm:px-3 sm:text-[10px]">
                Illustrative interface
              </span>
            </div>

            {/* DASHBOARD BODY */}
            <div className="mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-[0.85fr_1.15fr] sm:mt-5 sm:gap-4">

              {/* CARE JOURNEY */}
              <div className="rounded-xl border border-[#E2EAF1] bg-[#F8FBFD] p-3 sm:rounded-2xl sm:p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#71869A] sm:text-[10px]">
                  Care journey
                </p>

                <div className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
                  {careJourney.map(([number, label], index) => (
                    <div
                      key={number}
                      className="flex items-center gap-2.5 sm:gap-3"
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold ${
                          index === 0
                            ? "bg-[#29B6F0]/15 text-[#168ABF]"
                            : index === 1
                              ? "bg-gradient-to-br from-[#3E7BD6] to-[#7A4FD1] text-white shadow-sm"
                              : "bg-[#B93FC9]/10 text-[#A43AB4]"
                        }`}
                      >
                        {number}
                      </span>

                      <span className="text-[11px] font-medium text-[#455469] sm:text-xs">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PATIENT INFORMATION */}
              <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
                <div className="rounded-xl border border-[#E2EAF1] bg-white p-3 sm:rounded-2xl sm:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-semibold text-[#34445B] sm:text-xs">
                      Incoming patient information
                    </p>

                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_8px_rgba(41,182,240,0.5)]" />
                  </div>

                  <div className="mt-4 space-y-2.5">
                    <div className="h-2 w-full rounded-full bg-[#E9F0F5]" />
                    <div className="h-2 w-4/5 rounded-full bg-[#E9F0F5]" />
                    <div className="h-2 w-3/5 rounded-full bg-[#E9F0F5]" />
                  </div>

                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#7890A4] sm:text-[10px]">
                    Intake · triage · next steps
                  </p>
                </div>

                {/* CONNECTED PLATFORM */}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-[#7A4FD1]/15 bg-gradient-to-r from-[#29B6F0]/[0.07] via-[#3E7BD6]/[0.06] to-[#B93FC9]/[0.07] p-3 sm:rounded-2xl sm:p-4">
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#7A4FD1] sm:text-[10px]">
                      Connected platform
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#25364B] sm:text-sm">
                      Care team overview
                    </p>
                  </div>

                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#29B6F0]/25 bg-white text-[#3E7BD6] shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 12h4l3-8 4 16 3-8h4" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-4 flex items-center gap-2 border-t border-[#E8EEF3] pt-3.5 sm:mt-5 sm:pt-5">
              <span className="h-px w-6 shrink-0 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#71869A] min-[390px]:text-[9px] sm:text-[10px] sm:tracking-[0.12em]">
                A connected suite of healthcare applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
