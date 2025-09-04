"use client";

import { Box, Flex, Grid } from "@kushagradhawan/kookie-ui";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MediaItem = {
  path: string;
  type: "video" | "image";
  poster?: string;
  placeholder?: string;
};

// Set this to true to use optimized files, true to use optimized files (when available)
const USE_OPTIMIZED = true;

export function WompIllustrationGrid() {
  // Using the original media files
  const wompMedia: MediaItem[] = [
    {
      path: "/about-womp/final/AboutWomp1.mp4",
      type: "video",
      poster: "/about-womp/final/AboutWomp1.mp4?poster",
    },
    {
      path: "/about-womp/final/AboutWomp2.png",
      type: "image",
    },
    {
      path: "/about-womp/final/AboutWomp3.mp4",
      type: "video",
      poster: "/about-womp/final/AboutWomp3.mp4?poster",
    },
    {
      path: "/about-womp/final/AboutWomp4.mp4",
      type: "video",
      poster: "/about-womp/final/AboutWomp4.mp4?poster",
    },
    {
      path: "/about-womp/final/AboutWomp5.mp4",
      type: "video",
      poster: "/about-womp/final/AboutWomp5.mp4?poster",
    },
    {
      path: "/about-womp/final/AboutWomp6.mp4",
      type: "video",
      poster: "/about-womp/final/AboutWomp6.mp4?poster",
    },
  ];

  // Mobile device detection for adaptive video quality
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  // Function to get optimized path if available
  const getOptimizedPath = (originalPath: string): string => {
    // Only use optimized paths if enabled
    if (!USE_OPTIMIZED) return originalPath;

    // Only try to use optimized paths for final media
    if (!originalPath.includes("/final/")) return originalPath;

    // Replace final with optimized directory
    const optimizedPath = originalPath.replace("/final/", "/optimized/");

    // For images, use WebP instead of PNG
    if (optimizedPath.endsWith(".png")) {
      return optimizedPath.replace(".png", ".webp");
    }

    return optimizedPath;
  };

  // Get thumbnail path for videos (for poster images)
  const getThumbnailPath = (videoPath: string): string => {
    if (!USE_OPTIMIZED) return videoPath + "?poster";

    // If it's an optimized path already
    if (videoPath.includes("/optimized/")) {
      return videoPath.replace(".mp4", ".jpg");
    }

    // If it's an original path but we want to use optimized thumbnails
    if (videoPath.includes("/final/")) {
      return videoPath
        .replace("/final/", "/optimized/")
        .replace(".mp4", ".jpg");
    }

    return videoPath + "?poster";
  };

  // Process the media array to use optimized paths if enabled
  const processedMedia = wompMedia.map((media) => ({
    ...media,
    path: getOptimizedPath(media.path),
    poster: media.type === "video" ? getThumbnailPath(media.path) : undefined,
  }));

  // Single responsive grid for all devices
  return (
    <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
      {processedMedia.map((media, i) => (
        <WompMediaItem
          key={i}
          index={i}
          media={media}
          originalMedia={wompMedia[i]} // Pass original media as fallback
          lowQuality={isMobileDevice}
        />
      ))}
    </Grid>
  );
}

// Helper component for individual media items
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
        aspectRatio: "16/10",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        borderRadius: "var(--radius-5)",
      }}
    >
      {media.type === "video" ? (
        <LazyVideo
          src={media.path}
          originalSrc={originalMedia.path} // Provide original source as fallback
          poster={media.poster}
          lowQuality={lowQuality}
        />
      ) : (
        <Image
          src={media.path}
          alt={`Womp 3D Design illustration ${index + 1}`}
          fill
          style={{
            objectFit: "cover",
            filter: "grayscale(1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "grayscale(0)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "grayscale(1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          priority={index < 1}
          loading={index < 1 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={lowQuality ? 60 : 75}
          onError={() => {
            // If the optimized image fails to load, fallback to original
            const img = document.getElementById(
              `womp-desktop-img-${index}`
            ) as HTMLImageElement;
            if (img && USE_OPTIMIZED) {
              img.src = originalMedia.path;
            }
          }}
          id={`womp-desktop-img-${index}`}
        />
      )}
    </Box>
  );
}

// Lazy loading video component that only plays when in viewport
function LazyVideo({
  src,
  originalSrc, // Original source to fallback to if optimized fails
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

  // Use a lower resolution for mobile devices if available
  const videoSrc = useFallback
    ? originalSrc
    : lowQuality && src.endsWith(".mp4")
    ? `${src.replace(".mp4", "_low.mp4")}`
    : src;

  // Detect Safari browser
  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    // Only observe elements that are mounted in the DOM
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    // For Safari: set the src directly on the element rather than dynamically
    // to help with Safari's autoplay restrictions
    if (isSafari && !hasPlayed) {
      videoRef.current.src = videoSrc;
      setHasPlayed(true);

      // Set up error handler for Safari
      videoRef.current.onerror = () => {
        if (USE_OPTIMIZED && !useFallback) {
          console.log(
            "Safari: Video failed to load, using fallback:",
            originalSrc
          );
          setUseFallback(true);
          if (videoRef.current) {
            videoRef.current.src = originalSrc;
            // For Safari, we need to manually load after changing src
            videoRef.current.load();
          }
        }
      };

      // Force video to load in Safari
      videoRef.current.load();
      return;
    }

    if (isInView) {
      // Lazy load the video source when it comes into view
      if (!hasPlayed) {
        try {
          videoRef.current.src = videoSrc;
          setHasPlayed(true);

          // Set up error handler in case the optimized file doesn't exist
          videoRef.current.onerror = () => {
            if (USE_OPTIMIZED && !useFallback) {
              console.log("Video failed to load, using fallback:", originalSrc);
              setUseFallback(true);
              if (videoRef.current) {
                videoRef.current.src = originalSrc;
                // Call load() to refresh the video element
                videoRef.current.load();
              }
            }
          };
        } catch (e) {
          console.error("Error setting video source:", e);
          setUseFallback(true);
        }
      }

      // Play when loaded and in view
      if (isLoaded) {
        const playPromise = videoRef.current.play();

        // Handle play promise for better compatibility
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            console.log("Video play error:", e);
            // For Safari, we'll try again with user interaction workarounds if needed
            if (isSafari) {
              // Add a small timeout before trying again
              setTimeout(() => {
                if (videoRef.current)
                  videoRef.current
                    .play()
                    .catch((err) => console.log("Retry failed:", err));
              }, 300);
            }
          });
        }
      }
    } else {
      // Pause when out of view to save resources
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [
    isInView,
    isLoaded,
    videoSrc,
    hasPlayed,
    originalSrc,
    useFallback,
    isSafari,
  ]);

  return (
    <>
      {!isLoaded && (
        <Flex
          position="absolute"
          inset="0"
          align="center"
          justify="center"
          style={{
            backgroundColor: "var(--gray-3)",
            opacity: 0.1,
          }}
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
          filter: "grayscale(1)",
          transition: "all 0.3s ease",
          opacity: isLoaded ? 1 : 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "grayscale(0)";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "grayscale(1)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </>
  );
}
