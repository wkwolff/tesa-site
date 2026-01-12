"use client";

/**
 * LearningPathway Component
 *
 * Visual progression through TESA's category-based STEM pathway.
 * IMPORTANT: Stages are NOT tied to specific grade levels. Students can enter
 * at any point and progress at their own pace through the four stages.
 *
 * Mobile-first design: vertical timeline on mobile, horizontal stepped design on desktop.
 * Shows academic journey through TESA's aerospace program.
 *
 * Enhanced with:
 * - KSA (Knowledge, Skills, Abilities) indicators per milestone stage
 * - Opportunity links (certifications, internships) at milestones
 * - Scroll-triggered animations with sequential reveal
 */

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";

interface KSA {
  type: "Knowledge" | "Skills" | "Abilities";
  items: string[];
}

interface Opportunity {
  name: string;
  type: "certification" | "internship" | "program";
  link?: string;
}

interface StageData {
  stage: number;
  title: string;
  description: string;
  courses: string[];
  color: string;
  ksa: KSA[];
  opportunities: Opportunity[];
}

// NOTE: Stages are category-based, NOT tied to specific grade levels.
// Students can enter at any point and progress at their own pace.
const stages: StageData[] = [
  {
    stage: 1,
    title: "Foundation",
    description: "Engineering concepts and computational skills",
    courses: ["Pre-Engineering", "MATLAB Computer Programming"],
    color: "bg-primary",
    ksa: [
      { type: "Knowledge", items: ["Engineering design process", "7 fundamental dimensions", "MATLAB fundamentals"] },
      { type: "Skills", items: ["Variable deconstruction", "Domain vector creation", "Function visualization"] },
      { type: "Abilities", items: ["Critical thinking", "Scientific reasoning", "Computational problem-solving"] },
    ],
    opportunities: [
      { name: "MATLAB Onramp", type: "certification" },
      { name: "Science Fair", type: "program" },
    ],
  },
  {
    stage: 2,
    title: "Exploration",
    description: "Physics, programming, and technical communication",
    courses: ["Physics First", "Physics I", "Technical Writing", "Arduino", "Raspberry Pi"],
    color: "bg-secondary",
    ksa: [
      { type: "Knowledge", items: ["Classical mechanics", "Technical communication", "Microcontroller programming"] },
      { type: "Skills", items: ["Documentation", "Algorithm development", "Hardware assembly"] },
      { type: "Abilities", items: ["Written communication", "Independent learning", "Debugging"] },
    ],
    opportunities: [
      { name: "MATLAB Certified Associate", type: "certification" },
      { name: "Research Internships", type: "internship" },
    ],
  },
  {
    stage: 3,
    title: "Specialization",
    description: "Aerospace engineering disciplines",
    courses: ["Aerospace Engineering (Aerodynamics)", "Orbital Mechanics", "Electrical Engineering", "Structural Engineering"],
    color: "bg-primary-700",
    ksa: [
      { type: "Knowledge", items: ["Aerodynamics", "Orbital mechanics theory", "Circuit theory"] },
      { type: "Skills", items: ["Flight simulation", "Mission planning", "Circuit design"] },
      { type: "Abilities", items: ["Complex problem solving", "Systems thinking", "Leadership"] },
    ],
    opportunities: [
      { name: "STK Level 1", type: "certification" },
      { name: "STK Level 2", type: "certification" },
      { name: "Aerospace Internships", type: "internship" },
    ],
  },
  {
    stage: 4,
    title: "Certification",
    description: "Capstone work and industry credentials",
    courses: ["Advanced Aerospace Courses", "Rocketry", "Capstone Project"],
    color: "bg-accent",
    ksa: [
      { type: "Knowledge", items: ["Industry standards", "Project management", "Advanced aerospace systems"] },
      { type: "Skills", items: ["Professional tooling", "Project leadership", "Portfolio development"] },
      { type: "Abilities", items: ["Professional presentation", "Career readiness", "Team leadership"] },
    ],
    opportunities: [
      { name: "Additional STK Certifications", type: "certification" },
      { name: "PMI CAPM", type: "certification" },
    ],
  },
];

function KSABadge({ ksa }: { ksa: KSA }) {
  const colorMap = {
    Knowledge: "bg-blue-100 text-blue-700 border-blue-200",
    Skills: "bg-green-100 text-green-700 border-green-200",
    Abilities: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <div className={`text-xs px-2 py-1 rounded border ${colorMap[ksa.type]}`}>
      <span className="font-semibold">{ksa.type[0]}:</span>{" "}
      {ksa.items.slice(0, 2).join(", ")}
    </div>
  );
}

