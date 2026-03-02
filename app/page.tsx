"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const PHONE = "(732) 573-5560";
const PHONE_HREF = "tel:+17325735560";
const ADDRESS = "939 River Ave, Lakewood, NJ 08701";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Eternity+Jewelers+939+River+Ave+Lakewood+NJ";

const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const COLLECTIONS = [
  { src: "/images/engagement-ring.png", alt: "Diamond Engagement Ring", label: "Engagement Rings" },
  { src: "/images/wedding-bands.png", alt: "Gold Wedding Bands", label: "Wedding Bands" },
  { src: "/images/necklace.png", alt: "Diamond Pendant Necklace", label: "Necklaces" },
  { src: "/images/watch.png", alt: "Luxury Gold Watch", label: "Luxury Watches" },
  { src: "/images/earrings.png", alt: "Diamond Drop Earrings", label: "Earrings" },
  { src: "/images/bracelet.png", alt: "Diamond Tennis Bracelet", label: "Bracelets" },
];

const SERVICES = [
  { title: "Custom Design", desc: "Bring your vision to life. Our master jewelers craft bespoke pieces tailored to your exact specifications.", iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { title: "Ring Sizing", desc: "Perfect fit guaranteed. Professional ring sizing and adjustments with same-day service available.", iconPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v8M8 12h8" },
  { title: "Jewelry Repair", desc: "Expert restoration and repair services. From clasp replacements to intricate stone resetting.", iconPath: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" },
  { title: "Appraisals", desc: "Certified jewelry appraisals for insurance, estate, and personal valuation purposes.", iconPath: "M9 12l2 2 4-4M21 12c-1 0-3-1-3-3V6a2 2 0 00-2-2H8a2 2 0 00-2 2v3c0 2-2 3-3 3 1 0 3 1 3 3v3a2 2 0 002 2h8a2 2 0 002-2v-3c0-2 2-3 3-3z" },
];

const TESTIMONIALS = [
  { text: "The ring was absolutely perfect. They took the time to understand exactly what I wanted and delivered beyond my expectations.", author: "Sarah M.", detail: "Engagement Ring" },
  { text: "Beautiful pieces, gorgeous curated selection, and very fairly priced. The owner is eager to please and really friendly.", author: "Rachel K.", detail: "Custom Necklace" },
  { text: "I felt no pressure at all \u2014 just genuine expertise and care. They transformed my grandmother\u2019s old gold into a stunning modern piece.", author: "David L.", detail: "Custom Redesign" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null || mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox, mobileMenu]);

  const handleLightboxKey = useCallback((e: KeyboardEvent) => {
    if (lightbox === null) return;
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") setLightbox((p) => p !== null ? (p + 1) % COLLECTIONS.length : null);
    if (e.key === "ArrowLeft") setLightbox((p) => p !== null ? (p - 1 + COLLECTIONS.length) % COLLECTIONS.length : null);
  }, [lightbox]);

  useEffect(() => {
    window.addEventListener("keydown", handleLightboxKey);
    return () => window.removeEventListener("keydown", handleLightboxKey);
  }, [handleLightboxKey]);

  const heroObs = useInView(0.1);
  const collectionsObs = useInView(0.1);
  const servicesObs = useInView(0.1);
  const aboutObs = useInView(0.15);
  const reviewsObs = useInView(0.1);
  const ctaObs = useInView(0.2);

  return (<>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#1A1A2E]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#" className="relative z-10"><Image src="/images/logo-white.png" alt="Eternity Jewelers" width={180} height={45} className={`transition-all duration-300 ${scrolled ? "h-8 w-auto" : "h-10 w-auto"}`} priority /></a>
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} className="text-[13px] font-light uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-[#C9A962]">{l.label}</a>))}
          <a href={PHONE_HREF} className="ml-4 border border-[#C9A962]/40 px-6 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[#C9A962] transition-all hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A2E]">{PHONE}</a>
        </div>
        <button onClick={() => setMobileMenu(!mobileMenu)} className="relative z-10 flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden" aria-label="Toggle menu">
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${mobileMenu ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${mobileMenu ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      <div className={`fixed inset-0 bg-[#1A1A2E]/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${mobileMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((l, i) => (<a key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className={`text-lg font-light uppercase tracking-[0.3em] text-white/90 transition-all hover:text-[#C9A962] ${mobileMenu ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: mobileMenu ? `${i * 80}ms` : "0ms" }}>{l.label}</a>))}
          <a href={PHONE_HREF} className="mt-4 border border-[#C9A962]/60 px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#C9A962] transition-all hover:bg-[#C9A962] hover:text-[#1A1A2E]" onClick={() => setMobileMenu(false)}>Call Now</a>
        </div>
      </div>
    </nav>

    <section ref={heroObs.ref} className="relative h-screen min-h-[700px]">
      <div className="absolute inset-0"><Image src="/images/hero.png" alt="Brilliant diamond ring with dramatic lighting" fill className="object-cover" priority quality={90} /><div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/70 via-[#1A1A2E]/50 to-[#1A1A2E]/80" /></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <div className={`transition-all duration-1000 ${heroObs.inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mx-auto mb-8 h-px w-16 bg-[#C9A962]/60" />
          <h1 className="mb-6 text-4xl font-light leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-playfair), serif" }}>Timeless Elegance,<br /><span className="text-gold-gradient font-normal">Crafted for You</span></h1>
          <p className="mx-auto mb-10 max-w-lg text-base font-light leading-relaxed text-white/70 sm:text-lg">Discover exquisite fine jewelry and luxury timepieces, handpicked and custom-crafted in the heart of Lakewood.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#collections" className="btn-gold group inline-flex items-center gap-2 bg-[#C9A962] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-[#1A1A2E] transition-all hover:bg-[#D4B87A]">Explore Collections<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/30 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all hover:border-[#C9A962] hover:text-[#C9A962]">Book a Consultation</a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2"><div className="flex flex-col items-center gap-2 opacity-50"><span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/60">Scroll</span><div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" /></div></div>
      </div>
    </section>

    <section id="collections" ref={collectionsObs.ref} className="bg-[#FAF7F3] py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className={`mb-16 text-center transition-all duration-700 sm:mb-20 ${collectionsObs.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A962]">Our Collections</p>
          <h2 className="mb-4 text-3xl font-light tracking-tight text-[#1A1A2E] sm:text-4xl" style={{ fontFamily: "var(--font-playfair), serif" }}>Curated with Care</h2>
          <div className="mx-auto h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A962, transparent)" }} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((item, i) => (
            <div key={item.label} className={`group relative cursor-pointer overflow-hidden transition-all duration-700 ${collectionsObs.inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: collectionsObs.inView ? `${i * 100}ms` : "0ms" }} onClick={() => setLightbox(i)}>
              <div className="relative aspect-square overflow-hidden bg-[#1A1A2E]/5">
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                <div className="absolute inset-0 bg-[#1A1A2E]/0 transition-all duration-500 group-hover:bg-[#1A1A2E]/40" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/80 to-transparent p-6 pt-16"><p className="text-[12px] font-medium uppercase tracking-[0.2em] text-white">{item.label}</p></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" /></svg></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {lightbox !== null && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1A1A2E]/90 animate-fade-in" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }} onClick={() => setLightbox(null)}>
        <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center text-white/60 transition-colors hover:text-white" aria-label="Close"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg></button>
        <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + COLLECTIONS.length) % COLLECTIONS.length); }} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-white sm:left-8" aria-label="Previous"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg></button>
        <div className="relative mx-16 aspect-square w-full max-w-2xl animate-scale-in sm:mx-20" onClick={(e) => e.stopPropagation()}><Image src={COLLECTIONS[lightbox].src} alt={COLLECTIONS[lightbox].alt} fill className="object-contain" sizes="(max-width:768px) 90vw,60vw" quality={95} /></div>
        <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % COLLECTIONS.length); }} className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-white sm:right-8" aria-label="Next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg></button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"><p className="text-[12px] font-medium uppercase tracking-[0.25em] text-[#C9A962]">{COLLECTIONS[lightbox].label}</p><p className="mt-1 text-[11px] text-white/40">{lightbox + 1} / {COLLECTIONS.length}</p></div>
      </div>
    )}

    <section id="services" ref={servicesObs.ref} className="bg-[#1A1A2E] py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className={`mb-16 text-center transition-all duration-700 sm:mb-20 ${servicesObs.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A962]">What We Offer</p>
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-playfair), serif" }}>Expert Services</h2>
          <div className="mx-auto h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A962, transparent)" }} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`group border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-700 hover:border-[#C9A962]/20 hover:bg-white/[0.06] ${servicesObs.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: servicesObs.inView ? `${i * 100}ms` : "0ms" }}>
              <div className="mb-6 text-[#C9A962] transition-transform duration-300 group-hover:scale-110"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d={s.iconPath} /></svg></div>
              <h3 className="mb-3 text-base font-medium tracking-wide text-white">{s.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="about" ref={aboutObs.ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={`relative overflow-hidden transition-all duration-700 ${aboutObs.inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/showroom.png" alt="Eternity Jewelers elegant showroom" fill className="object-cover" sizes="(max-width:1024px) 100vw,50vw" /></div>
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-[#C9A962]/30" />
          </div>
          <div className={`transition-all duration-700 ${aboutObs.inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`} style={{ transitionDelay: "200ms" }}>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A962]">Our Story</p>
            <h2 className="mb-6 text-3xl font-light tracking-tight text-[#1A1A2E] sm:text-4xl" style={{ fontFamily: "var(--font-playfair), serif" }}>A Tradition of<br /><span className="font-normal">Excellence</span></h2>
            <div className="mb-8 h-px w-16 bg-[#C9A962]/40" />
            <div className="space-y-5 text-[15px] font-light leading-relaxed text-[#6B6B80]">
              <p>For years, Eternity Jewelers has been Lakewood&apos;s trusted destination for fine jewelry and luxury timepieces. What began as a passion for exquisite craftsmanship has grown into a beloved community institution.</p>
              <p>Every piece in our collection is handpicked for quality and beauty. We pride ourselves on a gorgeous curated selection at fair prices &mdash; because luxury shouldn&apos;t mean overpriced.</p>
              <p>Our friendly, no-pressure approach means you&apos;ll always feel welcome. Whether you&apos;re selecting an engagement ring or transforming a family heirloom, we&apos;re here to make every moment special.</p>
            </div>
            <div className="mt-10 flex gap-10 border-t border-[#E8E3DD] pt-8">
              <div><p className="text-2xl font-light text-[#C9A962] sm:text-3xl">5.0</p><p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#9999A8]">Star Rating</p></div>
              <div className="h-12 w-px bg-[#E8E3DD]" />
              <div><p className="text-2xl font-light text-[#C9A962] sm:text-3xl">100%</p><p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#9999A8]">Satisfaction</p></div>
              <div className="h-12 w-px bg-[#E8E3DD]" />
              <div><p className="text-2xl font-light text-[#C9A962] sm:text-3xl">Custom</p><p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#9999A8]">Designs</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reviews" ref={reviewsObs.ref} className="bg-[#F8F6F2] py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className={`mb-16 text-center transition-all duration-700 sm:mb-20 ${reviewsObs.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A962]">Client Stories</p>
          <h2 className="mb-4 text-3xl font-light tracking-tight text-[#1A1A2E] sm:text-4xl" style={{ fontFamily: "var(--font-playfair), serif" }}>What Our Clients Say</h2>
          <div className="mx-auto h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A962, transparent)" }} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.author} className={`bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-700 sm:p-10 ${reviewsObs.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: reviewsObs.inView ? `${i * 120}ms` : "0ms" }}>
              <div className="mb-6 flex gap-1 text-[#C9A962]">{[...Array(5)].map((_, j) => (<svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>))}</div>
              <p className="mb-8 text-[15px] font-light italic leading-relaxed text-[#6B6B80]" style={{ fontFamily: "var(--font-playfair), serif" }}>&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-[#E8E3DD] pt-5"><p className="text-sm font-medium text-[#1A1A2E]">{t.author}</p><p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#9999A8]">{t.detail}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" ref={ctaObs.ref} className="relative bg-[#1A1A2E] py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 opacity-[0.03]"><div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle, #C9A962 1px, transparent 1px)", backgroundSize: "32px 32px" }} /></div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <div className={`transition-all duration-700 ${ctaObs.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="mx-auto mb-8 h-px w-16 bg-[#C9A962]/40" />
          <h2 className="mb-6 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), serif" }}>Visit Our Showroom</h2>
          <p className="mx-auto mb-10 max-w-md text-base font-light leading-relaxed text-white/60">Experience the beauty in person. Schedule a private consultation or walk in &mdash; we&apos;d love to help you find the perfect piece.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={PHONE_HREF} className="btn-gold inline-flex items-center gap-3 bg-[#C9A962] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-[#1A1A2E] transition-all hover:bg-[#D4B87A]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>Call {PHONE}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-white/20 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all hover:border-[#C9A962] hover:text-[#C9A962]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>Get Directions</a>
          </div>
          <div className="mt-12 border-t border-white/[0.06] pt-8"><p className="text-sm font-light text-white/40">{ADDRESS}</p></div>
        </div>
      </div>
    </section>

    <footer className="bg-[#111122] py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Image src="/images/logo-white.png" alt="Eternity Jewelers" width={140} height={35} className="h-7 w-auto opacity-60" />
          <div className="flex flex-wrap justify-center gap-6">{NAV_LINKS.map((l) => (<a key={l.href} href={l.href} className="text-[11px] font-light uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-[#C9A962]">{l.label}</a>))}</div>
          <a href={PHONE_HREF} className="text-[12px] font-light tracking-wider text-[#C9A962]/60 transition-colors hover:text-[#C9A962]">{PHONE}</a>
        </div>
        <div className="mt-10 border-t border-white/[0.04] pt-8 text-center">
          <p className="text-[11px] font-light text-white/20">&copy; {new Date().getFullYear()} Eternity Jewelers. All rights reserved.</p>
          <p className="mt-2 text-[10px] text-white/10">Designed by{" "}<a href="https://maivenai.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C9A962]/40">Maiven</a></p>
        </div>
      </div>
    </footer>
  </>);
}
