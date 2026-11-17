const beliefs = [
  "Technology should solve a business problem, not create new ones.",
  "Senior people doing senior work — no junior hand-offs.",
  "Working software beats slide decks every time.",
  "Long relationships beat one-time projects. Most of our clients have been with us for years.",
];

export default function WhatWeBelieve() {
  return (
    <section
      id="beliefs"
      className="scroll-mt-8 bg-white px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="beliefs-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            What we believe
          </p>
          <h2
            id="beliefs-title"
            className="mt-4 max-w-sm text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-5xl"
          >
            Good technology starts with good principles.
          </h2>
        </div>
        <ul className="divide-y divide-[#e7edf2] border-y border-[#e7edf2]">
          {beliefs.map((belief, index) => (
            <li
              key={belief}
              className="flex gap-5 py-5 text-lg leading-7 text-[#344256] sm:py-6"
            >
              <span
                className="pt-0.5 text-xs font-bold tracking-[0.12em] text-[#6b91ad]"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <span>{belief}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
