import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingCard from "./components/BookingCard";
import WhyStay from "./components/WhyStay";
import Rooms from "./components/Rooms";
import Discover from "./components/Discover";
import Experience from "./components/Experience";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrustBar from "./components/TrustBar";
import GuestInfo from "./components/GuestInfo";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingCard />
      <TrustBar />
      {/* <WhyStay /> */}
      <Rooms />
      <Discover />
      <Experience />
      <Amenities />
      <Gallery />
      {/* <Testimonials /> */}
      <Location />
      {/* <FAQ /> */}
      <GuestInfo />
      <Contact />
      <Footer />
    </div>
  );
}
