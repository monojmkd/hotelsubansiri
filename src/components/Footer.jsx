import { AtSign, Globe, Link, Mail, MapPin, Phone, Share2 } from "lucide-react";

const quickLinks = [
  "Rooms & Suites",
  "Amenities",
  "Gallery",
  "Location",
  "Contact",
  "FAQs",
];

export default function Footer() {
  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase().replace(/[^a-z]/g, ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-forest border-t border-gold/10 assamese-pattern text-ivory"
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <p className="font-playfair text-gold text-sm tracking-widest uppercase mb-0.5">
                Hotel
              </p>
              <p className="font-playfair text-ivory text-3xl">Subansiri</p>
            </div>
            <div className="w-10 h-0.5 bg-gold mb-5" />
            <p className="text-ivory/55 font-inter text-sm leading-relaxed">
              A comfortable stay in the heart of Guwahati, shaped by warm
              Assamese hospitality and thoughtful city convenience.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, Link, AtSign, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/60 hover:bg-gold/10 transition-all duration-300"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-inter text-xs tracking-[0.3em] uppercase mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-ivory/55 font-inter text-sm text-left hover:text-gold transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-inter text-xs tracking-[0.3em] uppercase mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+918453243950"
                className="flex items-start gap-3 text-ivory/55 hover:text-gold transition-colors group"
              >
                <Phone
                  size={13}
                  className="flex-none mt-0.5 group-hover:text-gold"
                />
                <span className="font-inter text-sm">+91 8453243950</span>
              </a>
              <a
                href="mailto:info@hotelsubansiri.com"
                className="flex items-start gap-3 text-ivory/55 hover:text-gold transition-colors group"
              >
                <Mail
                  size={13}
                  className="flex-none mt-0.5 group-hover:text-gold"
                />
                <span className="font-inter text-sm">
                  info@hotelsubansiri.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-ivory/55">
                <MapPin size={13} className="flex-none mt-0.5 text-gold" />
                <span className="font-inter text-sm leading-relaxed">
                  64, Nayanpur Rd, GMC Ward 44,
                  <br />
                  Ganeshguri, Guwahati 781006
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-inter text-xs tracking-[0.3em] uppercase mb-5">
              Find Us
            </h4>
            <div className="rounded-sm overflow-hidden border border-gold/15 h-40 md:h-44 luxury-shadow">
              <iframe
                title="Hotel Subansiri Mini Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.414998841019!2d91.7861077!3d26.150610699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591860abfb57%3A0xa30fdc753ef15b2b!2sHotel%20Subansiri!5e0!3m2!1sen!2sin!4v1780597228595!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: "block",
                  filter: "grayscale(20%) contrast(95%)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-ivory/35 font-inter text-xs tracking-wide text-center">
            (c) {new Date().getFullYear()} Hotel Subansiri, Guwahati. All rights
            reserved.
          </p>
          <p className="text-ivory/25 font-inter text-xs">
            Ganeshguri . Guwahati . Assam . India
          </p>
        </div>
        <p className="text-ivory/25 font-inter text-xs mt-1 text-center">
          Made by{" "}
          <a
            href="https://monojkumardas.in/"
            className="text-gold/50 hover:text-gold transition-colors"
          >
            monoj.mkd
          </a>
        </p>
      </div>

      <div className="md:hidden h-16" />
    </footer>
  );
}
