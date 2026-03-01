import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm md:text-base tracking-[0.4em] uppercase text-gold-light mb-4"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold gold-text-gradient mb-4 leading-tight"
        >
          Las Casas De Maharlika
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-xl md:text-2xl italic text-gold-light/80 mb-10 tracking-wider"
        >
          Casino Hotel
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          onClick={scrollToAbout}
          className="gold-gradient px-10 py-3 text-accent-foreground font-sans text-sm tracking-[0.3em] uppercase font-bold rounded-sm hover:gold-glow transition-all duration-500 hover:scale-105"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
