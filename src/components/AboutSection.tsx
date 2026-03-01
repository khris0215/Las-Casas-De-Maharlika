import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-resort.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-warm-beige py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-terracotta mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Welcome To
              <br />
              <span className="gold-text-gradient">Las Casas De Maharlika</span>
            </h2>
            <div className="w-16 h-[2px] gold-gradient mb-8" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              A proposed luxury hotel and casino resort designed to showcase the
              rich tapestry of Filipino heritage. Las Casas De Maharlika is
              envisioned as a premier destination that seamlessly blends premium
              hospitality with deep cultural immersion.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Our vision extends beyond luxury — we aim to promote Philippine
              tourism, support local communities, and provide guests with an
              unforgettable experience rooted in the warmth and grandeur of
              Filipino tradition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="border-2 border-gold/40 p-2">
              <img
                src={aboutImg}
                alt="Las Casas De Maharlika luxury resort lifestyle"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
