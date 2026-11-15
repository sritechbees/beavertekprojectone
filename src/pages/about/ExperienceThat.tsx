
"use client";

import { useEffect, useRef } from "react";

// Local Eyebrow component
function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-5 text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-[#29B6F0]" : "text-[#29B6F0]"
      }`}
    >
      {children}
    </p>
  );
}

// Existing reasons data
const reasons = [
  {
    title: "Senior-led expertise",
    description:
      "Senior guidance and hands-on engineering experience for your business.",
  },
  {
    title: "Practical engineering",
    description:
      "Technology solutions designed to solve real-world business challenges.",
  },
  {
    title: "Long-term partnership",
    description:
      "A dedicated team focused on keeping your technology working as your business grows.",
  },
];

export default function ExperienceThat() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const glow = glowRef.current;
    const content = contentRef.current;

    if (!section || !background || !glow || !content) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    let ticking = false;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate section position relative to viewport
      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);

      const movement = Math.max(0, Math.min(1, progress));

      // Background moves slower
      const backgroundY = (movement - 0.5) * 100;

      // Glow moves at a different speed
      const glowY = (movement - 0.5) * -140;

      // Content moves slightly for a subtle depth effect
      const contentY = (movement - 0.5) * -25;

      background.style.transform = `translate3d(0, ${backgroundY}px, 0)`;
      glow.style.transform = `translate3d(0, ${glowY}px, 0)`;
      content.style.transform = `translate3d(0, ${contentY}px, 0)`;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#050507] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* PARALLAX BACKGROUND GRID */}
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-24 inset-x-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-20 [mask-image:linear-gradient(to_left,black,transparent_90%)]" />
      </div>

      {/* PARALLAX CYAN GLOW */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-20 h-[450px] w-[450px] rounded-full bg-[#29B6F0]/10 blur-[120px] will-change-transform motion-reduce:transform-none"
      />

      {/* SECOND BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/4 h-96 w-96 rounded-full bg-[#7A4FD1]/10 blur-[120px]"
      />

      {/* MAIN CONTENT */}
      <div
        ref={contentRef}
        className="container relative mx-auto grid max-w-7xl gap-10 px-5 will-change-transform sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-10"
      >
        {/* LEFT CONTENT */}
        <div>
          <Eyebrow light>Why BeaverTek</Eyebrow>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Experience that
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              stays with the work.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
            We know you have plenty of options. Here&apos;s why companies choose
            BeaverTek. Senior guidance, hands-on engineering and a team that
            understands what it takes to keep technology working in the real
            world.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="divide-y divide-white/10">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group grid gap-3 py-6 transition-all duration-300 hover:pl-2 sm:grid-cols-[40px_1fr_25px] sm:gap-4 sm:py-7"
            >
              <span className="text-xs font-bold text-[#29B6F0] sm:text-sm">
                0{index + 1}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                  {reason.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:leading-7">
                  {reason.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden text-xl text-[#29B6F0] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
