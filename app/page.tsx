"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ═══ DATA ═══ */

const PHONE = "(732) 573-5560";
const PHONE_HREF = "tel:+17325735560";
const ADDRESS = "939 River Ave, Lakewood, NJ 08701";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Eternity+Jewelers+939+River+Ave+Lakewood+NJ";

const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Visit", href: "#contact" },
];

const GALLERY = [
  { src: "/images/gallery-1.png", alt: "Diamond Solitaire Engagement Ring", caption: "Diamond Solitaire" },
  { src: "/images/gallery-2.png", alt: "Gold Wedding Bands", caption: "Wedding Bands" },
  { src: "/images/gallery-3.png", alt: "Diamond Pendant Necklace", caption: "Diamond Pendant" },
  { src: "/images/gallery-4.png", alt: "Custom Diamond Bracelet", caption: "Custom Bracelet" },
  { src: "/images/gallery-5.png", alt: "Luxury Timepiece", caption: "Luxury Watch" },
  { src: "/images/gallery-6.png", alt: "Diamond Drop Earrings", caption: "Diamond Earrings" },
];

const SERVICES = [
  { title: "Engagement Rings", desc: "Find the perfect symbol of your love. From classic solitaires to custom halo designs, each ring is crafted to take her breath away.", icon: "M12 2L9 7H3l4.5 5L6 22l6-4 6 4-1.5-10L21 7h-6L12 2z" },
  { title: "Custom Design", desc: "Bring your vision to life. Our master jewelers transform your ideas into one-of-a-kind pieces with over 36 years of expertise.", icon: "M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" },
  { title: "Wedding Bands", desc: "Timeless bands for your forever promise. Classic gold, diamond-set, and contemporary styles for every couple.", icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7a5 5 0 100 10 5 5 0 000-10z" },
  { title: "Luxury Watches", desc: "Curated collection of premium timepieces. From heritage brands to modern masterworks, find the watch that defines you.", icon: "M12 5a7 7 0 100 14 7 7 0 000-14zM12 9v3l1.5 1.5M9 2h6M9 22h6" },
  { title: "Expert Repair", desc: "Meticulous restoration and repair. Ring resizing, stone replacement, chain repair, and vintage piece restoration.", icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" },
  { title: "Gold & Silver", desc: "Exquisite fine jewelry in 14K and 18K gold, sterling silver, and platinum. Pendants, earrings, and religious charms.", icon: "M6 3h12l4 6-10 13L2 9l4-6zM2 9h20M10 9l2 13 2-13M6 3l4 6M18 3l-4 6" },
];

const TESTIMONIALS = [
  { text: "The ring was absolutely perfect. They took the time to understand exactly what I wanted and delivered beyond my expectations. A truly exceptional experience from start to finish.", author: "Sarah M.", detail: "Custom Engagement Ring" },
  { text: "Beautiful pieces, gorgeous curated selection, and very fairly priced. The owner is eager to please and really friendly. I won\u2019t go anywhere else for jewelry.", author: "Rachel K.", detail: "Fine Jewelry" },
  { text: "I felt no pressure at all \u2014 just genuine expertise and care. They transformed my grandmother\u2019s old gold into a stunning modern piece our family treasures.", author: "David L.", detail: "Custom Redesign" },
];

/* ═══ PAGE ═══ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox, menuOpen]);

  const lbKey = useCallback((e: KeyboardEvent) => {
    if (lightbox === null) return;
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") setLightbox(p => p !== null ? (p + 1) % GALLERY.length : null);
    if (e.key === "ArrowLeft") setLightbox(p => p !== null ? (p - 1 + GALLERY.length) % GALLERY.length : null);
  }, [lightbox]);

  useEffect(() => {
    window.addEventListener("keydown", lbKey);
    return () => window.removeEventListener("keydown", lbKey);
  }, [lbKey]);

  return (
    <>
      {/* NAV */}
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5 md:py-6"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#" className="relative z-10">
            <Image src="/images/logo-white.png" alt="Eternity Jewelers" width={180} height={45} className={`transition-all duration-300 ${scrolled ? "h-8 w-auto" : "h-9 md:h-10 w-auto"}`} priority />
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-[13px] font-light uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-accent">{l.label}</a>
            ))}
            <a href={PHONE_HREF} className="btn-gold ml-2 bg-accent px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-primary transition-all hover:bg-accent-light">{PHONE}</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-10 p-2 lg:hidden" aria-label="Menu">
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 mt-[6px] ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 mt-[6px] ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
        <div className={`fixed inset-0 bg-primary/[0.98] backdrop-blur-lg transition-all duration-500 lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
          <div className="flex h-full flex-col items-center justify-center gap-7">
            {NAV_LINKS.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className={`font-heading text-xl tracking-[0.12em] text-white/90 transition-all hover:text-accent ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: menuOpen ? `${i * 70}ms` : "0ms" }}>{l.label}</a>
            ))}
            <div className="mt-3 h-px w-10 bg-accent/30" />
            <a href={PHONE_HREF} onClick={() => setMenuOpen(false)} className="mt-1 bg-accent px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary hover:bg-accent-light transition-colors">Call {PHONE}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen min-h-[640px] max-h-[1100px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Brilliant diamond ring" fill className="object-cover" priority quality={90} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/35 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl px-6 text-center animate-fade-up">
          <p className="mb-6 text-[11px] md:text-[12px] font-medium uppercase tracking-[0.4em] text-accent gold-lines">Est. Lakewood, NJ</p>
          <h1 className="font-heading text-[36px] leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Timeless Elegance,<br /><span className="text-gold-gradient">Crafted for You</span>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-[15px] md:text-base font-light leading-relaxed text-white/60">
            Over 36 years of mastery in fine jewelry. Engagement rings, custom designs, and luxury timepieces — each piece a testament to enduring craftsmanship.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#collection" className="btn-gold inline-flex items-center gap-2.5 bg-accent px-9 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-primary hover:bg-accent-light transition-colors">
              View Collection
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 border border-white/30 px-9 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-white hover:border-accent hover:text-accent transition-all">Book Consultation</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </section>

      {/* GALLERY */}
      <section id="collection" className="bg-light py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-14 sm:mb-16 text-center">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Our Collection</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] text-primary gold-underline">Curated Masterpieces</h2>
            <p className="mx-auto mt-8 max-w-xl text-[15px] font-light leading-relaxed text-text-light">Each piece tells a story of exceptional craftsmanship. Click any piece to explore it in full detail.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {GALLERY.map((item, i) => (
              <button key={item.src} onClick={() => setLightbox(i)} className="group relative overflow-hidden bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label={`View ${item.caption}`}>
                <div className="relative aspect-square overflow-hidden">
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 via-primary/25 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-4 sm:pt-14">
                    <p className="font-heading text-[13px] sm:text-sm tracking-wide text-white">{item.caption}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" /></svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 backdrop-blur-md animate-fade-in" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute right-5 top-5 z-10 h-10 w-10 flex items-center justify-center text-white/50 hover:text-white transition-colors" aria-label="Close">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center text-white/35 hover:text-accent transition-colors sm:left-6" aria-label="Previous">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="relative mx-14 w-full max-w-3xl aspect-square animate-scale-in sm:mx-20" onClick={e => e.stopPropagation()}>
            <Image src={GALLERY[lightbox].src} alt={GALLERY[lightbox].alt} fill className="object-contain" sizes="(max-width: 768px) 85vw, 60vw" quality={95} />
          </div>
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY.length); }} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center text-white/35 hover:text-accent transition-colors sm:right-6" aria-label="Next">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center sm:bottom-8">
            <p className="font-heading text-lg sm:text-xl tracking-wide text-white/90">{GALLERY[lightbox].caption}</p>
            <p className="mt-1.5 text-[11px] uppercase tracking-[0.25em] text-white/30">{lightbox + 1} / {GALLERY.length}</p>
          </div>
        </div>
      )}

      {/* SERVICES */}
      <section id="services" className="bg-white py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-14 sm:mb-16 text-center">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">What We Offer</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] text-primary gold-underline">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group border border-border p-7 sm:p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                <div className="mb-5 text-accent transition-transform duration-300 group-hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d={s.icon} /></svg>
                </div>
                <h3 className="font-heading text-lg md:text-xl text-primary mb-2.5 tracking-wide">{s.title}</h3>
                <p className="text-[14px] font-light leading-relaxed text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-primary py-20 sm:py-24 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden shadow-2xl">
                <Image src="/images/showroom.png" alt="Eternity Jewelers showroom" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute top-4 left-4 h-16 w-16 border-t border-l border-accent/50" />
              <div className="absolute bottom-4 right-4 h-16 w-16 border-b border-r border-accent/50" />
            </div>
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Our Story</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] leading-[1.2] text-white">36 Years of<br /><span className="text-gold-gradient">Enduring Craftsmanship</span></h2>
              <div className="mt-5 mb-7 h-px w-16 bg-accent/50" />
              <div className="space-y-5 text-[15px] font-light leading-relaxed text-white/60">
                <p>For over three decades, Eternity Jewelers has been Lakewood&apos;s trusted destination for fine jewelry and luxury timepieces. Our legacy began with a simple belief: every piece of jewelry should tell a story as unique as the person who wears it.</p>
                <p>Our master jewelers combine traditional techniques with modern artistry to create pieces that transcend trends. From selecting the finest stones to the final polish, every detail receives the care and precision it deserves.</p>
                <p className="text-white/40">Whether you&apos;re celebrating a milestone, designing a custom piece, or searching for the perfect gift — we bring the same dedication to every customer who walks through our doors.</p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div><p className="font-heading text-3xl md:text-4xl text-accent">36+</p><p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">Years</p></div>
                <div><p className="font-heading text-3xl md:text-4xl text-accent">5.0</p><p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">Star Rating</p></div>
                <div><p className="font-heading text-3xl md:text-4xl text-accent">1000+</p><p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">Custom Pieces</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-light-warm py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <div className="mb-14 sm:mb-16 text-center">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Client Stories</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] text-primary gold-underline">Words of Trust</h2>
          </div>
          <div className="space-y-14 md:space-y-16">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="text-center">
                <svg className="mx-auto mb-5 h-8 w-8 text-accent/25" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>
                <blockquote className="font-heading text-xl leading-[1.6] italic text-primary/85 sm:text-[22px] md:text-[25px] md:leading-[1.55]">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="mt-6">
                  <div className="mx-auto mb-4 h-px w-8 bg-accent" />
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary">{t.author}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative bg-primary py-20 sm:py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"><div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(201,169,98,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,169,98,0.3) 0%, transparent 50%)" }} /></div>
        <div className="relative mx-auto max-w-5xl px-5 md:px-10">
          <div className="text-center">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Visit Our Showroom</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white">Begin Your Journey</h2>
            <div className="section-divider mt-5 mb-6" />
            <p className="mx-auto mb-12 max-w-xl text-[15px] font-light leading-relaxed text-white/50">Step into our showroom and experience the difference that 36 years of passion and expertise makes. Every visit begins with a personal consultation — because your story deserves a jeweler who listens.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 mb-12">
            <div className="border border-white/[0.08] p-7 sm:p-8 text-center hover:border-accent/20 transition-colors">
              <svg className="mx-auto mb-4 h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <h3 className="font-heading text-lg text-white mb-3">Hours</h3>
              <div className="space-y-1.5 text-sm font-light text-white/40"><p>Mon – Thu: 10am – 6pm</p><p>Friday: 10am – 2pm</p><p>Saturday: Closed</p><p>Sunday: By Appointment</p></div>
            </div>
            <div className="border border-white/[0.08] p-7 sm:p-8 text-center hover:border-accent/20 transition-colors">
              <svg className="mx-auto mb-4 h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <h3 className="font-heading text-lg text-white mb-3">Location</h3>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white/40 hover:text-accent transition-colors leading-relaxed">{ADDRESS}</a>
            </div>
            <div className="border border-white/[0.08] p-7 sm:p-8 text-center hover:border-accent/20 transition-colors">
              <svg className="mx-auto mb-4 h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              <h3 className="font-heading text-lg text-white mb-3">Call Us</h3>
              <a href={PHONE_HREF} className="text-sm font-light text-white/40 hover:text-accent transition-colors">{PHONE}</a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={PHONE_HREF} className="btn-gold inline-flex items-center gap-3 bg-accent px-10 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-primary hover:bg-accent-light transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              Call Now
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-white/20 px-10 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-white hover:border-accent hover:text-accent transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0D1C] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div>
              <Image src="/images/logo-white.png" alt="Eternity Jewelers" width={150} height={38} className="mb-5 h-8 w-auto opacity-50" />
              <p className="max-w-xs text-sm font-light leading-relaxed text-white/25">Over 36 years of fine jewelry craftsmanship in Lakewood, NJ. Your trusted destination for engagement rings, custom designs, and luxury timepieces.</p>
            </div>
            <div>
              <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-accent/60">Quick Links</h4>
              <div className="space-y-2.5">
                {NAV_LINKS.map(l => (<a key={l.href} href={l.href} className="block text-sm font-light text-white/25 hover:text-accent transition-colors">{l.label}</a>))}
              </div>
            </div>
            <div>
              <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-accent/60">Contact</h4>
              <div className="space-y-2.5 text-sm font-light">
                <a href={PHONE_HREF} className="block text-white/25 hover:text-accent transition-colors">{PHONE}</a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block text-white/25 hover:text-accent transition-colors leading-relaxed">{ADDRESS}</a>
                <div className="pt-2 text-white/20 space-y-1"><p>Mon – Thu: 10am – 6pm</p><p>Friday: 10am – 2pm</p><p>Sunday: By Appointment</p></div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/[0.04] pt-8 flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <p className="text-[11px] font-light text-white/15">&copy; 2026 Eternity Jewelers. All rights reserved.</p>
            <p className="text-[10px] text-white/10">Designed by <a href="https://maivenai.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent/40 transition-colors">Maiven</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
