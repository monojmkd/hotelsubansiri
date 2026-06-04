import { motion } from "framer-motion";
import { Bath, BedDouble, Coffee, Tv, Wifi, Wind } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { hotelImages } from "../data/hotelImages";

const rooms = [
  {
    name: "Standard Room",
    price: "₹1,499",
    beds: "1 Queen Bed",
    sqft: "200 sq.ft",
    amenities: ["AC", "Free WiFi", "Smart TV", "Hot Water"],
    image: hotelImages.standardRoom,
  },
  {
    name: "Deluxe Room",
    price: "₹2,299",
    beds: "1 King Bed",
    sqft: "280 sq.ft",
    amenities: ["AC", "Free WiFi", "Smart TV", "Mini Bar"],
    image: hotelImages.deluxeRoom,
  },
  {
    name: "Super Deluxe",
    price: "₹3,199",
    beds: "1 King + Sofa",
    sqft: "350 sq.ft",
    amenities: ["AC", "Free WiFi", "Smart TV", "Work Desk"],
    image: hotelImages.premiumRoom,
  },
  {
    name: "Family Suite",
    price: "₹4,499",
    beds: "2 Bedrooms",
    sqft: "550 sq.ft",
    amenities: ["AC", "Free WiFi", "Smart TV", "Kitchenette"],
    image: hotelImages.familyRoom,
  },
];

const iconMap = {
  AC: Wind,
  "Free WiFi": Wifi,
  "Smart TV": Tv,
  "Mini Bar": Coffee,
  "Hot Water": Bath,
  "Work Desk": BedDouble,
  Kitchenette: Coffee,
};

export default function Rooms() {
  const ref = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="rooms" className="py-10 md:py-14 bg-ivory">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-gold font-inter text-xs tracking-[0.35em] uppercase mb-3">
            Accommodations
          </p>

          <h2 className="font-playfair text-forest text-3xl md:text-4xl gold-line-center">
            Rooms & Suites
          </h2>

          <p className="text-charcoal/60 font-inter text-sm md:text-base max-w-2xl mx-auto mt-4">
            Comfortable rooms thoughtfully designed for business travellers,
            families, and city stays.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              className="bg-white rounded-2xl overflow-hidden border border-charcoal/5 luxury-shadow-hover"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/95 text-forest text-xs font-semibold px-3 py-2 rounded-xl">
                    From {room.price}/night
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-playfair text-forest text-2xl mb-2">
                  {room.name}
                </h3>

                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal/60 mb-4">
                  <span>{room.beds}</span>
                  <span className="text-gold">•</span>
                  <span>{room.sqft}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {room.amenities.map((item) => {
                    const Icon = iconMap[item] || BedDouble;

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs bg-[#FAF8F4] px-3 py-2 rounded-xl"
                      >
                        <Icon size={14} className="text-gold" />
                        <span className="text-charcoal/70">{item}</span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-gold text-forest font-inter text-xs font-semibold tracking-widest uppercase py-3 rounded-xl hover:bg-gold-light transition-all duration-300"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
