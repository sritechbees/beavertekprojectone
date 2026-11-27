
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaymentPlatformCaseStudy() {
  const merchants = ["merchant-a", "merchant-b", "merchant-c"];

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
      id="payments"
      className="relative isolate scroll-mt-16 overflow-hidden bg-[#000000] px-4 py-14 text-white sm:scroll-mt-28 lg:scroll-mt-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="payments-title"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#3E7BD6]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-[#7A4FD1]/10 blur-[130px]" />

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
            01 / Financial services
          </p>

          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[11px] tracking-wide text-white/45 sm:text-xs"
          >
            Build software <span className="px-2 text-[#7A4FD1]">·</span>{" "}
            Modernize
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
              Financial technology
            </p>

            {/* MAIN TITLE */}
            <h2
              id="payments-title"
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-xl text-[1.8rem] leading-[1.15] font-extrabold tracking-[-0.04em] text-white sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.1rem] xl:text-[3.4rem]"
            >
              A payment platform{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                built to scale.
              </span>
            </h2>

            {/* CHALLENGE */}
            <div className="mt-8 max-w-xl sm:mt-10">
              <p
                data-aos="fade-up"
                data-aos-delay="150"
                className="text-[10px] font-bold tracking-[0.2em] text-[#29B6F0] uppercase sm:text-xs"
              >
                The challenge
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="250"
                className="mt-4 text-sm leading-7 text-[#AAB5C5] sm:text-base sm:leading-8"
              >
                A growing financial services client needed a payment gateway
                integration platform that could serve multiple downstream
                merchants reliably and at scale. The existing process was
                manual, fragile, and could not keep up with growth.
              </p>
            </div>
          </div>

          {/* PAYMENT PLATFORM VISUAL */}
          <div
            role="img"
            aria-label="Illustrative flow from a payment request through a gateway integration platform to downstream merchants"
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0B101B] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-6 md:p-8"
          >
            {/* CARD GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#3E7BD6]/15 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#B93FC9]/10 blur-[90px]"
            />

            {/* VISUAL HEADER */}
            <div
              data-aos="fade-down"
              data-aos-delay="150"
              className="relative flex flex-wrap items-center justify-between gap-3"
            >
              <span className="text-[10px] font-bold tracking-[0.18em] text-white/80 uppercase sm:text-xs">
                Payment gateway
              </span>

              <span className="rounded-full border border-[#29B6F0]/25 bg-[#29B6F0]/[0.08] px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-[#29B6F0] uppercase sm:text-[10px]">
                Illustrative flow
              </span>
            </div>

            {/* FLOW CARDS */}
            <div className="relative mt-8 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:mt-12 sm:gap-4">
              {/* INPUT */}
              <div
                data-aos="fade-right"
                data-aos-delay="250"
                className="min-w-0 rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:rounded-2xl sm:p-5"
              >
                <span className="text-[9px] font-semibold tracking-[0.16em] text-[#29B6F0] uppercase sm:text-[10px]">
                  In
                </span>

                <p className="mt-3 break-words text-xs font-semibold text-white sm:text-base">
                  Payment request
                </p>

                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6]" />
                </div>
              </div>

              {/* ARROW */}
              <span
                data-aos="zoom-in"
                data-aos-delay="350"
                className="text-lg text-[#29B6F0] sm:text-2xl"
                aria-hidden="true"
              >
                &rarr;
              </span>

              {/* PLATFORM */}
              <div
                data-aos="fade-left"
                data-aos-delay="250"
                className="min-w-0 rounded-xl border border-[#7A4FD1]/40 bg-gradient-to-br from-[#3E7BD6]/15 to-[#7A4FD1]/15 p-3 shadow-[0_0_35px_rgba(62,123,214,0.08)] sm:rounded-2xl sm:p-5"
              >
                <span className="text-[9px] font-semibold tracking-[0.16em] text-[#B99AFF] uppercase sm:text-[10px]">
                  Platform
                </span>

                <p className="mt-3 break-words text-xs font-semibold text-white sm:text-base">
                  Gateway integration
                </p>

                <div className="mt-5 flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7A4FD1]/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B93FC9]/50" />
                </div>
              </div>
            </div>

            {/* CONNECTOR */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="relative mt-7 flex items-center gap-2 sm:mt-8 sm:gap-3"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#3E7BD6]/60 to-transparent" />

              <span className="text-center text-[9px] font-semibold tracking-[0.1em] text-[#AAB5C5] uppercase sm:text-[10px] sm:tracking-[0.16em]">
                Downstream merchants
              </span>

              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B93FC9]/60 to-transparent" />
            </div>

            {/* MERCHANTS */}
            <div className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {merchants.map((merchant, index) => (
                <div
                  key={merchant}
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 120}
                  className="flex min-w-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] px-1 py-3 text-center sm:rounded-xl sm:px-3 sm:py-4"
                >
                  <span className="text-[9px] font-medium text-[#C5D4DE] sm:text-xs">
                    Merchant
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT CHANGED */}
        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:gap-8 md:grid-cols-[0.5fr_1.5fr] lg:pt-10">
          <div>
            <p
              data-aos="fade-right"
              className="text-[10px] font-bold tracking-[0.2em] text-[#29B6F0] uppercase sm:text-xs"
            >
              What changed
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-sm leading-7 text-[#AAB5C5] sm:text-base"
            >
              A purpose-built payment gateway integration platform, designed
              and engineered by BeaverTek and supported end-to-end.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm leading-7 text-[#AAB5C5] sm:text-base"
            >
              When the platform you build handles money, “mostly working” is
              not a real option. The platform continues to be supported,
              maintained, and extended.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
