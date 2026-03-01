import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import featuredImg from "@/assets/featured-resort.jpg";

const FeaturedSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="border-2 border-gold/40 p-3 luxury-shadow">
            <img
              src={featuredImg}
              alt="Aerial view of Las Casas De Maharlika resort"
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
          <p className="text-center font-serif text-muted-foreground italic mt-6 text-sm tracking-wider">
            A vision of luxury, heritage, and Filipino grandeur
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
