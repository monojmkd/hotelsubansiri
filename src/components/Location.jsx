import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  Building2,
  TrainFront,
  Bus,
  Car,
} from "lucide-react";

const travelTimes = [
  {
    icon: Building2,
    label: "Lokapriya Airport",
    time: "~25 min",
    dist: "22 km",
  },
  {
    icon: TrainFront,
    label: "Guwahati Railway Station",
    time: "~15 min",
    dist: "9 km",
  },
  { icon: Bus, label: "ISBT Betkuchi", time: "~10 min", dist: "5 km" },
  { icon: Car, label: "Kamakhya Temple", time: "~18 min", dist: "8 km" },
];

export default function Location() {
  return (
    <section id="location" className="py-[12px] md:py-14 bg-ivory px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gold font-inter text-xs tracking-[0.4em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-playfair text-forest text-3xl md:text-5xl gold-line-center">
            Our Location
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm overflow-hidden luxury-shadow border border-charcoal/10 min-h-80"
          >
            <iframe
              title="Hotel Subansiri Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0!2d91.7362!3d26.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA4JzUyLjEiTiA5McKwNDQnMTAuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ minHeight: "280px", border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {/* Address */}
            <div className="bg-forest rounded-sm p-5 border border-gold/10 luxury-shadow">
              <div className="flex items-start gap-4 mb-6">
                <MapPin size={20} className="text-gold flex-none mt-1" />
                <div>
                  <p className="text-gold font-inter text-xs tracking-[0.3em] uppercase mb-3">
                    Address
                  </p>
                  <h3 className="font-playfair text-ivory text-xl mb-2">
                    Hotel Subansiri
                  </h3>
                  <p className="text-ivory/60 font-inter text-sm leading-relaxed">
                    64, Nayanpur Rd,
                    <br />
                    GMC Ward Number 44,
                    <br />
                    Ganeshguri, Guwahati,
                    <br />
                    Assam 781006
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Hotel+Subansiri+64+Nayanpur+Rd+Ganeshguri+Guwahati+Assam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gold text-forest font-inter text-xs font-semibold px-5 py-3 tracking-widest uppercase hover:bg-gold-light transition-all duration-300 justify-center"
                >
                  <Navigation size={13} />
                  Open in Google Maps
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-2 border border-gold/30 text-gold font-inter text-xs px-5 py-3 tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 justify-center"
                >
                  <Phone size={13} />
                  Call Hotel
                </a>
              </div>
            </div>

            {/* Travel times */}
            <div className="bg-white rounded-sm p-5 border border-charcoal/8 luxury-shadow">
              <p className="text-forest/60 font-inter text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
                <Clock size={11} /> Travel Times
              </p>
              <div className="grid grid-cols-2 gap-3">
                {travelTimes.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-3 px-3 py-2 bg-ivory rounded-sm"
                  >
                    <t.icon size={14} className="text-gold flex-none" />
                    <div>
                      <p className="text-forest font-inter text-xs font-medium leading-snug">
                        {t.label}
                      </p>
                      <p className="text-charcoal/50 font-inter text-xs">
                        {t.time} . {t.dist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
