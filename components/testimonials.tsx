const testimonials = [
  {
    quote:
      "I've gotten beautiful jewelry at Eternity Jewelers. The owner is really friendly and not pushy at all. Every piece feels special.",
    name: "Sarah M.",
    occasion: "Engagement Ring",
  },
  {
    quote:
      "They have a gorgeous curated selection and very fairly priced. After feeling pressured at other places, this became my go-to jeweler.",
    name: "Rachel K.",
    occasion: "Custom Necklace",
  },
  {
    quote:
      "The attention to detail is unmatched. My custom wedding band turned out more beautiful than I ever imagined. Truly a master craftsman.",
    name: "David L.",
    occasion: "Wedding Band",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-light">
      <div className="max-w-5xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-light">
            What Our Clients Say
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
            Words of Trust
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Testimonials */}
        <div className="space-y-12 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center max-w-3xl mx-auto">
              {/* Quotation Mark */}
              <div className="font-heading text-6xl md:text-8xl text-accent/20 leading-none mb-4">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-primary italic leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Gold divider */}
              <div className="w-8 h-px bg-accent mx-auto mb-6" />

              {/* Attribution */}
              <p className="text-primary font-medium tracking-wider text-sm uppercase">
                {testimonial.name}
              </p>
              <p className="text-text-light text-xs tracking-[0.2em] uppercase mt-1">
                {testimonial.occasion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
