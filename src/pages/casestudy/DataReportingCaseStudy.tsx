const barHeights = [34, 57, 46, 78, 64, 92, 72, 100];
const dataSources = ["Operations", "Business data", "Reporting"];

export default function DataReportingCaseStudy() {
  return (
    <article
      id="reporting"
      className="scroll-mt-32 bg-[#e8eff4] px-6 py-20 sm:scroll-mt-24 sm:py-28 lg:px-8"
      aria-labelledby="reporting-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between border-b border-[#cbd9e2] pb-5">
          <p className="text-xs font-bold tracking-[0.18em] text-[#557993] uppercase">
            03 / Enterprise reporting
          </p>
          <p className="text-xs text-[#718092]">See your data</p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2
              id="reporting-title"
              className="max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.05em] text-[#161e2f] sm:text-5xl lg:text-6xl"
            >
              Data that drives decisions.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#455469]">
              A client with significant operational data could not get the
              clear, accurate reports leadership needed to make decisions.
              Reporting was slow, inconsistent, and trusted by no one.
            </p>
            <div className="mt-8 border-l border-[#6b91ad] pl-5">
              <p className="text-xs font-bold tracking-[0.16em] text-[#557993] uppercase">
                The challenge
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5b6878]">
                Turn disconnected operational data into reporting people can
                use with confidence.
              </p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white bg-[#f9fbfc] p-5 shadow-xl shadow-[#23314f]/10 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#e1e9ee] pb-4">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-[#557993] uppercase">
                  Reporting environment
                </p>
                <p className="mt-1 text-sm font-semibold text-[#161e2f]">
                  Tableau · Executive &amp; operational
                </p>
              </div>
              <span className="rounded-full bg-[#e8eff4] px-3 py-1 text-[10px] tracking-[0.12em] text-[#557993] uppercase">
                Illustrative
              </span>
            </div>
            <div className="mt-6 grid grid-cols-[0.8fr_1.2fr] gap-3">
              <div className="rounded-xl bg-[#eef3f6] p-4">
                <p className="text-[10px] font-semibold tracking-[0.12em] text-[#718092] uppercase">
                  Data sources
                </p>
                <div className="mt-5 space-y-3">
                  {dataSources.map((source) => (
                    <div key={source} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-sm bg-[#6b91ad]" />
                      <span className="text-xs text-[#455469]">{source}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#e1e9ee]">
                <p className="text-[10px] font-semibold tracking-[0.12em] text-[#718092] uppercase">
                  Decision view
                </p>
                <div className="mt-5 flex h-24 items-end gap-2 border-b border-l border-[#d8e2e9] px-2">
                  {barHeights.map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t-sm bg-[#6b91ad]"
                      style={{
                        height: `${height}%`,
                        opacity: 0.48 + index * 0.06,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[9px] text-[#8a98a6]">
                  <span>Operational</span>
                  <span>Executive</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#161e2f] px-4 py-3 text-xs text-white">
              <span className="h-2 w-2 rounded-full bg-[#8fb0c6]" />
              Clean data · Clear reporting · Better-informed decisions
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-[#cbd9e2] pt-8 md:grid-cols-[0.5fr_1.5fr]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#557993] uppercase">
            What we built
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="leading-7 text-[#455469]">
              A Tableau-based reporting environment with cleaned data sources,
              executive dashboards, and operational reports—built and
              stress-tested for daily use.
            </p>
            <p className="leading-7 text-[#455469]">
              When the people running a business trust the numbers, decisions
              can be faster and better informed.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
