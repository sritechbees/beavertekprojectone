
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";

/* =========================================
   SERVICE PILLARS
========================================= */

const pillars = [
  {
    number: "01",
    title: "Automate with AI",
    href: "/services/servicesherosection",
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
    title: "Modernize",
    href: "/services/modernize/modernizehero",
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
    number: "03",
    title: "See Your Data",
    href: "/services/seeyourdata/seeyourdatahero",
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
    title: "Build Software",
    href: "/services/buildsoftware/herosection",
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
    number: "05",
    title: "Stay Secure & Supported",
    href: "/services/staysecure/staysecureherosection",
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
   OFFICIAL BRAND GRADIENT
========================================= */

const brandGradient =
  "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]";

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
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-8 lg:mb-9">
      <span className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#29B6F0] sm:text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />
        {eyebrow}
      </span>

      <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-white">
        {title}
      </h2>

      <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-6 text-[#D4D4D8] sm:mt-3 sm:text-sm sm:leading-7">
        {description}
      </p>
    </div>
  );
}

/* =========================================
   ONE TEAM SECTION
========================================= */

export default function OneTeam() {
  const [activePillar, setActivePillar] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#000000] py-8 text-white sm:py-10 lg:py-12"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}

        <SectionHeading
          eyebrow="What we offer"
          title={
            <>
              <span className="font-extrabold text-white">
                One team for{" "}
              </span>

              <span
                className={`${brandGradient} bg-clip-text font-extrabold text-transparent`}
              >
                what&apos;s next.
              </span>
            </>
          }
          description="From strategy to delivery, we help teams modernize operations and build the systems they rely on every day."
        />

        {/* MAIN GRID */}

        <div className="grid items-stretch gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">

          {/* LEFT FEATURE CARD */}

          <div className="group relative flex min-h-[310px] overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#121212] shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:min-h-[350px] lg:min-h-full">

            {/* Background Image */}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/home/oneteam.jpg')] bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Brand Overlay */}

           <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(41,182,240,0.32),transparent_40%),radial-gradient(circle_at_18%_80%,rgba(185,63,201,0.30),transparent_45%),linear-gradient(135deg,rgba(18,18,18,0.12),rgba(0,0,0,0.42))]"
/>
            {/* Card Content */}

            <div className="relative z-10 mt-auto w-full p-4 sm:p-5 lg:p-6">
              <span className="inline-flex rounded-full border border-[#29B6F0]/40 bg-[#29B6F0]/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-[#29B6F0] backdrop-blur sm:text-[11px]">
                DIGITAL STRATEGY
              </span>

              <h3 className="mt-2.5 max-w-sm text-[clamp(1.2rem,2vw,1.65rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-white">
                Modern systems. Smarter operations. Better outcomes.
              </h3>
            </div>
          </div>

          {/* RIGHT SERVICE ACCORDION */}

          <div className="flex flex-col gap-2">
            {pillars.map((pillar, index) => {
              const isOpen = activePillar === index;

              return (
                <div
                  key={pillar.number}
                  className={`group rounded-xl border bg-[#121212] p-3.5 shadow-[0_8px_22px_rgba(0,0,0,0.25)] transition-colors duration-300 sm:p-4 ${
                    isOpen
                      ? "border-[#3E7BD6]/70 shadow-[0_8px_25px_rgba(62,123,214,0.10)]"
                      : "border-[#2A2A30] hover:border-[#3E7BD6]/60"
                  }`}
                >

                  {/* ACCORDION HEADER */}

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-content-${index}`}
                    onClick={() =>
                      setActivePillar((current) =>
                        current === index ? null : index
                      )
                    }
                    className="flex w-full cursor-pointer items-start gap-3 text-left sm:gap-4"
                  >

                    {/* Title & Description */}

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-sm font-semibold leading-snug transition-all duration-300 sm:text-base ${
                          isOpen
                            ? "bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent"
                            : "text-[#D4D4D8] group-hover:bg-gradient-to-r group-hover:from-[#29B6F0] group-hover:via-[#7A4FD1] group-hover:to-[#B93FC9] group-hover:bg-clip-text group-hover:text-transparent"
                        }`}
                      >
                        {pillar.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#A0A0A8] sm:text-[13px] sm:leading-6">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Plus Icon */}

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                        isOpen
                          ? "rotate-45 border-[#3E7BD6] bg-[#3E7BD6]/15 text-[#29B6F0]"
                          : "border-[#2A2A30] text-[#A0A0A8] group-hover:border-[#3E7BD6] group-hover:text-[#29B6F0]"
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  {/* ACCORDION CONTENT */}

                  {isOpen && (
                    <div
                      id={`service-content-${index}`}
                      className="ml-6 mt-3 border-t border-[#2A2A30] pt-3 sm:ml-8 sm:mt-4 sm:pt-4"
                    >

                      {/* SERVICE LIST */}

                      <ul className="grid gap-x-4 gap-y-2 sm:grid-cols-2 sm:gap-y-2.5">
                        {pillar.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2.5 text-xs leading-5 text-[#D4D4D8] transition-colors duration-300 hover:text-[#29B6F0] sm:text-[13px]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]" />
                            {service}
                          </li>
                        ))}
                      </ul>

                      {/* DISCUSS THIS SERVICE */}

                      <Link
                        href={pillar.href}
                        className="group/link mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#29B6F0] transition-colors duration-300 hover:text-[#B93FC9] sm:text-sm"
                      >
                        Discuss this service

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
