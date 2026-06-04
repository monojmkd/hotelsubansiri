import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = ['Rooms', 'Amenities', 'Gallery', 'Location', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark luxury-shadow' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col leading-none">
            <span className="font-playfair text-gold text-lg md:text-xl font-semibold tracking-widest uppercase">Hotel</span>
            <span className="font-playfair text-ivory text-xl md:text-2xl font-semibold tracking-wider">Subansiri</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-ivory/80 hover:text-gold font-inter text-sm tracking-widest uppercase transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 text-gold border border-gold/40 px-4 py-2 rounded-sm text-sm tracking-wider hover:bg-gold hover:text-forest transition-all duration-300"
            >
              <Phone size={14} />
              Call Now
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-gold text-forest px-5 py-2 text-sm tracking-wider font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Book Stay
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ivory p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 glass-dark border-t border-gold/10 luxury-shadow"
          >
            <div className="flex flex-col py-6 px-6 gap-5">
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link)}
                  className="text-ivory text-left font-inter text-base tracking-widest uppercase border-b border-gold/10 pb-4 last:border-0 hover:text-gold transition-colors"
                >
                  {link}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="bg-gold text-forest py-3 font-semibold tracking-wider text-sm mt-2"
              >
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
