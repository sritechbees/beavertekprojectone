export default function WhyWeExist() {
  return (
    <section
      id="story"
      className="scroll-mt-8 bg-white px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="story-title"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#6b91ad] uppercase">
            Why we exist
          </p>
          <h2
            id="story-title"
            className="mt-4 max-w-sm text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#161e2f] sm:text-4xl"
          >
            A better option for growing businesses.
          </h2>
        </div>
        <div className="border-l-2 border-[#b7cad7] pl-6 sm:pl-9">
          <p className="text-xl leading-9 text-[#344256]">
            Most small and mid-size companies are stuck between two bad
            options. Hire a full in-house IT and engineering team, which is
            expensive and slow to build. Or buy off-the-shelf software and
            consultants who do not really know the business.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#5b6878]">
            We started BeaverTek because there is a third option: a senior
            partner who treats your problems like our own, and who can actually
            build what you need.
          </p>
        </div>
      </div>
    </section>
  );
}
