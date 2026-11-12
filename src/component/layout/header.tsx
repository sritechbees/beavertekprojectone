
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  BarChart3,
  Cloud,
  ShieldCheck,
  HeartPulse,
  Building2,
  CreditCard,
  BriefcaseBusiness,
} from "lucide-react";

const servicePillars = [
  {
    title: "Automate with AI",
    description:
      "Put AI agents and intelligent automation to work across your business.",
    href: "/services/ai-automation",
    icon: BrainCircuit,
    services: [
      "AI Agents & Agentic Workflows",
      "AI Copilots & LLM Integration",
      "Business Process & CRM Automation",
      "AI Readiness Assessment",
    ],
  },
  {
    title: "Build Software",
    description:
      "Build custom digital products and applications from idea to production.",
    href: "/services/build-software",
    icon: Code2,
    services: [
      "Custom Software Development",
      "Web & Mobile App Development",
      "Healthcare Software Engineering",
      "Product Engineering",
      "QA & Testing",
      "Payment & API Integrations",
    ],
  },
  {
    title: "See Your Data",
    description:
      "Turn business data into clear insights and confident decisions.",
    href: "/services/data-analytics",
    icon: BarChart3,
    services: [
      "Data Analytics & BI Dashboards",
      "Data Engineering & Integration",
      "Database Administration",
      "Database Performance Tuning",
      "Predictive Analytics",
    ],
  },
  {
    title: "Modernize",
    description:
      "Modernize legacy systems and move your business forward with cloud technology.",
    href: "/services/modernize",
    icon: Cloud,
    services: [
      "Digital Transformation",
      "Cloud Migration (AWS, Azure, GCP)",
      "Legacy Application Modernization",
      "DevOps & CI/CD",
      "Cloud Cost Optimization (FinOps)",
    ],
  },
  {
    title: "Stay Secure & Supported",
    description:
      "Keep your applications, infrastructure and business protected.",
    href: "/services/stay-secure",
    icon: ShieldCheck,
    services: [
      "Managed IT & Application Support",
      "DevSecOps",
      "Cloud & Infrastructure Security",
      "Identity & Access Management",
      "Backup & Disaster Recovery",
      "Security & HIPAA-Readiness Assessment",
    ],
  },
];

