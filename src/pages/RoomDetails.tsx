import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Wifi, Wind, Tv, Wine, Bath, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSeaview from "@/assets/room-seaview.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const roomData: Record<
  string,
  {
    name: string;
    price: number;
    image: string;
    description: string;
    occupancy: string;
  }
> = {
  deluxe: {
    name: "Tahanan Familia Suite",
    price: 11000,
    image: roomDeluxe,
    occupancy: "85-100 sqm • Up to 4 guests • Flexible bed arrangements",
    description:
      "The Tahanan Familia Suite is an 85-100 sqm haven designed for families and close-knit groups. Choose between two queen-size beds or one king-size bed paired with two single beds, with space for additional rollaways when needed. A separate living room, private dining area, mini bar, work desk, and expansive luxury bathroom echo the warmth of a Filipino home while delivering modern conveniences, high-speed WiFi, and reliable air conditioning. Standout amenities include the dedicated living room, private dining space, bathtub and rain shower combination, dual Smart TVs for both bedroom and lounge, and wide windows framing either city or resort views.",
  },
  seaview: {
    name: "Perlas Premium Suite",
    price: 20000,
    image: roomSeaview,
    occupancy: "55-65 sqm • King bed • Up to 2 guests (third on request)",
    description:
      "The Perlas Premium Suite is a 55-65 sqm sanctuary tailored for couples or solo travelers craving privacy and polish. A plush king-size bed anchors the space, comfortably hosting two guests while allowing a third upon request. Enjoy a private living area, ergonomic work desk, well-stocked mini bar, and a generous bathroom fitted with premium fixtures. Filipino-inspired accents, contemporary furnishings, dependable high-speed WiFi, climate control, and floor-to-ceiling windows with sweeping city views set a calming tone for both leisure escapes and business stays. Amenities include the separate lounge, rain shower and bathtub, full-height glazing, a 55-inch Smart TV, the mini bar with coffee and tea station, and a roomy wardrobe complete with safety deposit box.",
  },
  suite: {
    name: "Maharlika Executive Suite",
    price: 30000,
    image: roomSuite,
    occupancy: "130-160 sqm • King bed • Up to 2 guests (expandable)",
    description:
      "The Maharlika Executive Suite spans 130-160 sqm and caters to executives or VIP travelers who expect absolute discretion and comfort. A refined master bedroom links to a separate luxury living room, private dining area, executive-caliber workspace, and an oversized bathroom lined with premium finishes. Floor-to-ceiling panoramic windows, integrated smart technology, fast WiFi, and well-balanced air conditioning ensure effortless transitions from work to relaxation. Signature amenities include the stand-alone living salon, private dining enclave, bathroom with bathtub, rain shower, and double sinks, a walk-in closet, sweeping panoramic glazing, and the option for dedicated private butler service.",
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
          <h1 className="font-serif text-3xl text-primary mb-4">
            Room Not Found
          </h1>
          <Link
            to="/"
            className="text-gold hover:text-gold-dark transition-colors"
          >
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
              <h3 className="font-serif text-2xl text-primary mb-6">
                Amenities
              </h3>
              <div className="w-12 h-[2px] gold-gradient mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {amenities.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <Icon size={20} className="text-gold" />
                    <span className="font-sans text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gold/30 pt-8">
              <p className="font-serif text-2xl text-primary mb-4 sm:mb-0">
                From{" "}
                <span className="gold-text-gradient font-bold">
                  ₱{room.price}
                </span>{" "}
                <span className="text-base text-muted-foreground">
                  per night
                </span>
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
