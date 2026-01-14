import { useRef, TouchEvent } from "react";

interface SwipeConfig {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
}

/**
 * Touch/swipe gesture hook for gallery navigation
 * Mobile-first: 50px threshold for comfortable swipe detection
 */
export function useGallerySwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: SwipeConfig) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = null;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;
    const isHorizontalSwipe = Math.abs(diffX) > threshold;

    if (isHorizontalSwipe) {
      if (diffX > 0) {
        onSwipeLeft(); // Swiped left = next image
      } else {
        onSwipeRight(); // Swiped right = previous image
      }
    }

    // Reset
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
