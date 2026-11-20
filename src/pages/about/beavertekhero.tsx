
"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const links = [
  { href: "#story", label: "Our story" },
  { href: "#approach", label: "How we work" },
  { href: "#team", label: "Our team" },
  { href: "#beliefs", label: "What we believe" },
];

export default function Beavertekhero() {
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
    <>
      <section
        id="top"
        className="relative isolate scroll-mt-8 overflow-hidden bg-[#050507] text-white"
        aria-labelledby="about-title"
      >
        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#29B6F0]/[0.08] blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#7A4FD1]/[0.08] blur-[130px]"
        />

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-10 lg:py-20 xl:gap-16 xl:px-12 xl:py-24">

          {/* Left Side - Content */}
          <div data-aos="fade-right" className="w-full min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[linear-gradient(90deg,#29B6F0,#7A4FD1)]" />

              <p className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent uppercase sm:text-sm">
                About BeaverTek
              </p>
            </div>

            <h1
              id="about-title"
              className="max-w-3xl text-[29px] leading-[1.15] font-bold tracking-[-0.045em] text-white sm:text-[36px] md:text-[41px] lg:text-[40px] xl:text-[46px]"
            >
              Senior technology people. Built for{" "}
              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
                businesses
              </span>{" "}
              that don&apos;t have a{" "}
              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
                CTO.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#A1A1AA] sm:text-base sm:leading-8 lg:text-[16px]">
              BeaverTek is a technology partner for small and mid-size companies.
              We help businesses{" "}
              <span className="font-medium text-[#29B6F0]">
                modernize their systems
              </span>
              , make sense of their data, build the software they need, and keep
              their digital operations running securely. Based in Orange County,
              California, with a strong engineering team in India, we bring
              decades of{" "}
              <span className="font-medium text-[#B98BEA]">
                Fortune 500 experience
              </span>{" "}
              to the work in front of you — without the Fortune 500 price tag.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="/contact/contacthero"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(41,182,240,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(122,79,209,0.25)]"
              >
                Get to know us
              </a>

              <a
                href="#story"
                className="text-sm font-semibold text-[#D4D4D8] underline decoration-[#7A4FD1] underline-offset-4 transition-colors duration-300 hover:text-[#29B6F0]"
              >
                Why we exist
              </a>
            </div>
          </div>

          {/* Right Side - Bigger Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="relative mx-auto w-full max-w-[580px] lg:max-w-none"
          >
            <div className="relative aspect-[4/3.8] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#101014] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:aspect-[5/4] lg:aspect-[4/4.2] xl:aspect-[5/5]">
              <img
                src="/home/About.jpg"
                alt="Technology professionals collaborating on software engineering"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507]/20 via-transparent to-transparent" />

              {/* Bottom gradient accent */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]" />
            </div>

            {/* Decorative accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-full border border-[#29B6F0]/30 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-full bg-[#7A4FD1]/15 blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* About Navigation */}
      <header className="relative z-20 border-y border-white/[0.08] bg-[#0A0A0D]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-center lg:px-8">
          <nav
            aria-label="About page navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-[#A1A1AA] sm:gap-x-8"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-300 hover:text-[#29B6F0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
