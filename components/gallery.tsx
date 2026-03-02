"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery-1.png",
    alt: "Diamond Solitaire Engagement Ring",
    caption: "Diamond Solitaire Engagement Ring",
    category: "Engagement",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Gold Wedding Band Set",
    caption: "Gold Wedding Band Set",
    category: "Wedding",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Diamond Pendant Necklace",
    caption: "Diamond Pendant Necklace",
    category: "Necklaces",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Diamond Tennis Bracelet",
    caption: "Custom Diamond Tennis Bracelet",
    category: "Bracelets",
  },
  {
    src: "/images/gallery-5.png",
    alt: "Luxury Gold Watch",
    caption: "Luxury Timepiece",
    category: "Watches",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Master Jeweler at Work",
    caption: "Craftsmanship & Precision",
    category: "Craftsmanship",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryItems.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryItems.length) % galleryItems.length
        : null
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, goNext, goPrev, closeLightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-light">
            Our Collection
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
            Exquisite Pieces
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden bg-primary/5 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex flex-col items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs tracking-[0.2em] uppercase font-light translate-y-3 group-hover:translate-y-0">
                  {item.category}
                </span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 text-lg font-heading mt-2 translate-y-3 group-hover:translate-y-0">
                  {item.caption}
                </span>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-y-3 group-hover:translate-y-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-accent transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-accent transition-colors z-10 p-2"
            aria-label="Previous image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative w-[85vw] h-[70vh] md:w-[70vw] md:h-[75vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="85vw"
              quality={95}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-accent transition-colors z-10 p-2"
            aria-label="Next image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="font-heading text-white text-xl md:text-2xl mb-2">
              {galleryItems[lightboxIndex].caption}
            </p>
            <p className="text-accent/70 text-xs tracking-[0.2em] uppercase">
              {lightboxIndex + 1} / {galleryItems.length}
            </p>
          </div>

          <div className="absolute bottom-24 left-0 right-0 hidden md:flex justify-center gap-2">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`relative w-16 h-16 overflow-hidden transition-all duration-300 ${
                  index === lightboxIndex
                    ? "ring-2 ring-accent opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