function OpportunityBadge({ opportunity }: { opportunity: Opportunity }) {
  const iconMap = {
    certification: (
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    internship: (
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
    program: (
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
      </svg>
    ),
  };

  const colorMap = {
    certification: "bg-accent/20 text-accent-dark",
    internship: "bg-secondary/20 text-secondary",
    program: "bg-primary/20 text-primary",
  };

  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${colorMap[opportunity.type]}`}>
      {iconMap[opportunity.type]}
      {opportunity.name}
    </span>
  );
}

export default function LearningPathway() {
  return (
    <AnimatedSection>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white"
        aria-labelledby="pathway-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Your Academic Journey
            </p>
            <h2
              id="pathway-heading"
              className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
            >
              Category-Based Learning Pathway
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              A flexible progression through STEM categories, not grade levels. Enter at any stage
              and advance at your own pace toward industry-recognized certifications.
            </p>
          </div>

          {/* KSA Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 border border-blue-200 font-semibold">K</span>
              <span className="text-gray-600">Knowledge</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-green-100 text-green-700 border border-green-200 font-semibold">S</span>
              <span className="text-gray-600">Skills</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 border border-purple-200 font-semibold">A</span>
              <span className="text-gray-600">Abilities</span>
            </div>
          </div>

          {/* Mobile Layout - Vertical Timeline with Stagger Animation */}
          <div className="lg:hidden">
            <StaggerList
              className="relative pl-8 border-l-4 border-primary/30 space-y-6"
              staggerDelay={0.15}
            >
              {stages.map((item) => (
                <StaggerItem key={item.stage} className="relative">
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[calc(0.5rem+10px)] top-0 h-6 w-6 rounded-full ${item.color} border-4 border-white shadow-md flex items-center justify-center`}
                    aria-hidden="true"
                  >
                    <span className="text-white text-xs font-bold">
                      {item.stage}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold text-white ${item.color} rounded-full`}
                      >
                        Stage {item.stage}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.description}
                    </p>

                    {/* Courses */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2 py-0.5 bg-surface rounded text-gray-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                    {/* KSA Indicators */}
                    <div className="space-y-1 mb-3">
                      {item.ksa.map((ksa) => (
                        <KSABadge key={ksa.type} ksa={ksa} />
                      ))}
                    </div>

                    {/* Opportunities */}
                    {item.opportunities.length > 0 && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 mb-1">Opportunities:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.opportunities.map((opp) => (
                            <OpportunityBadge key={opp.name} opportunity={opp} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>

          {/* Desktop Layout - Horizontal Stepped Design with Stagger Animation */}
          <div className="hidden lg:block">
            {/* Connecting Progress Line */}
            <div className="relative mb-8">
              <div
                className="absolute top-[30px] left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                aria-hidden="true"
              />

              {/* Stage Markers with Stagger Animation */}
              <StaggerList
                className="relative grid grid-cols-4 gap-4"
                staggerDelay={0.15}
              >
                {stages.map((item) => (
                  <StaggerItem key={item.stage} className="flex flex-col items-center">
                    {/* Node Circle */}
                    <div
                      className={`h-14 w-14 rounded-full ${item.color} border-4 border-white shadow-lg flex items-center justify-center z-10`}
                    >
                      <span className="text-white font-bold text-sm">
                        {item.stage}
                      </span>
                    </div>

                    {/* Vertical Connector */}
                    <div
                      className="w-0.5 h-6 bg-gray-200"
                      aria-hidden="true"
                    />

                    {/* Content Card */}
                    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow text-center w-full">
                      <h3 className="font-heading text-base font-semibold text-surface-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {item.description}
                      </p>

                      {/* Courses */}
                      <div className="space-y-1 mb-2">
                        {item.courses.slice(0, 2).map((course) => (
                          <span
                            key={course}
                            className="block text-xs px-2 py-0.5 bg-surface rounded text-gray-600"
                          >
                            {course}
                          </span>
                        ))}
                        {item.courses.length > 2 && (
                          <span className="text-xs text-gray-400">
                            +{item.courses.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* KSA Mini Indicators */}
                      <div className="flex justify-center gap-1 mb-2">
                        <span className="px-1.5 py-0.5 text-[10px] rounded bg-blue-100 text-blue-700 font-semibold" title={item.ksa.find(k => k.type === "Knowledge")?.items.join(", ")}>K</span>
                        <span className="px-1.5 py-0.5 text-[10px] rounded bg-green-100 text-green-700 font-semibold" title={item.ksa.find(k => k.type === "Skills")?.items.join(", ")}>S</span>
                        <span className="px-1.5 py-0.5 text-[10px] rounded bg-purple-100 text-purple-700 font-semibold" title={item.ksa.find(k => k.type === "Abilities")?.items.join(", ")}>A</span>
                      </div>

                      {/* Opportunities Count */}
                      {item.opportunities.length > 0 && (
                        <div className="pt-2 border-t border-gray-100">
                          <span className="text-xs text-accent font-medium">
                            {item.opportunities.length} {item.opportunities.length === 1 ? "opportunity" : "opportunities"}
                          </span>
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-primary">4</div>
              <p className="text-sm text-gray-600">Stages of Growth</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-secondary">27</div>
              <p className="text-sm text-gray-600">Total Courses</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-accent">3+</div>
              <p className="text-sm text-gray-600">Certification Types</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-primary-700">UC A-G</div>
              <p className="text-sm text-gray-600">Approved</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
