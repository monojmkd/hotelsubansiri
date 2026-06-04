import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HOTEL_WHATSAPP = "919707741308";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const ref = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
      `Hello Hotel Subansiri,\n\n` +
      `I would like to make an enquiry.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n\n` +
      `Message:\n${form.message}\n\n` +
      `Please get back to me regarding this enquiry.`;

    window.open(
      `https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
      "_blank",
    );

    setForm({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-ivory px-4">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-gold font-inter text-xs tracking-[0.4em] uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="font-playfair text-forest text-3xl md:text-5xl gold-line-center">
            Contact Us
          </h2>

          <p className="text-charcoal/60 font-inter text-base max-w-lg mx-auto mt-4 leading-relaxed">
            Have a question or want to enquire about a room? Send us a message
            directly on WhatsApp and our team will assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-forest rounded-2xl p-5 md:p-6 luxury-shadow"
          >
            <h3 className="font-playfair text-ivory text-2xl mb-2">
              Let's Talk
            </h3>

            <div className="w-10 h-0.5 bg-gold mb-6" />

            <div className="flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-none">
                  <Phone size={16} className="text-gold" />
                </div>

                <div>
                  <p className="text-gold/60 font-inter text-xs tracking-widest uppercase mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+919707741308"
                    className="text-ivory font-inter text-base hover:text-gold transition-colors"
                  >
                    +91 97077 41308
                  </a>

                  <p className="text-ivory/40 text-xs mt-1">Available 24×7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-none">
                  <Mail size={16} className="text-gold" />
                </div>

                <div>
                  <p className="text-gold/60 font-inter text-xs tracking-widest uppercase mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@hotelsubansiri.com"
                    className="text-ivory font-inter text-base hover:text-gold transition-colors"
                  >
                    info@hotelsubansiri.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-none">
                  <MapPin size={16} className="text-gold" />
                </div>

                <div>
                  <p className="text-gold/60 font-inter text-xs tracking-widest uppercase mb-1">
                    Address
                  </p>

                  <p className="text-ivory font-inter text-sm leading-relaxed">
                    64, Nayanpur Rd,
                    <br />
                    GMC Ward Number 44,
                    <br />
                    Ganeshguri,
                    <br />
                    Guwahati, Assam 781006
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/10">
              <p className="text-gold/40 text-xs italic tracking-wide">
                “Warm Assamese hospitality awaits you.”
              </p>
            </div>
          </motion.div>

          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-5 md:p-6 border border-charcoal/10 luxury-shadow flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label className="text-charcoal/50 font-inter text-xs tracking-widest uppercase">
                  Name *
                </label>

                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="border border-charcoal/15 bg-white px-4 py-3 rounded-xl font-inter text-sm focus:outline-none focus:border-gold/60"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-charcoal/50 font-inter text-xs tracking-widest uppercase">
                  Phone *
                </label>

                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="border border-charcoal/15 bg-white px-4 py-3 rounded-xl font-inter text-sm focus:outline-none focus:border-gold/60"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-charcoal/50 font-inter text-xs tracking-widest uppercase">
                  Message *
                </label>

                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us your requirements, room preferences, travel dates, or any questions..."
                  className="border border-charcoal/15 bg-white px-4 py-3 rounded-xl resize-none font-inter text-sm focus:outline-none focus:border-gold/60"
                />
              </div>

              <button
                type="submit"
                className="
                flex
                items-center
                justify-center
                gap-2
                bg-[#25D366]
                text-white
                font-inter
                text-sm
                font-semibold
                px-8
                py-4
                tracking-widest
                uppercase
                rounded-2xl
                hover:bg-[#22c55e]
                transition-all
                duration-300
              "
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
