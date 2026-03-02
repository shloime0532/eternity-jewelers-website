"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Stunning diamond engagement ring"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <div className="w-16 h-px bg-accent mx-auto mb-8 animate-fade-up" />

        <p className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-light animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0, animationFillMode: "forwards" }}>
          Lakewood&apos;s Premier Jeweler &middot; Since 1988
        </p>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
          Timeless Elegance,
          <br />
          <span className="text-accent">Crafted for You</span>
        </h1>

        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.45s", opacity: 0, animationFillMode: "forwards" }}>
          Over 36 years of creating exquisite custom jewelry.
          From engagement rings to heirloom pieces, every creation
          tells your story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
          <button
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-accent text-accent px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-primary transition-all duration-300"
          >
            View Collection
          </button>
          <a
            href="tel:7325737070"
            className="bg-accent text-primary px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-accent-light transition-all duration-300 font-medium text-center"
          >
            Call (732) 573-7070
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "0.75s", opacity: 0, animationFillMode: "forwards" }}>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  );
}
