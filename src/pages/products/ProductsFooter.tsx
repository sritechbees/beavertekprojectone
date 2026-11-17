export default function ProductsFooter() {
  return (
    <footer className="bg-[#161e2f] px-6 py-6 text-sm text-[#c5d4de] lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="/about"
          className="w-fit font-semibold tracking-[-0.03em] text-white transition-colors hover:text-[#b8cbd8]"
        >
          BeaverTek
        </a>
        <p>BeaverHealthAI is built and operated by BeaverTek.</p>
      </div>
    </footer>
  );
}
