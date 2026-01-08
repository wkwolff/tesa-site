"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";

/**
 * CourseCatalog Component
 *
 * Displays all 27 TESA courses organized by STEM categories.
 * Features tabbed navigation for category filtering.
 * Highlights foundational courses (Pre-Engineering and MATLAB).
 *
 * Mobile-first design with accessible ARIA tabs pattern.
 */

// Course type definition
interface Course {
  name: string;
  description: string;
  isFoundational?: boolean;
}

// Course data organized by category
const courseData: Record<"Science" | "Technology" | "Engineering" | "Mathematics", Course[]> = {
  Science: [
    {
      name: "Physics First",
      description: "Introduction to physics concepts for early learners",
    },
    {
      name: "Physics I",
      description: "Classical mechanics and foundational physics principles",
    },
    {
      name: "Physics C (Mechanics)",
      description: "AP-level mechanics with calculus applications",
    },
    {
      name: "Physics C (E&M)",
      description: "Electricity and magnetism with calculus",
    },
    {
      name: "Statics",
      description: "Analysis of forces on bodies at rest",
    },
    {
      name: "Dynamics",
      description: "Study of forces and motion in systems",
    },
    {
      name: "Spring, Mass, Damper",
      description: "Mechanical vibrations and system dynamics",
    },
  ],
  Technology: [
    {
      name: "Raspberry Pi",
      description: "Introduction to single-board computing and electronics",
    },
    {
      name: "Arduino",
      description: "Microcontroller programming and hardware projects",
    },
    {
      name: "MATLAB Computer Programming",
      description: "Programming fundamentals using MATLAB",
      isFoundational: true,
    },
  ],
  Engineering: [
    {
      name: "Pre-Engineering",
      description: "Introduction to engineering design process",
      isFoundational: true,
    },
    {
      name: "Technical Writing",
      description: "Professional engineering documentation skills",
    },
    {
      name: "Structural Engineering",
      description: "Analysis and design of load-bearing structures",
    },
    {
      name: "Electrical Engineering I (DC)",
      description: "Direct current circuits and analysis",
    },
    {
      name: "Electrical Engineering II (AC)",
      description: "Alternating current circuits and analysis",
    },
    {
      name: "Mechanical Engineering",
      description: "Principles of mechanical systems design",
    },
    {
      name: "Aerospace Engineering (Aerodynamics)",
      description: "Study of air flow and flight principles",
    },
    {
      name: "Aerospace Engineering II (Aerodynamics II)",
      description: "Advanced aerodynamics and aircraft design",
    },
    {
      name: "Aerospace Engineering (Orbital Mechanics I)",
      description: "Fundamentals of satellite orbits and trajectories",
    },
    {
      name: "Aerospace Engineering (Orbital Mechanics II)",
      description: "Advanced orbital maneuvers and mission planning",
    },
    {
      name: "Rocketry",
      description: "Rocket propulsion and flight systems",
    },
  ],
  Mathematics: [
    {
      name: "Mathematics for Space Applications",
      description: "Applied mathematics for aerospace calculations",
    },
    {
      name: "Computational Calculus I (Numerical Differentiation)",
      description: "Numerical methods for differentiation",
    },
    {
      name: "Computational Calculus II (Numerical Integration)",
      description: "Numerical methods for integration",
    },
    {
      name: "Differential Equations (numeric)",
      description: "Numerical solutions to differential equations",
    },
    {
      name: "Linear Algebra",
      description: "Vectors, matrices, and linear transformations",
    },
    {
      name: "Laplace Transforms",
      description: "Transform methods for engineering applications",
    },
  ],
};

const categories = ["All", "Science", "Technology", "Engineering", "Mathematics"] as const;

type Category = (typeof categories)[number];
type STEMCategory = "Science" | "Technology" | "Engineering" | "Mathematics";

const categoryInfo = {
  All: { count: 27, color: "bg-primary" },
  Science: { count: 7, color: "bg-blue-500" },
  Technology: { count: 3, color: "bg-purple-500" },
  Engineering: { count: 11, color: "bg-green-500" },
  Mathematics: { count: 6, color: "bg-orange-500" },
};

// Extended course type with category
interface CourseWithCategory extends Course {
  category: STEMCategory;
}

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Filter courses based on active category
  const getFilteredCourses = (): CourseWithCategory[] => {
    if (activeCategory === "All") {
      return (Object.entries(courseData) as [STEMCategory, Course[]][]).flatMap(
        ([category, courses]) =>
          courses.map((course) => ({
            ...course,
            category,
          }))
      );
    }
    return courseData[activeCategory as STEMCategory].map((course) => ({
      ...course,
      category: activeCategory as STEMCategory,
    }));
  };

  const filteredCourses = getFilteredCourses();

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="catalog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Comprehensive Curriculum
          </p>
          <h2
            id="catalog-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Course Catalog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            27 credit-bearing courses across all STEM disciplines, designed
            for grades 6-12 and approved by UC A-G.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Course categories"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${category.toLowerCase()}-courses`}
                id={`tab-${category.toLowerCase()}`}
                onClick={() => setActiveCategory(category)}
                className={`
                  min-h-touch px-4 py-2 rounded-full text-sm sm:text-base font-medium
                  transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {category}
                  <span
                    className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${isActive ? "bg-white/20" : "bg-gray-200"}
                    `}
                  >
                    {categoryInfo[category].count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Foundational Courses Note */}
        <div className="mb-8 p-4 bg-accent/10 rounded-lg border border-accent/30">
          <p className="text-sm text-center text-gray-700">
            <span className="inline-flex items-center gap-1 font-semibold text-accent-dark">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              Foundational courses
            </span>{" "}
            (Pre-Engineering and MATLAB) are the building blocks that all other
            courses build upon.
          </p>
        </div>

        {/* Course Grid */}
        <div
          id={`${activeCategory.toLowerCase()}-courses`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.name}
              name={course.name}
              category={course.category}
              isFoundational={course.isFoundational}
              description={course.description}
            />
          ))}
        </div>

        {/* Course Count Summary */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {(["Science", "Technology", "Engineering", "Mathematics"] as const).map(
            (cat) => (
              <div
                key={cat}
                className="p-4 bg-surface rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveCategory(cat)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCategory(cat);
                  }
                }}
              >
                <div
                  className={`h-10 w-10 mx-auto mb-2 rounded-full ${categoryInfo[cat].color} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">
                    {cat.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-surface-dark">{cat}</p>
                <p className="text-sm text-gray-500">
                  {categoryInfo[cat].count} courses
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
