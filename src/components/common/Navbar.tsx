"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";

import { nasalization } from "@/app/fonts";

import { Button } from "../ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScrollY <= 100 && isScrolled) {
        setIsScrolled(false);
      }

      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        if (!isVisible) setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isVisible) {
          setIsVisible(false);
          setIsMenuOpen(false);
        }
      }

      // Determine active section
      const sections = ["contact", "experience", "projects", "skills", "about"];
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("Home");

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isVisible]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "pt-0 px-2 sm:px-4" : "px-2 sm:px-2"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`floating-nav rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 max-w-7xl mx-auto ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <span className="text-primary text-xl font-bold">&lt;/&gt;</span>
            <span
              className={`${nasalization.className} text-foreground text-sm sm:text-base font-semibold`}
            >
              Sharmasheeno
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                  activeSection === link.label
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <Button
              variant="outline"
              asChild
              className="border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-full text-sm"
            >
              {isResumePage ? (
                <a href="/docs/Sharmake_Hassan_Resume.pdf" download="Sharmake_Hassan_Resume.pdf">
                  <FiDownload className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              ) : (
                <Link href="/resume">
                  <FiDownload className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <RiCloseLargeFill
                size={20}
                className="transition-transform duration-200"
              />
            ) : (
              <RiMenu4Fill
                size={20}
                className="transition-transform duration-200"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === link.label
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="outline"
                asChild
                className="w-full mt-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                {isResumePage ? (
                  <a
                    href="/docs/Sharmake_Hassan_Resume.pdf"
                    download="Sharmake_Hassan_Resume.pdf"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    <FiDownload className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                ) : (
                  <Link
                    href="/resume"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    <FiDownload className="w-4 h-4 mr-2" />
                    Download CV
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
