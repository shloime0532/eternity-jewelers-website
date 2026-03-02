export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
      {/* Subtle gold geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #C9A962 0px,
              #C9A962 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Gold decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-accent/50" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent"
          >
            <path
              d="M12 2L14.5 9L22 9L16 13.5L18 21L12 17L6 21L8 13.5L2 9L9.5 9L12 2Z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <div className="w-12 h-px bg-accent/50" />
        </div>

        <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-light">
          Begin Your Journey
        </p>

        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl mb-6">
          Visit Our{" "}
          <span className="text-accent">Showroom</span>
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the Eternity difference in person. Browse our exquisite
          collection, discuss a custom design, or bring in a piece for expert
          repair. We&apos;re here to make your vision a reality.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="border border-white/10 p-6 hover:border-accent/30 transition-colors">
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-3">
              Location
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              939 River Ave
              <br />
              Lakewood, NJ 08701
            </p>
          </div>

          <div className="border border-white/10 p-6 hover:border-accent/30 transition-colors">
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-3">
              Hours
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              Mon &ndash; Thu: 10am &ndash; 6pm
              <br />
              Fri: 10am &ndash; 2pm
              <br />
              Sun: By Appointment
            </p>
          </div>

          <div className="border border-white/10 p-6 hover:border-accent/30 transition-colors">
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-3">
              Phone
            </p>
            <a
              href="tel:7325737070"
              className="text-white/80 text-sm hover:text-accent transition-colors"
            >
              (732) 573-7070
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:7325737070"
            className="bg-accent text-primary px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-accent-light transition-all duration-300 font-medium"
          >
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=939+River+Ave+Lakewood+NJ+08701"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
