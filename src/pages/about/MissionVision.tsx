
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const statements = [
  {
    label: "Our mission",
    text: "Give growing businesses the senior engineering, data and AI capabilities that used to be available only to the largest enterprises.",
    accent: "#29B6F0",
    delay: 0,
  },
  {
    label: "Our vision",
    text: "To be the technology partner mid-size companies trust to build, run and continuously improve the systems their business depends on.",
    accent: "#B93FC9",
    delay: 150,
  },
];

export default function MissionVision() {
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
      className="relative isolate overflow-hidden bg-[#050507] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-label="Our mission and vision"
    >
      {/* Background Diagonal Shapes */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Left Diagonal Shape */}

        <div className="absolute -left-32 top-[8%] h-[260px] w-[260px] -rotate-[35deg] rounded-[45px] border border-[#29B6F0]/[0.12] sm:-left-40 sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]" />

        <div className="absolute -left-20 top-[14%] h-[190px] w-[190px] -rotate-[35deg] rounded-[35px] border border-[#3E7BD6]/[0.09] sm:-left-28 sm:h-[290px] sm:w-[290px]" />

        {/* Right Diagonal Shape */}

        <div className="absolute -right-32 bottom-[-12%] h-[280px] w-[280px] rotate-[35deg] rounded-[50px] border border-[#B93FC9]/[0.12] sm:-right-40 sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]" />

        <div className="absolute -right-20 bottom-[-5%] h-[200px] w-[200px] rotate-[35deg] rounded-[35px] border border-[#7A4FD1]/[0.09] sm:-right-28 sm:h-[300px] sm:w-[300px]" />

        {/* Soft Brand Glows */}

        <div className="absolute left-[5%] top-[5%] h-[300px] w-[300px] rounded-full bg-[#29B6F0]/[0.07] blur-[120px]" />

        <div className="absolute bottom-[5%] right-[5%] h-[320px] w-[320px] rounded-full bg-[#7A4FD1]/[0.08] blur-[130px]" />
      </div>

      {/* Main Content */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

        {statements.map((statement, index) => (
          <div
            key={statement.label}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={statement.delay}
            className="group relative"
          >
          


            {/* Gradient Title */}

            <p className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-sm font-bold uppercase tracking-[0.2em] text-transparent sm:text-base">
              {statement.label}
            </p>

            {/* Description */}

            <p className="mt-5 max-w-xl text-[16px] font-medium leading-[1.65] tracking-[-0.025em] text-white/90 transition-colors duration-300 group-hover:text-white sm:text-[20px] sm:leading-[1.6] lg:text-[22px] lg:leading-[1.6]">
              {statement.text}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
