import React from "react";
import { SiWhatsapp, SiGmail, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-charcoal text-cream/80 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blush/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-cream font-medium mb-2">
              Cecillia Tan Handoko
            </p>
            <p className="text-sm text-cream/50 leading-relaxed">
              Visual Communication Design
              <br />
              Universitas Tarumanagara · Jakarta
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="section-label text-cream/40 mb-4">Navigate</h3>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Projects", "Experience", "Skills", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={link === "Home" ? "/" : `/#${link.toLowerCase()}`}
                    className="text-sm text-cream/60 hover:text-blush transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
              <Link
                to="/certifications"
                className="text-sm text-cream/60 hover:text-blush transition-colors duration-200"
              >
                Certifications
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="section-label text-cream/40 mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilliatanhandoko555@gmail.com"
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-blush transition-colors"
              >
                <SiGmail className="text-base" />
                Email
              </a>
              <a
                href="https://www.instagram.com/liaura.c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-blush transition-colors"
              >
                <SiInstagram className="text-base" />
                @liaura.c
              </a>
              <a
                href="https://wa.me/6281514383863"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-blush transition-colors"
              >
                <SiWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6">
          <p className="text-center text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Cecillia Tan Handoko. Crafted with care in Jakarta.
          </p>
        </div>
      </div>
    </footer>
  );
};
