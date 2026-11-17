const workflowSteps = [
  {
    number: "01",
    title: "Patient intake",
    description: "A clearer starting point",
  },
  {
    number: "02",
    title: "AI-driven triaging",
    description: "Support for care teams",
  },
  {
    number: "03",
    title: "Preventive care",
    description: "Tools for proactive care",
  },
];

export default function HealthcareAiCaseStudy() {
  return (
    <article
      id="healthcare"
      className="scroll-mt-32 bg-[#161e2f] px-6 py-20 text-white sm:scroll-mt-24 sm:py-28 lg:px-8"
      aria-labelledby="healthcare-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between border-b border-white/15 pb-5">
          <p className="text-xs font-bold tracking-[0.18em] text-[#b8cbd8] uppercase">
            02 / Healthcare
          </p>
          <p className="text-xs text-[#9aabba]">Build software · See your data</p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2
              id="healthcare-title"
              className="max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              Healthcare software, shaped around care.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#c5d4de]">
              Healthcare providers were dealing with front-desk workflows,
              paper intake, and reactive care. They needed software designed
              around clinical teams and the realities of patient care.
            </p>
            <div className="mt-8 border-l border-[#8fb0c6] pl-5">
              <p className="text-xs font-bold tracking-[0.16em] text-[#b8cbd8] uppercase">
                The challenge
              </p>
              <p className="mt-2 text-sm leading-6 text-[#9aabba]">
                Bring patient workflows into a connected suite built for
                clinical teams.
              </p>
            </div>
          </div>

          <div className="relative min-h-[370px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1725] p-6 sm:p-9">
            <div
              className="absolute -top-16 -right-16 h-64 w-64 rounded-full border border-[#8fb0c6]/15"
              aria-hidden="true"
            />
            <div
              className="absolute top-0 -right-4 h-40 w-40 rounded-full border border-[#8fb0c6]/10"
              aria-hidden="true"
            />
            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#b8cbd8] uppercase">
                Connected care workflow
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] tracking-[0.12em] text-[#9aabba] uppercase">
                Illustrative
              </span>
            </div>
            <div className="relative mt-10 grid gap-3">
              {workflowSteps.map((step, index) => (
                <div key={step.number} className="flex items-center gap-4">
                  <div className="flex flex-col items-center self-stretch">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-[#8fb0c6]/40 bg-[#23314f] font-mono text-xs text-[#c5d4de]">
                      {step.number}
                    </span>
                    {index < workflowSteps.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-[#8fb0c6]/30" />
                    )}
                  </div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-sm font-medium text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs text-[#9aabba]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[0.5fr_1.5fr]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#b8cbd8] uppercase">
            What we built
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl leading-7 text-[#c5d4de]">
              A connected suite of healthcare applications for patient intake,
              AI-driven triaging, and preventive care. This work became the
              foundation of BeaverHealthAI.
            </p>
            <a
              href="https://beaverhealth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Explore BeaverHealthAI
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
