"use client";

import Image from "next/image";

type AspectRatio = "16/9" | "4/3";

interface VideoPlaceholderProps {
  /** Title of the video for display and accessibility */
  title: string;
  /** Optional thumbnail image source */
  thumbnailSrc?: string;
  /** YouTube video ID for future embed functionality */
  videoId?: string;
  /** Aspect ratio of the video container */
  aspectRatio?: AspectRatio;
  /** Additional CSS classes */
  className?: string;
}

/**
 * VideoPlaceholder Component
 *
 * Displays a static video placeholder with play button overlay.
 * Designed for future YouTube embed integration.
 *
 * Features:
 * - Accessible play button with aria-label
 * - "Video coming soon" placeholder when no thumbnail
 * - Configurable aspect ratio (16:9 or 4:3)
 * - Brand colors from Tailwind config
 *
 * @example
 * <VideoPlaceholder
 *   title="Space Camp Hall of Fame Induction"
 *   thumbnailSrc="/images/thumbnail.jpg"
 *   videoId="abc123"
 *   aspectRatio="16/9"
 * />
 */
export function VideoPlaceholder({
  title,
  thumbnailSrc,
  videoId,
  aspectRatio = "16/9",
  className = "",
}: VideoPlaceholderProps) {
  const aspectRatioClass =
    aspectRatio === "16/9" ? "aspect-video" : "aspect-[4/3]";

  const handlePlayClick = () => {
    // Future: Implement YouTube embed or modal player
    // videoId will be used for YouTube integration
    if (videoId) {
      console.log(`Play video: ${videoId}`);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-primary-900 ${aspectRatioClass} ${className}`}
    >
      {/* Thumbnail or Placeholder Background */}
      {thumbnailSrc ? (
        <Image
          src={thumbnailSrc}
          alt={`Video thumbnail: ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-900">
          <p className="text-white/70 text-sm font-medium">Video coming soon</p>
        </div>
      )}

      {/* Overlay for better button visibility */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Play Button */}
      <button
        type="button"
        onClick={handlePlayClick}
        aria-label={`Play video: ${title}`}
        className="absolute inset-0 flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
      >
        <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110">
          {/* Play Icon */}
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>

      {/* Video Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white font-medium text-sm sm:text-base truncate">
          {title}
        </p>
      </div>
    </div>
  );
}
