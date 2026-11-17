const emailHref =
  "mailto:info@beavertek.com?subject=Discuss%20a%20project";

export default function CaseStudiesCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-[#111b2b] px-6 py-20 text-white sm:scroll-mt-24 sm:py-24 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#b8cbd8] uppercase">
            Start a conversation
          </p>
          <h2
            id="contact-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.05em] sm:text-5xl"
          >
            Have something important to build?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d0dbe3]">
            Tell us what you are trying to build or improve. We would be glad
            to talk through it.
          </p>
        </div>
        <a
          href={emailHref}
          className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#e8eff4] px-6 py-3 text-sm font-semibold text-[#161e2f] transition-colors hover:bg-white"
        >
          Discuss a project
          <span className="ml-2" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}
