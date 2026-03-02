import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/showroom.png"
                alt="Eternity Jewelers showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 -z-10 hidden lg:block" />
            {/* Years badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 md:p-8 flex flex-col items-center justify-center shadow-lg">
              <span className="font-heading text-4xl md:text-5xl font-bold">36+</span>
              <span className="text-[10px] tracking-[0.2em] uppercase mt-1 font-medium">
                Years
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-light">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-5xl mb-6">
              A Legacy of
              <br />
              <span className="text-accent">Fine Craftsmanship</span>
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />

            <p className="text-white/70 leading-relaxed mb-6">
              For over three decades, Eternity Jewelers has been Lakewood&apos;s
              trusted destination for exquisite jewelry. What began as a passion
              for creating beautiful things has grown into one of the area&apos;s
              most respected jewelry establishments.
            </p>

            <p className="text-white/70 leading-relaxed mb-8">
              Every piece that leaves our workshop carries the mark of true
              craftsmanship. Our master jewelers combine time-honored techniques
              with modern precision to create jewelry that will be treasured
              for generations. We don&apos;t just sell jewelry &mdash; we help you
              tell your story.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="font-heading text-3xl md:text-4xl text-accent">
                  5.0
                </p>
                <p className="text-white/50 text-xs tracking-wider uppercase mt-1">
                  Google Rating
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl text-accent">
                  36+
                </p>
                <p className="text-white/50 text-xs tracking-wider uppercase mt-1">
                  Years
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl text-accent">
                  1000+
                </p>
                <p className="text-white/50 text-xs tracking-wider uppercase mt-1">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
