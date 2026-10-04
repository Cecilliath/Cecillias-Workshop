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

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-charcoal/65 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream rounded-3xl shadow-elevated border border-beige/60 p-6 md:p-10 text-charcoal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-beige/40 hover:bg-beige/80 flex items-center justify-center text-charcoal/70 hover:text-charcoal transition-colors z-10"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>

          {/* Header Info */}
          <div className="mb-8 pr-12">
            <span className="inline-block text-xs uppercase tracking-widest font-medium text-brown-light bg-beige/50 px-3 py-1 rounded-full mb-3">
              {project.category} · {project.year}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-charcoal mb-4">
              {project.title}
            </h2>
            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Media Display (Video / Poster / Character / Apparel) */}
          <div className="w-full mb-8 bg-beige/20 rounded-2xl p-3 md:p-5 border border-beige/40 flex flex-col items-center">
            {project.type === "motion" && project.previewVideo ? (
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-charcoal shadow-inner relative">
                <iframe
                  src={project.fullVideo || `https://drive.google.com/file/d/${project.id}/preview`}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  title={project.title}
                />
              </div>
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full max-h-[600px] object-contain rounded-xl shadow-soft"
              />
            )}

            {/* Additional Character / Sheet Images if present */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="mt-6 w-full space-y-4">
                <p className="text-xs section-label">Additional Character Sheets & Artwork</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.additionalImages.map((imgUrl, i) => (
                    <img
                      key={i}
                      src={imgUrl}
                      alt={`${project.title} detail ${i + 1}`}
                      className="w-full max-h-[400px] object-contain rounded-xl bg-beige/10 p-2 border border-beige/30"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Role & Tools Metadata */}
          <div className="grid sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-beige/20 border border-beige/40 mb-8">
            <div>
              <p className="text-xs section-label mb-1">Role & Focus</p>
              <p className="text-sm font-medium text-charcoal">{project.role}</p>
            </div>
            <div>
              <p className="text-xs section-label mb-1">Tools & Software</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brown px-3 py-1 rounded-full bg-soft-white border border-beige/60"
                  >
                    <FiCheckCircle className="text-[10px] text-brown-light" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* External Action Links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-beige/40">
            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline gap-2 text-sm py-2.5 px-5"
              >
                <FiDownload /> View Project Brief / PDF
              </a>
            )}
            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 text-sm py-2.5 px-5"
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
