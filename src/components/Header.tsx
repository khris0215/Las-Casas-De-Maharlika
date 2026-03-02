import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  variant?: "fixed" | "static";
};

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Accommodations", href: "/#accommodations" },
  { name: "Casino", href: "/casino" },
  { name: "Dining", href: "/dining" },
  { name: "Contact", href: "/#contact" },
];

const Header = ({ variant = "fixed" }: HeaderProps) => {
  const isFixed = variant === "fixed";
  const [scrolled, setScrolled] = useState(!isFixed);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFixed) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (location.pathname !== href) {
      navigate(href);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const positionClasses = isFixed
    ? "fixed top-0 left-0 right-0"
    : "relative w-full";
  const appearanceClasses = isFixed
    ? scrolled
      ? "bg-navy border-gold/30 shadow-lg"
      : "bg-transparent border-transparent"
    : "bg-navy border-gold/30 shadow-lg";

  return (
    <header
      className={`${positionClasses} z-50 transition-all duration-500 border-b ${appearanceClasses}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider gold-text-gradient">
            Las Casas De Maharlika
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="font-sans text-sm tracking-widest uppercase text-gold-light hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gold"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-sm tracking-widest uppercase text-gold-light hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
