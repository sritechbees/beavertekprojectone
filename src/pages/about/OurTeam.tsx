
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teams = [
  {
    label: "United States",
    title: "Strategy, architecture, and partnership",
    accent: "#29B6F0",
  },
  {
    label: "India",
    title: "Deep engineering execution",
    accent: "#B93FC9",
  },
];

export default function OurTeam() {
  useEffect(() => {
    AOS.init({
      duration: 900,
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
      id="team"
      className="relative isolate scroll-mt-8 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="team-title"
    >
      {/* Background Accents */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/[0.055] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#7A4FD1]/[0.055] blur-[130px]" />

        <div className="absolute right-[10%] top-[12%] h-[260px] w-[260px] rotate-45 rounded-[45px] border border-[#3E7BD6]/[0.07] sm:h-[340px] sm:w-[340px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

        {/* LEFT CONTENT */}

        <div data-aos="fade-right">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3E7BD6]">
            The team
          </p>

          <h2
            id="team-title"
            className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#161E2F]"
          >
            <span>Experience that reaches </span>
            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              beyond the org chart.
            </span>
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-[#5b6878] sm:text-base sm:leading-8 lg:text-[16px]">
            Our leadership brings more than 80 years of combined experience
            working with Fortune 500 companies across financial services,
            healthcare, retail, and technology. We have built payment platforms
            processing millions of transactions a month, healthcare AI used in
            real hospitals, and mobile products taken from concept to launch.
          </p>

          <p className="mt-5 text-[15px] leading-7 text-[#5b6878] sm:text-base sm:leading-8 lg:text-[16px]">
            We are global by design. Our US team handles strategy, architecture,
            and client partnership. Our India team handles deep engineering
            execution. Together, we deliver faster and at a better cost than a
            single-location firm.
          </p>

          {/* Small Gradient Accent */}

          <div className="mt-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9]" />
        </div>

        {/* RIGHT CONTENT */}

        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="relative"
        >

          {/* Experience Highlight */}

          <div className="relative overflow-hidden rounded-[26px] border border-[#E8EDF3] bg-white p-7 shadow-[0_15px_50px_rgba(22,30,47,0.07)] sm:p-9 lg:p-10">

            {/* Subtle Background Gradient */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/[0.09] blur-[75px]"
            />

            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#647184]">
                More than
              </p>

              <div className="mt-2 flex items-baseline">
                <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_40%,#7A4FD1_75%,#B93FC9_100%)] bg-clip-text text-[76px] font-extrabold leading-none tracking-[-0.07em] text-transparent sm:text-[88px]">
                  80
                </span>

                <span className="ml-1 text-[48px] font-bold text-[#7A4FD1] sm:text-[58px]">
                  +
                </span>
              </div>

              <p className="mt-3 text-sm font-medium leading-6 text-[#5b6878] sm:text-base">
                years of combined leadership experience
              </p>

              {/* Gradient Divider */}

              <div className="my-8 h-px w-full bg-gradient-to-r from-[#29B6F0]/50 via-[#7A4FD1]/30 to-transparent" />

              {/* Team Locations */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {teams.map((team, index) => (
                  <div
                    key={team.label}
                    className="group relative overflow-hidden rounded-2xl border border-[#E8EDF3] bg-[#F9FBFD] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(62,123,214,0.08)] sm:p-6"
                  >
                    {/* Accent */}

                    <div
                      className="mb-5 h-[3px] w-9 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{
                        background: `linear-gradient(90deg, ${team.accent}, #7A4FD1)`,
                      }}
                    />

                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#647184]">
                      {team.label}
                    </p>

                    <p className="mt-3 text-[15px] font-semibold leading-7 text-[#161E2F] sm:text-base">
                      {team.title}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* Decorative Diagonal Outline */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-32 w-32 rotate-12 rounded-[28px] border border-[#B93FC9]/15 sm:-bottom-7 sm:-right-7 sm:h-40 sm:w-40"
          />

        </div>
      </div>
    </section>
  );
}