const industries = [
  {
    title: "Healthcare",
    description: "Healthcare software, AI and digital health solutions.",
    href: "/industries/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Financial Services & Payments",
    description: "Secure payment platforms and financial technology.",
    href: "/industries/financial-services",
    icon: CreditCard,
  },
  {
    title: "Professional Services",
    description: "Technology and automation for growing businesses.",
    href: "/industries/professional-services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education",
    description: "Digital platforms and campus solutions.",
    href: "/industries/education",
    icon: Building2,
  },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "BeaverHealthAI", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "services" | "industries" | null
  >(null);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] =
    useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/products") {
      return pathname.startsWith("/products");
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleDropdown = (
    dropdown: "services" | "industries"
  ) => {
    setActiveDropdown((current) =>
      current === dropdown ? null : dropdown
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05070D]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* LOGO */}
          <Link
            href="/"
            aria-label="BeaverTek Home"
            className="group flex shrink-0 items-center"
          >
            <span className="text-[27px] font-extrabold tracking-[-1.5px] text-white sm:text-[30px]">
              BEAVER
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                TEK
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          >
            {mainLinks.map((link) => {
              const hasDropdown =
                link.label === "Services" ||
                link.label === "Industries";

              const dropdownType =
                link.label === "Services"
                  ? "services"
                  : "industries";

              const active = isActive(link.href);

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    hasDropdown &&
                    setActiveDropdown(dropdownType)
                  }
                  onMouseLeave={() =>
                    hasDropdown && setActiveDropdown(null)
                  }
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(dropdownType)}
                      aria-expanded={activeDropdown === dropdownType}
                      className={`flex items-center gap-1.5 py-8 text-[13px] font-semibold transition-colors ${
                        active
                          ? "text-[#29B6F0]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          activeDropdown === dropdownType
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative py-8 text-[13px] font-semibold transition-colors ${
                        active
                          ? "text-[#29B6F0]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* SERVICES MEGA MENU */}
                  {link.label === "Services" &&
                    activeDropdown === "services" && (
                      <div className="absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2 border border-white/10 bg-[#0A0D15] p-7 shadow-2xl shadow-black/50">
                        <div className="mb-6 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[3px] text-[#29B6F0]">
                              What We Do
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-white">
                              Technology built around your business.
                            </h3>
                          </div>

                          <Link
                            href="/services"
                            className="flex items-center gap-2 text-sm font-semibold text-[#29B6F0] hover:text-white"
                          >
                            All Services
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                          {servicePillars.map((pillar) => {
                            const Icon = pillar.icon;

                            return (
                              <div
                                key={pillar.title}
                                className="group"
                              >
                                <Link
                                  href={pillar.href}
                                  className="flex items-center gap-3"
                                >
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/5 text-[#29B6F0] transition-colors group-hover:bg-[#29B6F0]/10">
                                    <Icon size={20} />
                                  </div>

                                  <h4 className="text-[14px] font-bold text-white transition-colors group-hover:text-[#29B6F0]">
                                    {pillar.title}
                                  </h4>
                                </Link>

                                <p className="mb-3 ml-[52px] mt-2 text-[11px] leading-5 text-gray-400">
                                  {pillar.description}
                                </p>

                                <ul className="ml-[52px] space-y-2">
                                  {pillar.services.map((service) => (
                                    <li key={service}>
                                      <Link
                                        href={pillar.href}
                                        className="text-[11px] text-gray-400 transition-colors hover:text-[#29B6F0]"
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  {/* INDUSTRIES MEGA MENU */}
                  {link.label === "Industries" &&
                    activeDropdown === "industries" && (
                      <div className="absolute left-1/2 top-full z-50 w-[580px] -translate-x-1/2 border border-white/10 bg-[#0A0D15] p-7 shadow-2xl shadow-black/50">
                        <div className="mb-6">
                          <p className="text-xs font-bold uppercase tracking-[3px] text-[#29B6F0]">
                            Industries We Serve
                          </p>
                          <h3 className="mt-2 text-xl font-bold text-white">
                            Technology for your industry.
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                          {industries.map((industry) => {
                            const Icon = industry.icon;

                            return (
                              <Link
                                href={industry.href}
                                key={industry.title}
                                className="group flex gap-3"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/5 text-[#29B6F0] group-hover:bg-[#29B6F0]/10">
                                  <Icon size={19} />
                                </div>

                                <div>
                                  <h4 className="text-sm font-semibold text-white group-hover:text-[#29B6F0]">
                                    {industry.title}
                                  </h4>
                                  <p className="mt-1 text-[11px] leading-5 text-gray-400">
                                    {industry.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                </div>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="/contact"
            className="hidden shrink-0 items-center gap-2 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-5 py-3 text-[12px] font-bold text-white transition-all hover:brightness-110 xl:flex"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center border border-white/10 text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[82px] z-50 h-[calc(100dvh-82px)] overflow-y-auto border-t border-white/10 bg-[#05070D] px-6 pb-10 xl:hidden">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto max-w-[600px] py-5"
            >
              <Link
                href="/"
                className={`block border-b border-white/10 py-4 text-[15px] font-semibold ${
                  isActive("/") ? "text-[#29B6F0]" : "text-white"
                }`}
              >
                Home
              </Link>

              {/* MOBILE SERVICES */}
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between py-4 text-[15px] font-semibold text-white"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="space-y-5 pb-5 pl-3">
                    <Link
                      href="/services"
                      className="block text-sm font-bold text-[#29B6F0]"
                    >
                      Explore All Services →
                    </Link>

                    {servicePillars.map((pillar) => {
                      const Icon = pillar.icon;

                      return (
                        <div key={pillar.title}>
                          <Link
                            href={pillar.href}
                            className="flex items-center gap-2 text-sm font-semibold text-white"
                          >
                            <Icon size={17} className="text-[#29B6F0]" />
                            {pillar.title}
                          </Link>

                          <div className="ml-6 mt-3 space-y-3">
                            {pillar.services.map((service) => (
                              <Link
                                key={service}
                                href={pillar.href}
                                className="block text-xs text-gray-400 hover:text-[#29B6F0]"
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* MOBILE INDUSTRIES */}
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileIndustriesOpen(!mobileIndustriesOpen)
                  }
                  aria-expanded={mobileIndustriesOpen}
                  className="flex w-full items-center justify-between py-4 text-[15px] font-semibold text-white"
                >
                  Industries
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileIndustriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileIndustriesOpen && (
                  <div className="space-y-4 pb-5 pl-3">
                    {industries.map((industry) => {
                      const Icon = industry.icon;

                      return (
                        <Link
                          href={industry.href}
                          key={industry.title}
                          className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#29B6F0]"
                        >
                          <Icon size={17} className="text-[#29B6F0]" />
                          {industry.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* REMAINING LINKS */}
              {mainLinks
                .filter(
                  (link) =>
                    link.label !== "Home" &&
                    link.label !== "Services" &&
                    link.label !== "Industries"
                )
                .map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className={`block border-b border-white/10 py-4 text-[15px] font-semibold transition-colors hover:text-[#29B6F0] ${
                      isActive(link.href)
                        ? "text-[#29B6F0]"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

              {/* MOBILE CTA */}
              <Link
                href="/contact"
                className="mt-7 flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-6 py-4 text-sm font-bold text-white"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
