
"use client";

import Link from "next/link";

const industryPageStyles = `
.bt-gradient {
  background: linear-gradient(135deg, #b93fc9 0%, #3e7bd6 55%, #29b6f0 100%);
}

.bt-gradient-text {
  background: linear-gradient(135deg, #b93fc9 0%, #9762e4 45%, #29b6f0 100%);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bt-gradient-button {
  background: linear-gradient(135deg, #9762e4 0%, #3e7bd6 55%, #29b6f0 100%);
  color: #fff;
  transition: filter 180ms ease, transform 180ms ease;
}

.bt-gradient-button:hover {
  filter: brightness(1.12);
  transform: translateY(-2px);
}

.industry-slideshow {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.industry-slideshow-track {
  display: flex;
  width: 600%;
  height: 100%;
  animation: industry-slideshow 24s ease-in-out infinite;
}

.industry-slideshow-slide {
  position: relative;
  flex: 0 0 calc(100% / 6);
  height: 100%;
}

.industry-slideshow-image {
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  opacity: 1;
  filter: brightness(1.2) contrast(1.05);
}

@keyframes industry-slideshow {
  0%, 20% { transform: translateX(0); }
  26%, 46% { transform: translateX(-16.6667%); }
  52%, 72% { transform: translateX(-33.3333%); }
  78%, 100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .industry-slideshow-track {
    animation: none;
  }
}
`;

const industries = [
  {
    number: "01",
    name: "Healthcare",
    description: "Intelligent healthcare technology",
  },
  {
    number: "02",
    name: "Financial Services",
    description: "Reliable financial platforms",
  },
  {
    number: "03",
    name: "Professional Services",
    description: "Smarter business operations",
  },
];

const visualSlides = [
  { name: "Healthcare", image: "/product/healthcaree.jpeg" },
  { name: "Financial technology", image: "/product/financial.jpeg" },
  { name: "Business operations", image: "/product/professional.jpeg" },
];

