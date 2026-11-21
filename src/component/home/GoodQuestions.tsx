
"use client";

import { useEffect } from "react";
import Image from "next/image";
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

// =========================================
// EYEBROW
// =========================================

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#29B6F0] sm:text-xs">
      {children}
    </p>
  );
}

// =========================================
// PRIMARY BUTTON
// =========================================

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(62,123,214,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(122,79,209,0.3)] sm:px-7 sm:py-3.5 sm:text-sm"
    >
      {children}

      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

// =========================================
// FAQ ITEM
// =========================================

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[number];
  index: number;
}) {
  return (
    <details
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={index * 100}
      className="group border-b border-white/10 py-5 first:border-t first:border-white/10 sm:py-6"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-semibold leading-6 text-white marker:content-none [&::-webkit-details-marker]:hidden sm:text-[15px] lg:text-base">
        <span className="transition-colors duration-300 group-hover:text-[#29B6F0]">
          {faq.question}
        </span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#29B6F0]/30 bg-[#29B6F0]/10 text-xl font-normal text-[#29B6F0] transition-all duration-300 group-hover:border-[#7A4FD1]/50 group-open:rotate-45 group-open:border-transparent group-open:bg-gradient-to-r group-open:from-[#29B6F0] group-open:to-[#7A4FD1] group-open:text-white sm:h-9 sm:w-9">
          +
        </span>
      </summary>

      <p className="max-w-2xl pt-4 pr-8 text-[13px] leading-7 text-[#B5BECC] sm:text-[14px] sm:leading-8">
        {faq.answer}
      </p>
    </details>
  );
}

// =========================================
// MAIN FAQ SECTION
// =========================================

export default function GoodQuestions() {
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
    <section className="relative isolate overflow-hidden bg-[#050507] py-12 sm:py-16 lg:py-20">

      {/* =====================================
          BACKGROUND DESIGN
      ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#050507_0%,#090B12_55%,#0A0710_100%)]"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-[#29B6F0]/10 blur-[120px] sm:h-[400px] sm:w-[400px]"
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-[#7A4FD1]/10 blur-[130px] sm:h-[450px] sm:w-[450px]"
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(41,182,240,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(122,79,209,0.12)_1px,transparent_1px)] [background-size:55px_55px]"
      />

      {/* TOP GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#29B6F0]/50 to-transparent"
      />

      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* =====================================
            CENTERED SINGLE-LINE TITLE
        ===================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="mx-auto mb-9 max-w-5xl text-center sm:mb-12 lg:mb-14"
        >
          <Eyebrow>Frequently asked questions</Eyebrow>

         <h2 className="whitespace-normal text-[25px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[34px] md:text-[42px] lg:whitespace-nowrap lg:text-[44px] xl:text-[48px]">
  Good questions{" "}
  <span className="bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
    to start with.
  </span>
</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-[#A0A8B7] sm:mt-5 sm:text-[15px] sm:leading-8">
            Have a technology challenge? Let&apos;s talk about the right solution.
          </p>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:mt-6 sm:w-20" />
        </div>

        {/* =====================================
            LEFT IMAGE + RIGHT FAQ
        ===================================== */}

        <div className="grid grid-cols-1 items-center gap-9 sm:gap-11 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">

          {/* =====================================
              LEFT SIDE - IMAGE
          ===================================== */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#10131C] shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:rounded-[28px] lg:aspect-[4/5]">

              {/* IMAGE */}

              <Image
                src="/contact/faq1.png"
                alt="BeaverTek technology and digital innovation"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* COLOR OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/20 via-[#3E7BD6]/10 to-[#7A4FD1]/30 mix-blend-screen" />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/95 via-[#050507]/15 to-transparent" />

              {/* IMAGE CONTENT */}

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 lg:p-8">

                <div className="mb-3 inline-flex rounded-full border border-[#29B6F0]/30 bg-[#29B6F0]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#67D0FF] backdrop-blur-md sm:text-[10px]">
                  BeaverTek
                </div>

                <h3 className="max-w-md text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-[34px]">
                  Technology built around your business.
                </h3>

                <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] transition-all duration-500 group-hover:w-24" />
              </div>

              {/* IMAGE BORDER */}

              <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/10 sm:rounded-[28px]" />
            </div>

            {/* IMAGE GLOW */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-[#7A4FD1]/20 blur-3xl sm:h-44 sm:w-44"
            />
          </div>

          {/* =====================================
              RIGHT SIDE - FAQ ACCORDION
          ===================================== */}

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="w-full min-w-0"
          >
            <div>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                />
              ))}
            </div>

            {/* CONTACT CTA */}

            <div
              data-aos="fade-up"
              data-aos-duration="850"
              className="mt-7 sm:mt-9"
            >
              <p className="mb-4 text-[13px] leading-6 text-[#A0A8B7] sm:text-sm">
                Have more questions? Let&apos;s discuss your technology needs.
              </p>

              <PrimaryButton href="/contact/contacthero">
                Talk to an engineer
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7A4FD1]/50 to-transparent"
      />
    </section>
  );
}
