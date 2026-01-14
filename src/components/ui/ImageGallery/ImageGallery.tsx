"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { galleryBackdrop, gallerySlide } from "@/lib/animations";
import { useGallerySwipe } from "./useGallerySwipe";
import type { GalleryImage as GalleryImageType } from "@/data/gallery-images";

interface ImageGalleryProps {
  isOpen: boolean;
  startIndex: number;
  images: GalleryImageType[];
  onClose: () => void;
}

/**
 * Fullscreen image gallery with WCAG 2.1 AA compliance
 * Mobile-first with touch/swipe navigation
 * Lazy loads images for performance
 */
export function ImageGallery({
  isOpen,
  startIndex,
  images,
  onClose,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Lock body scroll when open
  useBodyScrollLock(isOpen);

  // Mount portal on client only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex);
      setDirection(0);
    }
  }, [isOpen, startIndex]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Small delay to ensure modal is rendered
      setTimeout(() => modalRef.current?.focus(), 50);
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  const navigateNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, images.length]);

  const navigatePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToImage = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          navigatePrev();
          break;
        case "ArrowRight":
          navigateNext();
          break;
        case "Home":
          goToImage(0);
          break;
        case "End":
          goToImage(images.length - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose, navigatePrev, navigateNext, goToImage]);

  // Touch/swipe handlers
  const swipeHandlers = useGallerySwipe({
    onSwipeLeft: navigateNext,
    onSwipeRight: navigatePrev,
  });

  const currentImage = images[currentIndex];

  // Animation variants based on reduced motion preference
  const backdropVariants = shouldReduceMotion ? {} : galleryBackdrop;
  const slideVariants = shouldReduceMotion ? {} : gallerySlide;

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          aria-describedby="gallery-caption"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center outline-none"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          {...swipeHandlers}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Close button - top right, large touch target */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-3 min-w-[44px] min-h-[44px] text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Close gallery"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-12 py-16 sm:py-20">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full h-full max-w-6xl"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom controls - mobile-friendly positioning */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pb-6 pt-12 px-4">
            {/* Caption */}
            <p
              id="gallery-caption"
              className="text-center text-white text-base sm:text-lg font-medium mb-1"
            >
              {currentImage.caption}
            </p>
            {/* Counter */}
            <p className="text-center text-white/70 text-sm">
              {currentIndex + 1} of {images.length}
            </p>
          </div>

          {/* Navigation buttons - large touch targets */}
          <button
            onClick={navigatePrev}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 min-w-[44px] min-h-[44px] text-white disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={navigateNext}
            disabled={currentIndex === images.length - 1}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 min-w-[44px] min-h-[44px] text-white disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Screen reader live region for image changes */}
          <div role="status" aria-live="polite" className="sr-only">
            Viewing image {currentIndex + 1} of {images.length}:{" "}
            {currentImage.alt}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
