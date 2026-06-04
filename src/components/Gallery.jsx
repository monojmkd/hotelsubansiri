import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { hotelImages } from "../data/hotelImages";

const galleryItems = [
  {
    id: 1,
    label: "Hotel Exterior",
    image: hotelImages.exterior,
    span: "md:row-span-2",
  },
  { id: 2, label: "Reception", image: hotelImages.reception, span: "" },
  { id: 3, label: "Lobby Lounge", image: hotelImages.lobby, span: "" },
  {
    id: 4,
    label: "Deluxe Room",
    image: hotelImages.deluxeRoom,
    span: "md:row-span-2",
  },
  { id: 5, label: "Premium Room", image: hotelImages.premiumRoom, span: "" },
  { id: 6, label: "Restaurant", image: hotelImages.restaurant, span: "" },
  {
    id: 7,
    label: "Dining Area",
    image: hotelImages.dining,
    span: "md:col-span-2",
  },
  { id: 8, label: "Hotel Corridor", image: hotelImages.corridor, span: "" },
  { id: 9, label: "Facade at Night", image: hotelImages.facadeNight, span: "" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const ref = useScrollReveal();

  return (
    <section id="gallery" className="py-[12px] md:py-13 bg-ivory px-4">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-gold font-inter text-xs tracking-[0.4em] uppercase mb-4">
            A Visual Tour
          </p>
          <h2 className="font-playfair text-forest text-3xl md:text-5xl gold-line-center">
            Hotel Gallery
          </h2>
          <p className="text-charcoal/60 font-inter text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            A photography-first look at the stay experience, from arrival to
            room comfort and dining.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[230px] md:auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => setSelected(item)}
              className={`group relative cursor-pointer overflow-hidden rounded-sm photo-frame text-left ${item.span}`}
              aria-label={`Open ${item.label} photo`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading={i < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/5 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ZoomIn
                  size={26}
                  className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-ivory font-inter text-sm tracking-wider">
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[70vh] rounded-sm overflow-hidden luxury-shadow"
            >
              <img
                src={selected.image}
                alt={selected.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-forest/85 to-transparent">
                <p className="text-gold font-inter text-xs tracking-widest uppercase">
                  {selected.label}
                </p>
                <p className="text-ivory/70 font-inter text-xs mt-1">
                  Hotel Subansiri, Guwahati
                </p>
              </div>
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-ivory/70 hover:text-gold transition-colors p-2"
              aria-label="Close gallery photo"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
