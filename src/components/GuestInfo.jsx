import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review:
      "Stayed here for a business trip and was thoroughly impressed. The location is perfect and the staff went above and beyond.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Rajesh Borthakur",
    location: "Jorhat, Assam",
    rating: 5,
    review:
      "Clean, comfortable, and great value. The rooms are spacious and the reception team was extremely helpful.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Ananya & Family",
    location: "Kolkata",
    rating: 5,
    review:
      "Perfect family holiday base. Spacious rooms and a location that made exploring Guwahati easy.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85",
  },
];

const faqs = [
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in from 12:00 PM and check-out by 11:00 AM.",
  },
  {
    q: "Is parking available?",
    a: "Yes, secure on-site parking is available for guests.",
  },
  {
    q: "Do you have family rooms?",
    a: "Yes, we offer spacious family rooms and suites.",
  },
  {
    q: "Is Wi-Fi available?",
    a: "Complimentary high-speed Wi-Fi is available throughout the hotel.",
  },
];

export default function GuestInfo() {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(null);

  const ref = useScrollReveal();

  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section className="py-10 md:py-14 bg-[#FAF8F4]">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gold font-inter text-xs tracking-[0.35em] uppercase mb-3">
            Guest Experience
          </p>

          <h2 className="font-playfair text-forest text-3xl md:text-4xl gold-line-center">
            Reviews & FAQs
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8">
          {/* TESTIMONIAL */}
          <div className="bg-white rounded-2xl border border-black/5 p-5 md:p-6 luxury-shadow">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-inter font-semibold text-forest">
                      {t.name}
                    </h3>

                    <p className="text-charcoal/50 text-sm">{t.location}</p>
                  </div>
                </div>

                <Quote size={28} className="text-gold/40 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-charcoal/75 leading-relaxed mb-6">
                  "{t.review}"
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
                  >
                    <ChevronLeft size={14} />
                  </button>

                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIdx(i)}
                        className={`transition-all duration-300 rounded-full ${
                          idx === i ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-black/15"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FAQ */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center text-left px-5 py-4"
                >
                  <span className="font-medium text-forest pr-4">{faq.q}</span>

                  {open === i ? (
                    <Minus size={16} className="text-gold" />
                  ) : (
                    <Plus size={16} className="text-gold" />
                  )}
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="px-5 pb-4 border-t border-black/5">
                        <p className="text-charcoal/65 text-sm leading-relaxed pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
