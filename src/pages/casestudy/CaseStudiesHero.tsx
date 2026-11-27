
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const visualSlides = [
  {
    image: "/product/financial.jpeg",
    alt: "Financial services technology",
    label: "Payments",
  },
  {
    image: "/product/healthcaree.jpeg",
    alt: "Healthcare technology solutions",
    label: "Health",
  },
  {
    image: "/product/professional.jpeg",
    alt: "Professional services technology",
    label: "Data",
  },
];

const links = [
  { href: "#payments", label: "Payments" },
  { href: "#healthcare", label: "Healthcare AI" },
  { href: "#reporting", label: "Data reporting" },
];

export default function CaseStudiesHero() {
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
  className="relative isolate overflow-hidden bg-black text-white"
  aria-labelledby="case-studies-title"
>
  <style jsx>{`
    .case-background-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      opacity: 0;
      filter: brightness(1.25) saturate(1.08);
      animation: caseImageFade 21s infinite;
    }

    @keyframes caseImageFade {
      0%,
      28% {
        opacity: 1;
      }

      33%,
      95% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .case-background-image {
        animation: none;
        opacity: 0;
      }

      .case-background-image:first-child {
        opacity: 1;
      }
    }
  `}</style>

  {/* DESKTOP BACKGROUND SLIDESHOW */}
  <div
    className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden sm:block"
    aria-hidden="true"
  >
    {visualSlides.map((slide, index) => (
      <img
        key={slide.label}
        src={slide.image}
        alt=""
        className="case-background-image"
        style={{
          animationDelay: `${-index * 7}s`,
        }}
      />
    ))}

    <div className="absolute inset-0 bg-black/10" />

    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/65" />

    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
  </div>

  {/* MOBILE IMAGE - IMAGE ABOVE TEXT */}
  <div
    data-aos="fade-down"
    className="relative order-1 mt-20 h-[210px] w-full overflow-hidden sm:mt-0 sm:h-[280px] md:hidden"
    aria-hidden="true"
  >
    {visualSlides.map((slide, index) => (
      <img
        key={slide.label}
        src={slide.image}
        alt=""
        className="case-background-image"
        style={{
          animationDelay: `${-index * 7}s`,
        }}
      />
    ))}

    <div className="absolute inset-0 bg-black/10" />

    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-7xl items-center justify-center px-5 pb-12 pt-10 text-center sm:min-h-[460px] sm:px-8 sm:pb-14 sm:pt-24 lg:min-h-[490px] lg:px-10 lg:pb-16 lg:pt-28 xl:min-h-[510px]">
    <div className="flex w-full max-w-3xl flex-col items-center">

      {/* EYEBROW */}
      <p
        data-aos="fade-up"
        className="mb-4 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.24em] text-[#29B6F0] uppercase sm:mb-5 sm:text-xs"
      >
        <span className="h-px w-7 bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]" />
        Selected work
        <span className="h-px w-7 bg-gradient-to-r from-[#B93FC9] to-[#29B6F0]" />
      </p>

      {/* MAIN TITLE */}
      <h1
        id="case-studies-title"
        data-aos="fade-up"
        data-aos-delay="100"
        className="max-w-[650px] text-[1.9rem] leading-[1.15] font-extrabold tracking-[-0.045em] text-white sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.5rem]"
      >
        Work that moves
        <span className="mt-1 block bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text font-serif font-extrabold italic text-transparent">
          business forward.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-5 max-w-[590px] text-[12px] leading-[1.8] text-white/85 sm:mt-6 sm:text-[13px] md:text-sm lg:text-[15px]"
      >
        Many clients prefer not to be named publicly, especially in
        regulated industries. These engagements show the kinds of
        challenges BeaverTek helps solve through software, healthcare
        technology, and data.
      </p>

      {/* CTA BUTTONS */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-8"
      >
        <a
          href="#payments"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-6 py-3 text-xs font-semibold text-white shadow-[0_8px_28px_rgba(62,123,214,0.2)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 sm:px-7 sm:text-sm"
        >
          Explore the work
        </a>

        <a
          href="/contact/contacthero"
          className="group inline-flex min-h-11 items-center justify-center gap-2 text-xs font-semibold text-white transition-colors duration-300 hover:text-[#29B6F0] sm:text-sm"
        >
          Start a conversation
          <span className="text-[#29B6F0] transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>
  </div>

  {/* CASE STUDIES NAVIGATION */}
  <div
    data-aos="fade-up"
    data-aos-delay="400"
    className="relative z-20 border-t border-white/15 bg-black/35 backdrop-blur-md"
  >
    <CaseStudiesHeader />
  </div>
</section>

  );
}

/* CASE STUDIES HEADER */

export function CaseStudiesHeader() {
  return (
    <header className="relative w-full text-white">
      <div className="mx-auto flex max-w-7xl justify-center px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <nav
          aria-label="Case studies navigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] text-[#c5d4de] sm:gap-x-8 sm:text-sm"
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              data-aos="fade-up"
              data-aos-delay={450 + index * 100}
              className="whitespace-nowrap transition-colors duration-300 hover:text-[#29B6F0]"
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/contact/contacthero"
            data-aos="fade-up"
            data-aos-delay="750"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-medium text-white transition-all duration-300 hover:border-[#29B6F0]/60 hover:bg-white/10 sm:text-xs"
          >
            Discuss a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
