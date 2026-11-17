const capabilities = [
  {
    number: "01",
    title: "Patient intake",
    description:
      "Digital intake applications designed to help care teams move beyond paper-based front-desk workflows.",
  },
  {
    number: "02",
    title: "AI-driven triaging",
    description:
      "Healthcare software that supports patient triaging as part of a connected clinical application suite.",
  },
  {
    number: "03",
    title: "Preventive care",
    description:
      "Tools developed to support a more proactive approach to care and patient needs.",
  },
];

export default function ProductCapabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-8 bg-[#f5f8fa] px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="capabilities-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            What it does
          </p>
          <h2
            id="capabilities-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-5xl"
          >
            Thoughtful tools for the care journey.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5b6878]">
            BeaverHealthAI brings several parts of the patient experience into
            one healthcare technology platform.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map((capability) => (
            <li
              key={capability.number}
              className="rounded-2xl border border-[#e1e9ee] bg-white p-7 sm:p-8"
            >
              <span className="text-sm font-bold tracking-[0.12em] text-[#6b91ad]">
                {capability.number}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-[#161e2f]">
                {capability.title}
              </h3>
              <p className="mt-3 leading-7 text-[#5b6878]">
                {capability.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
