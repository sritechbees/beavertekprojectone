const links = [
  { href: "#platform", label: "The platform" },
  { href: "#capabilities", label: "Capabilities" },
];

export default function ProductsHeader() {
  return (
    <header className="border-b border-[#e7edf2] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#top"
          className="w-fit text-xl font-bold tracking-[-0.06em] text-[#161e2f]"
          aria-label="BeaverHealthAI products"
        >
          Beaver<span className="text-[#6b91ad]">HealthAI</span>
        </a>
        <nav
          aria-label="Product page navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#526174]"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#161e2f]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#161e2f] px-4 py-2 font-medium text-white transition-colors hover:bg-[#23314f]"
          >
            Request a demo
          </a>
        </nav>
      </div>
    </header>
  );
}
