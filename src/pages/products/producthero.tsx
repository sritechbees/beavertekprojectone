
"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";

import ProductPlatform from "./ProductPlatform";
import Productcard from "./productcard";
import Productsoftware from "./Productsoftware";
import Productcontent from "./productcontent";

import Head from "next/head";


function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-5 sm:w-5"
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
    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#29B6F0]/20 bg-[#29B6F0]/10 text-[#29B6F0] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#29B6F0]/20 sm:h-16 sm:w-16">
      {type === "care" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7 sm:h-8 sm:w-8"
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
          className="h-7 w-7 sm:h-8 sm:w-8"
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
      className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B1220]/90 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0]/40 hover:shadow-[0_20px_60px_rgba(41,182,240,0.10)] sm:min-h-[270px] sm:rounded-3xl sm:p-7 lg:p-8"
    >
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#29B6F0]/[0.06] blur-[65px] transition-all duration-500 group-hover:bg-[#29B6F0]/15" />

      <div className="relative">
        <ProductIcon type={type} />

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:mt-6 sm:text-2xl">
          {name}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400 sm:mt-3 sm:leading-7">
          {description}
        </p>
      </div>

      <Link
        href="/contact/contacthero"
        className="group/link relative mt-6 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#29B6F0] transition-colors hover:text-white sm:mt-7"
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
      <Head>
      <title>Beavertek | Product</title>
      </Head>
      
<section
  id="products"
  className="relative isolate overflow-hidden bg-[#010621] text-white"
>
  {/* FULL BACKGROUND IMAGE - DESKTOP */}
  <div className="absolute inset-0 z-0 hidden md:block">
    <Image
      src="/product/Product Banner2.png"
      alt="BeaverHealthAI healthcare technology solutions"
      fill
      priority
      sizes="100vw"
      className="object-cover object-right"
    />
  </div>

  {/* MOBILE IMAGE */}
  <div className="relative h-[250px] w-full overflow-hidden sm:h-[310px] max-sm:mt-20 md:hidden">
    <Image
      src="/product/Product Banner2.png"
      alt="BeaverHealthAI healthcare technology solutions"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center max-sm:object-right"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#010621] via-[#010621]/10 to-transparent" />
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto flex min-h-[auto] max-w-7xl items-center justify-center px-5 pb-12 pt-3 sm:px-8 sm:pb-14 md:min-h-[620px] md:justify-start md:px-10 md:py-16 lg:min-h-[660px] lg:px-12 lg:py-16 xl:min-h-[680px]">

    <div className="w-full max-w-xl text-center md:text-left">

      {/* EYEBROW */}
      <div
        data-aos="fade-up"
        className="inline-flex items-center gap-2 rounded-full border border-[#29B6F0]/30 bg-[#010621]/60 px-3 py-1.5 backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#29B6F0] sm:text-[10px] sm:tracking-[0.18em]">
          Built by BeaverTek
        </span>
      </div>

      {/* MAIN TITLE */}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.04em] text-white sm:mt-5 sm:text-[36px] md:text-[42px] lg:mt-6 lg:text-[48px] xl:text-[52px]"
      >
        Intelligent

        <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
          Healthcare
        </span>

        <span className="block">Powered by AI</span>
      </h2>

      {/* DESCRIPTION */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-4 sm:mt-5"
      >
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
          BeaverHealth<span className="text-[#29B6F0]">AI</span>
        </h3>

        <p className="mx-auto mt-2 max-w-lg text-[13px] leading-6 text-slate-200 sm:mt-3 sm:text-sm sm:leading-7 md:mx-0 md:text-[15px]">
          Healthcare AI products, built and operated by the team that
          engineers them. We create intelligent healthcare solutions
          that help modernize patient experiences and clinical
          workflows.
        </p>
      </div>

      {/* CTA BUTTONS */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-7 md:justify-start"
      >
        <Link
          href="/contact/contacthero"
          className="group inline-flex min-h-[46px] items-center gap-2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-5 py-3 text-[11px] font-bold text-white shadow-[0_12px_35px_rgba(41,182,240,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(41,182,240,0.35)] sm:min-h-[48px] sm:gap-2.5 sm:px-6 sm:text-xs md:text-sm"
        >
          Request a Product Demo
          <ArrowIcon />
        </Link>

        <Link
          href="#productcard"
          className="inline-flex items-center gap-2 text-[11px] font-semibold text-white transition-colors hover:text-[#29B6F0] sm:text-xs md:text-sm"
        >
          Explore Products
          <span className="text-base">↓</span>
        </Link>
      </div>

    </div>
  </div>
</section>

      
     
      <Productsoftware />
      <Productcard />
      <ProductPlatform />
      <Productcontent/>
     
    </App_layout>
  );
}
