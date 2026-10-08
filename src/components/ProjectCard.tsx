import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";
import { useViewportVideo } from "../hooks/useViewportVideo";

interface Props {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  layoutVariant?: "normal" | "wide" | "tall" | "full";
}

export const ProjectCard: React.FC<Props> = ({ project, onSelectProject, layoutVariant }) => {
  const { videoRef, hasError, setHasError } = useViewportVideo(0.45);

  // Aspect ratio mapping preserving full natural proportions
  const getAspectRatioClass = () => {
    if (project.aspectRatio === "16/9") return "aspect-[16/9]";
    if (project.aspectRatio === "9/16") return "aspect-[9/16] max-h-[460px] mx-auto";
    if (project.aspectRatio === "3/4") return "aspect-[3/4]";
    if (project.aspectRatio === "4/5") return "aspect-[4/5]";
    if (project.aspectRatio === "2/3") return "aspect-[2/3]";

    switch (project.type) {
      case "motion":
        return "aspect-[16/9]";
      case "poster":
        return "aspect-[3/4]";
      case "webtoon":
        return "aspect-[3/4]";
      case "character":
        return "aspect-[4/5]";
      case "apparel":
        return "aspect-[4/5]";
      case "digital":
        return layoutVariant === "wide" ? "aspect-[16/10]" : "aspect-[4/5]";
      default:
        return "aspect-[3/4]";
    }
  };

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer flex flex-col w-full select-none"
      onClick={() => onSelectProject(project)}
    >
      {/* Artwork Framing - Clean & Natural */}
      <div className={`relative w-full ${getAspectRatioClass()} bg-beige/20 overflow-hidden flex items-center justify-center border border-beige/40`}>
        {project.type === "motion" ? (
          !hasError && project.previewVideo ? (
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
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          )
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
            onError={(e) => {
              if (project.driveUrl) {
                const idMatch =
                  project.driveUrl.match(/id=([a-zA-Z0-9_-]+)/) ||
                  project.driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
                if (idMatch) {
                  (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w800`;
                }
              }
            }}
          />
        )}

        {/* Minimal Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
          <span className="text-cream text-[11px] font-mono tracking-wider uppercase bg-charcoal/85 backdrop-blur-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            View Project <FiArrowUpRight className="text-xs" />
          </span>
        </div>
      </div>

      {/* Minimal Project Info Below Artwork */}
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <div>
          <h3 className="font-display text-base md:text-lg font-medium text-charcoal group-hover:text-brown transition-colors leading-snug line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-charcoal/50 font-mono mt-0.5 tracking-tight uppercase">
            {project.category} · {project.year}
          </p>
        </div>
        <div className="text-charcoal/30 group-hover:text-brown transition-colors shrink-0">
          <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
};
