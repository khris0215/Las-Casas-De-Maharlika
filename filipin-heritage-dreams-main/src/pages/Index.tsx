import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <AccommodationsSection />
      <Footer />
    </div>
  );
};

export default Index;
