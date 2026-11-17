const steps = [
  {
    number: "01",
    title: "Listen first",
    description:
      "We start by understanding your business, your people, and the problem you need to solve.",
  },
  {
    number: "02",
    title: "Design carefully",
    description:
      "Senior people shape a practical approach around your needs, your systems, and your goals.",
  },
  {
    number: "03",
    title: "Ship working software",
    description:
      "We build and deliver dependable solutions—not just recommendations or slide decks.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="approach"
      className="scroll-mt-8 bg-[#f5f8fa] px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="approach-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            How we work
          </p>
          <h2
            id="approach-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-5xl"
          >
            Senior people stay close to the work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5b6878]">
            We are not a body shop. Every engagement is led by senior people
            who have done the work before. We treat your data, your customers,
            and your operations with the same seriousness we would give a
            regulated enterprise — because at the size you are operating,
            mistakes cost more, not less.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-[#e1e9ee] bg-white p-7 sm:p-8"
            >
              <span className="text-sm font-bold tracking-[0.12em] text-[#6b91ad]">
                {step.number}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-[#161e2f]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[#5b6878]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
