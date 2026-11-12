
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Building2,
  Globe2,
} from "lucide-react";

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

  return (
    <footer className="relative overflow-hidden bg-[#050507] text-white">

      {/* TOP CTA SECTION */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                Let's Build Something Better
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Need senior technology help?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                Tell us what you're trying to build or fix. A senior engineer
                will reply within one business day.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              >
                Talk to an Engineer
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/case-studies"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#29B6F0] hover:text-[#29B6F0]"
              >
                See Case Studies
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* BRAND + DESCRIPTION */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">

          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-3xl font-bold tracking-tight">
                Beaver<span className="text-[#29B6F0]">Tek</span>
              </span>
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

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#29B6F0]">
                  <Building2 size={19} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Irvine, California
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    United States · Headquarters
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#29B6F0]">
                  <Globe2 size={19} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
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
          <div className="grid grid-cols-2 gap-8 sm:gap-12">

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Company
              </h3>

              <ul className="space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#29B6F0]"
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
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#29B6F0]"
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
        <div className="mt-16 border-t border-white/10 pt-12">

          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
              What We Do
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Technology services built around your business.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {servicePillars.map((pillar) => (
              <div key={pillar.title}>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#29B6F0]"
                >
                  {pillar.title}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </Link>

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
        <div className="mt-14 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h4 className="text-base font-semibold text-white">
              Have a project in mind?
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Let's discuss how we can help your business move forward.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">

            <a
              href="tel:+19498856193"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#29B6F0]"
            >
              <Phone size={16} className="text-[#29B6F0]" />
              +1 (949) 885-6193
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#29B6F0] transition-colors hover:text-white"
            >
              Contact BeaverTek
              <ArrowUpRight size={16} />
            </Link>

          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-gray-500">
            © {currentYear} BeaverTek. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
