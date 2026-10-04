import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";
import { useViewportVideo } from "../hooks/useViewportVideo";

interface Props {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<Props> = ({ project, onSelectProject }) => {
  const { videoRef, hasError, setHasError } = useViewportVideo();

  // Custom aspect ratio based on project type
  const getAspectRatioClass = () => {
    switch (project.type) {
      case 'motion':
        return 'aspect-[16/10]';
      case 'poster':
        return 'aspect-[3/4]';
      case 'character':
        return 'aspect-[4/4]';
      case 'webtoon':
        return 'aspect-[9/16] max-h-[520px]';
      case 'apparel':
        return 'aspect-[4/5]';
      default:
        return 'aspect-[4/5]';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="card-soft overflow-hidden cursor-pointer group hover:shadow-elevated transition-shadow duration-500 flex flex-col h-full border border-beige/60"
      onClick={() => onSelectProject(project)}
    >
      <div className={`${getAspectRatioClass()} w-full bg-beige/20 relative overflow-hidden flex items-center justify-center`}>
        {project.type === 'motion' ? (
          !hasError && project.previewVideo ? (
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
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
            />
          ) : (
            <iframe
              src={`https://drive.google.com/file/d/${project.id}/preview`}
              className="w-full h-full border-0 pointer-events-none scale-110"
              allow="autoplay; fullscreen"
              title={project.title}
            />
          )
        ) : (
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
            loading="lazy"
            onError={(e) => {
              if (project.driveUrl) {
                const idMatch = project.driveUrl.match(/id=([a-zA-Z0-9_-]+)/) || project.driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
                if (idMatch) {
                  (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w800`;
                }
              }
            }}
          />
        )}

        {/* Minimal Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-cream text-xs font-medium bg-charcoal/80 backdrop-blur-sm px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {project.type === 'motion' ? <FiPlay className="text-[10px]" /> : null}
            View Project ↗
          </span>
        </div>
      </div>

      <div className="p-4 md:p-5 flex items-center justify-between mt-auto bg-cream/40">
        <div>
          <h3 className="font-display text-lg font-medium text-charcoal group-hover:text-brown transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-charcoal/50 mt-0.5">
            {project.category} · {project.year}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center group-hover:bg-blush/60 transition-colors duration-300 shrink-0 ml-3">
          <FiArrowUpRight className="text-brown text-sm" />
        </div>
      </div>
    </motion.div>
  );
};
