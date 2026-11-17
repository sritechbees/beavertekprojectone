export default function CaseStudiesFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111b2b] px-6 py-6 text-sm text-[#9aabba] lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="/about"
          className="w-fit font-semibold tracking-[-0.03em] text-white transition-colors hover:text-[#b8cbd8]"
        >
          BeaverTek
        </a>
        <p>Selected work · BeaverTek</p>
      </div>
    </footer>
  );
}
