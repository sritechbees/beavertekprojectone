const emailHref =
  "mailto:admin@beavertek.com?subject=Book%20a%2030-minute%20call";

export default function AboutCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-8 bg-[#23314f] px-6 py-20 text-white sm:py-24 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#b8cbd8] uppercase">
            Let&apos;s talk
          </p>
          <h2
            id="contact-title"
            className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            Need senior technology help?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d0dbe3]">
            If you are running a small or mid-size business and you need senior
            technology help, we would like to meet you. No pitch deck, just a
            conversation about what you are trying to build.
          </p>
        </div>
        <a
          href={emailHref}
          className="inline-flex w-fit shrink-0 items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#161e2f] transition-colors hover:bg-[#e8eff4]"
        >
          Email us to book a call
          <span className="ml-2" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}
