
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* =========================================
   SERVICE PILLARS
========================================= */

const pillars = [
  {
    number: "01",
    title: "Automate with AI",
    description:
      "Turn repetitive work into streamlined systems with AI agents, workflow automation and practical process improvements.",
    services: [
      "AI agents & agentic workflows",
      "AI copilots & LLM integration",
      "Business process automation",
      "AI readiness assessment",
    ],
  },
  {
    number: "02",
    title: "Build Software",
    description:
      "Design, develop and support custom digital products that improve customer experience and business performance.",
    services: [
      "Custom software & maintenance",
      "Web & mobile apps",
      "Product engineering",
      "Healthcare software (FHIR/HL7)",
      "Payment & API integrations",
    ],
  },
  {
    number: "03",
    title: "See Your Data",
    description:
      "Turn fragmented information into clearer decisions with dashboards, data pipelines and modern analytics.",
    services: [
      "Tableau & Power BI dashboards",
      "Data engineering & integration",
      "Database tuning & administration",
      "Predictive analytics",
    ],
  },
  {
    number: "04",
    title: "Modernize",
    description:
      "Move critical systems to modern cloud infrastructure while reducing costs and improving performance.",
    services: [
      "Digital transformation",
      "Cloud migration (AWS, Azure, GCP)",
      "Legacy modernization",
      "DevOps & CI/CD",
      "Cloud cost optimization",
    ],
  },
  {
    number: "05",
    title: "Stay Secure & Supported",
    description:
      "Keep your systems reliable, protected and continuously improved with managed support and security.",
    services: [
      "Managed IT & application support",
      "DevSecOps",
      "Cloud security & IAM",
      "Backup & disaster recovery",
      "Security & HIPAA-readiness assessment",
    ],
  },
];

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div
      className="mx-auto mb-14 max-w-3xl text-center"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#29B6F0]">
        <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
        {eyebrow}
      </span>

      <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B7280]">
        {description}
      </p>
    </div>
  );
}

/* =========================================
   PRIMARY BUTTON
========================================= */

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#3E7BD6]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A4FD1]/30"
    >
      {children}

      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

/* =========================================
   ONE TEAM SECTION
========================================= */

export default function OneTeam() {
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
      id="services"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="What we offer"
          title={
            <>
            <span className="font-extrabold">
              One team for{" "}
              </span>
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] font-extrabold bg-clip-text text-transparent">
                what&apos;s next.
              </span>
            </>
          }
          description="From strategy to delivery, we help teams modernize operations and build the systems they rely on every day."
        />

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT FEATURE CARD */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="group relative min-h-[400px] overflow-hidden rounded-3xl bg-[#121212] shadow-xl lg:min-h-full"
          >

            <div
              aria-hidden="true"
              className="absolute inset-0 scale-100 bg-[radial-gradient(circle_at_78%_24%,rgba(41,182,240,0.36),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(185,63,201,0.35),transparent_40%),linear-gradient(135deg,#1A1A1E,#000000)] transition-transform duration-1000 group-hover:scale-110"
            />

            <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#29B6F0]/20 blur-[90px] transition-all duration-700 group-hover:bg-[#7A4FD1]/30" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 sm:p-10">

              <span className="inline-flex rounded-full border border-[#29B6F0]/40 bg-[#29B6F0]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#29B6F0] backdrop-blur">
                DIGITAL STRATEGY
              </span>

              <h3 className="mt-6 max-w-sm text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Modern systems. Smarter operations. Better outcomes.
              </h3>
            </div>
          </div>

          {/* RIGHT SERVICE ACCORDION */}
          <div className="space-y-3">
            {pillars.map((pillar, index) => (
              <details
                key={pillar.number}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 120}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#29B6F0]/60 hover:shadow-xl hover:shadow-[#3E7BD6]/10 open:border-[#29B6F0] open:shadow-lg open:shadow-[#3E7BD6]/10"
              >
                <summary className="flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden">

                  <span className="pt-1 text-sm font-bold text-[#29B6F0]">
                    {pillar.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-[#000000] transition-colors duration-300 group-hover:text-[#3E7BD6]">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#71717A]">
                      {pillar.description}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-xl text-[#3E7BD6] transition-all duration-300 group-open:rotate-45 group-open:border-[#3E7BD6] group-open:bg-gradient-to-r group-open:from-[#29B6F0] group-open:to-[#7A4FD1] group-open:text-white">
                    +
                  </span>
                </summary>

                {/* SERVICE LIST */}
                <div className="ml-9 mt-5 border-t border-[#E5E7EB] pt-5">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {pillar.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-3 text-sm text-[#5A5A5A] transition-colors duration-300 hover:text-[#3E7BD6]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3E7BD6] transition-colors duration-300 hover:text-[#B93FC9]"
                  >
                    Discuss this service

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="group relative mt-12 flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-[#121212] p-8 shadow-xl sm:p-10 lg:flex-row lg:items-center"
        >

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#7A4FD1]/20 blur-[100px] transition-all duration-700 group-hover:bg-[#29B6F0]/25"
          />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[100px]" />

          <div className="relative max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#29B6F0]">
              Your technology partner
            </p>

            <h3 className="mt-3 text-3xl font-semibold text-white">
              Your digital transformation partner
            </h3>

            <p className="mt-4 leading-7 text-[#D4D4D8]">
              Smart IT solutions, exceptional digital experiences and
              measurable business value across software, data, AI,
              modernization and support.
            </p>
          </div>

          <div className="relative shrink-0">
            <PrimaryButton href="/services">
              Explore all services
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
