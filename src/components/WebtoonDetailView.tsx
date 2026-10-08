import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { FiX, FiArrowLeft, FiExternalLink } from "react-icons/fi";
import type { ProjectItem } from "../data/projectsData";

interface Props {
  project: ProjectItem | null;
  onClose: () => void;
}

export const WebtoonDetailView: React.FC<Props> = ({ project, onClose }) => {
  const [activeEpisodeId, setActiveEpisodeId] = useState<string>("01");
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  // Sync active episode indicator on manual scrolling using IntersectionObserver
  useEffect(() => {
    if (!project || project.type !== "webtoon" || !project.episodes) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const epNum = entry.target.id.replace("episode-", "");
            setActiveEpisodeId(epNum);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.1,
        rootMargin: "-70px 0px -60% 0px",
      }
    );

    project.episodes.forEach((ep) => {
      const el = document.getElementById(`episode-${ep.episodeNumber}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project || project.type !== "webtoon") return null;

  const scrollToEpisode = (episodeNumber: string) => {
    setActiveEpisodeId(episodeNumber);
    const targetElement = document.getElementById(`episode-${episodeNumber}`);
    const scrollContainer = containerRef.current;

    if (targetElement && scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const stickyHeaderHeight = 70; // Account for sticky header offset

      const targetScrollTop =
        scrollContainer.scrollTop + (targetRect.top - containerRect.top) - stickyHeaderHeight;

      scrollContainer.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      <div
        ref={containerRef}
        className="fixed inset-0 z-50 overflow-y-auto bg-cream text-charcoal flex flex-col scroll-smooth"
      >
        {/* Sticky Editorial Reader Navigation Bar */}
        <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-beige/60 px-5 md:px-10 py-3.5 flex items-center justify-between shadow-xs">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-wider uppercase text-charcoal/70 hover:text-charcoal transition-colors"
          >
            <FiArrowLeft className="text-base" />
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-charcoal/60">
            <span className="font-semibold text-charcoal">{project.title}</span>
            <span>·</span>
            <span>Digital Comic Reader</span>
          </div>

          <div className="flex items-center gap-3">
            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-brown hover:underline bg-beige/30 px-3 py-1.5 rounded-full border border-beige/60"
              >
                <span>Google Drive</span>
                <FiExternalLink className="text-xs" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-beige/40 hover:bg-beige/80 flex items-center justify-center text-charcoal transition-colors"
              aria-label="Close reader"
            >
              <FiX className="text-lg" />
            </button>
          </div>
        </header>

        {/* Reader Content Area */}
        <main className="flex-grow py-10 px-4 md:px-8 max-w-4xl mx-auto w-full">
          {/* Header & Synopsis */}
          <div className="mb-12 text-center max-w-2xl mx-auto border-b border-beige/60 pb-10">
            <span className="inline-block text-xs uppercase tracking-widest font-mono text-brown bg-beige/40 px-3.5 py-1 rounded-full mb-3 border border-beige/60">
              INDONESIAN DIGITAL WEBTOON COMIC · {project.year}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-charcoal mb-4">
              {project.title}
            </h1>
            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed text-justify md:text-center mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-charcoal/60 pt-2">
              <div>
                <span className="text-charcoal/40 uppercase">Role:</span>{" "}
                <span className="font-medium text-charcoal">{project.role}</span>
              </div>
              <span>·</span>
              <div>
                <span className="text-charcoal/40 uppercase">Tools:</span>{" "}
                <span className="font-medium text-charcoal">{project.tools.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Episode Anchor Quick Navigation Bar */}
          <div className="sticky top-[53px] z-30 bg-cream/95 backdrop-blur-sm py-3 mb-12 border-y border-beige/60 flex items-center justify-center gap-2 md:gap-4 overflow-x-auto">
            {project.episodes?.map((ep) => (
              <button
                key={ep.episodeNumber}
                type="button"
                onClick={() => scrollToEpisode(ep.episodeNumber)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeEpisodeId === ep.episodeNumber
                    ? "bg-charcoal text-cream font-semibold shadow-xs scale-105"
                    : "bg-beige/40 text-charcoal/70 hover:bg-beige/80"
                }`}
              >
                EP {ep.episodeNumber}
              </button>
            ))}
          </div>

          {/* 5 EPISODE SECTIONS */}
          <div className="space-y-20">
            {project.episodes?.map((ep) => (
              <section
                key={ep.episodeNumber}
                id={`episode-${ep.episodeNumber}`}
                className="scroll-mt-24"
              >
                {/* Episode Section Heading - Elegant Editorial Line */}
                <div className="mb-8 pt-6 border-t-2 border-charcoal/20 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-brown uppercase font-semibold">
                      CHAPTER {ep.episodeNumber}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-charcoal mt-0.5">
                      {ep.title}
                    </h2>
                  </div>
                  {ep.subtitle && (
                    <p className="text-xs md:text-sm font-mono text-charcoal/50 italic max-w-md">
                      {ep.subtitle}
                    </p>
                  )}
                </div>

                {/* Episode Long Vertical Comic Panels - Continuous Vertical Webtoon Strip */}
                {ep.panels && ep.panels.length > 0 ? (
                  <div className="max-w-2xl mx-auto bg-charcoal/5 p-2 md:p-4 rounded-xl border border-beige/60 shadow-soft">
                    <div className="flex flex-col items-center w-full">
                      {ep.panels.map((panelUrl, i) => (
                        <img
                          key={i}
                          src={panelUrl}
                          alt={`${ep.title} panel ${i + 1}`}
                          className="w-full h-auto block max-w-full rounded-none border-b border-black/5 object-contain"
                          loading={i > 2 ? "lazy" : "eager"}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-2xl mx-auto py-16 px-6 rounded-xl bg-beige/20 border border-dashed border-beige/80 text-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-brown font-semibold block mb-2">
                      EPISODE {ep.episodeNumber} COMING SOON
                    </span>
                    <p className="text-sm text-charcoal/60">
                      The next chapter of {project.title} is currently in artwork production.
                    </p>
                  </div>
                )}

                {/* Section Separator */}
                <div className="mt-16 flex items-center justify-center gap-3 text-beige">
                  <span className="w-12 h-[1px] bg-beige/60" />
                  <span className="text-xs font-mono text-charcoal/30">✦ ✦ ✦</span>
                  <span className="w-12 h-[1px] bg-beige/60" />
                </div>
              </section>
            ))}
          </div>

          {/* Reader Footer */}
          <div className="mt-20 pt-10 border-t border-beige/60 text-center">
            <h3 className="font-display text-2xl font-medium text-charcoal mb-2">
              End of Webtoon Preview
            </h3>
            <p className="text-xs text-charcoal/50 font-mono mb-6">
              Thank you for reading {project.title}.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary py-3 px-8 text-sm"
            >
              Return to Portfolio Grid
            </button>
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
};
