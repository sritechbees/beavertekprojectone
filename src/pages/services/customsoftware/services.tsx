
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowUpRight,
  Code2,
  RefreshCw,
  CloudCog,
  Sparkles,
  Wrench,
  Activity,
} from "lucide-react";

type Service = {
  title: string;
  image: string;
  description: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    title: "Custom enterprise application development",
    image: "/services/software maintance.png",
    description:
      "Build secure, scalable enterprise applications tailored to your business requirements and operational goals.",
    icon: Code2,
  },
  {
    title: "Legacy modernization",
    image: "/services/Budget Monitoring.jpg",
    description:
      "Modernize legacy applications and technologies to improve performance, scalability, security, and long-term value.",
    icon: RefreshCw,
  },
  {
    title: "Cloud-native application development",
    image: "/services/Cloud Cost Analysis.jpg",
    description:
      "Develop cloud-native applications designed for flexibility, scalability, reliability, and modern digital operations.",
    icon: CloudCog,
  },
  {
    title: "Feature enhancements & upgrades",
    image: "/services/Data Analytics.jpg",
    description:
      "Enhance existing applications with new features, upgrades, and improvements that support evolving business needs.",
    icon: Sparkles,
  },
  {
    title:
      "Preventive and corrective maintenance with near-zero downtime",
    image: "/services/dataanalytics.jpg",
    description:
      "Keep critical applications reliable with proactive maintenance, issue resolution, and continuous operational support.",
    icon: Wrench,
  },
  {
    title: "Performance monitoring & technical support",
    image: "/services/Custom Software.jpg",
    description:
      "Monitor application performance and provide technical support to maintain reliable, efficient, and responsive systems.",
    icon: Activity,
  },
];

function Services() {
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
    <section className="relative isolate overflow-hidden bg-[#050507] py-20 text-white sm:py-24 lg:py-28">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />

        <div className="absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#29B6F0]/10 blur-[160px]" />

        <div className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E7BD6]/[0.04] blur-[150px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_#29B6F0]" />
            Services
          </span>

          <h2 className="mt-6 text-[34px] font-bold leading-[1.12] tracking-[-0.045em] sm:text-[43px] md:text-[50px] lg:text-[58px]">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-[66px] rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0C0C0F] transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0]/35 hover:shadow-[0_24px_65px_rgba(0,0,0,0.45)]"
              >
                {/* IMAGE */}
                <div className="relative h-[225px] overflow-hidden sm:h-[235px] lg:h-[245px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0F] via-black/15 to-black/10" />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                  {/* Top label */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/85 backdrop-blur-lg">
                      BeaverTek Solutions
                    </span>
                  </div>

                  {/* Service icon */}
                  <div className="absolute bottom-5 left-5 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-[#29B6F0]/30 bg-[#08090D]/85 text-[#29B6F0] shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-[#29B6F0]/60 group-hover:bg-[#29B6F0]/15">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  {/* Image accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-transform duration-500 group-hover:scale-x-100" />
                </div>

                {/* CONTENT */}
                <div className="relative flex flex-1 flex-col px-6 pb-6 pt-3 sm:px-7 sm:pb-7">

                  <h3 className="max-w-[95%] text-[19px] font-semibold leading-[1.4] tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-[20px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.85] text-[#A0A0A8] sm:text-[14px]">
                    {service.description}
                  </p>

                  {/* BOTTOM ACTION */}
                  <div className="mt-auto flex items-center justify-between pt-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-[#29B6F0]">
                      Explore Service
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/75 transition-all duration-300 group-hover:border-[#29B6F0]/50 group-hover:bg-[#29B6F0] group-hover:text-white">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;
