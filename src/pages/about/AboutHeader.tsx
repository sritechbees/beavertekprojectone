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
          
        </nav>
      </div>
    </header>
  );
}
