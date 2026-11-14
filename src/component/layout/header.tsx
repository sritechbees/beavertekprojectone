"use client";

import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/#top", section: "top" },
  { label: "About Us", href: "/about", section: null },
  { label: "Services", href: "/services", section: null },
  { label: "Products", href: "/#products", section: "products" },
  { label: "Industries", href: "/#industries", section: "industries" },
  { label: "Case Studies", href: "/#work", section: "work" },
  { label: "Contact Us", href: "/contact", section: null },
] as const;

type NavigationLink = (typeof navigationLinks)[number];

export default function SiteHeader() {
  const pathname = usePathname();

  const [activeHref, setActiveHref] = useState("/#top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (link: NavigationLink) => {
    if (link.section) {
      return pathname === "/" && activeHref === link.href;
    }

    return pathname === link.href;
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const headerHeight =
      document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;

    const targetPosition =
      window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, []);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    link: NavigationLink
  ) => {
    setMobileMenuOpen(false);

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

  // Keep the header compact and elevated after the page starts scrolling.
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);

    const updateActiveLink = () => {
      if (pathname !== "/") {
        const currentPage = navigationLinks.find(
          (link) => !link.section && link.href === pathname
        );

        if (currentPage) setActiveHref(currentPage.href);
        return;
      }

      const headerHeight =
        document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;

      let currentSection = "/#top";

      for (const link of navigationLinks) {
        if (!link.section) continue;

        const section = document.getElementById(link.section);
        if (!section) continue;

        if (section.getBoundingClientRect().top <= headerHeight + 40) {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  // Scroll to a linked home section when arriving from another page.
  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    const sectionId = hash.slice(1);
    const timer = window.setTimeout(() => scrollToSection(sectionId), 150);

    return () => window.clearTimeout(timer);
  }, [pathname, scrollToSection]);

  // Close the mobile menu with Escape and prevent background scrolling.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b bg-black transition-all duration-300 ease-out ${
        scrolled
          ? "h-[68px] border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.55)]"
          : "h-[78px] border-white/[0.06] shadow-none"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* LOGO */}
<Link
  href="/"
  className="relative z-50 ml-2 flex h-full shrink-0 items-center sm:ml-3 lg:ml-4"
  aria-label="BeaverTek Home"
  onClick={() => setMobileMenuOpen(false)}
>
  <span
    className={`relative block w-[68px] transition-all duration-300 sm:w-[74px] lg:w-[78px] ${
      scrolled ? "h-[56px]" : "h-[68px]"
    }`}
  >
    <Image
      src="/home/logoheader1.png"
      alt="BeaverTek Logo"
      fill
      priority
      sizes="(max-width: 640px) 68px, (max-width: 1024px) 74px, 78px"
      className="object-contain object-center"
    />
  </span>
</Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6 2xl:gap-8"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigation(event, link)}
              aria-current={isActive(link) ? "page" : undefined}
              className={`relative whitespace-nowrap py-2 text-[12px] font-medium transition-colors duration-300 xl:text-[13px] 2xl:text-sm ${
                isActive(link)
                  ? "text-[#29B6F0]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-all duration-300 ${
                  isActive(link) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

       {/* DESKTOP CTA */}
<div className="hidden shrink-0 lg:block">
  <Link
    href="/contact"
    className="group relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#29B6F0]/40 bg-[#080B12] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(41,182,240,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#29B6F0]/80 hover:shadow-[0_8px_25px_rgba(41,182,240,0.22)]"
  >
    {/* Gradient background - expands from left */}
    <span className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />

    {/* Gradient background - expands from right */}
    <span className="absolute inset-0 -z-10 origin-right scale-x-0 rounded-full bg-gradient-to-l from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-right opacity-0 group-hover:opacity-100" />

    <span className="relative z-10">Let&apos;s Talk</span>

    <ArrowUpRight
      size={17}
      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>
</div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all duration-300 hover:border-[#29B6F0]/50 hover:bg-white/[0.09] hover:text-[#29B6F0] lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE / TABLET NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 z-40 bg-black transition-all duration-300 ease-out lg:hidden ${
          scrolled ? "top-[68px]" : "top-[78px]"
        } ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mx-auto flex max-h-[calc(100dvh-68px)] min-h-[calc(100dvh-68px)] w-full max-w-7xl flex-col overflow-y-auto px-5 pb-8 pt-5 sm:px-8 sm:pt-7">
          <div className="flex flex-col">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={mobileMenuOpen ? 0 : -1}
                onClick={(event) => handleNavigation(event, link)}
                aria-current={isActive(link) ? "page" : undefined}
                className={`group flex items-center justify-between border-b border-white/10 py-4 text-base font-medium transition-colors duration-300 sm:py-5 sm:text-lg ${
                  isActive(link)
                    ? "text-[#29B6F0]"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {link.label}
                <ArrowUpRight
                  size={19}
                  className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                    isActive(link) ? "text-[#29B6F0]" : "text-gray-600"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="mt-7 sm:mt-9">
            <Link
              href="/contact"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3E7BD6]/20 sm:py-4"
            >
              Let&apos;s Talk
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-auto pt-10 sm:pt-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
              Software · Data · AI · Security
            </p>
            <p className="mt-2 text-xs text-gray-500 sm:mt-3 sm:text-sm">
              Irvine, California · Chennai, India
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
