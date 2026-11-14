
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What services does BeaverTek provide?",
    answer:
      "BeaverTek provides AI automation, custom software development, data and analytics, cloud modernization, DevOps, security and managed IT support.",
  },
  {
    question: "Which industries does BeaverTek serve?",
    answer:
      "The services presented here focus on healthcare, financial services and payments, and professional services.",
  },
  {
    question: "Where are BeaverTek's teams located?",
    answer:
      "BeaverTek describes its presence across Irvine, California, in the United States, and Chennai, India.",
  },
  {
    question: "What engagement models are available?",
    answer:
      "The listed engagement models are fixed-scope projects, dedicated teams, managed services and fractional CTO guidance.",
  },
  {
    question: "Does BeaverTek develop its own products?",
    answer:
      "The page highlights BeaverHealthAI products, including Beaver Care360 AI and IntakeIQ, as well as BlazeGuard Pro Firewall.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#3E7BD6]">
      {children}
    </p>
  );
}

function PrimaryButton({ children, href }: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3E7BD6]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3E7BD6]/30"
    >
      {children}
      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export default function GoodQuestions() {
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
    <section className="bg-white py-28">
      <div className="container mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="lg:sticky lg:top-28 lg:h-fit"
        >
          <Eyebrow>Frequently asked questions</Eyebrow>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Good questions
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              to start with.
            </span>
          </h2>

          <p className="mt-6 max-w-sm leading-8 text-slate-500">
            Have a technology challenge? Let&apos;s talk about the right solution.
          </p>

          <div className="mt-8">
            <PrimaryButton href="/contact">
              Talk to an engineer
            </PrimaryButton>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div
          className="divide-y divide-slate-200 border-y border-slate-200"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="group rounded-xl py-6 transition-colors duration-300 open:bg-slate-50/80 sm:px-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 text-xl text-[#3E7BD6] transition-all duration-300 group-hover:border-[#3E7BD6]/50 group-open:rotate-45 group-open:border-transparent group-open:bg-gradient-to-r group-open:from-[#29B6F0] group-open:to-[#7A4FD1] group-open:text-white">
                  +
                </span>
              </summary>

              <p className="max-w-2xl pt-5 text-sm leading-8 text-slate-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
