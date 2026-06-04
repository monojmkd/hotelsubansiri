import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const attractions = [
  {
    name: "Kamakhya Temple",
    dist: "6 km",
    time: "~15 min",
    desc: "One of India's most revered Shakti temples, perched atop Nilachal Hill with panoramic Brahmaputra views.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2Pkbzz24iBvsbVsY7ruMlAg9Q7Tfl4vXYQ&s",
  },
  {
    name: "Assam State Zoo",
    dist: "3 km",
    time: "~8 min",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rhino_at_Assam_State_Zoo.jpg/250px-Rhino_at_Assam_State_Zoo.jpg",
  },
  {
    name: "Brahmaputra Riverfront",
    dist: "4 km",
    time: "~10 min",
    image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/11/20172548/Brahmaputra-Riverfront.jpg",
  },
  {
    name: "Umananda Island",
    dist: "5 km",
    time: "~12 min",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Umananda_Island%2C_Guwahati_%284%29.jpg/250px-Umananda_Island%2C_Guwahati_%284%29.jpg",
  },
  {
    name: "Srimanta Sankardev Kalakshetra",
    dist: "4 km",
    time: "~10 min",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gatway_of_Kalakhetra%2C_Guwahati%2C_Assam.jpg/250px-Gatway_of_Kalakhetra%2C_Guwahati%2C_Assam.jpg",
  },
];

export default function Discover() {
  const ref = useScrollReveal();

  return (
    <section className="py-12 md:py-16 px-4 bg-forest assamese-pattern text-ivory overflow-hidden">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-stretch mb-4">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <p className="text-gold font-inter text-xs tracking-[0.35em] uppercase mb-3">
              Explore Around You
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl gold-line mb-5">
              Discover Guwahati
            </h2>

            <p className="text-ivory/70 font-inter text-sm md:text-base leading-relaxed max-w-md">
              Hotel Subansiri is close to key temples, riverfront evenings,
              cultural landmarks, and city favourites.
            </p>
          </div>

          {/* Featured Attraction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-gold/30 transition-all duration-300"
          >
            <div className="relative h-64 md:h-72 overflow-hidden">
              <img
                src={attractions[0].image}
                alt={attractions[0].name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 glass-dark text-ivory text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin size={12} className="text-gold" />
                {attractions[0].dist}
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-playfair text-2xl text-ivory">
                    {attractions[0].name}
                  </h3>

                  <div className="glass-dark px-3 py-1.5 rounded-full flex items-center gap-1 text-xs">
                    <Clock size={12} className="text-gold" />
                    {attractions[0].time}
                  </div>
                </div>

                <p className="text-ivory/75 text-sm leading-relaxed max-w-2xl">
                  {attractions[0].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Attractions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {attractions.slice(1).map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute top-2 left-2 glass-dark text-ivory text-[11px] px-2 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={10} className="text-gold" />
                  {a.dist}
                </div>

                <div className="absolute inset-x-3 bottom-3">
                  <h3 className="font-playfair text-sm md:text-base text-ivory mb-1 leading-tight">
                    {a.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-ivory/80">
                    <Clock size={10} className="text-gold" />
                    {a.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
