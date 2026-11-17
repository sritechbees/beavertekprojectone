const locations = [
  {
    label: "Headquarters",
    place: "Irvine, California",
    detail: "Orange County, United States",
  },
  {
    label: "Engineering hub",
    place: "Chennai, India",
    detail: "Engineering and delivery",
  },
];

export default function WhereWeAre() {
  return (
    <section
      id="locations"
      className="scroll-mt-8 bg-[#f5f8fa] px-6 py-20 sm:py-24 lg:px-8"
      aria-labelledby="locations-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
              Where we are
            </p>
            <h2
              id="locations-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-4xl"
            >
              One team, across time zones.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-[#5b6878]">
            A close partnership on both sides of the world, serving clients
            across North America and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location.label}
              className="rounded-2xl border border-[#e1e9ee] bg-white p-7 sm:p-8"
            >
              <p className="text-xs font-bold tracking-[0.16em] text-[#6b91ad] uppercase">
                {location.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#161e2f]">
                {location.place}
              </h3>
              <p className="mt-2 text-[#5b6878]">{location.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
