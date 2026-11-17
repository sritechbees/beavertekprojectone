const links = [
  { href: "#story", label: "Our story" },
  { href: "#approach", label: "How we work" },
  { href: "#team", label: "Our team" },
  { href: "#beliefs", label: "What we believe" },
];

export default function AboutHeader() {
  return (
    <header className="border-b border-[#e7edf2] bg-blue-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#top"
          className="w-fit text-xl font-bold tracking-[-0.06em] text-[#161e2f]"
          aria-label="BeaverTek About page"
        >
          Beaver<span className="text-[#6b91ad]">Tek</span>
        </a>
        <nav
          aria-label="About page navigation"
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
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
