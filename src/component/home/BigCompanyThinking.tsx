
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Globe2,
  MoveUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#29B6F0] sm:text-xs">
      <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
      {children}
    </span>
  );
}

export default function BigCompanyThinking() {
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
      id="about"
      className="relative isolate overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      {/* LARGE ANIMATED HALF CIRCLE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-[-100px] -z-10 h-[520px] w-[520px] rounded-full border-[1px] border-[#29B6F0]/20 sm:-left-72 sm:h-[650px] sm:w-[650px]"
      >
        <div className="absolute inset-5 rounded-full border border-dashed border-[#3E7BD6]/20 animate-[spin_55s_linear_infinite]" />
        <div className="absolute inset-14 rounded-full bg-gradient-to-br from-[#29B6F0]/10 via-[#3E7BD6]/5 to-[#B93FC9]/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      {/* RIGHT GRADIENT AMBIENCE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#B93FC9]/[0.06] blur-[110px]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT HEADING AREA */}
          <div
            className="relative lg:sticky lg:top-28"
            data-aos="fade-right"
          >
            <Eyebrow>Who we are</Eyebrow>

            <h2 className="max-w-[540px] text-[clamp(2rem,3.5vw,3.4rem)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#101828]">
              Big-company thinking.
              <span className="mt-2 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Built for growing teams.
              </span>
            </h2>

            {/* DECORATIVE GRADIENT LINE */}
            <div className="mt-7 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

            {/* DECORATIVE LABEL */}
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#98A2B3]">
              Software <span className="mx-2 text-[#29B6F0]">/</span>
              Data <span className="mx-2 text-[#3E7BD6]">/</span>
              AI <span className="mx-2 text-[#B93FC9]">/</span>
              Security
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <p className="text-sm leading-7 text-[#596579] sm:text-base sm:leading-8">
              BeaverTek is a passionate and forward-thinking IT services
              provider based in Orange County, California, with an extended
              presence in Chennai, India. With over eight decades of collective
              consulting experience across Fortune 500 companies and diverse
              industries, we bring deep expertise, innovative thinking and
              unwavering dedication to every client engagement.
            </p>

            <p className="text-sm leading-7 text-[#596579] sm:text-base sm:leading-8">
              At BeaverTek, we specialize in delivering customized IT services
              designed to grow with your business. Whether you&apos;re
              modernizing your infrastructure or unlocking the power of your
              data, we provide the expertise to help you succeed.
            </p>

            {/* DISCOVER LINK */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#3E7BD6] transition-colors duration-300 hover:text-[#B93FC9]"
            >
              Discover BeaverTek

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#29B6F0]/30 transition-all duration-300 group-hover:border-[#7A4FD1] group-hover:bg-gradient-to-r group-hover:from-[#29B6F0] group-hover:to-[#7A4FD1] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>

            {/* GLOBAL PRESENCE CARD */}
            <div
              className="relative overflow-hidden rounded-3xl bg-[#080D16] p-5 text-white shadow-[0_20px_55px_rgba(8,13,22,0.12)] sm:p-7"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {/* CARD BACKGROUND ACCENTS */}
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/15 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#7A4FD1]/15 blur-[70px]" />

              <div className="relative z-10">
                {/* CARD HEADER */}
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#29B6F0]">
                      Our global presence
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                      Connected across continents
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#29B6F0]">
                    <Globe2 size={21} />
                  </div>
                </div>

                {/* LOCATIONS */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3">

                  {/* IRVINE */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#29B6F0]/10 text-[#29B6F0]">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-[0.12em] text-white sm:text-sm">
                        IRVINE, CA
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        United States
                      </p>
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  <div className="hidden w-14 items-center sm:flex">
                    <div className="relative h-px w-full bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]">
                      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#080D16] bg-[#3E7BD6] shadow-[0_0_12px_#29B6F0]" />
                    </div>
                  </div>

                  {/* CHENNAI */}
                  <div className="flex items-center gap-3 sm:justify-end sm:text-right">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B93FC9]/10 text-[#C77DDE] sm:order-2">
                      <MapPin size={20} />
                    </div>

                    <div className="sm:order-1">
                      <p className="text-xs font-bold tracking-[0.12em] text-white sm:text-sm">
                        CHENNAI, INDIA
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Engineering Hub
                      </p>
                    </div>
                  </div>
                </div>

                {/* MOBILE CONNECTOR */}
                <div className="my-4 ml-5 h-5 w-px bg-gradient-to-b from-[#29B6F0] to-[#B93FC9] sm:hidden" />

                {/* CARD FOOTER */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <p className="text-[10px] font-medium tracking-wide text-slate-400 sm:text-xs">
                    One team, across time zones
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-semibold text-[#29B6F0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_8px_#29B6F0]" />
                    GLOBAL DELIVERY
                    <MoveUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
