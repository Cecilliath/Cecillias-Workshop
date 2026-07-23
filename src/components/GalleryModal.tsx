import React, { useState } from "react";
import { motion } from "framer-motion";

interface Art {
  name: string;
  image: string;
  pdf?: string;
}

interface Props {
  arts: Art[];
  initialIndex?: number;
}

export const GalleryModal: React.FC<Props> = ({ arts, initialIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectedArt = arts[selectedIndex];

  return (
    <div className="w-full max-w-full mx-auto">
      <div className="w-full flex flex-col items-center mb-8">
        <motion.div
          key={selectedArt.image}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl card-soft p-4 md:p-6"
        >
          <img
            src={selectedArt.image}
            alt={selectedArt.name}
            className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-contain rounded-2xl"
          />
        </motion.div>

        <h2 className="font-display text-2xl md:text-3xl font-medium text-charcoal mt-6">
          {selectedArt.name}
        </h2>

        {selectedArt.pdf && (
          <a
            href={selectedArt.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 btn-primary text-sm"
          >
            View Project Details
          </a>
        )}
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
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
