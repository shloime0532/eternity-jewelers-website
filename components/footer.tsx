import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F1E] text-white/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Eternity Jewelers"
              width={160}
              height={50}
              className="h-10 w-auto mb-4 opacity-70"
            />
            <p className="text-sm leading-relaxed">
              Lakewood&apos;s premier jeweler since 1988. Crafting timeless
              pieces for life&apos;s most precious moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Collection", "Services", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.toLowerCase() === "collection" ? "gallery" : link.toLowerCase();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm hover:text-accent transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:7325737070"
                className="hover:text-accent transition-colors"
              >
                (732) 573-7070
              </a>
              <p>939 River Ave, Lakewood, NJ 08701</p>
              <p>Mon-Thu: 10am-6pm</p>
              <p>Fri: 10am-2pm</p>
              <p>Sun: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Eternity Jewelers. All rights reserved.
          </p>
          <p className="text-white/30">
            Website by{" "}
            <a
              href="https://maivenai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/50 hover:text-accent transition-colors"
            >
              Maiven
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
