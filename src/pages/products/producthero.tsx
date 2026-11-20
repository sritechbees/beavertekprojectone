"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import ProductsHeader from "./ProductsHeader";
import ProductsHero from "./ProductsHero";
import ProductsFooter from "./ProductsFooter";
import ProductsCta from "./ProductsCta";
import ProductCapabilities from "./ProductCapabilities";
import ProductPlatform from "./ProductPlatform";
import ProductRelationship from "./ProductRelationship";
import Product from "./productcard";
import Productcard from "./productcard";


function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <path
        d="M4.2 15.8 15.5 4.5m0 0H6m9.5 0v9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductIcon({ type }: { type: "care" | "intake" }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#29B6F0]/20 bg-[#29B6F0]/10 text-[#29B6F0] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#29B6F0]/20">
      {type === "care" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z" />
          <path d="M12 8v7m-3.5-3.5h7" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
          <path d="m14 16 1.5 1.5L19 14" />
        </svg>
      )}
    </div>
  );
}

function ProductCard({
  name,
  description,
  type,
  linkLabel,
  delay,
}: {
  name: string;
  description: string;
  type: "care" | "intake";
  linkLabel: string;
  delay: number;
}) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0B1220]/90 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0]/40 hover:shadow-[0_20px_60px_rgba(41,182,240,0.10)] sm:p-9"
    >
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#29B6F0]/[0.06] blur-[65px] transition-all duration-500 group-hover:bg-[#29B6F0]/15" />

      <div className="relative">
        <ProductIcon type={type} />

        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
          {name}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
          {description}
        </p>
      </div>

      <Link
        href="/contact"
        className="group/link relative mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#29B6F0] transition-colors hover:text-white"
      >
        {linkLabel}
        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
          ↗
        </span>
      </Link>

      <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}

export default function ProductsSection() {
  return (
    <App_layout>
      <section
        id="products"
        className="relative isolate overflow-hidden bg-[#05070D] text-white"
      >
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -left-52 top-10 h-[550px] w-[550px] rounded-full bg-[#3E7BD6]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-52 top-[30%] h-[550px] w-[550px] rounded-full bg-[#7A4FD1]/10 blur-[160px]" />

        {/* HERO SECTION */}
        <div className="relative min-h-[650px] lg:min-h-[700px]">
          {/* RIGHT IMAGE */}
          <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/home/About.jpg"
                alt="BeaverHealthAI healthcare technology solutions"
                fill
                priority
                sizes="55vw"
                className="object-cover object-center"
              />
            </div>

            {/* GEOMETRIC BRAND SHAPE */}
            <div className="pointer-events-none absolute left-[-65px] top-0 h-full w-[220px]">
              <div className="absolute left-10 top-[-10%] h-[125%] w-[95px] -rotate-[27deg] bg-[#29B6F0]/90" />

              <div className="absolute left-10 top-[-10%] h-[125%] w-[95px] rotate-[27deg] bg-[#7A4FD1]/75 mix-blend-screen" />
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="relative h-[300px] w-full lg:hidden">
            <Image
              src="/home/About.jpg"
              alt="Healthcare technology solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/30 to-transparent" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:min-h-[700px] lg:px-12">
            <div className="max-w-2xl">
              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-3 rounded-full border border-[#29B6F0]/30 bg-[#29B6F0]/[0.08] px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                  Built by BeaverTek
                </span>
              </div>

              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-8 text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]"
              >
                Intelligent
                <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                  Healthcare
                </span>
                <span className="block">Powered by AI</span>
              </h2>

              <div data-aos="fade-up" data-aos-delay="200" className="mt-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  BeaverHealth<span className="text-[#29B6F0]">AI</span>
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  Healthcare AI products, built and operated by the team that
                  engineers them. We create intelligent healthcare solutions
                  that help modernize patient experiences and clinical
                  workflows.
                </p>
              </div>

              {/* CTA */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-9 flex flex-wrap items-center gap-5"
              >
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[54px] items-center gap-3 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(41,182,240,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(41,182,240,0.35)]"
                >
                  Request a Product Demo
                  <ArrowIcon />
                </Link>

                <Link
                  href="#beaverhealthai-features"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#29B6F0]"
                >
                  Explore Products
                  <span className="text-lg">↓</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductsHeader/>
      <ProductsHero/>
      <Productcard/>
      <ProductCapabilities/>
      <ProductPlatform/>
      <ProductRelationship/>
      <ProductsCta/>
      <ProductsFooter/>

    </App_layout>
  );
}
