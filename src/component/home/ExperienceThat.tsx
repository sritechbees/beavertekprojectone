
"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import {
  UsersRound,
  Globe2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* =========================================
   REASONS DATA
========================================= */

const reasons = [
  {
    title: "Senior people, start to finish.",
    description:
      "The engineers who scope your project are the ones who build it.",
    icon: UsersRound,
  },
  {
    title: "US leadership, global engineering.",
    description:
      "Strategy and architecture in California; engineering execution in Chennai.",
    icon: Globe2,
  },
  {
    title: "We run our own products.",
    description:
      "BeaverHealthAI is built and operated by our team. We know production, not just prototypes.",
    icon: PackageCheck,
  },
  {
    title: "Built for regulated work.",
    description:
      "Healthcare and payments experience means security and compliance are designed in, not bolted on.",
    icon: ShieldCheck,
  },
];

/* =========================================
   EYEBROW
========================================= */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-3">
      <span className="h-[2px] w-8 rounded-full bg-[#29B6F0]" />

      <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3E7BD6]">
        {children}
      </span>
    </div>
  );
}

/* =========================================
   EXPERIENCE THAT
========================================= */

export default function ExperienceThat() {
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
      id="why-us"
      className="relative isolate overflow-hidden bg-white py-20 text-[#101828] sm:py-24 lg:py-28"
    >
      {/* MAIN CONTAINER */}

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">

          {/* LEFT HEADING */}

          <div data-aos="fade-up">
            <Eyebrow>Why BeaverTek</Eyebrow>

            <h2 className="max-w-3xl text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#101828] sm:text-[42px] md:text-[46px] lg:text-[54px]">
              Experience that

              <span className="mt-2 block bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                stays with the work.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div data-aos="fade-up" data-aos-delay="150">
            <p className="max-w-lg border-l-[3px] border-[#29B6F0] pl-6 text-base leading-8 text-[#596579] sm:text-[17px]">
              We know you have plenty of options. Here&apos;s why companies
              choose BeaverTek. Senior guidance, hands-on engineering and
              a team that understands what it takes to keep technology
              working in the real world.
            </p>
          </div>
        </div>

        {/* =====================================
            REASONS GRID
        ===================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative overflow-hidden rounded-2xl border border-[#E7EBF0] bg-white p-6 shadow-[0_5px_25px_rgba(16,24,40,0.035)] transition-all duration-500 hover:-translate-y-1 hover:border-[#29B6F0]/30 hover:shadow-[0_16px_40px_rgba(16,24,40,0.075)] sm:p-7 lg:p-8"
              >
                {/* CARD HEADER */}

                <div className="mb-6 flex items-center gap-4">

                  {/* ICON BOX */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/15 bg-[#29B6F0]/[0.06] text-[#3E7BD6] transition-all duration-500 group-hover:border-transparent group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1)] group-hover:text-white">

                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />

                  </div>

                  {/* SUBTLE DIVIDER */}

                  <div className="h-px flex-1 bg-[#E9EDF2] transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#29B6F0] group-hover:to-[#B93FC9]" />

                </div>

                {/* CARD TITLE */}

                <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-[22px]">
                  {reason.title}
                </h3>

                {/* CARD DESCRIPTION */}

                <p className="mt-3 max-w-lg text-sm leading-7 text-[#667085] sm:text-[15px]">
                  {reason.description}
                </p>

                {/* BOTTOM GRADIENT HOVER */}

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-full" />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
