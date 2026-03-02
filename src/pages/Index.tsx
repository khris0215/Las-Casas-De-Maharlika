import { Link } from "react-router-dom";
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
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <Link
            to="/casino"
            className="block rounded-3xl border border-gold/30 bg-card p-10 transition-all duration-500 hover:-translate-y-2 hover:gold-glow"
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-terracotta">
              Casino
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary">
              Step onto the gaming floor.
            </h2>
            <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
              Review every table and slot description before you arrive. Tap
              anywhere on this card to open the complete text-only guide to our
              casino offerings.
            </p>
            <span className="mt-6 inline-flex items-center text-xs font-semibold tracking-[0.3em] uppercase text-gold-dark">
              View Casino Details →
            </span>
          </Link>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <Link
            to="/dining"
            className="block rounded-3xl border border-gold/30 bg-card p-10 transition-all duration-500 hover:-translate-y-2 hover:gold-glow"
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-terracotta">
              Dining
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary">
              Preview the full menu.
            </h2>
            <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
              Follow this section to a dedicated page where every course is
              written out, ensuring you can plan your culinary journey with
              clarity.
            </p>
            <span className="mt-6 inline-flex items-center text-xs font-semibold tracking-[0.3em] uppercase text-gold-dark">
              Explore Dining →
            </span>
          </Link>
        </div>
      </section>
      <AccommodationsSection />
      <Footer />
    </div>
  );
};

export default Index;
