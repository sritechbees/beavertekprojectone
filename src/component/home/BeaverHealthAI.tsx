
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

// =========================================
// EYEBROW COMPONENT
// =========================================

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs ${
        light ? "text-[#29B6F0]" : "text-[#3E7BD6]"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />
      {children}
    </span>
  );
}

// =========================================
// PRIMARY BUTTON
// =========================================

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
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_40%,#7A4FD1_75%,#B93FC9_100%)] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#3E7BD6]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7A4FD1]/30 sm:px-6 sm:py-3 sm:text-sm"
    >
      {children}

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

// =========================================
// PRODUCT CARD
// =========================================

function ProductCard({
  label,
  title,
  description,
  linkText,
  icon,
  iconText,
  accent,
  glow,
  reverse = false,
}: {
  label: string;
  title: string;
  description: string;
  linkText: string;
  icon: ReactNode;
  iconText: string;
  accent: string;
  glow: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`group relative isolate flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[#DCE5F0] bg-white p-5 shadow-[0_12px_35px_rgba(41,65,100,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#29B6F0]/50 hover:shadow-[0_20px_40px_rgba(62,123,214,0.13)] sm:min-h-[275px] sm:p-6 lg:p-7 ${
        reverse ? "lg:mt-5" : ""
      }`}
    >
      {/* BEAVERTEK GRADIENT OVERLAY */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(41,182,240,0.10)_0%,rgba(62,123,214,0.07)_35%,rgba(122,79,209,0.08)_70%,rgba(185,63,201,0.10)_100%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 rounded-full ${glow} opacity-40 blur-[85px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-80`}
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-44 w-44 rounded-full bg-[#7A4FD1]/10 opacity-50 blur-[80px] transition-opacity duration-500 group-hover:opacity-90"
      />

      {/* ICON */}

      <div className="flex items-start">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] border border-white/60 bg-gradient-to-br ${accent} text-white shadow-md transition-transform duration-500 group-hover:scale-105`}
        >
          {icon}
        </div>
      </div>

      {/* CONTENT */}

      <div className="mt-5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
          style={{ color: iconText }}
        >
          {label}
        </p>

        <h3 className="mt-2 text-[21px] font-extrabold leading-tight tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-[25px]">
          {title}
        </h3>

        <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#596579] sm:text-sm sm:leading-7">
          {description}
        </p>
      </div>

      {/* LINK */}

      <Link
        href="/contact"
        className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-5 text-xs font-bold text-[#3E7BD6] transition-colors duration-300 hover:text-[#B93FC9] sm:text-sm"
      >
        {linkText}

        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
        />
      </Link>

      {/* BOTTOM GRADIENT */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-700 group-hover:w-full" />
    </article>
  );
}

// =========================================
// BEAVERHEALTH AI SECTION
// =========================================

export default function BeaverHealthAI() {
  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-[#F7F9FC] py-9 text-[#101828] sm:py-11 lg:py-13"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F9FC_55%,#F2F5FA_100%)]"
      />

      {/* CYAN GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[300px] w-[300px] rounded-full bg-[#29B6F0]/10 blur-[110px]"
      />

      {/* VIOLET GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full bg-[#7A4FD1]/10 blur-[110px]"
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(62,123,214,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(62,123,214,0.08)_1px,transparent_1px)] [background-size:75px_75px]"
      />

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8">

          {/* TITLE */}

          <div data-aos="fade-up">
            <Eyebrow light>Built by BeaverTek</Eyebrow>

            <h2 className="text-[32px] font-black leading-[1.08] tracking-[-0.045em] text-[#101828] sm:text-[42px] md:text-[48px] lg:text-[54px]">
              BeaverHealth
              <span className="bg-[linear-gradient(110deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                AI
              </span>
            </h2>

            <div className="mt-3 h-1 w-14 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />
          </div>

          {/* DESCRIPTION + CTA */}

          <div data-aos="fade-up" data-aos-delay="100">
            <p className="max-w-xl text-sm leading-6 text-[#596579] sm:text-base sm:leading-7">
              Healthcare AI products, built and operated by the team
              that engineers them.
            </p>

            <div className="mt-4">
              <PrimaryButton href="/products/product">
                Product show
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* =====================================
            PRODUCT CARDS
        ===================================== */}

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-9 lg:gap-5">

          {/* CARE360 AI */}

          <div data-aos="fade-up">
            <ProductCard
              label="Healthcare AI workspace"
              title="Beaver Care360 AI"
              description="A healthcare AI workspace designed to support smarter healthcare workflows."
              linkText="Ask about Care360"
              icon={
                <span className="flex items-center gap-0.5 text-lg font-black">
                  C<span className="text-[10px]">360</span>
                </span>
              }
              iconText="#29B6F0"
              accent="from-[#29B6F0] to-[#3E7BD6]"
              glow="bg-[#29B6F0]/20"
            />
          </div>

          {/* INTAKE IQ */}

          <div data-aos="fade-up" data-aos-delay="100">
            <ProductCard
              label="Patient intake module"
              title="IntakeIQ"
              description="A focused patient intake solution for healthcare workflows."
              linkText="Ask about IntakeIQ"
              icon={
                <span className="text-xl font-black tracking-tight">
                  IQ
                </span>
              }
              iconText="#B93FC9"
              accent="from-[#3E7BD6] to-[#B93FC9]"
              glow="bg-[#7A4FD1]/25"
              reverse
            />
          </div>
        </div>

      </div>
    </section>
  );
}
