import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock3, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "15+",
    numeric: 15,
    suffix: "+",
    label: "Years of Hospitality",
    sub: "Est. 2009",
  },
  {
    icon: Clock3,
    value: "24×7",
    numeric: null,
    suffix: "",
    label: "Guest Support",
    sub: "Always here for you",
  },
  {
    icon: MapPin,
    value: "Prime",
    numeric: null,
    suffix: "",
    label: "Location",
    sub: "Ganeshguri, Guwahati",
  },
];

function useCountUp(target, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatItem({ item, index, active }) {
  const count = useCountUp(item.numeric, 1200, active);
  const displayValue =
    item.numeric !== null ? `${count}${item.suffix}` : item.value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col items-center text-center px-8 py-2"
      style={{ flex: "1 1 0" }}
    >
      {/* Icon badge */}
      <div
        className="relative mb-5 flex items-center justify-center"
        style={{ width: 52, height: 52 }}
      >
        {/* Rotating ring on hover */}
        <svg
          className="absolute inset-0 transition-transform duration-700 group-hover:rotate-90"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
        >
          <rect
            x="2"
            y="2"
            width="48"
            height="48"
            rx="6"
            stroke="#D0B07A"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.5"
          />
        </svg>
        <div
          className="relative z-10 flex items-center justify-center rounded"
          style={{
            width: 40,
            height: 40,
            background: "rgba(208,176,122,0.1)",
          }}
        >
          <item.icon size={18} color="#D0B07A" />
        </div>
      </div>

      {/* Numeral */}
      <span
        className="block leading-none mb-1 transition-all duration-300 group-hover:scale-105"
        style={{
          fontFamily:
            "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
          fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
          fontWeight: 700,
          color: "#12362D",
          letterSpacing: "-0.02em",
        }}
      >
        {displayValue}
      </span>

      {/* Label */}
      <span
        className="block mb-1.5"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#12362D",
          letterSpacing: "0.04em",
        }}
      >
        {item.label}
      </span>

      {/* Gold ornament + sub */}
      <div className="flex items-center gap-2 justify-center">
        <span style={{ color: "#D0B07A", fontSize: 10 }}>◆</span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.72rem",
            color: "#9CA3AF",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {item.sub}
        </span>
        <span style={{ color: "#D0B07A", fontSize: 10 }}>◆</span>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FAF8F4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.018,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }}
      />

      {/* Top gold hairline */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, #D0B07A 30%, #D0B07A 70%, transparent 100%)",
          opacity: 0.55,
        }}
      />

      <div
        className="max-w-5xl mx-auto px-4"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        {/* Section eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#D0B07A",
          }}
        >
          Our Promise to You
        </motion.p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {stats.map((item, i) => (
            <div
              key={item.label}
              style={{
                flex: "1 1 200px",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <StatItem item={item} index={i} active={inView} />
              {/* Vertical gold rule — between items only */}
              {i < stats.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={inView ? { scaleY: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    transformOrigin: "top",
                    background:
                      "linear-gradient(180deg, transparent 0%, #D0B07A 25%, #D0B07A 75%, transparent 100%)",
                    opacity: 0.4,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <div
            style={{
              height: 1,
              width: 64,
              background: "linear-gradient(90deg, transparent, #D0B07A)",
              opacity: 0.5,
            }}
          />
          <span style={{ color: "#D0B07A", fontSize: 10 }}>✦</span>
          <div
            style={{
              height: 1,
              width: 64,
              background: "linear-gradient(90deg, #D0B07A, transparent)",
              opacity: 0.5,
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gold hairline */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, #D0B07A 30%, #D0B07A 70%, transparent 100%)",
          opacity: 0.55,
        }}
      />
    </section>
  );
}
