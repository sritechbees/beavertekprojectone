export default function ProductsHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#e8eff4] scroll-mt-8"
      aria-labelledby="products-title"
    >
      <div
        className="pointer-events-none absolute -top-32 right-[6%] h-96 w-96 rounded-full border border-[#9bb4c6]/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-[9%] h-80 w-80 rounded-full border border-[#9bb4c6]/35"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#557993] uppercase">
            <span className="h-px w-8 bg-[#789ab0]" />
            Our product · BeaverHealthAI
          </p>
          <h1
            id="products-title"
            className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-[#161e2f] sm:text-6xl lg:text-7xl"
          >
            Healthcare software, shaped around care.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#455469] sm:text-xl">
            A connected healthcare platform for patient intake, AI-driven
            triage, remote monitoring, and predictive analytics—built for
            hospitals, clinics, and public health programs.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="https://beaverhealth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#161e2f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#23314f]"
            >
              Visit BeaverHealthAI
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              href="#capabilities"
              className="text-sm font-semibold text-[#23314f] underline decoration-[#9bb4c6] underline-offset-4 hover:decoration-[#23314f]"
            >
              Explore product details
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-white/70" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#111b2b] p-5 text-white shadow-2xl shadow-[#23314f]/20 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#aebfce] uppercase">
                  BeaverHealthAI
                </p>
                <p className="mt-1 text-sm text-[#dce5ec]">
                  Connected care workspace
                </p>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-[#b8cbd8] uppercase">
                Illustrative interface
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#8fa6b8] uppercase">
                  Care journey
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    ["01", "Patient intake"],
                    ["02", "Triage review"],
                    ["03", "Ongoing care"],
                  ].map(([number, label], index) => (
                    <div key={number} className="flex items-center gap-3">
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] ${
                          index === 1
                            ? "bg-[#8fb0c6] text-[#111b2b]"
                            : "border border-white/15 text-[#c5d4de]"
                        }`}
                      >
                        {number}
                      </span>
                      <span className="text-xs text-[#dce5ec]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-[#dce5ec]">
                      Incoming patient information
                    </p>
                    <span className="h-2 w-2 rounded-full bg-[#8fb0c6]" />
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-3/5 rounded-full bg-white/10" />
                  </div>
                  <p className="mt-4 text-[10px] tracking-[0.1em] text-[#8fa6b8] uppercase">
                    Intake · triage · next steps
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-[#8fb0c6]/20 bg-[#8fb0c6]/10 p-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-[#aebfce] uppercase">
                      Connected platform
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Care team overview
                    </p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#8fb0c6]/30 text-[#b8cbd8]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 12h4l3-8 4 16 3-8h4" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.12em] text-[#8fa6b8] uppercase">
              <span className="h-px w-6 bg-[#8fb0c6]" />
              A connected suite of healthcare applications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
