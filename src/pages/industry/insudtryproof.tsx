
"use client";

import { useEffect } from "react";
import {
  Lightbulb,
  PencilRuler,
  Code2,
  Headset,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const metrics = [
  {
    value: "150",
    label: "Clients",
    description: "On the documented payment platform",
  },
  {
    value: "4.5M",
    label: "Monthly Transactions",
    description: "Processed by the payment platform",
  },
  {
    value: "80+",
    label: "Years of Experience",
    description: "Combined leadership experience",
  },
];

const steps = [
  {
    title: "Understand",
    description:
      "We learn your business, challenges, workflows and technology goals.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description:
      "We define a practical solution aligned with your requirements.",
    icon: PencilRuler,
  },
  {
    title: "Build",
    description:
      "Our teams engineer, integrate and deliver the solution.",
    icon: Code2,
  },
  {
    title: "Support",
    description:
      "We continue to support and improve the technology we build.",
    icon: Headset,
  },
];

export default function IndustryProof() {
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
    <section className="relative overflow-hidden bg-white px-5 py-12 text-[#111111] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="relative mx-auto max-w-7xl">

        {/* EXPERIENCE THAT MATTERS + METRICS */}

        <div className="grid grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">

          {/* LEFT SIDE - EXPERIENCE CONTENT */}

          <div className="text-center lg:text-left">
            <span
              data-aos="fade-up"
              className="inline-block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-[10px] font-bold uppercase tracking-[0.22em] text-transparent sm:text-xs"
            >
              Experience That Matters
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 text-[28px] font-bold leading-[1.12] tracking-[-0.04em] text-[#111111] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px]"
            >
              Built on experience.
              <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Driven by innovation.
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#666670] sm:text-sm sm:leading-7 lg:mx-0"
            >
              We bring together technology leadership, engineering
              expertise and a practical understanding of business
              challenges to deliver solutions that create value.
            </p>
          </div>

          {/* RIGHT SIDE - EXPERIENCE METRICS */}

          <div
            data-aos="fade-left"
            className="grid grid-cols-1 gap-5 rounded-2xl border border-[#EAEAF0] bg-white p-6 shadow-[0_8px_35px_rgba(0,0,0,0.07)] sm:grid-cols-3 sm:gap-3 sm:p-6 md:p-8 lg:gap-4 lg:p-6 xl:p-8"
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <p className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-4xl font-bold leading-none tracking-[-0.05em] text-transparent sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                  {metric.value}
                </p>

                <h3 className="mt-2 text-sm font-bold text-[#111111] sm:text-xs md:text-sm">
                  {metric.label}
                </h3>

                <p className="mx-auto mt-1.5 max-w-[180px] text-[11px] leading-5 text-[#666666] sm:text-[10px] md:text-xs">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE FOOTNOTE */}

        <p
          data-aos="fade-up"
          className="mt-4 text-center text-[9px] leading-5 text-[#777777] sm:mt-5 sm:text-[10px]"
        >
          Payment platform figures refer to documented project results.
          Combined years refer to leadership experience.
        </p>

        {/* HOW WE WORK */}

        <div className="mt-14 sm:mt-16 lg:mt-20">

          {/* SECTION HEADING */}

          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">

            <span
              data-aos="fade-up"
              className="inline-block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-[10px] font-bold uppercase tracking-[0.25em] text-transparent sm:text-xs"
            >
              How We Work
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 text-[27px] font-extrabold leading-tight tracking-[-0.035em] text-[#111111] sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl"
            >
              From business challenges
              <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                to technology solutions.
              </span>
            </h2>
          </div>

          {/* PROCESS CARDS */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex h-full flex-col rounded-2xl border border-[#EAEAF0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3E7BD6]/30 hover:shadow-[0_12px_30px_rgba(62,123,214,0.10)] sm:p-6"
                >
                  {/* ICON */}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0]/10 via-[#3E7BD6]/10 to-[#B93FC9]/10 transition-all duration-300 group-hover:from-[#29B6F0]/20 group-hover:via-[#3E7BD6]/20 group-hover:to-[#B93FC9]/20">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#3E7BD6] transition-colors duration-300 group-hover:text-[#B93FC9]"
                    />
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-5 text-lg font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-xl">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-2 text-[13px] leading-6 text-[#666670] sm:text-sm sm:leading-7">
                    {step.description}
                  </p>

                  {/* GRADIENT BOTTOM LINE */}

                  <div className="mt-auto pt-6">
                    <div className="h-[2px] w-9 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* LOCATIONS */}

        <div className="mt-14 border-t border-[#EAEAF0] pt-10 sm:mt-16 sm:pt-12 lg:mt-20 lg:pt-14">

          {/* LOCATION HEADING */}

          <div
            data-aos="fade-up"
            className="mx-auto mb-8 max-w-2xl text-center sm:mb-10"
          >
            <span className="inline-block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-[10px] font-bold uppercase tracking-[0.25em] text-transparent sm:text-xs">
              Our Locations
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-[#111111] sm:mt-4 sm:text-3xl md:text-4xl">
              Connected Across{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Continents.
              </span>
            </h2>
          </div>

          {/* LOCATION CONTENT */}

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">

            {/* UNITED STATES */}

            <div
              data-aos="fade-up"
              className="group rounded-2xl border border-[#EAEAF0] bg-[#FAFAFC] px-6 py-7 text-center transition-all duration-300 hover:border-[#29B6F0]/40 hover:shadow-[0_10px_30px_rgba(41,182,240,0.08)] sm:px-8 sm:py-9"
            >
              <span className="inline-block bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-[10px] font-bold uppercase tracking-[0.2em] text-transparent sm:text-xs">
                United States
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:mt-4 sm:text-2xl md:text-3xl">
                Irvine, California
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-[13px] leading-6 text-[#666670] sm:text-sm sm:leading-7">
                Strategy, architecture and client partnership.
              </p>

              <div className="mx-auto mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] transition-all duration-300 group-hover:w-20" />
            </div>

            {/* INDIA */}

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="group rounded-2xl border border-[#EAEAF0] bg-[#FAFAFC] px-6 py-7 text-center transition-all duration-300 hover:border-[#B93FC9]/40 hover:shadow-[0_10px_30px_rgba(185,63,201,0.08)] sm:px-8 sm:py-9"
            >
              <span className="inline-block bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-[10px] font-bold uppercase tracking-[0.2em] text-transparent sm:text-xs">
                India
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#7A4FD1] sm:mt-4 sm:text-2xl md:text-3xl">
                Chennai, India
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-[13px] leading-6 text-[#666670] sm:text-sm sm:leading-7">
                Engineering execution and technology delivery.
              </p>

              <div className="mx-auto mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] transition-all duration-300 group-hover:w-20" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
