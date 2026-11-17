const links = [
  { href: "#payments", label: "Payments" },
  { href: "#healthcare", label: "Healthcare AI" },
  { href: "#reporting", label: "Data reporting" },
];

export default function CaseStudiesHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111b2b]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#top"
          className="w-fit text-xl font-bold tracking-[-0.06em] text-white"
          aria-label="BeaverTek case studies"
        >
          Beaver<span className="text-[#8fb0c6]">Tek</span>
        </a>
        <nav
          aria-label="Case studies navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#c5d4de]"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Discuss a project
          </a>
        </nav>
      </div>
    </header>
  );
}
