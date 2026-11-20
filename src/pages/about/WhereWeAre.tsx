
"use client";

import { useEffect } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    label: "Headquarters",
    place: "Irvine, California",
    detail: "Orange County, United States",
  },
  {
    label: "Engineering hub",
    place: "Chennai, India",
    detail: "Engineering and delivery",
  },
];

function WorldDiagram() {
  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#e8edf3] bg-white px-4 py-8 shadow-[0_20px_65px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:py-14">

        {/* Subtle background accents */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#29B6F0]/[0.07] blur-[90px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#7A4FD1]/[0.07] blur-[90px]" />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#64748b] uppercase sm:text-xs">
              Global presence
            </span>

            <span className="flex items-center gap-2 text-[10px] font-medium text-[#64748b] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
              Two locations
            </span>
          </div>

          {/* World Diagram */}
          <svg
            viewBox="0 0 600 360"
            role="img"
            aria-label="Stylized world diagram connecting Irvine, California and Chennai, India"
            className="h-auto w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="worldGradient"
                x1="70"
                y1="60"
                x2="530"
                y2="300"
              >
                <stop offset="0%" stopColor="#29B6F0" />
                <stop offset="48%" stopColor="#3E7BD6" />
                <stop offset="75%" stopColor="#7A4FD1" />
                <stop offset="100%" stopColor="#B93FC9" />
              </linearGradient>

              <linearGradient
                id="routeGradient"
                x1="110"
                y1="180"
                x2="475"
                y2="180"
              >
                <stop offset="0%" stopColor="#29B6F0" />
                <stop offset="100%" stopColor="#B93FC9" />
              </linearGradient>

              <filter id="worldGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <pattern
                id="worldDots"
                width="13"
                height="13"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1.5"
                  cy="1.5"
                  r="1"
                  fill="#8BA3BC"
                  opacity="0.35"
                />
              </pattern>
            </defs>

            {/* Globe grid */}
            <ellipse
              cx="300"
              cy="178"
              rx="260"
              ry="145"
              stroke="#94a3b8"
              strokeOpacity="0.22"
              strokeDasharray="3 8"
            />

            <ellipse
              cx="300"
              cy="178"
              rx="175"
              ry="145"
              stroke="#94a3b8"
              strokeOpacity="0.16"
            />

            <ellipse
              cx="300"
              cy="178"
              rx="85"
              ry="145"
              stroke="#94a3b8"
              strokeOpacity="0.16"
            />

            <path
              d="M43 178H557 M64 120H536 M64 236H536"
              stroke="#94a3b8"
              strokeOpacity="0.16"
              strokeDasharray="4 8"
            />

            {/* World landmasses */}
            <g
              fill="url(#worldDots)"
              stroke="url(#worldGradient)"
              strokeOpacity="0.7"
              strokeWidth="1.4"
              strokeLinejoin="round"
            >
              {/* North America */}
              <path d="M77 91L99 70L134 62L155 74L177 72L192 88L185 106L164 116L156 137L137 146L129 168L109 170L99 151L83 143L70 120L77 91Z" />
              <path d="M137 170L153 177L162 198L177 209L170 229L159 249L145 235L137 213L125 195L137 170Z" />

              {/* South America */}
              <path d="M177 235L202 240L216 262L210 286L198 313L187 333L176 315L171 288L160 263L177 235Z" />

              {/* Europe */}
              <path d="M268 91L290 77L314 82L329 94L318 109L296 114L282 105L268 91Z" />

              {/* Africa */}
              <path d="M285 128L319 118L348 137L352 165L341 193L329 227L310 244L295 219L281 187L272 158L285 128Z" />

              {/* Asia */}
              <path d="M328 83L358 66L405 61L443 74L476 82L508 104L515 127L492 142L463 139L444 155L421 150L401 169L375 157L356 143L337 133L319 111L328 83Z" />

              {/* India */}
              <path d="M378 163L397 168L405 190L393 215L382 204L372 183L378 163Z" />

              {/* Southeast Asia */}
              <path d="M418 179L438 180L450 196L438 207L422 198L418 179Z" />
              <path d="M458 210L477 213L486 222L472 228L459 220Z" />

              {/* Australia */}
              <path d="M457 252L485 241L513 252L519 273L500 287L474 283L457 268L457 252Z" />
            </g>

            {/* Connection route */}
            <path
              d="M133 142 C220 10, 380 15, 397 190"
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              strokeDasharray="6 7"
              strokeLinecap="round"
              filter="url(#worldGlow)"
            />

            {/* Irvine static location marker */}
            <circle
              cx="133"
              cy="142"
              r="13"
              fill="#29B6F0"
              opacity="0.13"
            />

            <circle
              cx="133"
              cy="142"
              r="6"
              fill="#29B6F0"
              opacity="0.3"
            />

            <circle
              cx="133"
              cy="142"
              r="4"
              fill="#29B6F0"
              filter="url(#worldGlow)"
            />

            {/* Chennai static location marker */}
            <circle
              cx="397"
              cy="190"
              r="13"
              fill="#B93FC9"
              opacity="0.13"
            />

            <circle
              cx="397"
              cy="190"
              r="6"
              fill="#B93FC9"
              opacity="0.3"
            />

            <circle
              cx="397"
              cy="190"
              r="4"
              fill="#B93FC9"
              filter="url(#worldGlow)"
            />

            {/* Irvine label */}
            <path
              d="M133 133L133 102L112 102"
              stroke="#29B6F0"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />

            <text
              x="105"
              y="93"
              fill="#29B6F0"
              fontSize="12"
              fontWeight="700"
              textAnchor="end"
            >
              IRVINE
            </text>

            {/* Chennai label */}
            <path
              d="M397 199L397 232L422 232"
              stroke="#B93FC9"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />

            <text
              x="427"
              y="237"
              fill="#B93FC9"
              fontSize="12"
              fontWeight="700"
            >
              CHENNAI
            </text>
          </svg>

          {/* Location legend */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#e8edf3] pt-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#29B6F0]" />
              <span className="text-xs text-[#64748b]">
                United States
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B93FC9]" />
              <span className="text-xs text-[#64748b]">
                India
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhereWeAre() {
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
      id="locations"
      className="relative isolate scroll-mt-8 overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-28"
      aria-labelledby="locations-title"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#29B6F0]/[0.06] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#7A4FD1]/[0.06] blur-[130px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

        {/* Left Side - World Diagram */}
        <div data-aos="fade-right" className="w-full min-w-0">
          <WorldDiagram />
        </div>

        {/* Right Side - Original Content */}
        <div data-aos="fade-left" className="w-full min-w-0">
          <p className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent uppercase sm:text-sm">
            Where we are
          </p>

          <h2
            id="locations-title"
            className="mt-4 text-[27px] leading-[1.2] font-extrabold tracking-[-0.04em] text-[#101827] sm:text-[33px] lg:text-[37px] xl:text-[40px]"
          >
            One team, across{" "}
            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              time zones.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#5b6878] sm:text-base sm:leading-8">
            A close partnership on both sides of the world, serving clients
            across North America and beyond.
          </p>

          {/* Location details - No cards or borders */}
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-7">
            {locations.map((location, index) => (
              <div
                key={location.label}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative min-w-0 py-2"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29B6F0]/[0.08] transition-colors duration-300 group-hover:bg-[#29B6F0]/[0.14]">
                    <MapPin
                      size={19}
                      className="text-[#3E7BD6]"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.17em] text-[#3E7BD6] uppercase sm:text-xs">
                      {location.label}
                    </p>

                    <h3 className="mt-2 text-lg font-bold tracking-[-0.03em] text-[#101827] sm:text-xl lg:text-[21px]">
                      {location.place}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5b6878]">
                      {location.detail}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#8994a3] transition-colors duration-300 group-hover:text-[#3E7BD6]">
                      <span>BeaverTek global presence</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Subtle bottom gradient hover accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(90deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] transition-all duration-500 group-hover:w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
