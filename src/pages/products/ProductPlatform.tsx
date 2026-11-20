
export default function ProductPlatform() {
  const platformDetails = [
    {
      label: "Who it serves",
      content: (
        <>
          Hospitals, clinics, and public health programs.
        </>
      ),
    },
    {
      label: "What it brings together",
      content: (
        <>
          Patient intake, AI-driven triage, remote monitoring, predictive
          analytics, and preventive-care tools.
        </>
      ),
    },
    {
      label: "Designed to connect",
      content: (
        <>
          Existing electronic medical record (EMR) and electronic health
          record (EHR) systems.
        </>
      ),
    },
  ];

  return (
    <section
      id="platform"
      className="scroll-mt-8 overflow-hidden bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="platform-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#3E7BD6] uppercase sm:text-xs">
              <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />
              Built by BeaverTek
            </p>

            <h2
              id="platform-title"
              className="mt-3 text-[29px] leading-[1.2] font-bold tracking-[-0.035em] text-[#161E2F] sm:text-3xl md:text-[38px] lg:text-[42px]"
            >
              One platform,
              <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text pb-1 text-transparent">
                built for the realities of care.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-[14px] leading-7 text-[#64748b] sm:text-[15px] sm:leading-7">
              BeaverHealthAI brings connected healthcare applications together
              for organizations working to make patient care more accessible and
              coordinated.
            </p>

            <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />
          </div>

          {/* RIGHT CONTENT */}
          <dl className="divide-y divide-[#e8edf3] border-y border-[#e8edf3]">
            {platformDetails.map((item) => (
              <div
                key={item.label}
                className="group grid gap-2 py-5 transition-all duration-300 sm:grid-cols-[0.55fr_1.45fr] sm:gap-7 sm:py-6"
              >
                <dt className="text-[11px] font-semibold tracking-[0.15em] text-[#3E7BD6] uppercase transition-colors duration-300 group-hover:text-[#29B6F0] sm:pt-1 sm:text-xs">
                  {item.label}
                </dt>

                <dd className="text-[15px] leading-7 text-[#344256] transition-colors duration-300 group-hover:text-[#17263b] sm:text-base sm:leading-7">
                  {item.content}

                  <div className="mt-3 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-500 group-hover:w-14" />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
