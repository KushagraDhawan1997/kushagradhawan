"use client";

import { Box, Flex, Grid } from "@kushagradhawan/kookie-ui";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MediaItem = {
  path: string;
  type: "video" | "image";
  poster?: string;
};

const USE_OPTIMIZED = true;

const wompMedia: MediaItem[] = [
  { path: "/about-womp/final/AboutWomp1.mp4", type: "video", poster: "/about-womp/final/AboutWomp1.mp4?poster" },
  { path: "/about-womp/final/AboutWomp2.png", type: "image" },
  { path: "/about-womp/final/AboutWomp3.mp4", type: "video", poster: "/about-womp/final/AboutWomp3.mp4?poster" },
  { path: "/about-womp/final/AboutWomp4.mp4", type: "video", poster: "/about-womp/final/AboutWomp4.mp4?poster" },
  { path: "/about-womp/final/AboutWomp5.mp4", type: "video", poster: "/about-womp/final/AboutWomp5.mp4?poster" },
  { path: "/about-womp/final/AboutWomp6.mp4", type: "video", poster: "/about-womp/final/AboutWomp6.mp4?poster" },
];

function getOptimizedPath(originalPath: string): string {
  if (!USE_OPTIMIZED) return originalPath;
  if (!originalPath.includes("/final/")) return originalPath;
  const optimizedPath = originalPath.replace("/final/", "/optimized/");
  if (optimizedPath.endsWith(".png")) {
    return optimizedPath.replace(".png", ".webp");
  }
  return optimizedPath;
}

function getThumbnailPath(videoPath: string): string {
  if (!USE_OPTIMIZED) return videoPath + "?poster";
  if (videoPath.includes("/optimized/")) {
    return videoPath.replace(".mp4", ".jpg");
  }
  if (videoPath.includes("/final/")) {
    return videoPath.replace("/final/", "/optimized/").replace(".mp4", ".jpg");
  }
  return videoPath + "?poster";
}

export function WompIllustrationGrid() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  const processedMedia = wompMedia.map((media) => ({
    ...media,
    path: getOptimizedPath(media.path),
    poster: media.type === "video" ? getThumbnailPath(media.path) : undefined,
  }));

  return (
    <Grid gap="1px" columns={{ initial: "1", sm: "2", md: "2" }}>
      {processedMedia.map((media, i) => (
        <WompMediaItem key={i} index={i} media={media} originalMedia={wompMedia[i]} lowQuality={isMobileDevice} />
      ))}
    </Grid>
  );
}

function WompMediaItem({
  index,
  media,
  originalMedia,
  lowQuality = false,
}: {
  index: number;
  media: MediaItem;
  originalMedia: MediaItem;
  lowQuality?: boolean;
}) {
  return (
    <Box
      height="100%"
      style={{
        aspectRatio: "16/9",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {media.type === "video" ? (
        <LazyVideo src={media.path} originalSrc={originalMedia.path} poster={media.poster} lowQuality={lowQuality} />
      ) : (
        <Image
          src={media.path}
          alt={`Womp 3D Design illustration ${index + 1}`}
          fill
          style={{ objectFit: "cover", transition: "all 0.3s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          priority={index < 1}
          loading={index < 1 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={lowQuality ? 60 : 75}
          onError={() => {
            const img = document.getElementById(`womp-desktop-img-${index}`) as HTMLImageElement;
            if (img && USE_OPTIMIZED) img.src = originalMedia.path;
          }}
          id={`womp-desktop-img-${index}`}
        />
      )}
    </Box>
  );
}

function LazyVideo({
  src,
  originalSrc,
  poster,
  lowQuality = false,
}: {
  src: string;
  originalSrc: string;
  poster?: string;
  lowQuality?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  const videoSrc = useFallback ? originalSrc : lowQuality && src.endsWith(".mp4") ? `${src.replace(".mp4", "_low.mp4")}` : src;

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => setIsInView(entries[0].isIntersecting),
      { threshold: 0.1, rootMargin: "100px" }
    );
    observer.observe(videoRef.current);
    return () => { if (videoRef.current) observer.unobserve(videoRef.current); };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isSafari && !hasPlayed) {
      videoRef.current.src = videoSrc;
      setHasPlayed(true);
      videoRef.current.onerror = () => {
        if (USE_OPTIMIZED && !useFallback) {
          setUseFallback(true);
          if (videoRef.current) {
            videoRef.current.src = originalSrc;
            videoRef.current.load();
          }
        }
      };
      videoRef.current.load();
      return;
    }

    if (isInView) {
      if (!hasPlayed) {
        try {
          videoRef.current.src = videoSrc;
          setHasPlayed(true);
          videoRef.current.onerror = () => {
            if (USE_OPTIMIZED && !useFallback) {
              setUseFallback(true);
              if (videoRef.current) {
                videoRef.current.src = originalSrc;
                videoRef.current.load();
              }
            }
          };
        } catch {
          setUseFallback(true);
        }
      }
      if (isLoaded) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (isSafari) {
              setTimeout(() => { videoRef.current?.play().catch(() => {}); }, 300);
            }
          });
        }
      }
    } else {
      if (videoRef.current && !videoRef.current.paused) videoRef.current.pause();
    }
  }, [isInView, isLoaded, videoSrc, hasPlayed, originalSrc, useFallback, isSafari]);

  return (
    <>
      {!isLoaded && (
        <Flex
          position="absolute"
          inset="0"
          align="center"
          justify="center"
          style={{ backgroundColor: "var(--gray-3)", opacity: 0.1 }}
        >
          <Box
            width="24px"
            height="24px"
            style={{
              border: "2px solid var(--gray-6)",
              borderTop: "2px solid var(--accent-9)",
              borderRadius: "100%",
              animation: "spin 1s linear infinite",
            }}
          />
        </Flex>
      )}
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        onLoadedData={() => setIsLoaded(true)}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          transition: "all 0.3s ease",
          opacity: isLoaded ? 1 : 0,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      />
    </>
  );
}
