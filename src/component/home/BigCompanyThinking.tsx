
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#29B6F0]">
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
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right" data-aos-duration="900">
          <Eyebrow>Who we are</Eyebrow>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
            Big-company thinking.
            <span className="mt-2 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[65%] to-[#B93FC9] bg-clip-text text-transparent">
              Built for growing teams.
            </span>
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="space-y-6 text-base leading-8 text-[#5A5A5A]"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <p>
            BeaverTek is a passionate and forward-thinking IT services
            provider based in Orange County, California, with an extended
            presence in Chennai, India. With over eight decades of collective
            consulting experience across Fortune 500 companies and diverse
            industries, we bring deep expertise, innovative thinking and
            unwavering dedication to every client engagement.
          </p>

          <p>
            At BeaverTek, we specialize in delivering customized IT services
            designed to grow with your business. Whether you&apos;re
            modernizing your infrastructure or unlocking the power of your
            data, we provide the expertise to help you succeed.
          </p>

          {/* DISCOVER LINK */}
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 border-b border-[#29B6F0] pb-2 text-sm font-bold text-[#3E7BD6] transition-all duration-300 hover:border-[#B93FC9] hover:text-[#7A4FD1]"
          >
            Discover BeaverTek

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* LOCATION CARD */}
          <div
            className="group flex flex-wrap items-center gap-4 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-5 text-xs font-bold tracking-widest text-[#000000] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#29B6F0]/60 hover:bg-white hover:shadow-xl hover:shadow-[#29B6F0]/10"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <span className="transition-colors duration-300 group-hover:text-[#3E7BD6]">
              IRVINE, CA
            </span>

            <span className="h-px min-w-12 flex-1 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-transform duration-500 group-hover:scale-y-[2]" />

            <span className="transition-colors duration-300 group-hover:text-[#7A4FD1]">
              CHENNAI, INDIA
            </span>

            <span className="w-full text-center text-[10px] font-medium tracking-normal text-[#A0A0A8]">
              One team, across time zones
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
