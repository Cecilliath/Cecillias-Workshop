import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiDownload, FiCheckCircle } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";

interface Props {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || project.type === "webtoon") return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-charcoal/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream shadow-elevated border border-beige/80 p-6 md:p-10 text-charcoal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-beige/40 hover:bg-beige/80 flex items-center justify-center text-charcoal/70 hover:text-charcoal transition-colors z-20"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>

          {/* Header Info - Minimal Editorial */}
          <div className="mb-8 pr-12">
            <span className="inline-block text-xs uppercase tracking-widest font-mono text-brown bg-beige/40 px-3 py-1 rounded-full mb-3 border border-beige/60">
              {project.category} · {project.year}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-charcoal mb-3">
              {project.title}
            </h2>
            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Visual Artwork / Video Display */}
          <div className="w-full mb-8 bg-beige/10 p-2 md:p-4 border border-beige/50 flex flex-col items-center">
            {project.type === "motion" ? (
              project.youtubeId ? (
                <div
                  className={`w-full ${
                    project.aspectRatio === "9/16"
                      ? "max-w-[320px] sm:max-w-[360px] aspect-[9/16] mx-auto"
                      : "aspect-[16/9]"
                  } bg-charcoal overflow-hidden relative shadow-inner border border-beige/40`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : project.fullVideo ? (
                <div className="w-full aspect-[16/9] bg-charcoal overflow-hidden relative shadow-inner">
                  <video
                    src={project.fullVideo}
                    poster={project.thumbnail}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/9] bg-charcoal overflow-hidden relative shadow-inner">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full max-h-[680px] object-contain shadow-soft"
              />
            )}

            {/* Editorial Collection / Character Sheets Gallery */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="mt-8 w-full border-t border-beige/50 pt-6">
                <span className="text-xs font-mono uppercase tracking-widest text-brown block mb-4">
                  ADDITIONAL ARTWORK & MODEL SHEETS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.additionalImages.map((imgUrl, i) => (
                    <div key={i} className="bg-cream p-2 border border-beige/60">
                      <img
                        src={imgUrl}
                        alt={`${project.title} detail sheet ${i + 1}`}
                        className="w-full max-h-[420px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Role & Tools Metadata */}
          <div className="grid sm:grid-cols-2 gap-6 p-5 md:p-6 bg-beige/20 border border-beige/60 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-charcoal/50 mb-1">
                Role & Focus
              </p>
              <p className="text-sm font-medium text-charcoal">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-charcoal/50 mb-1">
                Tools & Software
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 text-xs font-mono text-brown px-3 py-1 rounded-full bg-cream border border-beige/60"
                  >
                    <FiCheckCircle className="text-[10px] text-brown" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-beige/60">
            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline gap-2 text-xs md:text-sm py-2.5 px-5"
              >
                <FiDownload /> View Project Brief / PDF
              </a>
            )}
            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 text-xs md:text-sm py-2.5 px-5"
              >
                <FiExternalLink /> Open in Google Drive
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
