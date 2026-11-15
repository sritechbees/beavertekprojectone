
"use client";

import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Zap,
  Cloud,
  ShieldCheck,
  Smartphone,
  Code2,
  BarChart3,
} from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/#top", section: "top" },
  { label: "About Us", href: "/about/abouthero", section: null },
  { label: "Services", href: "/services/servicesherosection", section: null },
  { label: "Products", href: "/#products", section: "products" },
  { label: "Industries", href: "/#industries", section: "industries" },
  { label: "Case Studies", href: "/#work", section: "work" },
  { label: "Contact Us", href: "/contact/contacthero", section: null },
] as const;

type NavigationLink = (typeof navigationLinks)[number];

const services = [
  {
    title: "End-to-End Digital Transformation",
    href: "/services/digitaltransformation/herosection",
    desc: "Transform business operations through digital innovation.",
    icon: Zap,
  },
  {
    title: "Cloud Cost Optimization (FinOps)",
    href: "/services/finops/herosection",
    desc: "Reduce cloud expenses while maximizing performance.",
    icon: Cloud,
  },
  {
    title: "DevOps & DevSecOps",
    href: "/services/devops/herosection",
    desc: "Accelerate delivery with secure automated workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile App Development",
    href: "/services/mobileappdevelopment/herosection",
    desc: "Build scalable iOS and Android applications.",
    icon: Smartphone,
  },
  {
    title: "Custom Software Development & Maintenance",
    href: "/services/customsoftware/herosection",
    desc: "Develop and maintain software tailored to your business.",
    icon: Code2,
  },
  {
    title: "Data Analytics and Reporting",
    href: "/services/dataanalytics/herosection",
    desc: "Turn data into actionable business intelligence.",
    icon: BarChart3,
  },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const [activeHref, setActiveHref] = useState("/#top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isRouteActive = useCallback(
    (link: NavigationLink) => {
      if (link.section) return false;

      if (link.label === "Services") {
        return pathname.startsWith("/services");
      }

      return (
        pathname === link.href ||
        pathname.startsWith(`${link.href}/`)
      );
    },
    [pathname]
  );

  const isActive = (link: NavigationLink) => {
    if (link.section) {
      return pathname === "/" && activeHref === link.href;
    }

    return isRouteActive(link);
  };

  // Smooth scroll to home page sections
  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const headerHeight =
      document
        .querySelector(".site-header")
        ?.getBoundingClientRect().height ?? 0;

    const targetPosition =
      window.scrollY +
      target.getBoundingClientRect().top -
      headerHeight -
      12;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  // Handle navigation
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    link: NavigationLink
  ) => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);

    if (
      !link.section ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (pathname !== "/") return;

    const target = document.getElementById(link.section);
    if (!target) return;

    event.preventDefault();

    window.history.pushState(null, "", link.href);
    setActiveHref(link.href);
    scrollToSection(link.section);
  };

  // Header scroll and active navigation tracking
  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 24);
    };

    const updateActiveLink = () => {
      if (pathname !== "/") {
        const currentPage = navigationLinks.find((link) => {
          if (link.section) return false;

          if (link.label === "Services") {
            return pathname.startsWith("/services");
          }

          return (
            pathname === link.href ||
            pathname.startsWith(`${link.href}/`)
          );
        });

        if (currentPage) {
          setActiveHref(currentPage.href);
        }

        return;
      }

      const headerHeight =
        document
          .querySelector(".site-header")
          ?.getBoundingClientRect().height ?? 0;

      let currentSection = "/#top";
      let closestTop = Number.NEGATIVE_INFINITY;

      for (const link of navigationLinks) {
        if (!link.section) continue;

        const section = document.getElementById(link.section);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top;

        if (
          sectionTop <= headerHeight + 40 &&
          sectionTop > closestTop
        ) {
          closestTop = sectionTop;
          currentSection = link.href;
        }
      }

      setActiveHref(currentSection);
    };

    const handleScroll = () => {
      updateHeader();
      updateActiveLink();
    };

    updateHeader();
    updateActiveLink();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", updateActiveLink);
    window.addEventListener("popstate", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", updateActiveLink);
      window.removeEventListener("popstate", updateActiveLink);
    };
  }, [pathname]);

  // Scroll to linked home section after arriving from another page
  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    const sectionId = hash.slice(1);

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname, scrollToSection]);

  // Close mobile menu with Escape and lock background scrolling
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black text-white transition-all duration-300 ${
        scrolled
          ? "h-[80px] shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "h-[82px] shadow-none"
      }`}
    >
      {/* TOP ACCENT */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#29B6F0] to-transparent" />

      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* LOGO */}
        <Link
          href="/"
          className="relative z-50 ml-0.5 flex h-full shrink-0 items-center sm:ml-1"
          aria-label="BeaverTek Home"
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileServicesOpen(false);
          }}
        >
          <Image
            src="/home/logoheader1.png"
            alt="BeaverTek"
            width={175}
            height={55}
            priority
            className="h-auto w-[116px] object-contain transition-transform duration-300 sm:w-[132px] md:w-[145px] lg:w-[155px] xl:w-[160px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden min-w-0 items-center justify-center gap-0.5 xl:flex 2xl:gap-1"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="group relative"
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link) ? "page" : undefined}
                    className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2.5 text-[13px] font-medium transition-all duration-300 2xl:px-3 2xl:text-sm ${
                      isActive(link)
                        ? "bg-white/[0.07] text-[#29B6F0]"
                        : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    Services

                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    />

                    <span
                      className={`absolute bottom-[3px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-all duration-300 ${
                        isActive(link)
                          ? "w-5"
                          : "w-0 group-hover:w-5"
                      }`}
                    />
                  </Link>

                  {/* DESKTOP DROPDOWN */}
                  <div className="invisible absolute left-1/2 top-full z-[70] w-[680px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">

                      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                            What we do
                          </p>

                          <h3 className="mt-1 text-base font-semibold text-white">
                            Explore Our Services
                          </h3>
                        </div>

                        <Link
                          href="/services/servicesherosection"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-[#29B6F0]"
                        >
                          View all services
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => {
                          const Icon = service.icon;

                          const activeService =
                            pathname === service.href ||
                            pathname.startsWith(
                              service.href.replace("/herosection", "")
                            );

                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`group/item flex gap-3 rounded-xl border p-3.5 transition-all duration-300 ${
                                activeService
                                  ? "border-[#29B6F0]/40 bg-[#29B6F0]/[0.08]"
                                  : "border-transparent bg-white/[0.025] hover:border-white/10 hover:bg-white/[0.07]"
                              }`}
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#29B6F0]/20 bg-[#29B6F0]/10 text-[#29B6F0] transition-all duration-300 group-hover/item:border-[#29B6F0]/50 group-hover/item:bg-[#29B6F0]/15">
                                <Icon size={19} />
                              </span>

                              <span className="min-w-0">
                                <span className="block text-[12px] font-semibold leading-5 text-white transition-colors group-hover/item:text-[#29B6F0]">
                                  {service.title}
                                </span>

                                <span className="mt-1 block text-[10px] leading-[1.6] text-white/50">
                                  {service.desc}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                        <p className="text-[10px] text-white/40">
                          Software · Data · AI · Security
                        </p>

                        <span className="h-[2px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link)}
                aria-current={isActive(link) ? "page" : undefined}
                className={`group relative whitespace-nowrap rounded-full px-2.5 py-2.5 text-[13px] font-medium transition-all duration-300 2xl:px-3 2xl:text-sm ${
                  isActive(link)
                    ? "bg-white/[0.07] text-[#29B6F0]"
                    : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-[3px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-all duration-300 ${
                    isActive(link)
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden shrink-0 xl:block">
          <Link
            href="/contact/herosection"
            className="group relative isolate inline-flex h-[42px] items-center justify-center gap-2 overflow-hidden rounded-full border border-[#29B6F0]/40 bg-[#080B12] px-4 text-[13px] font-semibold text-white shadow-[0_4px_18px_rgba(41,182,240,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#29B6F0]/80 hover:shadow-[0_8px_25px_rgba(41,182,240,0.22)] 2xl:h-[44px] 2xl:px-5 2xl:text-sm"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <span className="absolute inset-0 -z-10 origin-right scale-x-0 rounded-full bg-gradient-to-l from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100" />

            <span className="relative z-10">
              Let&apos;s Talk
            </span>

            <ArrowUpRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black text-white transition-colors duration-300 hover:border-[#29B6F0] hover:text-[#29B6F0] sm:h-10 sm:w-10 xl:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Menu size={22} />
          </span>

          <span
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }`}
          >
            <X size={22} />
          </span>
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 z-40 bg-black text-white transition-all duration-300 ease-in-out xl:hidden ${
          scrolled ? "top-[60px]" : "top-[66px]"
        } ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          className="flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-black px-5 pb-6 pt-5 sm:px-8 sm:pt-6 md:mx-auto md:max-w-[680px] md:px-10"
          aria-label="Mobile navigation"
        >
          {/* MENU HEADER */}
          <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                Explore BeaverTek
              </p>

              <p className="mt-1 text-[11px] text-white/50 sm:text-xs">
                Software · Data · AI · Security
              </p>
            </div>

            <span className="text-[10px] font-medium tracking-[0.2em] text-white/50">
              MENU
            </span>
          </div>

          {/* MOBILE NAVIGATION LINKS */}
          <div className="flex flex-col">
            {navigationLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    className="border-b border-white/10"
                  >
                    <div className="flex min-h-[50px] items-center justify-between gap-3 py-2.5 sm:min-h-[54px]">
                      <Link
                        href={link.href}
                        tabIndex={mobileMenuOpen ? 0 : -1}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        aria-current={
                          isActive(link) ? "page" : undefined
                        }
                        className={`flex-1 text-[15px] font-medium transition-colors sm:text-base ${
                          isActive(link)
                            ? "text-[#29B6F0]"
                            : "text-white hover:text-[#29B6F0]"
                        }`}
                      >
                        Services
                      </Link>

                      <button
                        type="button"
                        tabIndex={mobileMenuOpen ? 0 : -1}
                        onClick={() =>
                          setMobileServicesOpen((previous) => !previous)
                        }
                        aria-label={
                          mobileServicesOpen
                            ? "Collapse services"
                            : "Expand services"
                        }
                        aria-expanded={mobileServicesOpen}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-[#29B6F0]"
                      >
                        <ChevronDown
                          size={19}
                          className={`transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* MOBILE SERVICE LINKS */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        mobileServicesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-3 ml-2 flex flex-col border-l border-white/15 pl-3">
                          {services.map((service) => {
                            const Icon = service.icon;

                            const activeService =
                              pathname === service.href ||
                              pathname.startsWith(
                                service.href.replace("/herosection", "")
                              );

                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                tabIndex={
                                  mobileMenuOpen && mobileServicesOpen
                                    ? 0
                                    : -1
                                }
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className={`flex items-start gap-3 rounded-lg px-2.5 py-3 transition-colors ${
                                  activeService
                                    ? "bg-[#29B6F0]/10 text-[#29B6F0]"
                                    : "text-white/85 hover:bg-white/[0.05] hover:text-[#29B6F0]"
                                }`}
                              >
                                <Icon
                                  size={17}
                                  className="mt-0.5 shrink-0 text-[#29B6F0]"
                                />

                                <span className="min-w-0">
                                  <span className="block text-[13px] font-medium leading-5">
                                    {service.title}
                                  </span>

                                  <span className="mt-0.5 block text-[11px] leading-4 text-white/45">
                                    {service.desc}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={(event) => handleNavigation(event, link)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`group flex min-h-[50px] items-center justify-between border-b border-white/10 py-2.5 text-[15px] font-medium transition-colors duration-200 sm:min-h-[54px] sm:text-base ${
                    isActive(link)
                      ? "text-[#29B6F0]"
                      : "text-white hover:text-[#29B6F0]"
                  }`}
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                      isActive(link)
                        ? "text-[#29B6F0]"
                        : "text-white/50"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* MOBILE CTA */}
          <div className="mt-6 w-full">
            <Link
              href="/contact/herosection"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="group mx-auto flex h-[48px] w-full max-w-[360px] items-center justify-center gap-2 rounded-full border border-[#29B6F0]/60 bg-black px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:border-[#29B6F0] hover:bg-[#29B6F0]/10 sm:h-[50px]"
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* MOBILE FOOTER */}
          <div className="mt-auto pt-7">
            <div className="mb-4 h-px w-full bg-white/15" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Software · Data · AI · Security
            </p>

            <p className="mt-2 text-[11px] text-white/50 sm:text-xs">
              Irvine, California · Chennai, India
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
