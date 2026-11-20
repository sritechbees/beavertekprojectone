
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
      className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-[#29B6F0]" : "text-[#3E7BD6]"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-[#29B6F0]" />
      {children}
    </span>
  );
}

// =========================================
// PRIMARY BUTTON COMPONENT
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
      className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-gradient px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#3E7BD6]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A4FD1]/30"
    >
      {children}
      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

// =========================================
// BEAVERHEALTH AI SECTION
// =========================================

export default function BeaverHealthAI() {
  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-brand-paper py-20 text-[#101828] sm:py-24 lg:py-28"
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[500px] w-[500px] animate-[floatGlow_10s_ease-in-out_infinite] rounded-full bg-[#29B6F0]/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[450px] w-[450px] animate-[floatGlow_12s_ease-in-out_infinite] rounded-full bg-[#7A4FD1]/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 top-1/2 -z-10 h-72 w-72 rounded-full bg-[#B93FC9]/10 blur-[120px]"
      />

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div className="animate-[fadeUp_0.9s_ease-out_both]">
            <Eyebrow light>Built by BeaverTek</Eyebrow>

            <h2 className="text-5xl font-semibold tracking-tight text-[#101828] sm:text-6xl lg:text-7xl">
              BeaverHealth
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                AI
              </span>
            </h2>
          </div>

          <div className="animate-[fadeUp_0.9s_ease-out_0.2s_both]">
            <p className="max-w-xl text-lg leading-8 text-[#596579]">
              Healthcare AI products, built and operated by the team
              that engineers them.
            </p>

            <div className="mt-7">
              <PrimaryButton href="/contact">
                Request a product demo
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {/* CARE360 AI */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0]/50 hover:shadow-xl hover:shadow-[#29B6F0]/10 sm:p-10">

            {/* CARD GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#29B6F0]/10 blur-[80px] transition-all duration-700 group-hover:bg-[#29B6F0]/25"
            />

            {/* ICON */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29B6F0] to-[#7A4FD1] text-2xl font-black text-white shadow-lg shadow-[#29B6F0]/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
              C<span className="text-sm">360</span>
            </div>

            <p className="relative mt-12 text-xs font-bold uppercase tracking-widest text-[#29B6F0]">
              Healthcare AI workspace
            </p>

            <h3 className="relative mt-3 text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#29B6F0]">
              Beaver Care360 AI
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-[#A0A0A8]">
              A healthcare AI workspace designed to support smarter
              healthcare workflows.
            </p>

            <Link
              href="/contact"
              className="group/link relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 hover:text-[#29B6F0]"
            >
              Ask about Care360
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </Link>
          </article>

          {/* INTAKE IQ */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-[#B93FC9]/50 hover:shadow-xl hover:shadow-[#7A4FD1]/10 sm:p-10">

            {/* CARD GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7A4FD1]/10 blur-[80px] transition-all duration-700 group-hover:bg-[#B93FC9]/25"
            />

            {/* ICON */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3E7BD6] to-[#B93FC9] text-2xl font-black text-white shadow-lg shadow-[#7A4FD1]/20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
              IQ
            </div>

            <p className="relative mt-12 text-xs font-bold uppercase tracking-widest text-[#B93FC9]">
              Patient intake module
            </p>

            <h3 className="relative mt-3 text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#B93FC9]">
              IntakeIQ
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-[#A0A0A8]">
              A focused patient intake solution for healthcare workflows.
            </p>

            <Link
              href="/contact"
              className="group/link relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 hover:text-[#B93FC9]"
            >
              Ask about IntakeIQ
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </Link>
          </article>
        </div>

        {/* BLAZEGUARD PRO FIREWALL */}
        <div
          id="blazeguard"
          className="group relative mt-8 flex flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-[#29B6F0]/20 bg-[#121212] p-8 shadow-xl shadow-black/20 transition-all duration-500 hover:border-[#7A4FD1]/50 sm:p-10 lg:flex-row lg:items-center"
        >
          {/* GRADIENT BACKGROUND */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#29B6F0]/10 via-[#3E7BD6]/5 to-[#B93FC9]/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#7A4FD1]/15 blur-[100px] transition-all duration-700 group-hover:bg-[#29B6F0]/20"
          />

          {/* FIREWALL CONTENT */}
          <div className="relative max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#29B6F0]">
              Also built by BeaverTek · Network security
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              BlazeGuard Pro Firewall
            </h3>

            <p className="mt-3 font-medium text-[#29B6F0]">
              Next-Gen Security for Modern Networks
            </p>

            <p className="mt-4 text-sm leading-7 text-[#D4D4D8]">
              BlazeGuard Pro is our flagship enterprise-grade firewall
              designed to protect digital infrastructure with AI-powered
              threat detection, real-time analytics and cloud integration.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group/button relative inline-flex shrink-0 items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#29B6F0] hover:bg-gradient-to-r hover:from-[#29B6F0] hover:to-[#7A4FD1] hover:shadow-lg hover:shadow-[#29B6F0]/20"
          >
            Enquire about BlazeGuard

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-20px, 25px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          section *,
          section *::before,
          section *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
