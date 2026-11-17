const emailHref =
  "mailto:info@beavertek.com?subject=BeaverHealthAI%20product%20demo";

export default function ProductsCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-8 bg-[#23314f] px-6 py-20 text-white sm:py-24 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#b8cbd8] uppercase">
            Take a closer look
          </p>
          <h2
            id="contact-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            Explore BeaverHealthAI.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d0dbe3]">
            Visit the BeaverHealthAI site for more about the healthcare
            platform, or contact BeaverTek to ask about a product demo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://beaverhealth.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#161e2f] transition-colors hover:bg-[#e8eff4]"
          >
            Visit BeaverHealthAI
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            href={emailHref}
            className="inline-flex w-fit items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}
