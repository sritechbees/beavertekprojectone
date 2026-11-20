
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// =========================================
// TESTIMONIAL DATA
// =========================================

const testimonials = [
  {
    name: "Brent",
    role: "Senior Vice President",
    project: "Tablu Reporting",
    quote:
      "I wanted to take a moment to personally thank you for the exceptional work you have done on Tablu Reporting. Your dedication, attention to details, and willingness to go beyond expectations truly stood out.",
  },
  {
    name: "Cooraez",
    role: "CEO",
    project: "Project Excellence",
    quote:
      "BeaverTek efforts not only contributed to the success of the project but also set a high standard for excellence with the team. It's rare to see such initiatives and commitment, and I want you to know that it has not gone unnoticed.",
  },
  {
    name: "Ravi Rajagopal",
    role: "CEO",
    project: "Campus solutions",
    quote:
      "I just wanted to give a big shoutout for the incredible work BeaverTek did on campus solutions. BeaverTek didn't just check the boxes they went all in, and it made a huge difference.",
  },
];

// =========================================
// SECTION HEADING
// =========================================

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
      className="mx-auto mb-8 max-w-3xl text-center sm:mb-9 lg:mb-10"
      data-aos="fade-up"
      data-aos-duration="850"
    >
      <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#3E7BD6] sm:text-xs">
        {eyebrow}
      </p>

      <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* UPDATED DESCRIPTION SIZE */}

      <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-7 text-[#596579] sm:mt-4 sm:text-[15px] sm:leading-8 lg:text-[16px]">
        {description}
      </p>
    </div>
  );
}

// =========================================
// TESTIMONIAL CARD
// =========================================

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <figure
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay={index * 120}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7ECF3] bg-white p-5 shadow-[0_5px_20px_rgba(16,24,40,0.04)] transition-all duration-500 hover:border-[#7A4FD1]/35 hover:bg-[#FCFBFF] hover:shadow-[0_12px_32px_rgba(122,79,209,0.10)] sm:p-6"
    >
      {/* HOVER BACKGROUND EFFECT */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(41,182,240,0.07),transparent_40%,rgba(185,63,201,0.07))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* TOP GRADIENT ACCENT */}

      <div className="absolute left-5 right-5 top-0 h-[2px] origin-left scale-x-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />

      <div className="relative z-10 flex items-center justify-between">
        {/* QUOTE ICON */}

        <span className="bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_40%,#7A4FD1_75%,#B93FC9_100%)] bg-clip-text text-[52px] leading-[0.8] text-transparent transition-transform duration-300 group-hover:scale-105">
          “
        </span>

        {/* PROJECT */}

        {testimonial.project && (
          <span className="rounded-full border border-[#29B6F0]/20 bg-gradient-to-r from-[#29B6F0]/10 to-[#7A4FD1]/10 px-3 py-1.5 text-[9px] font-bold text-[#3E7BD6] sm:text-[10px]">
            {testimonial.project}
          </span>
        )}
      </div>

      {/* TESTIMONIAL TEXT */}

      <blockquote className="relative z-10 my-5 flex-1 text-[12px] leading-[1.8] text-[#596579] sm:my-6 sm:text-[13px] sm:leading-[1.85]">
        {testimonial.quote}
      </blockquote>

      {/* CUSTOMER DETAILS */}

      <figcaption className="relative z-10 border-t border-[#E8EDF3] pt-4 transition-colors duration-300 group-hover:border-[#7A4FD1]/20">
        <strong className="block text-[13px] font-bold text-[#101828] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-sm">
          {testimonial.name}
        </strong>

        <span className="mt-1 block text-[10px] text-[#7A8495] sm:text-xs">
          {testimonial.role}
        </span>
      </figcaption>

      {/* BOTTOM GRADIENT ACCENT */}

      <div className="relative z-10 mt-4 h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] opacity-70 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
    </figure>
  );
}

// =========================================
// MAIN DRIVING SUCCESS SECTION
// =========================================

export default function DrivingSuccess() {
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
    <section
      id="customer-testimonials"
      className="relative isolate overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
    >
      {/* =====================================
          BACKGROUND DESIGN
      ===================================== */}

      {/* BASE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFD_55%,#FCFAFF_100%)]"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 z-0 h-[260px] w-[260px] animate-pulse rounded-full bg-[#29B6F0]/10 blur-[100px] sm:h-[350px] sm:w-[350px]"
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[30%] z-0 h-[280px] w-[280px] animate-pulse rounded-full bg-[#7A4FD1]/10 blur-[110px] sm:h-[380px] sm:w-[380px]"
        style={{ animationDelay: "1.5s" }}
      />

      {/* MAGENTA GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[35%] z-0 h-[250px] w-[250px] animate-pulse rounded-full bg-[#B93FC9]/10 blur-[110px] sm:h-[350px] sm:w-[350px]"
        style={{ animationDelay: "2s" }}
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] [background-image:linear-gradient(rgba(41,182,240,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(122,79,209,0.08)_1px,transparent_1px)] [background-size:50px_50px]"
      />

      {/* TOP GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-[#29B6F0]/40 to-transparent"
      />

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="container relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* SECTION HEADING */}

        <SectionHeading
          eyebrow="Our customers"
          title={
            <>
              Driving success through{" "}
              <span className="bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text font-extrabold text-transparent">
                partnership.
              </span>
            </>
          }
          description="Our customers are at the heart of everything we do. From Fortune 500 companies to fast-growing startups, BeaverTek empowers organizations with scalable IT solutions, deep technical expertise and a commitment to long-term success."
        />

        {/* TESTIMONIAL CARDS */}

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM GRADIENT LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-[#7A4FD1]/40 to-transparent"
      />
    </section>
  );
}
