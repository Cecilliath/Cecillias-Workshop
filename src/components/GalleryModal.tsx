import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiDownload, FiFolder } from "react-icons/fi";
import type { ArtGalleryItem } from "../data/artGalleryItems";

interface Props {
  arts: ArtGalleryItem[];
  initialIndex?: number;
}

export const GalleryModal: React.FC<Props> = ({ arts, initialIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectedArt = arts[selectedIndex] || arts[0];

  return (
    <div className="w-full max-w-full mx-auto">
      <div className="w-full flex flex-col items-center mb-8">
        <motion.div
          key={selectedArt.image + selectedIndex}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl card-soft p-4 md:p-6 flex flex-col items-center"
        >
          {selectedArt.isVideo ? (
            <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] bg-charcoal/90 rounded-2xl flex flex-col items-center justify-center p-6 text-cream text-center">
              <p className="text-lg font-medium mb-3">{selectedArt.name}</p>
              <p className="text-xs text-cream/70 mb-5">Video preview available on Google Drive</p>
              {selectedArt.driveUrl && (
                <a
                  href={selectedArt.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2 text-sm"
                >
                  <FiExternalLink /> Watch Video on Google Drive
                </a>
              )}
            </div>
          ) : (
            <img
              src={selectedArt.image}
              alt={selectedArt.name}
              className="w-full h-[280px] sm:h-[400px] md:h-[520px] object-contain rounded-2xl"
              onError={(e) => {
                // Fallback to Google Drive view if thumbnail load has issues
                if (selectedArt.driveUrl) {
                  (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${selectedArt.id}&sz=w800`;
                }
              }}
            />
          )}
        </motion.div>

        <div className="flex flex-col items-center text-center mt-6">
          {selectedArt.category && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brown px-3 py-1 rounded-full bg-beige/50 mb-2">
              <FiFolder className="text-brown-light" />
              {selectedArt.category}
            </span>
          )}
          
          <h2 className="font-display text-2xl md:text-3xl font-medium text-charcoal">
            {selectedArt.name}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            {selectedArt.pdf && (
              <a
                href={selectedArt.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 text-sm"
              >
                <FiDownload /> View PDF / Details
              </a>
            )}

            {selectedArt.driveUrl && (
              <a
                href={selectedArt.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline gap-2 text-sm"
              >
                <FiExternalLink /> Open in Google Drive
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex overflow-x-auto gap-3 py-4 px-2 snap-x snap-mandatory scroll-smooth max-w-4xl">
          {arts.map((art, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 snap-start cursor-pointer rounded-2xl border-2 transition-all w-[88px] h-[88px] p-1.5 ${
                index === selectedIndex
                  ? "border-brown shadow-soft bg-blush/20"
                  : "border-beige/60 bg-soft-white hover:border-blush/60"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={art.image}
                alt={art.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

