
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const technologies = [
  { label: "SOFTWARE", position: "top-[5%] left-1/2 -translate-x-1/2" },
  { label: "DATA", position: "right-[-2%] top-1/2 -translate-y-1/2" },
  { label: "SECURITY", position: "bottom-[5%] left-1/2 -translate-x-1/2" },
  { label: "AI", position: "left-[-2%] top-1/2 -translate-y-1/2" },
];

const backgroundSlides = [
  "/home/hero1.webp",
  "/home/hero2.webp",
  "/home/hero3.webp",
];

function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-[8%] rounded-full bg-[#29B6F0]/10 blur-[75px] animate-[pulse_7s_ease-in-out_infinite]" />
      <div className="absolute inset-[18%] rounded-full bg-[#7A4FD1]/10 blur-[65px]" />

      {/* OUTER CIRCULAR DESIGN */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        className="absolute inset-0 h-full w-full animate-[spin_100s_linear_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="heroCore">
            <stop offset="0%" stopColor="#29B6F0" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#3E7BD6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7A4FD1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="heroRing" x1="100" y1="100" x2="500" y2="500">
            <stop offset="0%" stopColor="#29B6F0" />
            <stop offset="55%" stopColor="#3E7BD6" />
            <stop offset="100%" stopColor="#7A4FD1" />
          </linearGradient>
        </defs>

        <circle cx="300" cy="300" r="265" fill="url(#heroCore)" />

        <circle
          cx="300"
          cy="300"
          r="260"
          stroke="#29B6F0"
          strokeOpacity="0.2"
        />

        <circle
          cx="300"
          cy="300"
          r="240"
          stroke="#29B6F0"
          strokeOpacity="0.25"
          strokeDasharray="2 8"
        />

        <circle
          cx="300"
          cy="300"
          r="205"
          stroke="#FFFFFF"
          strokeOpacity="0.13"
          strokeWidth="1.5"
          strokeDasharray="36 9"
        />

        <circle
          cx="300"
          cy="300"
          r="175"
          stroke="#FFFFFF"
          strokeOpacity="0.14"
        />

        <circle
          cx="300"
          cy="300"
          r="145"
          stroke="url(#heroRing)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="75 28 12 28"
        />

        <circle
          cx="300"
          cy="300"
          r="110"
          stroke="#FFFFFF"
          strokeOpacity="0.18"
          strokeDasharray="3 7"
        />

        {/* RADIAL TICKS */}
        {Array.from({ length: 72 }).map((_, index) => (
          <line
            key={index}
            x1="300"
            y1={index % 6 === 0 ? "30" : "37"}
            x2="300"
            y2={index % 6 === 0 ? "49" : "44"}
            stroke="#A9C6DC"
            strokeOpacity={index % 6 === 0 ? "0.7" : "0.35"}
            strokeWidth={index % 6 === 0 ? "2.5" : "1"}
            transform={`rotate(${index * 5} 300 300)`}
          />
        ))}

        {/* ORBIT DOTS */}
        <circle cx="300" cy="40" r="4" fill="#29B6F0" />
        <circle cx="560" cy="300" r="4" fill="#7A4FD1" />
        <circle cx="300" cy="560" r="4" fill="#3E7BD6" />
        <circle cx="40" cy="300" r="4" fill="#29B6F0" />

        <circle cx="470" cy="130" r="3" fill="#29B6F0" />
        <circle cx="130" cy="470" r="3" fill="#7A4FD1" />
        <circle cx="470" cy="470" r="3" fill="#3E7BD6" />
        <circle cx="130" cy="130" r="3" fill="#29B6F0" />
      </svg>

      {/* INNER ORBIT */}
      <div className="absolute inset-[24%] rounded-full border border-white/10 animate-[spin_35s_linear_infinite] motion-reduce:animate-none">
        <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_18px_#29B6F0]" />
      </div>

      {/* IMAGE OUTER GLOW */}
      <div className="absolute z-10 h-[43%] w-[43%] rounded-full bg-gradient-to-br from-[#29B6F0]/40 to-[#7A4FD1]/40 blur-2xl" />

      {/* IMAGE FRAME */}
      <div className="relative z-20 h-[53%] w-[53%] overflow-hidden rounded-full border border-white/30 bg-[#101827] p-[5px] shadow-[0_0_60px_rgba(41,182,240,0.22)]">
        <div className="relative h-full w-full overflow-hidden rounded-full border border-[#29B6F0]/30">
          <Image
            src="/visuals/engineering-orbit.svg"
            alt="BeaverTek technology and engineering"
            fill
            priority
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
            className="object-cover transition-transform duration-700 hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#29B6F0]/20 via-transparent to-[#7A4FD1]/20" />
        </div>
      </div>

      {/* FLOATING TECHNOLOGY LABELS */}
      {technologies.map((item, index) => (
        <div
          key={item.label}
          data-aos="zoom-in"
          data-aos-delay={200 + index * 120}
          className={`absolute z-30 ${item.position} rounded-full border border-white/15 bg-[#121212]/95 px-4 py-2.5 text-[9px] font-bold tracking-[0.2em] text-[#29B6F0] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-[#29B6F0]/60 hover:text-white sm:px-5 sm:py-3 sm:text-[10px]`}
        >
          {item.label}
        </div>
      ))}

      {/* DECORATIVE GLOW DOTS */}
      <div className="absolute right-[9%] top-[17%] h-2.5 w-2.5 rounded-full bg-[#29B6F0] shadow-[0_0_22px_#29B6F0] animate-[pulse_3s_ease-in-out_infinite]" />

      <div className="absolute bottom-[16%] left-[10%] h-2.5 w-2.5 rounded-full bg-[#7A4FD1] shadow-[0_0_22px_#7A4FD1] animate-[pulse_4s_ease-in-out_infinite]" />
    </div>
  );
}

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
      className="relative isolate overflow-hidden bg-brand-ink text-white"
    >
      <div aria-hidden="true" className="hero-slideshow absolute inset-0">
        {backgroundSlides.map((image, index) => (
          <div
            key={image}
            className="hero-slideshow__slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${image}")`,
              animationDelay: `${index * -8}s`,
            }}
          />
        ))}
      </div>

      {/* BACKGROUND GRADIENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_78%_35%,rgba(41,182,240,0.17),transparent_34%),radial-gradient(ellipse_at_85%_85%,rgba(122,79,209,0.13),transparent_36%)]"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#080A0F] via-[#0B0E14]/95 to-[#0B1728]/80" />

      {/* GRID TEXTURE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/tech-grid.svg')] opacity-[0.16] [mask-image:linear-gradient(to_right,black,transparent_95%)]"
      />

      {/* LEFT AMBIENT LIGHT */}
      <div className="pointer-events-none absolute -left-48 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#29B6F0]/[0.04] blur-[120px]" />

      {/* MAIN HERO */}
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[660px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-5 lg:px-10 lg:pb-12 lg:pt-28">

        {/* LEFT CONTENT */}
        <div className="relative z-10" data-aos="fade-up">
          <p
            className="mb-5 text-[10px] font-bold tracking-[0.16em] text-[#29B6F0] sm:text-xs sm:tracking-[0.2em]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            IRVINE, CALIFORNIA
            <span className="mx-2 text-[#7A4FD1]">/</span>
            CHENNAI, INDIA
          </p>

          <h1
            className="max-w-[700px] text-[clamp(2rem,4.2vw,3.8rem)] font-semibold leading-[1.12] tracking-[-0.04em]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Senior engineers who build, modernize and{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              run your technology.
            </span>
          </h1>

          <p
            className="mt-6 max-w-[690px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
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
            className="mt-8 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-gradient px-6 py-3.5 text-xs font-bold text-white shadow-[0_8px_30px_rgba(41,182,240,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(41,182,240,0.3)] sm:px-7 sm:text-sm"
            >
              Talk to an engineer
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-xs font-semibold text-white transition duration-300 hover:border-[#29B6F0]/50 hover:bg-white/[0.04] hover:text-[#29B6F0] sm:text-sm"
            >
              Explore our work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          {/* TRUST ITEMS */}
          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-[11px] text-slate-400 sm:gap-x-7 sm:text-xs"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              Senior-led engineering
            </span>

            <span>Global delivery model</span>

            <span>Enterprise experience</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="relative z-10 mx-auto w-full max-w-[460px] lg:max-w-none"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <HeroVisual />
        </div>
      </div>

      {/* PROOF BAR */}
      <div className="container mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 sm:gap-x-8 sm:pt-7 md:grid-cols-4"
          data-aos="fade-up"
        >
          <div>
            <p className="text-xs text-slate-400 sm:text-sm">
              Our experience
            </p>

            <p className="mt-1.5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              80<span className="text-[#29B6F0]">+</span>
            </p>

            <p className="mt-1 max-w-[220px] text-[10px] leading-5 text-slate-400 sm:text-xs">
              Years of combined Fortune 500 experience
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400 sm:text-sm">
              Our presence
            </p>

            <p className="mt-1.5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              02
            </p>

            <p className="mt-1 text-[10px] leading-5 text-slate-400 sm:text-xs">
              Delivery centers
            </p>
          </div>

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
