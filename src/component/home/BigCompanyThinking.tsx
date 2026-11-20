"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Globe2,
  MoveUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#29B6F0] sm:mb-4 sm:text-xs">
      <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
      {children}
    </span>
  );
}

export default function BigCompanyThinking() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 45,
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
      className="relative isolate overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
    >
      {/* BACKGROUND AMBIENCE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-[#29B6F0]/[0.05] blur-[90px] sm:h-[380px] sm:w-[380px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-[#B93FC9]/[0.05] blur-[90px] sm:h-[360px] sm:w-[360px]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CENTER HEADING */}
        <div
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
          data-aos="fade-up"
        >
          <Eyebrow>Who we are</Eyebrow>

         <h2 className="text-[clamp(1.9rem,4.2vw,3.55rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
  <span className="block text-gray-950">
    Big-company thinking.
  </span>

  <span
    className="mt-1 block bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent"
  >
    Built for growing teams.
  </span>
</h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand-gradient sm:mt-6 sm:w-20" />

          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.17em] text-[#596579] sm:mt-5 sm:text-[10px] sm:tracking-[0.2em]">
            Software <span className="mx-1.5 text-[#29B6F0] sm:mx-2">/</span>
            Data <span className="mx-1.5 text-[#3E7BD6] sm:mx-2">/</span>
            AI <span className="mx-1.5 text-[#B93FC9] sm:mx-2">/</span>
            Security
          </p>
        </div>

        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* LEFT SIDE - GLOBAL PRESENCE CARD */}
          <div className="min-w-0" data-aos="fade-right">
            {/* GLOBAL PRESENCE CARD */}
            <div
              className="relative min-h-[290px] overflow-hidden rounded-2xl border border-[#E7ECF3] bg-white p-4 shadow-[0_16px_45px_rgba(16,24,40,0.08)] sm:min-h-[310px] sm:rounded-3xl sm:p-6 lg:min-h-[320px]"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              {/* WORLD MAP WATERMARK - SOFT SHADOW BACKGROUND */}
              <svg
                aria-hidden="true"
                viewBox="0 0 900 480"
                className="pointer-events-none absolute -right-20 top-1/2 z-0 w-[125%] max-w-none -translate-y-1/2 opacity-[0.11] sm:-right-10 sm:w-[115%]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="presenceMapGradient"
                    x1="100"
                    y1="70"
                    x2="800"
                    y2="420"
                  >
                    <stop offset="0%" stopColor="#29B6F0" />
                    <stop offset="45%" stopColor="#3E7BD6" />
                    <stop offset="75%" stopColor="#7A4FD1" />
                    <stop offset="100%" stopColor="#B93FC9" />
                  </linearGradient>
                  <filter
                    id="presenceMapShadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="7" />
                  </filter>
                </defs>

                {/* Soft shadow silhouette */}
                <g
                  fill="url(#presenceMapGradient)"
                  stroke="url(#presenceMapGradient)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  filter="url(#presenceMapShadow)"
                >
                  <path d="M105 105L145 65L205 55L245 78L292 82L325 120L302 157L270 169L254 211L215 230L190 278L155 258L137 210L105 177L105 105Z" />
                  <path d="M278 245L315 263L332 310L310 358L294 405L270 377L258 330L245 278Z" />
                  <path d="M405 110L440 88L478 100L500 125L478 151L445 155L420 135Z" />
                  <path d="M438 170L485 165L515 202L500 255L480 300L450 337L420 300L405 250L400 205Z" />
                  <path d="M500 110L550 75L625 65L700 90L760 125L805 170L770 205L720 195L690 230L650 215L620 245L580 215L535 175Z" />
                  <path d="M610 220L640 235L655 275L638 310L615 285L600 245Z" />
                  <path d="M725 335L765 320L805 345L790 380L750 390L720 360Z" />
                </g>

                {/* Fine connection arcs */}
                <g
                  fill="none"
                  stroke="url(#presenceMapGradient)"
                  strokeWidth="2"
                  strokeDasharray="7 10"
                  opacity=".7"
                >
                  <path d="M190 190Q430 -5 630 255" />
                  <path d="M190 190Q430 430 630 255" />
                </g>
                <circle cx="190" cy="190" r="9" fill="#29B6F0" />
                <circle cx="630" cy="255" r="9" fill="#B93FC9" />
              </svg>

              {/* CARD ACCENTS */}
              <div className="pointer-events-none absolute -right-20 -top-24 z-0 h-52 w-52 rounded-full bg-[#29B6F0]/[0.07] blur-[70px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 z-0 h-44 w-44 rounded-full bg-[#7A4FD1]/[0.07] blur-[65px]" />

              <div className="relative z-10">
                {/* CARD HEADER */}
                <div className="mb-6 flex items-center justify-between gap-3 sm:mb-7">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3E7BD6] sm:text-[10px]">
                      Our global presence
                    </p>

                    <h3 className="mt-1.5 text-sm font-bold text-[#101828] sm:mt-2 sm:text-lg">
                      Connected across continents
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/15 bg-[#29B6F0]/[0.07] text-[#29B6F0] sm:h-11 sm:w-11 sm:rounded-2xl">
                    <Globe2 size={20} />
                  </div>
                </div>

                {/* LOCATIONS */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3">
                  {/* IRVINE */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29B6F0]/10 text-[#29B6F0] sm:h-11 sm:w-11">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.12em] text-[#101828] sm:text-sm">
                        IRVINE, CA
                      </p>
                      <p className="mt-1 text-[10px] text-[#667085] sm:text-[11px]">
                        United States
                      </p>
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  <div className="hidden w-10 items-center sm:flex lg:w-14">
                    <div className="relative h-px w-full bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]">
                      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#3E7BD6] shadow-[0_0_12px_#29B6F0]" />
                    </div>
                  </div>

                  {/* CHENNAI */}
                  <div className="flex items-center gap-3 sm:justify-end sm:text-right">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B93FC9]/10 text-[#B93FC9] sm:order-2 sm:h-11 sm:w-11">
                      <MapPin size={19} />
                    </div>

                    <div className="sm:order-1">
                      <p className="text-[11px] font-bold tracking-[0.12em] text-[#101828] sm:text-sm">
                        CHENNAI, INDIA
                      </p>
                      <p className="mt-1 text-[10px] text-[#667085] sm:text-[11px]">
                        Engineering Hub
                      </p>
                    </div>
                  </div>
                </div>

                {/* MOBILE CONNECTOR */}
                <div className="my-3 ml-5 h-4 w-px bg-gradient-to-b from-[#29B6F0] to-[#B93FC9] sm:hidden" />

                {/* CARD FOOTER */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[#E7ECF3] pt-4 sm:mt-7 sm:gap-3 sm:pt-5">
                  <p className="text-[9px] font-medium tracking-wide text-[#667085] sm:text-xs">
                    One team, across time zones
                  </p>

                  <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#3E7BD6] sm:gap-2 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_8px_#29B6F0]" />
                    GLOBAL DELIVERY
                    <MoveUpRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ORIGINAL CONTENT */}
          <div
            className="min-w-0 space-y-4 sm:space-y-5 lg:pt-3"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            <p className="text-[13px] leading-7 text-[#596579] sm:text-base sm:leading-8">
              BeaverTek is a passionate and forward-thinking IT services
              provider based in Orange County, California, with an extended
              presence in Chennai, India. With over eight decades of collective
              consulting experience across Fortune 500 companies and diverse
              industries, we bring deep expertise, innovative thinking and
              unwavering dedication to every client engagement.
            </p>

            <p className="text-[13px] leading-7 text-[#596579] sm:text-base sm:leading-8">
              At BeaverTek, we specialize in delivering customized IT services
              designed to grow with your business. Whether you&apos;re
              modernizing your infrastructure or unlocking the power of your
              data, we provide the expertise to help you succeed.
            </p>

            {/* DISCOVER LINK */}
            <Link
              href="/about/abouthero"
              className="group inline-flex items-center gap-3 pt-1 text-sm font-bold text-[#3E7BD6] transition-colors duration-300 hover:text-[#B93FC9]"
            >
              Discover BeaverTek

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#29B6F0]/30 transition-all duration-300 group-hover:border-[#7A4FD1] group-hover:bg-gradient-to-r group-hover:from-[#29B6F0] group-hover:to-[#7A4FD1] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
