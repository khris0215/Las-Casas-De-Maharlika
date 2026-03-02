import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Wifi, Wind, Tv, Wine, Bath, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSeaview from "@/assets/room-seaview.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const roomData: Record<string, {
  name: string;
  price: number;
  image: string;
  description: string;
  occupancy: string;
}> = {
  deluxe: {
    name: "Abaniko (Standard Room)",
    price: 11000,
    image: roomDeluxe,
    occupancy: "2 adults | 1 child below 7",
    description:
      "Experience refined comfort in our Standard room, featuring elegant Filipino-inspired décor, premium bedding, and modern amenities. Each room offers a serene retreat with warm ambient lighting and thoughtful touches that reflect the rich cultural heritage of the Philippines.",
  },
  seaview: {
    name: "Perlas (Deluxe Room)",
    price: 20000,
    image: roomSeaview,
    occupancy: "2 adults | 1 child below 7",
    description:
      "A luxurious hotel bedroom featuring elegant Filipino-inspired décor, warm ambient lighting, and a stunning sunset city view through floor-to-ceiling windows. The space blends comfort, sophistication, and cultural charm for a relaxing premium stay.",
  },
  suite: {
    name: "Maharlika Suite",
    price: 30000,
    image: roomSuite,
    occupancy: "4 adults | 2 children below 7",
    description:
      "Our most spacious accommodation, The Maharlika Suite offers a grand living experience with separate living and sleeping areas. Adorned with opulent Filipino craftsmanship, this suite is perfect for families seeking the ultimate in luxury and comfort.",
  },
};

const amenities = [
  { icon: Wifi, name: "High-Speed WiFi" },
  { icon: Wind, name: "Air Conditioning" },
  { icon: Tv, name: "Smart TV" },
  { icon: Wine, name: "Mini Bar" },
  { icon: Bath, name: "Luxury Bathroom" },
  { icon: Coffee, name: "Coffee Maker" },
];

const RoomDetails = () => {
  const { roomId } = useParams();
  const room = roomData[roomId || ""];

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-primary mb-4">Room Not Found</h1>
          <Link to="/" className="text-gold hover:text-gold-dark transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${room.image})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold gold-text-gradient mb-2"
          >
            {room.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm text-gold-light/70 tracking-wider"
          >
            {room.occupancy}
          </motion.p>
        </div>
      </div>

      {/* Details */}
      <section className="bg-warm-beige py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/#accommodations"
            className="inline-flex items-center gap-2 text-sm text-terracotta hover:text-gold-dark transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to Accommodations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-muted-foreground leading-relaxed text-lg mb-12">
              {room.description}
            </p>

            <div className="mb-12">
              <h3 className="font-serif text-2xl text-primary mb-6">Amenities</h3>
              <div className="w-12 h-[2px] gold-gradient mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {amenities.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex items-center gap-3 text-foreground">
                    <Icon size={20} className="text-gold" />
                    <span className="font-sans text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gold/30 pt-8">
              <p className="font-serif text-2xl text-primary mb-4 sm:mb-0">
                From <span className="gold-text-gradient font-bold">₱{room.price}</span>{" "}
                <span className="text-base text-muted-foreground">per night</span>
              </p>
              <button className="gold-gradient px-10 py-3 text-accent-foreground font-sans text-sm tracking-[0.3em] uppercase font-bold rounded-sm hover:gold-glow transition-all duration-500 hover:scale-105">
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetails;
