const teams = [
  {
    label: "United States",
    title: "Strategy, architecture, and partnership",
  },
  {
    label: "India",
    title: "Deep engineering execution",
  },
];

export default function OurTeam() {
  return (
    <section
      id="team"
      className="scroll-mt-8 bg-white px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="team-title"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            The team
          </p>
          <h2
            id="team-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-5xl"
          >
            Experience that reaches beyond the org chart.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5b6878]">
            Our leadership brings more than 80 years of combined experience
            working with Fortune 500 companies across financial services,
            healthcare, retail, and technology. We have built payment platforms
            processing millions of transactions a month, healthcare AI used in
            real hospitals, and mobile products taken from concept to launch.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#5b6878]">
            We are global by design. Our US team handles strategy, architecture,
            and client partnership. Our India team handles deep engineering
            execution. Together, we deliver faster and at a better cost than a
            single-location firm.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#161e2f] p-7 text-white sm:p-10">
          <div className="border-b border-white/15 pb-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[#b8cbd8] uppercase">
              More than
            </p>
            <p className="mt-2 text-6xl font-semibold tracking-[-0.06em] sm:text-7xl">
              80<span className="text-[#8fb0c6]">+</span>
            </p>
            <p className="mt-2 text-sm text-[#c5d4de]">
              years of combined leadership experience
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {teams.map((team) => (
              <div
                key={team.label}
                className="rounded-xl border border-white/15 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-[#b8cbd8] uppercase">
                  {team.label}
                </p>
                <p className="mt-3 leading-6 text-white">{team.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
