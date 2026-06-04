import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { hotelImages } from "../data/hotelImages";

const experiences = [
  {
    title: "Comfortable Accommodation",
    subtitle: "Spaces Designed for Rest",
    desc: "Premium rooms thoughtfully designed for comfort, privacy, and uninterrupted relaxation.",
    points: ["Premium bedding", "Daily housekeeping", "Mood lighting"],
    image: hotelImages.premiumRoom,
  },
  {
    title: "Local Hospitality",
    subtitle: "The Warmth of Assam",
    desc: "Personalised service and genuine Assamese hospitality that makes every guest feel welcome.",
    points: ["Friendly staff", "Local guidance", "Personal attention"],
    image: hotelImages.reception,
  },
  {
    title: "Convenient Location",
    subtitle: "Everything Within Reach",
    desc: "Stay close to major attractions, transport hubs, restaurants, and business districts.",
    points: [
      "Prime Ganeshguri location",
      "Airport connectivity",
      "Nearby attractions",
    ],
    image: hotelImages.corridor,
  },
];

export default function Experience() {
  return (
    <section className="py-10 md:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-gold font-inter text-xs tracking-[0.35em] uppercase mb-3">
            The Experience
          </p>

          <h2 className="font-playfair text-forest text-3xl md:text-4xl gold-line-center">
            More Than A Hotel Stay
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-charcoal/60 text-sm md:text-base">
            Thoughtful hospitality, modern comfort, and a prime location
            designed to make every stay memorable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                luxury-shadow-hover
                border
                border-charcoal/5
              "
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="text-gold text-xs tracking-[0.2em] uppercase font-inter">
                    {exp.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-playfair text-xl text-forest mb-3">
                  {exp.title}
                </h3>

                <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
                  {exp.desc}
                </p>

                <div className="space-y-2">
                  {exp.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-gold flex-none" />

                      <span className="text-sm text-charcoal/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
