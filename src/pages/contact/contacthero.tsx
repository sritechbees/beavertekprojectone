
"use client";

import { useEffect } from "react";
import App_layout from "@/component/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";

import Contactform from "./contactform";
import FAQSection from "./faqsection";
import Head from "next/head";

export default function ContactHero() {
  /* =========================================================
     AOS
  ========================================================= */

  useEffect(() => {
    AOS.init({
      duration: 750,
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
        <title>Beavertek | Contact</title>
      </Head>

      {/* =========================================================
          CONTACT HERO
      ========================================================= */}

      <section
        className="
          relative
          mt-20
          flex
          h-auto
          min-h-0
          flex-col
          overflow-hidden
          bg-[#02030D]

          md:block
          md:h-[410px]
          md:min-h-[410px]

          lg:h-[440px]
          lg:min-h-[440px]

          xl:h-[455px]
          xl:min-h-[455px]
        "
      >
        {/* =======================================================
            RIGHT SIDE IMAGE
        ======================================================= */}

        <div
          className="
            relative
            order-1
            h-[220px]
            w-full
            shrink-0
            overflow-hidden

            sm:h-[260px]

            md:absolute
            md:inset-y-0
            md:right-0
            md:order-none
            md:h-auto
            md:w-[58%]

            lg:w-[56%]

            xl:w-[55%]
          "
        >
          {/* Image */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: "url('/contact/contacthero1.png')",
            }}
          />

          {/* Image soft left transition */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              hidden
              w-[45%]
              bg-gradient-to-r
              from-[#02030D]
              via-[#02030D]/20
              to-transparent

              md:block
            "
          />

          {/* Mobile image bottom transition */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-gradient-to-t
              from-[#02030D]
              to-transparent

              md:hidden
            "
          />

          {/* Subtle image darkening */}

          <div
            className="
              absolute
              inset-0
              bg-black/10
            "
          />
        </div>

        {/* =======================================================
            LEFT DARK CONTENT BACKGROUND
        ======================================================= */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            z-[1]
            hidden
            w-full
            bg-gradient-to-r
            from-[#02030D]
            via-[#02030D]
            to-transparent

            md:block
            md:w-[62%]

            lg:w-[60%]

            xl:w-[58%]
          "
        />

        {/* =======================================================
            SUBTLE BRAND GRADIENT
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            bg-gradient-to-br
            from-[#29B6F0]/5
            via-transparent
            to-[#B93FC9]/10
          "
        />

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-10
            order-2
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            px-5
            py-8

            sm:px-6
            sm:py-9

            md:h-full
            md:px-8
            md:py-0

            lg:px-10

            xl:px-12
          "
        >
          <div
            className="
              w-full
              max-w-2xl

              md:max-w-[600px]

              lg:max-w-[640px]
            "
          >
            {/* ===================================================
                LABEL
            =================================================== */}

            <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="100"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#121212]/70
                px-3
                py-1.5
                backdrop-blur-xl
                shadow-[0_8px_25px_rgba(0,0,0,.22)]

                sm:px-4
                sm:py-2
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#29B6F0]

                  sm:text-[10px]

                  md:text-[11px]
                "
              >
                Get in Touch
              </span>
            </div>

            {/* ===================================================
                HEADING
            =================================================== */}

            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="180"
              className="
                mt-4
                text-[32px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.045em]
                text-white
                drop-shadow-[0_6px_25px_rgba(0,0,0,0.35)]

                sm:text-[38px]
                sm:leading-[1.05]

                md:text-[45px]

                lg:text-[47px]

                xl:text-[55px]

                2xl:text-[60px]
              "
            >
              Let&apos;s start with a{" "}

              <span
                className="
                  mt-1.5
                  block
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  bg-clip-text
                  font-extrabold
                  text-transparent
                "
              >
                conversation.
              </span>
            </h1>

            {/* ===================================================
                DIVIDER
            =================================================== */}

            <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="280"
              className="
                mt-5
                flex
                items-center
                gap-1.5
              "
            >
              <span
                className="
                  h-[3px]
                  w-12
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  to-[#3E7BD6]

                  sm:w-16
                "
              />

              <span
                className="
                  h-[3px]
                  w-6
                  rounded-full
                  bg-gradient-to-r
                  from-[#7A4FD1]
                  to-[#B93FC9]

                  sm:w-8
                "
              />
            </div>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="360"
              className="
                mx-auto
                mt-4
                max-w-lg
                text-[12px]
                leading-5.5
                text-[#D4D4D8]

                sm:mt-5
                sm:text-[13px]
                sm:leading-6

                md:text-sm
                md:leading-7

                lg:mx-0
                lg:text-[15px]
                lg:leading-7

                xl:text-base
              "
            >
              Tell us what you&apos;re trying to build.
              A senior BeaverTek engineer
              will respond personally —
              usually within one business day.
              No call center.
              No sales funnel.
              Just a real conversation.
            </p>
          </div>
        </div>

        {/* =======================================================
            SUBTLE EDGE GLOW
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            right-[18%]
            top-1/2
            z-[3]
            hidden
            h-52
            w-52
            -translate-y-1/2
            rounded-full
            bg-[#29B6F0]/5
            blur-[90px]

            lg:block
          "
        />

        {/* =======================================================
            DECORATIVE CIRCLES
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-5
            top-24
            z-[4]
            hidden
            h-16
            w-16
            rounded-full
            border
            border-[#3E7BD6]/20

            xl:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-16
            right-8
            z-[4]
            hidden
            h-20
            w-20
            rounded-full
            border
            border-[#7A4FD1]/20

            xl:block
          "
        />
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}

      <Contactform />

      {/* =========================================================
          FAQ
      ========================================================= */}

      <FAQSection />
    </App_layout>
  );
}
