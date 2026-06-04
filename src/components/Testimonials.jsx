import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review:
      "Stayed here for a business trip and was thoroughly impressed. The location is perfect and the staff went above and beyond to make sure my stay was comfortable.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Rajesh Borthakur",
    location: "Jorhat, Assam",
    rating: 5,
    review:
      "Clean, comfortable, and great value. The rooms are spacious and the reception team was helpful in arranging a cab to Kamakhya Temple.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Ananya & Family",
    location: "Kolkata",
    rating: 5,
    review:
      "Perfect family holiday base. The family suite was spacious for four of us and the location made every city outing easy.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Sanjay Mehta",
    location: "Mumbai",
    rating: 5,
    review:
      "Consistently good across all my visits. Housekeeping is impeccable, Wi-Fi is reliable, and the ambience feels premium without being pretentious.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const ref = useScrollReveal();

  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section className="py-[12px] md:py-13 bg-forest px-4 overflow-hidden assamese-pattern text-ivory">
      <div ref={ref} className="section-reveal relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold font-inter text-xs tracking-[0.4em] uppercase mb-4">
            Guest Stories
          </p>
          <h2 className="font-playfair text-ivory text-3xl md:text-5xl gold-line-center">
            What Our Guests Say
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-ivory text-charcoal border border-gold/20 rounded-sm p-7 md:p-12 luxury-shadow"
            >
              <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-10 items-center">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-28 h-28 md:w-44 md:h-44 rounded-full object-cover mx-auto luxury-shadow"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-forest px-4 py-1.5 font-inter text-[11px] tracking-widest uppercase">
                    Verified Stay
                  </div>
                </div>

                <div>
                  <Quote size={38} className="text-gold/35 mb-5" />
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-playfair text-2xl md:text-3xl leading-relaxed text-forest mb-7">
                    "{t.review}"
                  </p>
                  <div>
                    <p className="text-forest font-inter text-sm font-semibold tracking-wide">
                      {t.name}
                    </p>
                    <p className="text-charcoal/50 font-inter text-xs tracking-wider mt-1">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 border border-gold/35 flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx
                      ? "w-7 h-1.5 bg-gold"
                      : "w-1.5 h-1.5 bg-ivory/25 hover:bg-gold/50"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 border border-gold/35 flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
