
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SeniorEngineers() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
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
      id="top"
      className="relative isolate overflow-hidden bg-[#050507] text-white"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 animate-ambient-drift bg-[radial-gradient(ellipse_at_72%_30%,rgba(41,182,240,0.20),transparent_35%),radial-gradient(ellipse_at_80%_80%,rgba(122,79,209,0.17),transparent_36%)] motion-reduce:animate-none"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121316] via-[#121316]/95 to-[#0c2850]/70" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/tech-grid.svg')] opacity-30 [mask-image:linear-gradient(to_right,black,transparent_90%)]"
      />

      <div className="absolute -right-40 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-[#29B6F0]/15 blur-[120px] motion-reduce:animate-none" />

      <div className="absolute -bottom-40 left-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-[#7A4FD1]/15 blur-[110px] motion-reduce:animate-none" />

      {/* HERO CONTENT */}
      <div className="container mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-[650px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:pb-14 lg:pt-28">

        {/* LEFT CONTENT */}
        <div className="relative z-10" data-aos="fade-up">
          {/* CATEGORY */}
          <div
            className="mb-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#29B6F0] backdrop-blur-xl sm:text-[11px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>Software</span>
            <span className="text-[#29B6F0]">·</span>
            <span>Data</span>
            <span className="text-[#29B6F0]">·</span>
            <span>AI</span>
            <span className="text-[#29B6F0]">·</span>
            <span>Security</span>
          </div>

          {/* LOCATION */}
          <p
            className="mb-4 text-xs font-semibold tracking-[0.12em] text-[#29B6F0] sm:text-sm"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            IRVINE, CALIFORNIA <span className="mx-1.5">/</span> CHENNAI, INDIA
          </p>

          {/* HEADING */}
          <h1
            className="max-w-3xl text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-[42px] md:text-5xl lg:text-[54px] xl:text-[60px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Senior engineers who build, modernize and{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              run your technology.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Your trusted partner in IT managed services and innovative
            technology solutions. BeaverTek helps growing companies ship
            custom software, put AI to work, see their data clearly and
            stay secure — led from California, engineered by our team in India.
          </p>

          {/* BUTTONS */}
          <div
            className="mt-7 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-6 py-3 text-xs font-semibold text-white shadow-[0_6px_25px_rgba(41,182,240,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(41,182,240,0.3)] sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Talk to an engineer
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <a
              href="#work"
              className="group flex items-center gap-2 text-xs font-semibold text-white transition hover:text-[#29B6F0] sm:text-sm"
            >
              Explore our work
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          {/* TRUST ITEMS */}
          <div
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:gap-x-7 sm:text-sm"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Senior-led engineering
            </span>

            <span>Global delivery model</span>

            <span>Enterprise experience</span>
          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div
          className="group relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center sm:max-w-[430px] lg:max-w-[400px] xl:max-w-[450px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* OUTER CIRCLE */}
          <div className="absolute inset-5 rounded-full border border-[#29B6F0]/20 transition duration-700 group-hover:scale-105 group-hover:border-[#29B6F0]/50" />

          {/* ORBIT */}
          <div className="absolute inset-10 animate-orbit rounded-full border border-dashed border-[#29B6F0]/25 motion-reduce:animate-none" />

          {/* INNER GLOW */}
          <div className="absolute inset-[65px] animate-ambient-drift rounded-full bg-[#29B6F0]/10 blur-3xl motion-reduce:animate-none" />

          {/* CENTER CIRCLE */}
          <div className="relative flex h-52 w-52 animate-float items-center justify-center rounded-full border border-white/20 bg-white/[0.07] shadow-[0_0_80px_rgba(93,124,230,0.2)] backdrop-blur-2xl transition duration-500 group-hover:shadow-[0_0_110px_rgba(41,182,240,0.25)] motion-reduce:animate-none sm:h-60 sm:w-60">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#29B6F0]/30 bg-gradient-to-br from-[#29B6F0]/30 to-[#7A4FD1]/20 shadow-[inset_0_0_45px_rgba(41,182,240,0.12)] transition duration-500 group-hover:scale-105 sm:h-36 sm:w-36">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] opacity-80 blur-[2px]" />
            </div>
          </div>

          {/* FLOATING LABELS */}
          {[
            { label: "SOFTWARE", position: "top-4 left-1/2 -translate-x-1/2" },
            { label: "DATA", position: "right-0 top-1/2 -translate-y-1/2" },
            { label: "AI", position: "bottom-4 left-1/2 -translate-x-1/2" },
            { label: "SECURITY", position: "left-0 top-1/2 -translate-y-1/2" },
          ].map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
              className={`absolute ${item.position} rounded-full border border-white/15 bg-[#050507]/90 px-4 py-2.5 text-[9px] font-bold tracking-[0.18em] text-[#29B6F0] shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-[#29B6F0]/60 hover:shadow-[#29B6F0]/20 sm:px-5 sm:py-3 sm:text-[10px]`}
            >
              {item.label}
            </div>
          ))}

          {/* DECORATIVE DOTS */}
          <div className="absolute right-8 top-16 h-2.5 w-2.5 rounded-full bg-[#29B6F0] shadow-[0_0_20px_#29B6F0]" />

          <div className="absolute bottom-16 left-8 h-2.5 w-2.5 rounded-full bg-[#7A4FD1] shadow-[0_0_20px_#7A4FD1]" />
        </div>
      </div>

      {/* PROOF BAR */}
      <div className="container mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
        <div
          className="grid grid-cols-2 gap-x-5 gap-y-7 border-t border-white/15 pt-6 sm:gap-x-8 sm:pt-7 md:grid-cols-4"
          data-aos="fade-up"
        >
          {/* EXPERIENCE */}
          <div>
            <p className="text-xs text-slate-400 sm:text-sm">
              Our experience
            </p>

            <p className="mt-1.5 text-3xl font-semibold text-white sm:text-4xl">
              80<span className="text-[#29B6F0]">+</span>
            </p>

            <p className="mt-1 max-w-[220px] text-[10px] leading-5 text-slate-400 sm:text-xs">
              Years of combined Fortune 500 experience
            </p>
          </div>

          {/* PRESENCE */}
          <div>
            <p className="text-xs text-slate-400 sm:text-sm">
              Our presence
            </p>

            <p className="mt-1.5 text-3xl font-semibold text-white sm:text-4xl">
              02
            </p>

            <p className="mt-1 text-[10px] leading-5 text-slate-400 sm:text-xs">
              Delivery centers
            </p>
          </div>

          {/* CONNECTED TEAM */}
          <div className="col-span-2 flex flex-col justify-center md:col-span-2 md:items-end">
            <p className="text-xs font-semibold text-[#29B6F0] sm:text-sm">
              One connected engineering team
            </p>

            <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">
              Irvine, California <span className="mx-2">↔</span> Chennai, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
