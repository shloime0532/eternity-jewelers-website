import Image from "next/image";

const services = [
  {
    title: "Engagement Rings",
    description:
      "Find the perfect symbol of your love. From classic solitaires to custom designs, we craft rings as unique as your story.",
    image: "/images/gallery-1.png",
  },
  {
    title: "Custom Design",
    description:
      "Bring your vision to life. Our master jewelers transform your ideas into one-of-a-kind pieces with meticulous attention to detail.",
    image: "/images/gallery-6.png",
  },
  {
    title: "Wedding Bands",
    description:
      "Celebrate your union with bands that reflect your commitment. Gold, platinum, diamond-set, and everything in between.",
    image: "/images/gallery-2.png",
  },
  {
    title: "Diamond Jewelry",
    description:
      "Pendants, earrings, bracelets, and more. Every diamond is hand-selected for exceptional brilliance and fire.",
    image: "/images/gallery-3.png",
  },
  {
    title: "Luxury Watches",
    description:
      "Discover our curated collection of fine timepieces. Expert sales and trusted service for your most valued accessories.",
    image: "/images/gallery-5.png",
  },
  {
    title: "Jewelry Repair",
    description:
      "Restore your treasured pieces to their original splendor. Ring resizing, stone replacement, chain repair, and more.",
    image: "/images/gallery-4.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-light">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
            Our Services
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-light overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
