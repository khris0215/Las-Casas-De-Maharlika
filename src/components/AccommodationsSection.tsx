import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSeaview from "@/assets/room-seaview.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const rooms = [
  {
    id: "deluxe",
    name: "Abaniko (Standard Room)",
    price: 11000,
    occupancy: "",
    image: roomDeluxe,
  },
  {
    id: "seaview",
    name: "Perlas (Deluxe Room)",
    price: 20000,
    occupancy: "",
    image: roomSeaview,
  },
  {
    id: "suite",
    name: "Maharlika Suite",
    price: 30000,
    occupancy: "",
    image: roomSuite,
  },
];

const AccommodationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accommodations" className="bg-warm-beige py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-terracotta mb-4">
            Rooms & Suites
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">
            Accommodations
          </h2>
          <div className="w-16 h-[2px] gold-gradient mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Link
                to={`/rooms/${room.id}`}
                className="group block border border-gold/30 bg-card hover:gold-glow transition-all duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="font-sans text-xs text-muted-foreground tracking-wider mb-2">
                    {room.occupancy}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                    {room.name}
                  </h3>
                  <div className="w-8 h-[1px] gold-gradient mx-auto mb-3" />
                  <p className="font-sans text-sm text-gold-dark font-bold tracking-wider">
                    from ₱{room.price} <span className="font-normal text-muted-foreground">a night</span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
