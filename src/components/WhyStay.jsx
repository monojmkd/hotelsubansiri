import { motion } from "framer-motion";
import {
  Car,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { hotelImages } from "../data/hotelImages";

const heroReasons = [
  {
    icon: MapPin,
    title: "Central Ganeshguri Address",
    desc: "Stay close to GS Road, offices, shopping, temples, transit points, and everyday essentials.",
    image: hotelImages.facadeNight,
  },
  {
    icon: Sparkles,
    title: "Fresh, Calm Interiors",
    desc: "A composed atmosphere with clean rooms, restful bedding, and attentive housekeeping.",
    image: hotelImages.lobby,
  },
];

const features = [
  {
    icon: Wind,
    title: "Air Conditioned",
    desc: "Comfortable rooms and corridors",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Complimentary guest internet",
  },
  {
    icon: Users,
    title: "Family Friendly",
    desc: "Room choices for every group",
  },
  { icon: Car, title: "Secure Parking", desc: "On-site guest convenience" },
  {
    icon: Clock,
    title: "24x7 Assistance",
    desc: "Always-on front desk support",
  },
  { icon: Zap, title: "Power Backup", desc: "Reliable uninterrupted stay" },
];

export default function WhyStay() {
  const ref = useScrollReveal();

  return (
    <section className="py-[12px] md:py-13 px-4 bg-ivory overflow-hidden">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-end mb-12 md:mb-16">
          <div>
            <p className="text-gold font-inter text-xs tracking-[0.4em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-playfair text-forest text-3xl md:text-5xl gold-line">
              Comfort Beyond Expectation
            </h2>
          </div>
          <p className="text-charcoal/62 font-inter text-base md:text-lg max-w-2xl leading-relaxed">
            Every detail at Hotel Subansiri is crafted to feel reliable, warm,
            and quietly premium, whether you are here for business, family
            travel, or a relaxed city break.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-5 md:gap-7 mb-7">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[430px] md:min-h-[560px] rounded-sm overflow-hidden luxury-shadow"
          >
            <img
              src={hotelImages.reception}
              alt="Hotel Subansiri reception and guest welcome"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/88 via-forest/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
              <div className="w-14 h-14 bg-gold text-forest rounded-sm flex items-center justify-center mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-playfair text-ivory text-3xl md:text-5xl leading-tight max-w-xl mb-4">
                A stay that feels looked after from the first hello.
              </h3>
              <p className="text-ivory/72 font-inter text-sm md:text-base max-w-xl leading-relaxed">
                Helpful service, clear communication, and city-smart convenience
                come together for a stay guests can trust.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-7">
            {heroReasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="group relative min-h-[260px] rounded-sm overflow-hidden luxury-shadow-hover"
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/86 via-forest/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="w-11 h-11 bg-ivory/95 text-forest rounded-sm flex items-center justify-center mb-4">
                    <reason.icon size={19} />
                  </div>
                  <h3 className="font-playfair text-ivory text-2xl mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-ivory/70 font-inter text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative overflow-hidden bg-white rounded-sm p-5 md:p-6 border border-charcoal/5 luxury-shadow-hover hover:border-gold/35 transition-all duration-300"
            >
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gold/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 bg-forest text-gold flex items-center justify-center rounded-sm flex-none group-hover:bg-gold group-hover:text-forest transition-colors duration-300">
                  <f.icon size={19} />
                </div>
                <div>
                  <h3 className="font-playfair text-forest text-lg md:text-xl mb-1">
                    {f.title}
                  </h3>
                  <p className="text-charcoal/58 font-inter text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
