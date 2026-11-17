export default function CaseStudiesHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#111b2b] text-white scroll-mt-8"
      aria-labelledby="case-studies-title"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 35%, rgba(107,145,173,.55), transparent 28%), linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "auto, 48px 48px, 48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-[620px] max-w-7xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#b8cbd8] uppercase">
            <span className="h-px w-8 bg-[#8fb0c6]" />
            Selected work · 01—03
          </p>
          <h1
            id="case-studies-title"
            className="max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            Work that moves
            <br />
            <span className="font-serif font-normal italic text-[#a9c2d3]">
              business forward.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#c5d4de]">
            Many clients prefer not to be named publicly, especially in
            regulated industries. These engagements show the kinds of
            challenges BeaverTek helps solve through software, healthcare
            technology, and data.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#payments"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111b2b] transition-colors hover:bg-[#e8eff4]"
            >
              Explore the work
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-white underline decoration-[#6b91ad] underline-offset-4 hover:decoration-white"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -top-8 right-4 h-40 w-40 rounded-full border border-[#8fb0c6]/30" aria-hidden="true" />
          <div className="absolute top-8 right-12 h-24 w-24 rounded-full border border-[#8fb0c6]/20" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#b8cbd8] uppercase">
                Engagement index
              </p>
              <span className="h-2 w-2 rounded-full bg-[#8fb0c6] shadow-[0_0_16px_#8fb0c6]" />
            </div>
            <div className="mt-2">
              {[
                {
                  number: "01",
                  name: "Payment platforms",
                  type: "Financial services",
                  href: "#payments",
                },
                {
                  number: "02",
                  name: "Healthcare applications",
                  type: "Healthcare",
                  href: "#healthcare",
                },
                {
                  number: "03",
                  name: "Decision intelligence",
                  type: "Data & reporting",
                  href: "#reporting",
                },
              ].map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="group flex items-center gap-4 border-b border-white/10 py-5 last:border-0"
                >
                  <span className="font-mono text-xs text-[#8fb0c6]">
                    {item.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-medium text-white transition-colors group-hover:text-[#b8cbd8] sm:text-lg">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-xs text-[#9aabba]">
                      {item.type}
                    </span>
                  </span>
                  <span className="text-lg text-[#8fb0c6] transition-transform group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-[10px] tracking-[0.16em] text-[#8193a5] uppercase">
              <span>Payments</span>
              <span className="h-px flex-1 mx-3 bg-white/10" />
              <span>Health</span>
              <span className="h-px flex-1 mx-3 bg-white/10" />
              <span>Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
