
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    category: "PAYMENTS & INTEGRATIONS",
    title: "Payment platform",
    description:
      "Building a platform to support high-volume payment transactions.",
    image: "/visuals/payment-network.svg",
    tag: "PAYMENTS",
    number: "01",
    link: "/contact",
    linkText: "Discuss your project",
  },
  {
    category: "HEALTHCARE & AI",
    title: "AI in real hospitals",
    description:
      "Healthcare AI work that grew into the BeaverHealthAI product line.",
    image: "/visuals/white-healthcare-visual.webp",
    tag: "HEALTHCARE AI",
    number: "02",
    link: "#products",
    linkText: "Explore BeaverHealthAI",
  },
  {
    category: "DATA & ANALYTICS",
    title: "Data that drives decisions",
    description:
      "Tableau dashboards that help teams make clearer decisions with their data.",
    image: "/home/hero2.webp",
    tag: "DATA & ANALYTICS",
    number: "03",
    link: "/contact",
    linkText: "Discuss your project",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div
      className="mx-auto mb-16 max-w-3xl text-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#3E7BD6]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted">
        {description}
      </p>
    </div>
  );
}

export default function CaseStudies() {
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
    <section id="work" className="bg-brand-ink py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Case studies"
          title={
           <>
  <span className="font-extrabold tracking-tight">
    Work that moves{" "}
  </span>
  <span className="bg-brand-gradient bg-clip-text font-extrabold tracking-tight text-transparent">
    things forward.
  </span>
</>
          }
          description="Real engineering challenges across payments, healthcare and data."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article
              key={study.number}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 150}
              className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-card shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6]/50 hover:shadow-2xl hover:shadow-[#3E7BD6]/10"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden bg-brand-panel">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-bold tracking-widest text-white backdrop-blur">
                  {study.tag}
                </span>

                <span className="absolute bottom-6 right-6 text-5xl font-semibold text-white/30 transition-colors duration-300 group-hover:text-[#29B6F0]/70">
                  {study.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#29B6F0]">
                  {study.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#29B6F0]">
                  {study.title}
                </h3>

                <p className="mt-4 min-h-[56px] text-sm leading-7 text-brand-muted">
                  {study.description}
                </p>

                <Link
                  href={study.link}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#3E7BD6] transition-all duration-300 hover:gap-3 hover:text-[#7A4FD1]"
                >
                  {study.linkText}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

              {/* BOTTOM GRADIENT */}
              <div className="h-1 w-0 bg-brand-gradient transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
