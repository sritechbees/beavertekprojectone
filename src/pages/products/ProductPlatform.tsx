export default function ProductPlatform() {
  return (
    <section
      id="platform"
      className="scroll-mt-8 bg-white px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="platform-title"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            BeaverHealthAI
          </p>
          <h2
            id="platform-title"
            className="mt-4 max-w-sm text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-4xl"
          >
            Connected healthcare applications.
          </h2>
        </div>
        <div className="border-l-2 border-[#b7cad7] pl-6 sm:pl-9">
          <p className="text-xl leading-9 text-[#344256]">
            BeaverHealthAI is a healthcare technology platform combining
            patient intake, AI triaging, remote monitoring, and predictive
            analytics for hospitals, clinics, and public health programs.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#5b6878]">
            Its tools support patient intake and triage, extend care beyond
            hospital walls, and provide predictive analytics for earlier
            intervention. The platform is designed to integrate with existing
            EMR and EHR systems.
          </p>
        </div>
      </div>
    </section>
  );
}
