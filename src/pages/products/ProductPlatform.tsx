export default function ProductPlatform() {
  return (
    <section
      id="platform"
      className="scroll-mt-8 bg-white px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="platform-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="max-w-md">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            Built by BeaverTek
          </p>
          <h2
            id="platform-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.05em] text-[#161e2f] sm:text-4xl"
          >
            One platform, built for the realities of care.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#5b6878]">
            BeaverHealthAI brings connected healthcare applications together
            for organizations working to make patient care more accessible and
            coordinated.
          </p>
        </div>
        <dl className="divide-y divide-[#e7edf2] border-y border-[#e7edf2]">
          <div className="grid gap-2 py-6 sm:grid-cols-[0.55fr_1.45fr] sm:gap-8">
            <dt className="text-xs font-bold tracking-[0.16em] text-[#7893a5] uppercase">
              Who it serves
            </dt>
            <dd className="text-lg leading-8 text-[#344256]">
              Hospitals, clinics, and public health programs.
            </dd>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[0.55fr_1.45fr] sm:gap-8">
            <dt className="text-xs font-bold tracking-[0.16em] text-[#7893a5] uppercase">
              What it brings together
            </dt>
            <dd className="text-lg leading-8 text-[#344256]">
              Patient intake, AI-driven triage, remote monitoring, predictive
              analytics, and preventive-care tools.
            </dd>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[0.55fr_1.45fr] sm:gap-8">
            <dt className="text-xs font-bold tracking-[0.16em] text-[#7893a5] uppercase">
              Designed to connect
            </dt>
            <dd className="text-lg leading-8 text-[#344256]">
              Existing electronic medical record (EMR) and electronic health
              record (EHR) systems.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
