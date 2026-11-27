
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const barHeights = [34, 57, 46, 78, 64, 92, 72, 100];
const dataSources = ["Operations", "Business data", "Reporting"];

export default function DataReportingCaseStudy() {
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
      id="reporting"
      className="relative isolate scroll-mt-16 overflow-hidden bg-black px-4 py-14 text-white sm:scroll-mt-28 lg:scroll-mt-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="reporting-title"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 right-[-10%] h-[400px] w-[400px] rounded-full bg-[#3E7BD6]/10 blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[-8%] h-[400px] w-[400px] rounded-full bg-[#29B6F0]/[0.08] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-9 flex flex-col gap-3 border-b border-white/10 pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <p
            data-aos="fade-right"
            className="text-[10px] font-bold tracking-[0.2em] text-[#29B6F0] uppercase sm:text-xs"
          >
            03 / Enterprise reporting
          </p>

          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[11px] tracking-wide text-white/45 sm:text-xs"
          >
            See your data
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <p
              data-aos="fade-up"
              className="mb-4 text-[10px] font-bold tracking-[0.22em] text-[#29B6F0] uppercase sm:text-xs"
            >
              Enterprise data & reporting
            </p>

            <h2
              id="reporting-title"
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-xl text-[1.8rem] leading-[1.15] font-extrabold tracking-[-0.04em] text-white sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3rem] xl:text-[3.2rem]"
            >
              Data that drives{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                decisions.
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-xl text-sm leading-7 text-[#AAB5C5] sm:mt-8 sm:text-base sm:leading-8"
            >
              A client with significant operational data could not get the
              clear, accurate reports leadership needed to make decisions.
              Reporting was slow, inconsistent, and trusted by no one.
            </p>

            {/* THE CHALLENGE */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 max-w-xl border-l-2 border-l-[#3E7BD6] pl-5 sm:mt-10"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#29B6F0] uppercase sm:text-xs">
                The challenge
              </p>

              <p className="mt-2 text-sm leading-7 text-[#AAB5C5] sm:text-base">
                Turn disconnected operational data into reporting people can
                use with confidence.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - REPORTING DASHBOARD */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0A101B] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)] sm:rounded-3xl sm:p-6 md:p-8"
          >
            {/* DASHBOARD GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#7A4FD1]/15 blur-[100px]"
            />

            {/* DASHBOARD HEADER */}
            <div
              data-aos="fade-down"
              data-aos-delay="150"
              className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#29B6F0] uppercase sm:text-xs">
                  Reporting environment
                </p>

                <p className="mt-1.5 text-xs font-semibold text-white sm:text-sm">
                  Tableau · Executive &amp; operational
                </p>
              </div>

              <span className="rounded-full border border-[#29B6F0]/25 bg-[#29B6F0]/[0.08] px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-[#29B6F0] uppercase sm:text-[10px]">
                Illustrative
              </span>
            </div>

            {/* DASHBOARD CONTENT */}
            <div className="relative mt-6 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[0.8fr_1.2fr] sm:gap-4">
              {/* DATA SOURCES */}
              <div
                data-aos="fade-right"
                data-aos-delay="250"
                className="min-w-0 rounded-xl border border-white/[0.06] bg-white/[0.035] p-4 sm:rounded-2xl sm:p-5"
              >
                <p className="text-[10px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                  Data sources
                </p>

                <div className="mt-5 space-y-4">
                  {dataSources.map((source, index) => (
                    <div
                      key={source}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-sm ${
                          index === 0
                            ? "bg-[#29B6F0]"
                            : index === 1
                              ? "bg-[#7A4FD1]"
                              : "bg-[#B93FC9]"
                        }`}
                      />

                      <span className="text-xs text-[#AAB5C5]">
                        {source}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-4">
                  <p className="text-[9px] font-medium tracking-[0.12em] text-white/35 uppercase">
                    Connected data
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />
                    <span className="text-[10px] text-white/55">
                      Unified sources
                    </span>
                  </div>
                </div>
              </div>

              {/* DECISION VIEW */}
              <div
                data-aos="fade-left"
                data-aos-delay="350"
                className="min-w-0 rounded-xl border border-white/10 bg-[#0D1522] p-4 sm:rounded-2xl sm:p-5"
              >
                <p className="text-[10px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                  Decision view
                </p>

                <div className="mt-5 flex h-28 items-end gap-1.5 border-b border-l border-white/10 px-2 sm:h-32 sm:gap-2">
                  {barHeights.map((height, index) => (
                    <span
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 70}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#3E7BD6] to-[#29B6F0]"
                      style={{
                        height: `${height}%`,
                        opacity: 0.48 + index * 0.06,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[9px] text-white/40">
                  <span>Operational</span>
                  <span>Executive</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-white/[0.04] p-2.5">
                    <p className="text-[9px] text-white/40">Data quality</p>
                    <p className="mt-1 text-xs font-semibold text-[#29B6F0]">
                      Clean
                    </p>
                  </div>

                  <div className="rounded-lg bg-white/[0.04] p-2.5">
                    <p className="text-[9px] text-white/40">Reporting</p>
                    <p className="mt-1 text-xs font-semibold text-[#B58AEF]">
                      Unified
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DASHBOARD FOOTER */}
            <div
              data-aos="fade-up"
              data-aos-delay="650"
              className="relative mt-4 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-3 sm:px-4"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_12px_rgba(41,182,240,0.5)]" />

              <p className="text-[10px] leading-5 text-[#C0CAD6] sm:text-xs">
                Clean data · Clear reporting · Better-informed decisions
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE BUILT */}
        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:gap-8 md:grid-cols-[0.5fr_1.5fr] lg:pt-10">
          <div>
            <p
              data-aos="fade-right"
              className="text-[10px] font-bold tracking-[0.2em] text-[#29B6F0] uppercase sm:text-xs"
            >
              What we built
            </p>
          </div>

          <div className="grid min-w-0 gap-6 sm:grid-cols-2 sm:gap-8">
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-sm leading-7 text-[#AAB5C5] sm:text-base"
            >
              A Tableau-based reporting environment with cleaned data sources,
              executive dashboards, and operational reports built and
              stress-tested for daily use.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm leading-7 text-[#AAB5C5] sm:text-base"
            >
              When the people running a business trust the numbers, decisions
              can be faster and better informed.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
