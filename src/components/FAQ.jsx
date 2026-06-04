import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqs = [
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in is from 12:00 PM (noon) and check-out is by 11:00 AM. Early check-in and late check-out are subject to availability and may attract an additional charge. Please contact us in advance to make arrangements.",
  },
  {
    q: "Is parking available at the hotel?",
    a: "Yes, Hotel Subansiri provides secure on-site parking for guests with personal vehicles. Parking is available on a first-come, first-served basis. Please let us know at the time of booking if you require parking.",
  },
  {
    q: "Do you have family rooms or suites?",
    a: "Absolutely. We offer spacious Family Suites designed to accommodate families comfortably. These feature multiple sleeping areas and enhanced amenities. Please enquire at the time of booking to ensure availability.",
  },
  {
    q: "What are the major attractions near the hotel?",
    a: "Hotel Subansiri is ideally located close to Kamakhya Temple (~15 min), Assam State Zoo (~8 min), Brahmaputra Riverfront (~10 min), Umananda Island (~12 min), and Srimanta Sankardev Kalakshetra (~10 min). Our front desk team can help arrange local tours.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Reservations cancelled 48 hours or more before the check-in date are fully refundable. Cancellations within 48 hours may be subject to a one-night charge. For specific booking conditions, please contact us directly or review your booking confirmation.",
  },
  {
    q: "Is Wi-Fi available throughout the hotel?",
    a: "Yes, high-speed complimentary Wi-Fi is available in all rooms and throughout the hotel premises including common areas. No additional charges apply for Wi-Fi usage.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useScrollReveal();

  return (
    <section className="py-[12px] md:py-13 bg-forest px-4 assamese-pattern">
      <div ref={ref} className="section-reveal max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold font-inter text-xs tracking-[0.4em] uppercase mb-4">
            FAQs
          </p>
          <h2 className="font-playfair text-ivory text-3xl md:text-5xl gold-line-center">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative border border-gold/15 rounded-sm overflow-hidden hover:border-gold/30 transition-colors duration-300 bg-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/3 transition-colors"
              >
                <span className="text-ivory font-inter text-sm md:text-base pr-4 leading-relaxed font-medium">
                  {faq.q}
                </span>
                <span className="flex-none w-6 h-6 border border-gold/30 flex items-center justify-center">
                  {open === i ? (
                    <Minus size={12} className="text-gold" />
                  ) : (
                    <Plus size={12} className="text-gold" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-gold/10">
                      <p className="text-ivory/60 font-inter text-sm leading-relaxed mt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
