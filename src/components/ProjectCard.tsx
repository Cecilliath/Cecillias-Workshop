import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";
import { useViewportVideo } from "../hooks/useViewportVideo";
import { getAssetUrl } from "../utils/getAssetUrl";

interface Props {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  layoutVariant?: "normal" | "wide" | "tall" | "full" | "composition";
}

export const ProjectCard: React.FC<Props> = ({ project, onSelectProject, layoutVariant = "normal" }) => {
  const { videoRef, hasError, setHasError } = useViewportVideo(0.45);
  const isComposition = layoutVariant === "composition";

  const getAspectRatioClass = () => {
    if (isComposition) {
      if (project.type === "webtoon" || project.aspectRatio === "9/16" || project.id === "1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2") {
        return "aspect-[4/5] lg:aspect-auto flex-1 min-h-0";
      }
      return "aspect-[16/9] lg:aspect-auto flex-1 min-h-0";
    }
    return "aspect-[4/3]";
  };

  const objectPositionClass = project.type === "webtoon" ? "object-top" : "object-center";
  const mediaFitClass = `w-full h-full object-cover ${objectPositionClass}`;

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer flex flex-col w-full select-none ${isComposition ? "h-full min-h-0" : ""}`}
      onClick={() => onSelectProject(project)}
    >
      <div className={`relative w-full ${getAspectRatioClass()} bg-beige/20 overflow-hidden flex items-center justify-center border border-beige/40 rounded-sm`}>
        {project.type === "motion" ? (
          !hasError && project.previewVideo ? (
            <video
              ref={videoRef}
              src={getAssetUrl(project.previewVideo)}
              poster={project.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setHasError(true)}
              className={`${mediaFitClass} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`${mediaFitClass} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
              loading="lazy"
            />
          )
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className={`${mediaFitClass} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
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

        <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
          <span className="text-cream text-[11px] font-mono tracking-wider uppercase bg-charcoal/85 backdrop-blur-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            View Project <FiArrowUpRight className="text-xs" />
          </span>
        </div>
      </div>

      <div className={`flex items-baseline justify-between gap-2 shrink-0 ${isComposition ? "mt-2.5" : "mt-3"}`}>
        <div>
          <h3 className={`font-display font-medium text-charcoal group-hover:text-brown transition-colors leading-snug line-clamp-1 ${isComposition ? "text-sm md:text-base" : "text-base md:text-lg"}`}>
            {project.title}
          </h3>
          <p className={`text-charcoal/50 font-mono mt-0.5 tracking-tight uppercase ${isComposition ? "text-[10px]" : "text-xs"}`}>
            {project.category} · {project.year}
          </p>
        </div>
        <div className="text-charcoal/30 group-hover:text-brown transition-colors shrink-0">
          <FiArrowUpRight className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isComposition ? "text-sm" : "text-base"}`} />
        </div>
      </div>
    </motion.article>
  );
};

