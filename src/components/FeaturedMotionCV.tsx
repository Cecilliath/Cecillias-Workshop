import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";
import { useViewportVideo } from "../hooks/useViewportVideo";

interface Props {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedMotionCV: React.FC<Props> = ({ project, onSelectProject }) => {
  const { videoRef, hasError, setHasError } = useViewportVideo();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 cursor-pointer group"
      onClick={() => onSelectProject(project)}
    >
      <div className="mb-4">
        <span className="inline-block text-[11px] uppercase tracking-widest font-medium text-brown-light bg-beige/50 px-3 py-1 rounded-full mb-2">
          Featured Motion
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-medium text-charcoal group-hover:text-brown transition-colors">
          {project.title}
        </h3>
      </div>

      <div className="card-soft overflow-hidden relative border border-beige/60 hover:shadow-elevated transition-shadow duration-500 rounded-3xl">
        <div className="aspect-[16/9] md:aspect-[21/9] max-h-[580px] w-full bg-charcoal/90 relative overflow-hidden flex items-center justify-center">
          {!hasError && project.previewVideo ? (
            <video
              ref={videoRef}
              src={project.previewVideo}
              poster={project.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          ) : (
            <iframe
              src={`https://drive.google.com/file/d/${project.id}/preview`}
              className="w-full h-full border-0 pointer-events-none scale-105"
              allow="autoplay; fullscreen"
              title={project.title}
            />
          )}

          {/* Subtle Overlay on hover */}
          <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cream bg-charcoal/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-cream/20 shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <FiPlay className="text-xs" /> VIEW PROJECT ↗
            </span>
          </div>

          <span className="absolute bottom-4 left-4 bg-charcoal/70 backdrop-blur-sm text-cream text-xs px-3 py-1 rounded-full font-medium">
            Motion Design · {project.year}
          </span>
        </div>

        <div className="p-5 md:p-6 bg-cream/60 flex items-center justify-between border-t border-beige/40">
          <div>
            <p className="text-xs section-label mb-1">Featured Showcase</p>
            <p className="text-sm text-charcoal/75 line-clamp-1 max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-beige/50 flex items-center justify-center group-hover:bg-blush/60 transition-colors duration-300 shrink-0 ml-4">
            <FiArrowUpRight className="text-brown text-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
