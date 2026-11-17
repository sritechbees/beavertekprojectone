import App_layout from "@/component/layout/app_layout";
import HowWeWork from "./HowWeWork";
import MissionVision from "./MissionVision";
import OurTeam from "./OurTeam";
import WhatWeBelieve from "./WhatWeBelieve";
import WhereWeAre from "./WhereWeAre";
import WhyWeExist from "./WhyWeExist";
import AboutCta from "./AboutCta";
import AboutFooter from "./AboutFooter";
import AboutHeader from "./AboutHeader";

export default function AboutHero() {
  return (
    <App_layout>
        
    <section
      id="top"
      className="overflow-hidden bg-[#e8eff4] scroll-mt-8"
      aria-labelledby="about-title"
    >
        
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="mb-6 text-xs font-bold tracking-[0.2em] text-[#557993] uppercase">
            About BeaverTek
          </p>
          <h1
            id="about-title"
            className="max-w-3xl text-5xl leading-[1.06] font-semibold tracking-[-0.055em] text-[#161e2f] sm:text-6xl lg:text-7xl"
          >
            Senior technology people. Built for businesses that don&apos;t have
            a CTO.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#455469]">
            BeaverTek is a technology partner for small and mid-size companies.
            We help businesses modernize their systems, make sense of their
            data, build the software they need, and keep their digital
            operations running securely. Based in Orange County, California,
            with a strong engineering team in India, we bring decades of
            Fortune 500 experience to the work in front of you — without the
            Fortune 500 price tag.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-[#161e2f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#23314f]"
            >
              Get to know us
            </a>
            <a
              href="#story"
              className="text-sm font-semibold text-[#23314f] underline decoration-[#9bb4c6] underline-offset-4 hover:decoration-[#23314f]"
            >
              Why we exist
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-md"
          aria-hidden="true"
        >
          <div className="absolute -top-5 -right-5 h-28 w-28 rounded-full border border-[#9bb4c6]" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#161e2f] p-8 text-white shadow-2xl shadow-[#23314f]/15 sm:p-10">
            <div className="mb-16 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#b8cbd8] uppercase">
                The BeaverTek approach
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#8fb0c6]" />
            </div>
            <p className="max-w-xs text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-4xl">
              Senior thinking. Working software. Dependable systems.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-[#c5d4de]">
              <span className="h-px w-10 bg-[#8fb0c6]" />
              US-led. India-engineered.
            </div>
            <div className="absolute -right-14 -bottom-16 h-40 w-40 rounded-full border-[24px] border-[#23314f]" />
          </div>
        </div>
      </div>
    </section>
     <AboutHeader/>
    <HowWeWork/>
    <MissionVision/>
    <OurTeam/>
    <WhatWeBelieve/>
    <WhereWeAre/>
    <WhyWeExist/>
    <AboutCta/>
    <AboutFooter/>
    </App_layout>
  );
}
