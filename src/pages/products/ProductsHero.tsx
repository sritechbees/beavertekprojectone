export default function ProductsHero() {
  return (
    <section
      id="top"
      className="overflow-hidden bg-[#e8eff4] scroll-mt-8"
      aria-labelledby="products-title"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="mb-6 text-xs font-bold tracking-[0.2em] text-[#557993] uppercase">
            BeaverHealthAI
          </p>
          <h1
            id="products-title"
            className="max-w-3xl text-5xl leading-[1.06] font-semibold tracking-[-0.055em] text-[#161e2f] sm:text-6xl lg:text-7xl"
          >
            Healthcare technology, built from real clinical workflows.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#455469]">
            A healthcare technology platform combining patient intake,
            AI-driven triaging, remote monitoring, and predictive analytics
            for hospitals, clinics, and public health programs.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#platform"
              className="rounded-full bg-[#161e2f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#23314f]"
            >
              Explore the platform
            </a>
            <a
              href="#capabilities"
              className="text-sm font-semibold text-[#23314f] underline decoration-[#9bb4c6] underline-offset-4 hover:decoration-[#23314f]"
            >
              See what it does
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
          <div className="absolute -top-5 -right-5 h-28 w-28 rounded-full border border-[#9bb4c6]" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#161e2f] p-8 text-white shadow-2xl shadow-[#23314f]/15 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#b8cbd8] uppercase">
                Healthcare AI platform
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#8fb0c6]" />
            </div>
            <p className="mt-14 text-sm font-medium tracking-[0.12em] text-[#b8cbd8] uppercase">
              Introducing
            </p>
            <p className="mt-3 text-4xl leading-tight font-semibold tracking-[-0.06em] sm:text-[2.5rem]">
              Beaver<span className="text-[#8fb0c6]">HealthAI</span>
            </p>
            <p className="mt-5 max-w-xs leading-7 text-[#d0dbe3]">
              A connected suite of healthcare applications shaped around the
              needs of care teams.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-[#c5d4de]">
              <span className="h-px w-10 bg-[#8fb0c6]" />
              Patient-focused healthcare technology
            </div>
            <div className="absolute -right-14 -bottom-16 h-40 w-40 rounded-full border-[24px] border-[#23314f]" />
          </div>
        </div>
      </div>
    </section>
  );
}
