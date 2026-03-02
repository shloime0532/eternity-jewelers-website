"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Collection", id: "gallery" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="Eternity Jewelers"
            width={160}
            height={50}
            className="h-10 w-auto md:h-12"
            priority
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/80 hover:text-accent text-sm tracking-widest uppercase font-light transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 border border-accent text-accent px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Book Consultation
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary/98 backdrop-blur-md px-5 pt-4 pb-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/80 hover:text-accent py-3 text-sm tracking-widest uppercase font-light text-left border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 border border-accent text-accent px-6 py-3 text-xs tracking-widest uppercase hover:bg-accent hover:text-primary transition-all text-center"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
