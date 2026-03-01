import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="navy-gradient border-t border-gold/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold gold-text-gradient mb-4">
              Las Casas De Maharlika
            </h3>
            <p className="font-sans text-sm text-gold-light/60 leading-relaxed">
              A luxury casino hotel celebrating Filipino heritage and world-class
              hospitality.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gold-light/70 text-sm">
                <MapPin size={16} className="text-gold shrink-0" />
                <span>H29X+Q66, Barangka Ilaya, Mandaluyong City, Metro Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light/70 text-sm">
                <Mail size={16} className="text-gold shrink-0" />
                <span>info@lascasasdemaharlika.com</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light/70 text-sm">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+63 9762903883</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Accommodations", "Casino", "Dining"].map((link) => (
                <button
                  key={link}
                  className="block font-sans text-sm text-gold-light/60 hover:text-gold transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="font-sans text-xs text-gold-light/40 tracking-wider">
            © 2026 Las Casas De Maharlika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
