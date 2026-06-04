import { motion } from "framer-motion";
import { Brush, Car, Clock, Phone, Tv, Wifi, Wind, Zap } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { hotelImages } from "../data/hotelImages";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Phone, label: "Room Service" },
  { icon: Tv, label: "Smart TV" },
  { icon: Car, label: "Parking" },
  { icon: Brush, label: "Housekeeping" },
  { icon: Zap, label: "Power Backup" },
  { icon: Clock, label: "24×7 Reception" },
];

export default function Amenities() {
  const ref = useScrollReveal();

  return (
    <section
      id="amenities"
      className="py-8 md:py-10 bg-ivory assamese-pattern text-forest"
    >
      <div
        ref={ref}
        className="section-reveal relative max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="photo-frame h-[280px] md:h-[360px] relative rounded-2xl overflow-hidden"
          >
            <img
              src={hotelImages.lobby}
              alt="Hotel Subansiri lobby and common area"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute left-5 bottom-5 max-w-xs">
              <p className="text-gold font-inter text-[11px] tracking-[0.35em] uppercase mb-2">
                Guest Comfort
              </p>

              <p className="font-playfair text-ivory text-xl md:text-2xl leading-tight">
                Everything essential, delivered with quiet care.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <p className="text-gold font-inter text-xs tracking-[0.35em] uppercase mb-3">
              What We Offer
            </p>

            <h2 className="font-playfair text-forest text-3xl md:text-4xl gold-line">
              Hotel Amenities
            </h2>

            <p className="text-charcoal/60 font-inter text-sm md:text-base leading-relaxed mt-5 mb-6 max-w-xl">
              Practical comforts and thoughtful services designed to make every
              stay comfortable, convenient, and stress-free.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {amenities.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                  }}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    p-4
                    text-center
                    border
                    border-charcoal/5
                    luxury-shadow-hover
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      mx-auto
                      mb-3
                      rounded-full
                      bg-gold/10
                      flex
                      items-center
                      justify-center
                      group-hover:bg-gold
                      transition-all
                      duration-300
                    "
                  >
                    <a.icon
                      size={20}
                      className="
                        text-gold
                        group-hover:text-forest
                        transition-colors
                        duration-300
                      "
                    />
                  </div>

                  <h3
                    className="
                      text-forest
                      font-inter
                      text-sm
                      font-medium
                      leading-snug
                    "
                  >
                    {a.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
