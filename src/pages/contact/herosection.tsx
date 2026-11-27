
"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Contactformtalk from "./contactformtalk";
import Head from "next/head";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function HeroSection() {
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
    <App_layout>
      <Head>
        <title>Beavertek | Let's Talk</title>
      </Head>

      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section
        className="
          relative
          isolate
          w-full
          overflow-hidden
          bg-black
            max-sm:mt-20
          md:min-h-[560px]
          lg:min-h-[600px]
        "
      >
        {/* =========================================================
            BACKGROUND IMAGE
        ========================================================== */}

        <div
          className="
            relative
            h-[220px]
            w-full
            shrink-0
            bg-cover
            bg-center
            bg-no-repeat

            sm:h-[280px]

            md:absolute
            md:inset-0
            md:-z-20
            md:h-auto
            md:bg-top
          "
          style={{
            backgroundImage: "url('/contact/contacthero.png')",
          }}
        >
          {/* Mobile Image Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/10

              md:hidden
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-gradient-to-t
              from-black
              to-transparent

              md:hidden
            "
          />
        </div>

        {/* =========================================================
            DARK OVERLAY
        ========================================================== */}

        <div className="absolute inset-0 -z-10 hidden bg-black/10 md:block" />

        {/* =========================================================
            SUBTLE GRADIENT OVERLAY
        ========================================================== */}

        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/20 via-black/45 to-black/20 md:block" />

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}

        <div
  className="
    relative
    z-10
    mx-auto
    flex
    min-h-0
    w-full
    max-w-7xl
    items-center
    justify-center
    px-4
    py-8
    text-center

    sm:px-6
    sm:py-10

    md:min-h-[520px]
    md:translate-y-6
    md:px-8
    md:py-16

    lg:min-h-[560px]
    lg:translate-y-8
    lg:px-10
    lg:py-18

    xl:min-h-[580px]
  "
>
          <div className="w-full max-w-4xl">
            {/* =====================================================
                BEAVERTEK
            ====================================================== */}

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                mb-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.24em]
                sm:mb-4
                sm:text-xs
                md:text-sm
              "
              style={{
                backgroundImage: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BEAVERTEK
            </p>

            {/* =====================================================
                MAIN HEADING
            ====================================================== */}

            <h1
              data-aos="fade-up"
              data-aos-delay="180"
              className="
                mx-auto
                max-w-3xl
                text-[28px]
                font-extrabold
                leading-[1.12]
                tracking-tight
                text-white
                sm:text-3xl
                md:text-[40px]
                lg:text-[48px]
                xl:text-[54px]
              "
            >
              Let&apos;s Build{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: GRADIENT,
                }}
              >
                Something Great
              </span>{" "}
              Together
            </h1>

            {/* =====================================================
                SECTION TITLE
            ====================================================== */}

            <h2
              data-aos="fade-up"
              data-aos-delay="260"
              className="
                mx-auto
                mt-4
                text-lg
                font-semibold
                text-white
                sm:mt-5
                sm:text-xl
                md:text-2xl
                lg:text-[26px]
              "
            >
              BeaverTek IT Services
            </h2>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              data-aos="fade-up"
              data-aos-delay="340"
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-[13px]
                leading-5
                text-white/75
                sm:mt-5
                sm:text-sm
                sm:leading-6
                md:text-base
                md:leading-7
                lg:max-w-3xl
              "
            >
              Whether you&apos;re looking for a custom IT solution, want to
              collaborate on a project, or just have a question our team is
              here to help. Reach out and let&apos;s start a conversation that
              could transform your business.
            </p>

            {/* =====================================================
                CTA
            ====================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="420"
              className="
                mt-6
                flex
                justify-center
                sm:mt-7
              "
            >
              <Link
                href="#contactformtalk"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#29B6F0]/20
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-xl
                  hover:shadow-[#7A4FD1]/25
                  sm:px-6
                  sm:py-3
                  sm:text-sm
                "
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM SECTION
          ID USED BY "LET'S TALK" BUTTON
      ========================================================== */}

      <section
        id="contactformtalk"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <Contactformtalk />
      </section>
    </App_layout>
  );
}