export default function IndustryHero() {
  return (
    <section
   className="
  relative isolate flex items-center overflow-hidden
  bg-[#000000] px-4 py-11 text-white
  sm:px-6 sm:py-12
  md:px-8 md:py-12
  lg:min-h-[62vh] lg:px-10 lg:pt-20 lg:pb-12
  xl:min-h-[66vh] xl:px-12 xl:pt-24 xl:pb-14
  max-sm:mt-16
"
    >
      <style>{industryPageStyles}</style>

      <div
        className="
          relative z-10 mx-auto grid w-full max-w-7xl
          items-center gap-9
          md:gap-10
          lg:grid-cols-[1.1fr_0.9fr] lg:gap-10
          xl:gap-14
        "
      >
        {/* LEFT CONTENT */}

        <div className="relative min-w-0">
          <h1
            className="
              max-w-2xl
              text-[1.8rem] font-extrabold
              leading-[1.12] tracking-[-0.045em] text-white
              sm:text-[2.2rem]
              md:text-[2.55rem]
              lg:text-[2.8rem]
              xl:text-[3.1rem]
            "
          >
            Technology that
            <span className="block bt-gradient-text">
              understands
            </span>
            your industry.
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4 max-w-lg
              text-[13px] leading-6 text-[#A0A0A8]
              sm:mt-5 sm:text-sm sm:leading-7
              md:text-[15px]
              lg:max-w-xl
            "
          >
            Every industry has different challenges. BeaverTek combines
            senior engineering, practical AI and industry experience
            to build technology around the way your business works.
          </p>

          {/* CTA BUTTONS */}

          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            <Link
              href="/contact"
              className="
                bt-gradient-button rounded-full
                px-5 py-2.5 text-xs font-semibold
                shadow-[0_0_25px_rgba(62,123,214,0.2)]
                sm:px-6 sm:py-3 sm:text-sm
              "
            >
              Discuss Your Project ↗
            </Link>

            <Link
              href="#industry-solutions"
              className="
                rounded-full border border-[#2A2A30]
                bg-white/[0.04] px-5 py-2.5
                text-xs font-semibold text-white
                transition hover:border-[#3E7BD6]
                hover:bg-white/[0.08]
                sm:px-6 sm:py-3 sm:text-sm
              "
            >
              Explore Industries ↓
            </Link>
          </div>

          {/* TECHNOLOGY HIGHLIGHTS */}

          <div
            className="
              mt-7 flex flex-wrap
              gap-x-7 gap-y-4
              border-t border-[#2A2A30]
              pt-5
              sm:mt-8 sm:gap-x-9 sm:pt-5
            "
          >
            <div>
              <p className="bt-gradient-text text-lg font-bold sm:text-xl">
                AI
              </p>
              <p className="mt-0.5 text-[10px] text-[#A0A0A8] sm:text-xs">
                Intelligent Solutions
              </p>
            </div>

            <div>
              <p className="bt-gradient-text text-lg font-bold sm:text-xl">
                Cloud
              </p>
              <p className="mt-0.5 text-[10px] text-[#A0A0A8] sm:text-xs">
                Modern Infrastructure
              </p>
            </div>

            <div>
              <p className="bt-gradient-text text-lg font-bold sm:text-xl">
                Software
              </p>
              <p className="mt-0.5 text-[10px] text-[#A0A0A8] sm:text-xs">
                Built Around Business
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}

        <div
          className="
            relative mx-auto w-full
            max-w-sm sm:max-w-md
            lg:max-w-lg
          "
        >
          <div
            className="
              relative rounded-[1.4rem]
              border border-[#2A2A30]
              bg-[#000000] p-3.5
              shadow-[0_20px_45px_rgba(0,0,0,0.4)]
              sm:rounded-[1.7rem] sm:p-4
            "
          >
            {/* PANEL HEADER */}

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8]">
                  BeaverTek
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                  Industry Intelligence
                </p>
              </div>
            </div>

            {/* IMAGE SLIDESHOW */}

            <div
              aria-label="Moving images of healthcare, financial technology and business operations"
              className="
                relative flex h-40 items-center
                justify-center overflow-hidden
                rounded-xl border border-[#2A2A30]
                bg-[#000000]
                sm:h-48 md:h-52
              "
              role="img"
            >
              <div aria-hidden="true" className="industry-slideshow">
                <div className="industry-slideshow-track">
                  {[...visualSlides, ...visualSlides].map(
                    (slide, index) => (
                      <div
                        className="industry-slideshow-slide"
                        key={`${slide.image}-${index}`}
                      >
                        <div
                          aria-hidden="true"
                          className="industry-slideshow-image"
                          style={{
                            backgroundImage: `url("${slide.image}")`,
                          }}
                        />

                        {/* IMAGE LABEL - NO DARK OVERLAY */}

                        <span
                          className="
                            absolute bottom-3 left-3
                            text-[9px] font-semibold
                            uppercase tracking-[0.13em]
                            text-white
                            drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]
                            sm:bottom-4 sm:left-4
                            sm:text-[10px]
                          "
                        >
                          {slide.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* ROTATING CIRCLES */}

              <div
                className="
                  absolute h-28 w-28
                  animate-[spin_20s_linear_infinite]
                  rounded-full border border-dashed
                  border-[#3E7BD6]/50
                  sm:h-36 sm:w-36
                "
              />

              <div
                className="
                  absolute h-20 w-20
                  animate-[spin_15s_linear_infinite_reverse]
                  rounded-full border border-[#B93FC9]/40
                  sm:h-28 sm:w-28
                "
              />

              <span
                className="
                  absolute left-5 top-5 h-2.5 w-2.5
                  rounded-full bg-[#29B6F0]
                  shadow-[0_0_15px_#29B6F0]
                  sm:left-7 sm:top-7
                "
              />

              <span
                className="
                  absolute bottom-5 right-5 h-2.5 w-2.5
                  rounded-full bg-[#B93FC9]
                  shadow-[0_0_15px_#B93FC9]
                  sm:bottom-7 sm:right-7
                "
              />
            </div>

            {/* INDUSTRY LIST */}

            <div className="mt-4 space-y-2">
              {industries.map((industry) => (
                <div
                  key={industry.number}
                  className="
                    group flex items-center justify-between
                    gap-3 rounded-lg border border-[#2A2A30]
                    bg-[#000000] px-3 py-2.5
                    transition duration-300
                    hover:border-[#3E7BD6]
                    hover:shadow-[0_0_20px_rgba(62,123,214,0.12)]
                    sm:rounded-xl sm:px-3.5 sm:py-3
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="bt-gradient-text shrink-0 text-xs font-bold sm:text-sm">
                      {industry.number}
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        {industry.name}
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-[#A0A0A8] sm:text-xs sm:leading-5">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      shrink-0 text-sm text-[#3E7BD6]
                      transition group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
