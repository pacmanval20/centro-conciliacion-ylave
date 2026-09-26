import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutUs from "@/components/AboutUs";
import FaqAccordion from "@/components/FaqAccordion";
import ContactWhatsapp from "@/components/ContactWhatsapp";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <div className="section-divider" />

        <ServicesGrid />

        <div className="section-divider" />

        <AboutUs />

        <div className="section-divider" />

        <FaqAccordion />

        <div className="section-divider" />

        <ContactWhatsapp />
      </main>

      <Footer />
    </>
  );
}
