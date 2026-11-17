const statements = [
  {
    label: "Our mission",
    text: "Give growing businesses the senior engineering, data and AI capabilities that used to be available only to the largest enterprises.",
  },
  {
    label: "Our vision",
    text: "To be the technology partner mid-size companies trust to build, run and continuously improve the systems their business depends on.",
  },
];

export default function MissionVision() {
  return (
    <section
      className="bg-[#e8eff4] px-6 py-20 sm:py-24 lg:px-8"
      aria-label="Our mission and vision"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
        {statements.map((statement) => (
          <div key={statement.label}>
            <p className="text-xs font-bold tracking-[0.2em] text-[#557993] uppercase">
              {statement.label}
            </p>
            <p className="mt-5 text-2xl leading-9 font-medium tracking-[-0.025em] text-[#23314f] sm:text-3xl sm:leading-10">
              {statement.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
