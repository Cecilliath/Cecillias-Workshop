import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "Committee of CREBO II : Eclipse of Eternity",
      file: "crebo1_certi.png",
    },
    {
      title: "Committee of Crebo III : Dive Into The Dives",
      file: "CREBO 3 DIVE INTO THE DIVES.jpeg",
    },
    {
      title: "UNTAR ASTARIKA 2025 Committee",
      file: "ASTARIKA UNTAR.jpeg",
    },
    {
      title: "Creasia: Creativity Together, Growing Sustainable",
      file: "Creasia Creativity Together Growing Sustainable.jpeg",
    },
    {
      title: "Seminar Anti Plagiasi Visual UNTAR",
      file: "Seminar Anti Plagiat Visual UNTAR.jpeg",
    },
    {
      title: "STELLAR 8.0: Bloom",
      file: "STELLAR 8.0 BLOOME UNTAR.jpeg",
    },
    {
      title: "Pameran Multimedia UNTAR",
      file: "Multimedia UNTAR.jpeg",
    },
    {
      title: "Pameran Studi Media Desain UNTAR",
      file: "Studi Media Design UNTAR.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <NavBar />

      <div className="pt-28 pb-16 px-5 md:px-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-brown-light hover:text-brown transition-colors mb-10"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="section-label mb-3">Achievements</p>
            <h1 className="section-title">Certifications</h1>
            <div className="section-divider" />
            <p className="text-charcoal/55 text-base max-w-lg mt-4">
              A showcase of my achievements and learning milestones throughout my design journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="cursor-pointer card-soft overflow-hidden hover:shadow-elevated transition-all duration-300 group"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(cert.file)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/certificates/${cert.file}`}
                    alt={cert.title}
                    className="object-cover w-full h-52 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/10 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <span className="inline-block text-[10px] uppercase tracking-widest font-medium text-brown-light bg-beige/40 px-2.5 py-1 rounded-full mb-2">
                    Certificate
                  </span>
                  <h2 className="text-sm font-medium text-charcoal leading-snug">
                    {cert.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-soft-white/10 flex items-center justify-center text-cream hover:bg-soft-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FiX className="text-xl" />
              </button>
              <motion.img
                src={`/certificates/${selectedImage}`}
                alt="Enlarged certificate"
                className="max-w-4xl max-h-[85vh] rounded-2xl shadow-elevated"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};
