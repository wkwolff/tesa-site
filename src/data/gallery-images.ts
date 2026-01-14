/**
 * Gallery image data for TESA in Action section
 * Centralized image definitions with accessibility metadata
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "mars" | "classroom" | "presentations" | "navy" | "space-camp";
}

export const galleryImages: GalleryImage[] = [
  // Featured images (first 4 shown in grid) - diverse categories, good cropping
  {
    id: "mars-4",
    src: "/images/gallery/mars-selfie.jpg",
    alt: "Diallo Wallace selfie in spacesuit with Earth-like sky background",
    caption: "Mars Research Mission",
    category: "mars",
  },
  {
    id: "classroom-4",
    src: "/images/gallery/classroom-yellow-shirts.jpg",
    alt: "Group photo of students in yellow STEM program shirts with Space Shuttle painting",
    caption: "STEM Summer Program",
    category: "classroom",
  },
  {
    id: "presentation-1",
    src: "/images/homepage/tesa-in-action/elite-week-event.jpg",
    alt: "Diallo Wallace presenting to students at Elite Week aerospace education event",
    caption: "Inspiring Future Engineers",
    category: "presentations",
  },
  {
    id: "navy-1",
    src: "/images/gallery/navy-pilot-portrait.jpg",
    alt: "Lieutenant Commander Diallo Wallace in Navy flight suit",
    caption: "Naval Aviation Experience",
    category: "navy",
  },

  // Additional Mars Research images
  {
    id: "mars-1",
    src: "/images/homepage/tesa-in-action/fmars-station.jpg",
    alt: "Diallo Wallace in spacesuit standing in front of the Flashline Mars Arctic Research Station habitat",
    caption: "Mars Research Mission - FMARS Station",
    category: "mars",
  },
  {
    id: "mars-2",
    src: "/images/gallery/mars-fmars-side.jpg",
    alt: "Side view of Diallo Wallace at the Flashline Mars Arctic Research Station",
    caption: "Flashline Mars Arctic Research Station",
    category: "mars",
  },
  {
    id: "mars-3",
    src: "/images/gallery/mars-habitat.jpg",
    alt: "Mars analog habitat exterior during research mission",
    caption: "Mars Analog Habitat",
    category: "mars",
  },

  // Space Camp Hall of Fame
  {
    id: "space-camp-1",
    src: "/images/homepage/tesa-in-action/hall-of-fame-jacket.jpg",
    alt: "Space Camp Hall of Fame jacket with patches and insignia",
    caption: "Space Camp Hall of Fame 2025",
    category: "space-camp",
  },

  // Additional Presentations & Events
  {
    id: "presentation-2",
    src: "/images/gallery/presentation-01.jpg",
    alt: "Diallo Wallace speaking at aerospace education presentation",
    caption: "Aerospace Education Presentation",
    category: "presentations",
  },
  {
    id: "presentation-3",
    src: "/images/gallery/presentation-02.jpg",
    alt: "Students engaged during aerospace career presentation",
    caption: "Inspiring Future Engineers",
    category: "presentations",
  },
  {
    id: "presentation-4",
    src: "/images/partnerships/shades-of-blue/speaker-presentation.jpg",
    alt: "Speaker presentation at Our Shades of Blue community event",
    caption: "Our Shades of Blue Partnership",
    category: "presentations",
  },
  {
    id: "presentation-5",
    src: "/images/partnerships/shades-of-blue/with-attendees.jpg",
    alt: "Diallo Wallace with event attendees at community outreach",
    caption: "Community Engagement",
    category: "presentations",
  },
  {
    id: "presentation-6",
    src: "/images/partnerships/shades-of-blue/with-student.jpg",
    alt: "Diallo Wallace mentoring a student at aerospace event",
    caption: "Student Mentorship",
    category: "presentations",
  },

  // Classroom & Hands-On Learning
  {
    id: "classroom-1",
    src: "/images/homepage/tesa-in-action/water-table-demo.jpg",
    alt: "Diallo Wallace demonstrating fluid dynamics to students using a water table",
    caption: "Hands-On STEM Instruction",
    category: "classroom",
  },
  {
    id: "classroom-2",
    src: "/images/gallery/classroom-hangar-group.jpg",
    alt: "Students lined up in aircraft hangar with American flag during STEM event",
    caption: "Aviation Education Day",
    category: "classroom",
  },
  {
    id: "classroom-3",
    src: "/images/gallery/classroom-hangar-talk.jpg",
    alt: "Diallo Wallace in flight suit surrounded by engaged students in hangar",
    caption: "Interactive Learning Session",
    category: "classroom",
  },
  {
    id: "classroom-5",
    src: "/images/program/classroom/hands-on-learning.jpg",
    alt: "Students engaged in hands-on aerospace learning activity",
    caption: "Experiential Learning",
    category: "classroom",
  },
  {
    id: "classroom-6",
    src: "/images/program/classroom/classroom-collaboration.jpg",
    alt: "Students collaborating on engineering project in classroom",
    caption: "Collaborative Problem Solving",
    category: "classroom",
  },
  {
    id: "classroom-7",
    src: "/images/program/classroom/student-project-work.jpg",
    alt: "Students working on hands-on aerospace project",
    caption: "Student Project Work",
    category: "classroom",
  },

  // Navy & Aviation
  {
    id: "navy-2",
    src: "/images/experiences/pilot-cockpit.jpg",
    alt: "View from military aircraft cockpit during flight",
    caption: "Navy Pilot Experience",
    category: "navy",
  },
];

/**
 * Featured images for the main TESA in Action grid (first 4)
 */
export const featuredImages = galleryImages.slice(0, 4);

/**
 * Get images filtered by category
 */
export function getImagesByCategory(
  category: GalleryImage["category"]
): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category);
}
