import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";
import { useViewportVideo } from "../hooks/useViewportVideo";

interface Props {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedMotionCV: React.FC<Props> = ({ project, onSelectProject }) => {
  const { videoRef, hasError, setHasError } = useViewportVideo(0.4);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 md:mb-20 cursor-pointer group"
      onClick={() => onSelectProject(project)}
    >
      <div className="flex items-center justify-between mb-3 border-b border-beige/40 pb-2">
        <span className="text-[11px] uppercase tracking-widest font-mono text-brown font-medium">
          ✦ FEATURED MOTION PIECE
        </span>
        <span className="text-xs text-charcoal/40 font-mono">
          {project.category} · {project.year}
        </span>
      </div>

      {/* Editorial Video Hero Framing - Clean & Quiet */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-charcoal/90 overflow-hidden shadow-soft group-hover:shadow-elevated transition-shadow duration-500">
        {!hasError && project.previewVideo ? (
          <video
            ref={videoRef}
            src={project.previewVideo}
            poster={project.thumbnail}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        )}

        {/* Minimal Editorial Overlay on Hover */}
        <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 md:p-8 pointer-events-none">
          <span className="text-cream text-xs font-mono tracking-wider uppercase bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2">
            EXPLORE PROJECT DETAILS <FiArrowUpRight className="text-sm" />
          </span>
        </div>
      </div>

      {/* Minimal Project Metadata Below */}
      <div className="mt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-3xl font-medium text-charcoal group-hover:text-brown transition-colors">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-charcoal/60 mt-1 max-w-2xl line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brown group-hover:text-brown-light transition-colors shrink-0">
          <span>View Project</span>
          <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
};
