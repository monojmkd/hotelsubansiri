import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, MapPin, ChevronDown } from "lucide-react";
import { hotelImages } from "../data/hotelImages";

const slides = [
  {
    image: hotelImages.exterior,
    label: "Elegant Comfort",
  },
  {
    image: hotelImages.lobby,
    label: "Prime Location",
  },
  {
    image: hotelImages.facadeNight,
    label: "Warm Hospitality",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[660px] overflow-hidden bg-forest assamese-pattern text-ivory">
      {/* Photography-led slideshow background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 hero-zoom bg-cover bg-center"
            style={{
              backgroundImage: `url('${slides[current].image}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Assamese textile texture */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 18px,
              rgba(208,176,122,0.8) 18px,
              rgba(208,176,122,0.8) 20px
            ), repeating-linear-gradient(
              45deg,
              transparent,
              transparent 36px,
              rgba(250,248,244,0.7) 36px,
              rgba(250,248,244,0.7) 38px
            )`,
          }}
        />
      </div> */}

      {/* Slide indicators */}
      <div className="absolute top-24 right-6 flex flex-col gap-2 z-10">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-0.5 rounded-full transition-all duration-500 ${
              i === current ? "h-10 bg-gold" : "h-4 bg-ivory/30"
            }`}
          />
        ))}
      </div>

      {/* Slide label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-24 left-6 md:left-12 z-10"
        >
          <span className="text-gold/60 font-inter text-xs tracking-[0.3em] uppercase">
            {slides[current].label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-gold font-inter text-xs md:text-sm uppercase mb-6 tracking-[0.4em]"
          >
            Welcome to
          </motion.p>

          {/* Hotel name */}
          <h1 className="font-playfair text-ivory text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] mb-8">
            Hotel <span className="block italic text-gold">Subansiri</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-ivory/90 font-inter text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-4"
          >
            A Comfortable Stay in the Heart of Guwahati
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-ivory/70 font-inter text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed mb-10"
          >
            Experience comfort, convenience, and warm Assamese hospitality just
            minutes from Guwahati's major attractions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToBooking}
              className="group bg-gold text-forest font-inter font-semibold text-sm px-10 py-4 tracking-widest uppercase hover:bg-gold-light transition-all duration-300 min-w-48 luxury-shadow"
            >
              <span className="group-hover:tracking-[0.2em] transition-all duration-300">
                Book Your Stay
              </span>
            </button>
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 border border-ivory/40 text-ivory font-inter text-sm px-8 py-4 tracking-widest uppercase hover:border-gold hover:text-gold hover:bg-ivory/5 transition-all duration-300"
            >
              <Phone size={14} />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() =>
            document
              .getElementById("booking")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/55 hover:text-gold transition-colors"
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>

      {/* Floating action buttons */}
      <div className="fixed right-4 bottom-24 md:bottom-8 z-50 flex flex-col gap-3">
        <motion.a
          href="https://wa.me/91XXXXXXXXXX"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center luxury-shadow hover:scale-105 transition-transform"
          title="WhatsApp"
        >
          <MessageCircle size={20} className="text-white" fill="white" />
        </motion.a>
        <motion.a
          href="https://maps.google.com/?q=Hotel+Subansiri+Ganeshguri+Guwahati"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
          className="w-12 h-12 bg-gold rounded-full flex items-center justify-center luxury-shadow hover:scale-105 transition-transform"
          title="Directions"
        >
          <MapPin size={18} className="text-forest" />
        </motion.a>
        <motion.a
          href="tel:+91XXXXXXXXXX"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7 }}
          className="w-12 h-12 bg-forest border border-gold/40 rounded-full flex items-center justify-center luxury-shadow hover:scale-105 transition-transform"
          title="Call"
        >
          <Phone size={18} className="text-gold" />
        </motion.a>
      </div>
    </section>
  );
}
