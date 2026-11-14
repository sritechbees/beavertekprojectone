
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NeedSenior() {
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
      id="contact"
      className="relative overflow-hidden bg-[#050507] py-28 text-white"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] animate-ambient-drift rounded-full bg-[#29B6F0]/20 blur-[140px] motion-reduce:animate-none" />

      <div className="pointer-events-none absolute -bottom-40 left-0 h-[450px] w-[450px] animate-float rounded-full bg-[#7A4FD1]/15 blur-[130px] motion-reduce:animate-none" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/tech-grid.svg')] opacity-20 [mask-image:linear-gradient(to_right,black,transparent_90%)]"
      />

      <div className="container relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Need senior
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              technology help?
            </span>
          </h2>

          <p className="mt-7 max-w-xl leading-8 text-slate-300">
            Tell us what you&apos;re trying to build or fix. A senior
            engineer will reply within one business day.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#29B6F0]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A4FD1]/20"
            >
              Talk to an engineer
            </Link>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-12 space-y-5 border-t border-white/10 pt-8">
            <a
              href="tel:+19498856193"
              className="group flex items-center gap-4 text-sm text-slate-300 transition duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#29B6F0]/20 bg-[#29B6F0]/10 font-bold text-[#29B6F0] transition duration-300 group-hover:border-[#29B6F0]/50 group-hover:bg-[#29B6F0]/20">
                US
              </span>
              +1 (949) 885-6193
            </a>

            <a
              href="tel:+919962092583"
              className="group flex items-center gap-4 text-sm text-slate-300 transition duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 font-bold text-[#B58AFF] transition duration-300 group-hover:border-[#7A4FD1]/50 group-hover:bg-[#7A4FD1]/20">
                IN
              </span>
              +91 99620 92583 (India)
            </a>

            <a
              href="mailto:info@beavertek.com"
              className="group flex items-center gap-4 text-sm text-slate-300 transition duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3E7BD6]/20 bg-[#3E7BD6]/10 font-bold text-[#29B6F0] transition duration-300 group-hover:border-[#3E7BD6]/50 group-hover:bg-[#3E7BD6]/20">
                @
              </span>
              info@beavertek.com
            </a>
          </div>
        </div>

        {/* DELIVERY CENTERS CARD */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition duration-500 hover:border-[#29B6F0]/30 hover:bg-white/[0.07] sm:p-10"
        >
          {/* CARD GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 animate-ambient-drift rounded-full bg-[#7A4FD1]/10 blur-[80px] transition group-hover:bg-[#29B6F0]/15 motion-reduce:animate-none"
          />

          <div className="relative">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
              Delivery centers
            </p>

            <div className="space-y-8">

              {/* UNITED STATES */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="flex items-center gap-5 transition-transform duration-300 hover:translate-x-1"
              >
                <span className="text-sm font-bold text-[#29B6F0]">
                  01
                </span>

                <span className="h-3 w-3 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0]" />

                <div>
                  <p className="text-xs text-slate-400">
                    United States
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Irvine, California
                  </h3>
                </div>
              </div>

              {/* INDIA */}
              <div
                data-aos="fade-up"
                data-aos-delay="350"
                className="flex items-center gap-5 transition-transform duration-300 hover:translate-x-1"
              >
                <span className="text-sm font-bold text-[#B58AFF]">
                  02
                </span>

                <span className="h-3 w-3 rounded-full bg-[#7A4FD1] shadow-[0_0_15px_#7A4FD1]" />

                <div>
                  <p className="text-xs text-slate-400">
                    India
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Chennai, India
                  </h3>
                </div>
              </div>
            </div>

            {/* DELIVERY MESSAGE */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-lg font-semibold">
                No call center. No sales funnel.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Your first conversation is with a senior engineer.
              </p>
            </div>

            {/* SUPPORT STATUS */}
            <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Managed support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
