import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  BedDouble,
  Search,
  X,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const HOTEL_WHATSAPP = "918453243950";

const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Super Deluxe Room",
  "Suite",
];

const inputStyle = {
  backgroundColor: "#1A4535",
  border: "1px solid rgba(200,167,106,0.4)",
  color: "#F8F6F2",
  colorScheme: "dark",
  height: "48px",
};

const inputErrorStyle = {
  ...inputStyle,
  border: "1px solid rgba(239,68,68,0.7)",
};

const optStyle = { backgroundColor: "#0F2D24" };

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const a = new Date(checkIn);
  const b = new Date(checkOut);
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

export default function BookingCard() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [room, setRoom] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function validate() {
    const e = {};
    if (!checkIn) e.checkIn = "Please select a check-in date.";
    if (!checkOut) e.checkOut = "Please select a check-out date.";
    if (checkIn && checkOut && checkOut <= checkIn)
      e.checkOut = "Check-out must be after check-in.";
    return e;
  }

  function handleCheck() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setShowModal(true);
  }

  function handleWhatsApp() {
    const nights = getNights(checkIn, checkOut);
    const roomLabel = room || "Any Room";
    const msg =
      `Hello Hotel Subansiri,\n` +
      `I would like to enquire about a room booking.\n\n` +
      `Room Type: ${roomLabel}\n` +
      `Check-in: ${formatDate(checkIn)}\n` +
      `Check-out: ${formatDate(checkOut)}\n` +
      `Guests: ${guests} Guest${guests > 1 ? "s" : ""}\n` +
      `Duration: ${nights} Night${nights !== 1 ? "s" : ""}\n\n` +
      `Please let me know the room tariff and availability.\n` +
      `Thank you.`;
    window.open(
      `https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setShowModal(false);
  }

  return (
    <section id="booking" className="relative z-20 -mt-12 px-4 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gold/30 p-6 md:p-10"
        style={{ backgroundColor: "#12362D" }}
      >
        <p className="text-gold font-inter text-xs tracking-[0.3em] uppercase mb-6 text-center md:text-left">
          Check Availability
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {/* Check-in */}
          <div className="col-span-1 flex flex-col gap-2">
            <label
              htmlFor="checkin"
              className="text-gold/70 font-inter text-xs tracking-wider uppercase flex items-center gap-1.5"
            >
              <Calendar size={11} aria-hidden="true" /> Check-in
            </label>
            <input
              id="checkin"
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => {
                setCheckIn(e.target.value);
                setErrors((prev) => ({ ...prev, checkIn: undefined }));
              }}
              aria-label="Check-in date"
              aria-describedby={errors.checkIn ? "checkin-error" : undefined}
              className="font-inter text-sm px-3 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-2xl w-full transition-all"
              style={errors.checkIn ? inputErrorStyle : inputStyle}
            />
            {errors.checkIn && (
              <p
                id="checkin-error"
                className="text-red-400 text-xs mt-0.5 font-inter"
              >
                {errors.checkIn}
              </p>
            )}
          </div>

          {/* Check-out */}
          <div className="col-span-1 flex flex-col gap-2">
            <label
              htmlFor="checkout"
              className="text-gold/70 font-inter text-xs tracking-wider uppercase flex items-center gap-1.5"
            >
              <Calendar size={11} aria-hidden="true" /> Check-out
            </label>
            <input
              id="checkout"
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => {
                setCheckOut(e.target.value);
                setErrors((prev) => ({ ...prev, checkOut: undefined }));
              }}
              aria-label="Check-out date"
              aria-describedby={errors.checkOut ? "checkout-error" : undefined}
              className="font-inter text-sm px-3 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-2xl w-full transition-all"
              style={errors.checkOut ? inputErrorStyle : inputStyle}
            />
            {errors.checkOut && (
              <p
                id="checkout-error"
                className="text-red-400 text-xs mt-0.5 font-inter"
              >
                {errors.checkOut}
              </p>
            )}
          </div>

          {/* Guests */}
          <div className="col-span-1 flex flex-col gap-2">
            <label
              htmlFor="guests"
              className="text-gold/70 font-inter text-xs tracking-wider uppercase flex items-center gap-1.5"
            >
              <Users size={11} aria-hidden="true" /> Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              aria-label="Number of guests"
              className="font-inter text-sm px-3 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-2xl w-full appearance-none transition-all cursor-pointer"
              style={{ ...inputStyle }}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n} style={optStyle}>
                  {n} Guest{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Room Type */}
          <div className="col-span-1 flex flex-col gap-2">
            <label
              htmlFor="roomtype"
              className="text-gold/70 font-inter text-xs tracking-wider uppercase flex items-center gap-1.5"
            >
              <BedDouble size={11} aria-hidden="true" /> Room Type
            </label>
            <select
              id="roomtype"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              aria-label="Room type"
              className="font-inter text-sm px-3 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-2xl w-full appearance-none transition-all cursor-pointer"
              style={{ ...inputStyle }}
            >
              <option value="" style={optStyle}>
                Any Room
              </option>
              {roomTypes.map((r) => (
                <option key={r} value={r} style={optStyle}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <button
            onClick={handleCheck}
            aria-label="Check room availability"
            className="flex items-center gap-2 bg-gold text-forest font-inter font-semibold text-sm px-10 py-3.5 tracking-widest uppercase hover:bg-amber-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 rounded-2xl w-full md:w-auto justify-center"
          >
            <Search size={15} aria-hidden="true" />
            Check Availability
          </button>
        </div>
      </motion.div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md relative"
              style={{
                background: "#FAF8F4",
                borderRadius: "16px",
                boxShadow: "0 25px 60px rgba(0,0,0,.12)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-400 rounded-full p-1"
              >
                <X size={18} />
              </button>

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div
                    className="flex-shrink-0 rounded-full p-2.5 mt-0.5"
                    style={{ backgroundColor: "rgba(18,54,45,0.08)" }}
                  >
                    <CheckCircle size={22} style={{ color: "#12362D" }} />
                  </div>
                  <div>
                    <h2
                      id="modal-heading"
                      className="font-semibold text-lg leading-tight"
                      style={{ color: "#12362D", fontFamily: "inherit" }}
                    >
                      Booking Request Ready
                    </h2>
                    <p className="text-sm mt-0.5" style={{ color: "#6B7280" }}>
                      Your booking enquiry is ready. Continue on WhatsApp to
                      confirm pricing and availability with our front desk.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full mb-5"
                  style={{ backgroundColor: "rgba(208,176,122,0.35)" }}
                />

                {/* Summary */}
                <div
                  className="rounded-2xl p-4 mb-6 space-y-3"
                  style={{
                    backgroundColor: "rgba(18,54,45,0.05)",
                    border: "1px solid rgba(208,176,122,0.3)",
                  }}
                >
                  <SummaryRow
                    icon={<Calendar size={14} />}
                    label="Check-in"
                    value={formatDate(checkIn)}
                  />
                  <SummaryRow
                    icon={<Calendar size={14} />}
                    label="Check-out"
                    value={formatDate(checkOut)}
                  />
                  <SummaryRow
                    icon={<span style={{ fontSize: 13 }}>🌙</span>}
                    label="Duration"
                    value={`${getNights(checkIn, checkOut)} Night${getNights(checkIn, checkOut) !== 1 ? "s" : ""}`}
                  />
                  <SummaryRow
                    icon={<Users size={14} />}
                    label="Guests"
                    value={`${guests} Guest${guests > 1 ? "s" : ""}`}
                  />
                  <SummaryRow
                    icon={<BedDouble size={14} />}
                    label="Room Type"
                    value={room || "Any Room"}
                  />
                </div>

                {/* Accent line */}
                <div
                  className="h-px w-12 mx-auto mb-6"
                  style={{ backgroundColor: "#D0B07A" }}
                />

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleWhatsApp}
                    aria-label="Continue booking on WhatsApp"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    Continue on WhatsApp
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    aria-label="Cancel and close"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    style={{
                      backgroundColor: "transparent",
                      color: "#6B7280",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
        <div
          className="flex border-t border-gold/20"
          style={{ backgroundColor: "#12362D" }}
        >
          <a
            href="tel:+918453243950"
            aria-label="Call hotel"
            className="flex-1 flex items-center justify-center gap-2 py-4 text-ivory text-sm font-inter tracking-wider border-r border-gold/20 hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/10"
          >
            📞 Call
          </a>
          <button
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to booking form"
            className="flex-1 font-inter font-semibold text-sm py-4 tracking-wider hover:brightness-110 active:brightness-90 transition-all focus:outline-none"
            style={{ backgroundColor: "#D0B07A", color: "#12362D" }}
          >
            Book Now
          </button>
          <a
            href={`https://wa.me/${HOTEL_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex-1 flex items-center justify-center gap-2 py-4 text-ivory text-sm font-inter tracking-wider border-l border-gold/20 hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/10"
          >
            💬 Chat
          </a>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span
        className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium"
        style={{ color: "#9CA3AF" }}
      >
        <span style={{ color: "#D0B07A" }}>{icon}</span>
        {label}
      </span>
      <span className="text-sm font-semibold" style={{ color: "#12362D" }}>
        {value}
      </span>
    </div>
  );
}
