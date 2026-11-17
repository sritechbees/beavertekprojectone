export default function PaymentPlatformCaseStudy() {
  return (
    <article
      id="payments"
      className="scroll-mt-32 bg-[#f5f8fa] px-6 py-20 sm:scroll-mt-24 sm:py-28 lg:px-8"
      aria-labelledby="payments-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between border-b border-[#d8e2e9] pb-5">
          <p className="text-xs font-bold tracking-[0.18em] text-[#557993] uppercase">
            01 / Financial services
          </p>
          <p className="text-xs text-[#718092]">Build software · Modernize</p>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2
              id="payments-title"
              className="max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.05em] text-[#161e2f] sm:text-5xl lg:text-6xl"
            >
              A payment platform built to scale.
            </h2>
            <div className="mt-9 max-w-xl">
              <p className="text-xs font-bold tracking-[0.18em] text-[#6b91ad] uppercase">
                The challenge
              </p>
              <p className="mt-4 text-lg leading-8 text-[#455469]">
                A growing financial services client needed a payment gateway
                integration platform that could serve multiple downstream
                merchants reliably and at scale. The existing process was
                manual, fragile, and could not keep up with growth.
              </p>
            </div>
          </div>
          <div
            role="img"
            aria-label="Illustrative flow from a payment request through a gateway integration platform to downstream merchants"
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#111b2b] p-6 text-white shadow-xl shadow-[#23314f]/10 sm:p-9"
          >
            <div className="absolute -top-20 -right-14 h-64 w-64 rounded-full border border-[#8fb0c6]/15" aria-hidden="true" />
            <div className="absolute -top-4 -right-4 h-40 w-40 rounded-full border border-[#8fb0c6]/15" aria-hidden="true" />
            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#b8cbd8] uppercase">
                Payment gateway
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] tracking-[0.12em] text-[#b8cbd8] uppercase">
                Illustrative flow
              </span>
            </div>
            <div className="relative mt-12 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 sm:p-5">
                <span className="text-[10px] tracking-[0.16em] text-[#8fb0c6] uppercase">
                  In
                </span>
                <p className="mt-3 text-sm font-medium sm:text-base">Payment request</p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-[#8fb0c6]" />
                </div>
              </div>
              <span className="text-xl text-[#8fb0c6]" aria-hidden="true">
                &rarr;
              </span>
              <div className="rounded-2xl border border-[#8fb0c6]/40 bg-[#23314f] p-4 shadow-[0_0_42px_rgba(107,145,173,.15)] sm:p-5">
                <span className="text-[10px] tracking-[0.16em] text-[#b8cbd8] uppercase">
                  Platform
                </span>
                <p className="mt-3 text-sm font-medium sm:text-base">
                  Gateway integration
                </p>
                <div className="mt-5 flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8fb0c6]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8fb0c6]/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8fb0c6]/30" />
                </div>
              </div>
            </div>
            <div className="relative mt-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-[#8fb0c6]/0 via-[#8fb0c6]/60 to-[#8fb0c6]/0" />
              <span className="text-[10px] tracking-[0.16em] text-[#9aabba] uppercase">
                Downstream merchants
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#8fb0c6]/0 via-[#8fb0c6]/60 to-[#8fb0c6]/0" />
            </div>
            <div className="relative mt-4 flex justify-center gap-2 sm:gap-3">
              {["merchant-a", "merchant-b", "merchant-c"].map((merchant) => (
                <span
                  key={merchant}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-[10px] text-[#c5d4de] sm:px-4 sm:text-xs"
                >
                  Merchant
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-[#d8e2e9] pt-8 md:grid-cols-[0.5fr_1.5fr]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#6b91ad] uppercase">
            What changed
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="leading-7 text-[#455469]">
              A purpose-built payment gateway integration platform, designed
              and engineered by BeaverTek and supported end-to-end.
            </p>
            <p className="leading-7 text-[#455469]">
              When the platform you build handles money, “mostly working” is
              not a real option. The platform continues to be supported,
              maintained, and extended.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
