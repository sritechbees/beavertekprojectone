
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const engagementModels = [
  {
    number: "01",
    title: "Fixed-scope project",
    description:
      "A defined deliverable, fixed price after a paid discovery.",
  },
  {
    number: "02",
    title: "Dedicated team",
    description:
      "A US-based lead and India engineering team, on a monthly retainer.",
  },
  {
    number: "03",
    title: "Managed services",
    description:
      "Monthly support, monitoring and maintenance for what we build or inherit.",
  },
  {
    number: "04",
    title: "Fractional CTO",
    description:
      "Senior technology and architecture guidance for companies without a technical leader.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#3E7BD6]">
      {children}
    </p>
  );
}

export default function TheRightShape() {
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
    <section id="engage" className="bg-[#f5f8fc] py-28">
      <div className="container mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="lg:sticky lg:top-28 lg:h-fit"
        >
          <Eyebrow>How we engage</Eyebrow>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            The right shape
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              for the work.
            </span>
          </h2>

          <p className="mt-6 max-w-sm leading-8 text-slate-500">
            Start with a clear problem. Choose the engagement that fits
            what you need.
          </p>
        </div>

        {/* ENGAGEMENT CARDS */}
        <div className="grid gap-4 sm:grid-cols-2">
          {engagementModels.map((model, index) => (
            <article
              key={model.number}
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay={index * 120}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#3E7BD6]/50 hover:shadow-2xl hover:shadow-[#3E7BD6]/10"
            >
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-sm font-bold text-transparent">
                / {model.number}
              </span>

              <h3 className="mt-7 text-xl font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#3E7BD6]">
                {model.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {model.description}
              </p>

              {/* BOTTOM GRADIENT HOVER */}
              <div className="mt-7 h-1 w-10 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-500 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
