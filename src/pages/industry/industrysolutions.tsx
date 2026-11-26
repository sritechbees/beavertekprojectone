
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const industryData = [
  {
    number: "01",
    name: "Healthcare",
    eyebrow: "Healthcare Technology",
    title: "Building a smarter healthcare experience.",
    description:
      "Technology can make healthcare experiences more connected, efficient and intelligent. BeaverTek develops healthcare software and AI-driven solutions designed around patient and provider workflows.",
   image: "/product/healthcaree.jpeg",
      services: [
      "Healthcare software engineering",
      "AI patient intake and triage",
      "Preventive care applications",
      "Healthcare data integration",
    ],
    proof: "Powered by BeaverHealthAI",
    link: "https://www.beaverhealth.ai/",
    linkText: "Explore BeaverHealthAI",
  },
  {
    number: "02",
    name: "Financial Services",
    eyebrow: "Financial Technology",
    title: "Engineering trust into every transaction.",
    description:
      "Financial platforms need dependable systems, seamless integrations and meaningful data. BeaverTek builds and supports payment platforms and technology that help businesses operate with confidence.",
    image: "/product/financial.jpeg",
      services: [
      "Payment gateway integrations",
      "Custom financial platforms",
      "API development",
      "Data analytics and reporting",
    ],
    proof: "150 clients · 4.5M monthly transactions",
    link: "/casestudy/casestudyhero/",
    linkText: "Explore Our Experience",
  },
  {
    number: "03",
    name: "Professional Services",
    eyebrow: "Business Automation",
    title: "Less manual work. More meaningful work.",
    description:
      "Legal, medical and dental practices need technology that simplifies everyday operations. BeaverTek helps professional service businesses improve lead management, automate processes and connect their business systems.",
   image: "/product/professional.jpeg",
         services: [
      "CRM implementation and automation",
      "AI-powered lead follow-up",
      "Business process automation",
      "Custom business applications",
    ],
    proof: "Technology designed around your workflows",
    link: "/services/servicesherosection/",
    linkText: "Explore Our Services",
  },
];

function AmoebaBackground() {
  return (
    <div aria-hidden="true" className="amoeba-field amoeba-field--dark">
      <span className="amoeba amoeba--blue" />
      <span className="amoeba amoeba--orchid" />
      <span className="amoeba amoeba--cyan" />
    </div>
  );
}

export default function IndustrySolutions() {
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
    <section
      id="industry-solutions"
      className=" mt-4 space-y-2 scroll-mt-24 relative isolate overflow-hidden bg-[#000000] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <AmoebaBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-11"
        >
          <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-xs font-bold uppercase tracking-[0.3em] text-transparent">
            Industry Solutions
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Different industries.
            <span className="mt-1 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              One technology partner.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:text-base sm:leading-7">
            We understand that every business has its own priorities,
            processes and opportunities. Our solutions adapt to the
            challenges that matter most to your industry.
          </p>
        </div>

        {/* Industry cards */}
        <div className="space-y-4 sm:space-y-5">
          {industryData.map((industry, index) => (
            <article
              key={industry.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="grid overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#08080B] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#3E7BD6]/50 lg:grid-cols-2"
            >
             
{/* Image */}
<div
  className={`relative min-h-[240px] overflow-hidden bg-[#08080B] sm:min-h-[290px] lg:min-h-[410px] ${
    index % 2 === 1 ? "lg:order-2" : ""
  }`}
>
  <div
    aria-label={`${industry.name} technology`}
    className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-700"
    role="img"
    style={{ backgroundImage: `url("${industry.image}")` }}
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

  <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
    <span className="rounded-full border border-white/20 bg-black/50 px-3.5 py-2 text-[10px] font-semibold text-white backdrop-blur-xl sm:text-xs">
      {industry.eyebrow}
    </span>
  </div>
</div>


              {/* Content */}
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8 xl:p-9">
                <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-[10px] font-bold uppercase tracking-[0.25em] text-transparent sm:text-xs">
                  {industry.name}
                </span>

                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#A0A0A8] sm:text-sm sm:leading-7">
                  {industry.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4D4D8] sm:text-xs">
                    What We Deliver
                  </p>

                  <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                    {industry.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-start gap-2.5 text-[12px] leading-5 text-[#C4C4CC] sm:text-[13px]"
                      >
                        <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] text-[10px] font-bold text-white">
                          ✓
                        </span>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-[#2A2A30] bg-[#111114] px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#888891]">
                    Industry Experience
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white">
                    {industry.proof}
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={industry.link}
                    className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#29B6F0] transition-all duration-300 hover:gap-4"
                  >
                    {industry.linkText}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
