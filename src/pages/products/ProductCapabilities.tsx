const products = [
  {
    number: "01",
    category: "Flagship platform",
    title: "BeaverHealthAI",
    description:
      "A connected healthcare platform combining patient intake, AI triaging, remote monitoring, and predictive analytics.",
    audience: "Hospitals, clinics, and public health programs",
    icon: "M3 4h18v13H3z M8 21h8M12 17v4 M5 11h3l2-3 3 6 2-3h4",
    color: "bg-[#eaf1f8] text-[#4c6f99]",
    badge: "Platform",
  },
  {
    number: "02",
    category: "Patient intake module",
    title: "IntakeIQ",
    description:
      "Patient intake tools designed to organize incoming information and help reduce front-desk load.",
    audience: "Patient-facing teams at hospitals and clinics",
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    color: "bg-[#eaf2f6] text-[#456981]",
    badge: "Module",
  },
  {
    number: "03",
    category: "AI triage",
    title: "Triora",
    description:
      "AI-driven patient triaging to bring patient needs into a clearer clinical workflow.",
    audience: "Clinical teams reviewing incoming patient needs",
    icon: "M2 12h4l3-9 6 18 3-9h4",
    color: "bg-[#e9f2ef] text-[#47796a]",
    badge: "Product",
  },
  {
    number: "04",
    category: "Remote patient monitoring",
    title: "Connected monitoring",
    description:
      "Monitoring tools that extend care beyond hospital walls and support ongoing patient follow-up.",
    audience: "Care teams supporting patients between visits",
    icon: "M3 4h18v13H3z M8 21h8M12 17v4 M5 11h3l2-3 3 6 2-3h4",
    color: "bg-[#eef1f7] text-[#5b6d91]",
    badge: "Capability",
  },
  {
    number: "05",
    category: "Health intelligence",
    title: "Predictive analytics",
    description:
      "Analytics that surface patterns in healthcare data and support earlier intervention.",
    audience: "Healthcare organizations planning and delivering care",
    icon: "M4 19V5M4 19h17M8 15l4-4 3 2 5-6 M17 7h3v3",
    color: "bg-[#f7efe5] text-[#9a7043]",
    badge: "Capability",
  },
  {
    number: "06",
    category: "Proactive care",
    title: "Preventive care",
    description:
      "Preventive-care applications that help make proactive care part of the patient journey.",
    audience: "Care teams and public health programs",
    icon: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z M9 12l2 2 4-4",
    color: "bg-[#eaf3ed] text-[#527c60]",
    badge: "Application",
  },
  {
    number: "07",
    category: "Connected systems",
    title: "EMR and EHR integration",
    description:
      "Designed to integrate with existing electronic medical and electronic health record systems.",
    audience: "Organizations with existing EMR or EHR systems",
    icon: "M10 13a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 2.93l-1.72 1.71 M14 11a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 21.07l1.71-1.71",
    color: "bg-[#e9f1f3] text-[#4e7780]",
    badge: "Integration",
  },
  {
    number: "08",
    category: "Healthcare workspace",
    title: "Beaver Care360 AI",
    description:
      "The healthcare workspace for connected applications, including the IntakeIQ patient intake module.",
    audience: "Healthcare teams bringing patient workflows together",
    icon: "M4 5h16v14H4z M8 9h8M8 13h5M8 17h3",
    color: "bg-[#f0edf8] text-[#6d5f95]",
    badge: "Workspace",
  },
  {
    number: "09",
    category: "Cardiology and vascular imaging",
    title: "Cloud Ultrasound PACS",
    description:
      "A cloud ultrasound picture archiving and communication system for cardiology and vascular imaging.",
    audience: "Cardiology and vascular imaging teams",
    icon: "M3 4h18v13H3z M8 21h8M12 17v4 M5 11h3l2-3 3 6 2-3h4",
    color: "bg-[#f3edf0] text-[#8a6272]",
    badge: "Coming soon",
  },
];

export default function ProductCapabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-8 border-y border-[#e7edf2] bg-[#f5f8fa] px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="capabilities-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
              BeaverHealthAI · Product portfolio
            </p>
            <h2
              id="capabilities-title"
              className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.05em] text-[#161e2f] sm:text-5xl"
            >
              Nine products and connected capabilities.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5b6878]">
              Explore the platform, its healthcare applications and modules,
              and the next product in the pipeline.
            </p>
          </div>
          <div className="flex w-fit items-center gap-3 rounded-full border border-[#dce6ec] bg-white px-4 py-2.5 text-sm font-medium text-[#344256] shadow-sm shadow-[#23314f]/[0.03]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e8eff4] font-mono text-xs font-semibold text-[#557993]">
              09
            </span>
            Portfolio entries
          </div>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.number}
              className="group flex flex-col rounded-[1.5rem] border border-[#e1e9ee] bg-white p-6 shadow-sm shadow-[#23314f]/[0.025] transition duration-300 hover:-translate-y-1 hover:border-[#c5d6e0] hover:shadow-xl hover:shadow-[#23314f]/[0.07] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${product.color}`}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={product.icon} />
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-[0.14em] text-[#9aabba]">
                  {product.number}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                <p className="text-[10px] font-bold tracking-[0.16em] text-[#7893a5] uppercase">
                  {product.category}
                </p>
                <span className="rounded-full bg-[#f2f6f8] px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-[#66798b] uppercase">
                  {product.badge}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#161e2f]">
                {product.title}
              </h3>
              <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-[#5b6878]">
                {product.description}
              </p>

              <div className="mt-5 border-t border-[#edf1f4] pt-4">
                <p className="text-[10px] font-bold tracking-[0.14em] text-[#8a9baa] uppercase">
                  Who it&apos;s for
                </p>
                <p className="mt-1.5 text-sm leading-6 text-[#344256]">
                  {product.audience}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#314a60] transition-colors hover:text-[#6b91ad]"
              >
                Request a demo
                <span aria-hidden="true">&rarr;</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
