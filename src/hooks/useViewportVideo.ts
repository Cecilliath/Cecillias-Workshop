import { useEffect, useRef, useState } from "react";

export function useViewportVideo(threshold = 0.45) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                  setHasError(false);
                })
                .catch((err) => {
                  console.warn("Autoplay suppressed by browser:", err);
                  setIsPlaying(false);
                });
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
            setIsPlaying(false);
          }
        });
      },
      { threshold: [0, threshold] }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, [threshold]);

  return { videoRef, isPlaying, hasError, setHasError };
}
