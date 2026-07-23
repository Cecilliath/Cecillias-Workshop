import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  const scrollToSection = (section: string, closeMenu = false) => {
    if (closeMenu) setIsOpen(false);

    if (section === "home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname === "/") {
      document.querySelector(`#${section}`)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-soft-white/90 backdrop-blur-md shadow-soft border-b border-beige/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-[4.5rem] flex items-center justify-between">
        <Link
          to="/"
          onClick={() => scrollToSection("home")}
          className="font-display text-xl md:text-2xl font-semibold text-charcoal tracking-tight"
        >
          Cecillia<span className="text-brown-light italic">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative text-sm font-medium text-charcoal/70 hover:text-brown transition-colors duration-300
                after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blush-dark
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brown rounded-xl hover:bg-beige/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-soft-white/95 backdrop-blur-md border-t border-beige/40"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(section.id, true)}
                  className="text-left py-3 px-4 text-charcoal/80 hover:text-brown hover:bg-beige/30 rounded-xl transition-all text-base font-medium"
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
