
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Building2,
  Globe2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicePillars = [
  {
    title: "Automate with AI",
    items: [
      "AI Agents & Agentic Workflows",
      "AI Copilots & LLM Integration",
      "Business Process & CRM Automation",
      "AI Readiness Assessment",
    ],
  },
  {
    title: "Build Software",
    items: [
      "Custom Software Development",
      "Web & Mobile App Development",
      "Healthcare Software Engineering",
      "Payment & API Integrations",
      "QA & Testing",
    ],
  },
  {
    title: "See Your Data",
    items: [
      "Data Analytics & BI Reporting",
      "Data Engineering & Integration",
      "Database Design & Administration",
      "Predictive Analytics",
    ],
  },
  {
    title: "Modernize",
    items: [
      "Digital Transformation",
      "Cloud Migration",
      "Legacy Application Modernization",
      "DevOps & CI/CD",
      "Cloud Cost Optimization",
    ],
  },
  {
    title: "Stay Secure & Supported",
    items: [
      "Managed IT & Application Support",
      "DevSecOps",
      "Cloud & Infrastructure Security",
      "Identity & Access Management",
      "Backup & Disaster Recovery",
    ],
  },
];

const companyLinks = [
  { label: "About BeaverTek", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Professional Services", href: "/industries/professional-services" },
];

const resourceLinks = [
  { label: "BeaverHealthAI", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="relative isolate overflow-hidden bg-[#050507] text-white">

      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#29B6F0]/[0.08] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#7A4FD1]/[0.10] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/tech-grid.svg')] opacity-[0.07]"
      />

      {/* TOP GRADIENT LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

        {/* BRAND + DESCRIPTION */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">

          <div data-aos="fade-up" data-aos-duration="900">

            {/* LOGO */}
            <Link
              href="/"
              aria-label="BeaverTek Home"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/home/logoheader1.png"
                alt="BeaverTek"
                width={210}
                height={65}
                priority={false}
                className="h-auto w-[175px] object-contain sm:w-[200px]"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              BeaverTek is a technology partner for small and mid-size
              businesses. We help growing companies build custom software,
              put AI to work, understand their data and modernize their
              technology.
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
              Senior engineering leadership in California, supported by
              our engineering team in Chennai, India.
            </p>

            {/* LOCATIONS */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="group flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/10 bg-[#29B6F0]/[0.07] text-[#29B6F0] transition-all duration-300 group-hover:border-[#29B6F0]/40 group-hover:bg-[#29B6F0]/15">
                  <Building2 size={19} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#29B6F0]">
                    Irvine, California
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    United States · Headquarters
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#7A4FD1]/10 bg-[#7A4FD1]/[0.07] text-[#B58AFF] transition-all duration-300 group-hover:border-[#7A4FD1]/40 group-hover:bg-[#7A4FD1]/15">
                  <Globe2 size={19} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#B58AFF]">
                    Chennai, India
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    India · Engineering Hub
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* COMPANY + RESOURCES */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="grid grid-cols-2 gap-8 sm:gap-12"
          >

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Company
              </h3>

              <ul className="space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#29B6F0]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Explore
              </h3>

              <ul className="space-y-4">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#29B6F0]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* SERVICES SECTION */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="mt-16 border-t border-white/10 pt-12 sm:mt-20"
        >

          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
              What We Do
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Technology services built around your business.
            </h3>

            <div className="mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />
          </div>

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {servicePillars.map((pillar, index) => (
              <div
                key={pillar.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#29B6F0]"
                >
                  {pillar.title}
                  <ArrowUpRight
                    size={14}
                    className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                <div className="mt-3 h-px w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] transition-all duration-500 group-hover:w-20" />

                <ul className="mt-5 space-y-3">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs leading-6 text-gray-500 transition-colors duration-300 hover:text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* CONTACT STRIP */}
        <div
          data-aos="fade-up"
          className="group relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[#29B6F0]/30 hover:bg-white/[0.05] sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-8"
        >

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-[#29B6F0]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#7A4FD1]/15"
          />

          <div className="relative">
            <h4 className="text-base font-semibold text-white">
              Have a project in mind?
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Let&apos;s discuss how we can help your business move forward.
            </p>
          </div>

          <div className="relative mt-6 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">

            <a
              href="tel:+19498856193"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#29B6F0]"
            >
              <Phone size={16} className="text-[#29B6F0]" />
              +1 (949) 885-6193
            </a>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#29B6F0]/20"
            >
              Contact BeaverTek
              <ArrowUpRight size={16} />
            </Link>

          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div
          data-aos="fade-up"
          className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between"
        >

          <p className="text-xs text-gray-500">
            © {currentYear} BeaverTek. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition-colors duration-300 hover:text-[#29B6F0]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-gray-500 transition-colors duration-300 hover:text-[#29B6F0]"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="text-xs text-gray-500 transition-colors duration-300 hover:text-[#29B6F0]"
            >
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
