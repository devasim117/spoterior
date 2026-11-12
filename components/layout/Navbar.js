"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { X } from "lucide-react";
import { navLinks, brand } from "@/lib/siteContent";

/**
 * Client Component: sticky header state, reading-progress bar, scroll-spy and
 * the mobile drawer all rely on browser APIs.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [progress, setProgress] = useState(0);

  /* Sticky style + reading progress */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: highlight the section currently in view */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock page scroll while the mobile drawer is open + close on Escape */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="nav-inner container">
        <a href="#home" className="nav-logo" aria-label={`${brand.name} — home`}>
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={560}
            height={410}
            priority
            sizes="(max-width: 768px) 110px, 150px"
          />
        </a>

        <nav className="nav-links" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={activeId === link.href.slice(1) ? "is-active" : ""}
                  aria-current={
                    activeId === link.href.slice(1) ? "page" : undefined
                  }>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Book a Consultation
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X size={22} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav-backdrop${isMenuOpen ? " is-open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`nav-drawer${isMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMenuOpen}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.label} style={{ transitionDelay: `${index * 45}ms` }}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  <span className="nav-drawer-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="btn btn-primary nav-drawer-cta"
          onClick={() => setIsMenuOpen(false)}>
          Book a Consultation
        </a>
      </div>
    </header>
  );
};

export default Navbar;
