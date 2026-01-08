# Specification: TESA Website Phase 1 MVP

## Goal
Build an accessible, SEO-optimized MVP website for The Engineering and Science Academy (TESA) to establish credibility and online presence for January 2026 legislative meetings, featuring founder credentials, program information, and partnership visibility.

## About TESA

The Engineering and Science Academy (TESA) is a pre-college hybrid (resident and online) school, designed to prepare students for academic and technical rigor. With a mission rooted in aerospace excellence, TESA equips students with the skills, certifications, and confidence to thrive in STEM-intensive majors at universities.

**The Problem TESA Solves**: To counter the academic and motivational challenges driving a 60% attrition rate among first-year engineering students, TESA equips learners with the knowledge, skills, and abilities to thrive in college. Through 10-week for-credit courses, students tackle real-world design challenges and earn industry-recognized certifications in MATLAB, Satellite Toolkit (STK), and the Project Management Institute's CAPM—tools used by aerospace professionals. TESA's hands-on learning and mentorship model fosters resilience and readiness for success in STEM majors.

**Contact**: diallo@tesa4space.org

## TESA Pedagogical Approach

**4-Step Learning Process**
All TESA courses follow a rigorous methodology that builds from theory to practice:
1. **Mathematical Analysis**: Students solve problems analytically by hand
2. **Computer Programming**: Build programs to verify hand calculations
3. **Modeling & Simulation**: Develop and run simulated models to validate results
4. **Physical Construction**: Build and test real systems to confirm the approach

**Flipped Classroom Model**
Students read material before sessions and come prepared with questions. Class time is devoted to discussion, problem-solving, and hands-on application rather than lectures.

**Dynamic Notes with MATLAB LiveScripts**
Students create "dynamic notes" using MATLAB LiveScripts—a fusion of book material and programming code. These interactive notes allow students to explore the range of equations and remain useful 3, 5, or 10 years later when the material is needed again.

**Computational Foundation**
Courses are computationally based. Students build computer programs of equations from textbooks, generate graphs and data for further study, and develop practical programming skills alongside theoretical knowledge.

## TESA Graduate Profile

When a TESA graduate walks into a job interview at NASA, SpaceX, or Lockheed Martin, they are known for their leadership in design, analysis, and practical application of STEM.

**A TESA-trained student can:**
1. Articulate the requirements for a solution
2. Develop three options and provide a risk assessment for each (cost, schedule, performance)
3. Recommend the option with the highest probability of success

**Core Values**: Integrity in all aspects of work and learning.

## Course Offerings

*Note: Courses marked with * are foundational courses that all other courses build upon*

| Science | Technology | Engineering | Mathematics |
|---------|------------|-------------|-------------|
| Physics First | Raspberry Pi | *Pre-Engineering | Mathematics for Space Applications |
| Physics I | Arduino | Technical Writing | Computational Calculus I (Numerical Differentiation) |
| Physics C (Mechanics) | *MATLAB Computer Programming | Structural Engineering | Computational Calculus II (Numerical Integration) |
| Physics C (E&M) | | Electrical Engineering I (DC) | Differential Equations (numeric) |
| Statics | | Electrical Engineering II (AC) | Linear Algebra |
| Dynamics | | Mechanical Engineering | Laplace Transforms |
| Spring, Mass, Damper | | Aerospace Engineering (Aerodynamics) | |
| | | Aerospace Engineering II (Aerodynamics II) | |
| | | Aerospace Engineering (Orbital Mechanics I) | |
| | | Aerospace Engineering (Orbital Mechanics II) | |
| | | Rocketry | |

## Scholarships

**Fari Scholarship** (Space Camp Student)
In honor of Jafari Wallace, who devoted his life to understanding technology and encouraged his brother Diallo's dreams of aviation and space. This scholarship provides a student with the opportunity to attend Space Camp.

**Mr. Veri Scholarship** (Space Camp Educator)
In honor of Richard Veri, a cherished mentor who embodied what it means to be a scientist, teacher, and human being. His patience in answering questions about science and engineering inspired many victories. This scholarship enables an educator to attend Space Camp.

**Jim Irwin Scholarship** (Space Camp Student)
In honor of Apollo 15 astronaut Jim Irwin, who walked on the Moon and befriended Diallo during his senior year of high school. Jim and Commander Dave Scott discovered the "Genesis Rock," providing vital clues about the Moon's origins. This scholarship supports a student's opportunity to attend Space Camp.

## Founder: Diallo Wallace

**Mission**: Diallo focuses on empowering students to understand science and engineering through the practical application of mathematics. He develops pre-college curricula aligned with university expectations and advocates for computation and programming in K-12.

### Education
- B.S. Electronics Engineering, University of Illinois
- B.A. Mathematics, University of Illinois
- M.S. Astronautical Engineering, Naval Postgraduate School
- M.P.M. (Project Management), Keller Graduate School
- Ph.D. candidate, Engineering Education, Purdue University

Designed a comprehensive science and engineering curriculum spanning grades 6-12, with the high school sequence approved by the University of California A-G program. Presented at ASEE on integrating computation and programming into K-12, and at NASA's SEEC on applying the engineering design process and the mathematics behind Apollo 13.

### Space & Analog Astronaut Experience
- Analog Astronaut: Spacesuit evaluations at University of North Dakota's Inflatable Lunar and Mars Habitat (ILMAH)
- Mission Commander: Flashline Mars Arctic Research Station on Devon Island
- NASA Airborne Astronomy Ambassador: Flew aboard SOFIA 747 flying observatory during weeklong data collection mission
- Space Camp alumnus and advocate for educators and students
- **Inducted into Space Camp Hall of Fame in 2025**

### Military Service
Naval Aviator and Aerospace Engineering Duty Officer (NAVAIR Reserve Program)
- Professor at U.S. Naval Academy Department of Aerospace Engineering (aeronautics, astronautics, MATLAB programming)
- Officer Representative of 1,000-member Naval Academy Flight Training Squadron (VTNA)
- Reserve tours: Assistant OIC NR Flight Test Augmentation Unit; XO NR Joint Functional Component Commander for Space; Administration Officer NR Rapid Research and Development Unit
- Defense Acquisition Corps (Level III Program Management)
- Advanced qualifications: Space Acquisitions and Space Operations
- Supported Astronaut Office at Johnson Space Center

### Awards & Decorations
Military Outstanding Volunteer Service Medal, Global War on Terrorism Service Medal, National Defense Service Medal, Sea Service Deployment Ribbon, Armed Forces Expeditionary Medal, Naval Unit Commendation, Navy Achievement Medal

## User Stories
- As a potential funder (legislator, foundation), I want to quickly understand TESA's mission, founder credentials, and partnership ecosystem so that I can evaluate funding opportunities
- As a parent of a 6th-12th grader, I want to see the learning pathway, certifications offered, and career outcomes so that I can decide if TESA is right for my child

## Specific Requirements

**Mobile-First Development Approach**
- All components and pages must be designed mobile-first, then enhanced for larger screens
- Tailwind CSS mobile-first breakpoint strategy: base styles for mobile, sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- Touch-friendly tap targets: minimum 44x44px for all interactive elements
- Test on mobile devices/emulators before desktop validation
- Performance budget prioritizes mobile: 3G network conditions as baseline
- Typography scales responsively: base 16px mobile, larger on tablet/desktop
- Images must use responsive srcset with mobile-optimized sizes first
- Navigation must be thumb-friendly on mobile with hamburger menu pattern

**Next.js Version and Security Requirements**
- **CRITICAL**: Use Next.js 14.x stable (latest) - NOT affected by CVE-2025-55182/CVE-2025-66478 (React2Shell RCE)
- Alternatively, if Next.js 15.x is required, use ONLY patched versions: 15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8, or 15.5.7+
- **DO NOT USE**: Next.js 14 canary versions ≥14.3.0-canary.77 (vulnerable)
- **DO NOT USE**: Unpatched Next.js 15.x or 16.x versions (critical RCE vulnerability)
- Run `npm audit` after installation to verify no known vulnerabilities
- Pin exact versions in package.json to prevent accidental upgrades to vulnerable versions

**Next.js App Router Project Setup**
- Initialize with TypeScript, Tailwind CSS, ESLint, App Router, and src directory structure
- Server Components by default; use `'use client'` only for interactive elements (forms, navigation toggles)
- Configure `next.config.ts` with security headers (X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy)
- Set up image optimization with WebP format and YouTube thumbnail remote pattern
- Deploy to Railway with custom domain tesa4space.org

**Root Layout with Navigation and Footer**
- Create `src/app/layout.tsx` with semantic HTML structure (`<html>`, `<body>`, `<header>`, `<main>`, `<footer>`)
- Include skip navigation link as first focusable element
- Responsive header with mobile hamburger menu using CSS-based toggle (no JS library dependency)
- Footer with contact info, social links, and copyright
- Apply Inter or Montserrat font family via next/font/google for optimal loading

**Homepage (src/app/page.tsx)**
- Hero section with clear value proposition: "Credit-bearing aerospace courses for grades 6-12"
- Trust signals section: Space Camp Hall of Fame 2025, Naval Academy, Purdue PhD candidate
- Three audience CTAs with distinct paths: Funders (partnerships page), Parents (program page), Students (contact page)
- Program pathway preview showing grade progression 6th-12th
- Partner logos section with placeholder grid for pending assets
- Testimonials section with placeholder cards for student/parent quotes (placeholder text until content received)

**About TESA Page (src/app/about/page.tsx)**
- TESA mission statement: Pre-college hybrid school addressing 60% first-year engineering attrition
- Founder bio section featuring Lt. Commander Diallo Wallace with comprehensive credentials
- Professional headshot with proper alt text describing credentials
- Education section: University of Illinois, Naval Postgraduate School, Keller, Purdue PhD candidate
- Space & Analog Astronaut experience: ILMAH, Flashline Mars, SOFIA, Space Camp Hall of Fame 2025
- Military service: Naval Academy professor, Flight Training Squadron, Defense Acquisition Corps
- "The Gap TESA Fills" section explaining the need for aerospace education
- Vision statement: Maryland airports to national expansion to DODEA
- Contact email: diallo@tesa4space.org

**Program Overview Page (src/app/program/page.tsx)**
- Visual learning pathway component showing progression from 6th to 12th grade
- Enhanced learning pathway with KSAs (Knowledge, Skills, Abilities) and opportunity indicators at each milestone
- Course catalog organized by STEM categories (Science, Technology, Engineering, Mathematics)
- Highlight foundational courses: Pre-Engineering and MATLAB Computer Programming
- Course cards displaying individual programs with descriptions
- "Our Approach" section explaining the 4-step learning process and Dynamic Notes methodology
- Industry certifications section: MATLAB, Ansys STK, PMI CAPM with brief descriptions
- 10-week for-credit course format explanation
- Career outcomes section with aerospace industry salary examples and job titles
- "TESA Graduate Profile" section describing the capabilities and mindset of TESA-trained students
- Call-to-action for enrollment inquiries linking to contact form

**Scholarships Page (src/app/scholarships/page.tsx)**
- Overview of TESA's commitment to accessibility through scholarships
- Fari Scholarship card: In honor of Jafari Wallace, supports student Space Camp attendance
- Mr. Veri Scholarship card: In honor of Richard Veri, supports educator Space Camp attendance
- Jim Irwin Scholarship card: In honor of Apollo 15 astronaut, supports student Space Camp attendance
- Each scholarship includes honoree story and application/inquiry CTA
- Link to Space Camp program information

**Partnerships Page (src/app/partnerships/page.tsx)**
- Current partners grid: MATHWORKS, Ansys, Our Shades of Blue, SpaceKind (placeholder logos until assets received)
- "Cognia Accreditation in Progress" status badge
- Section for potential funders: USDA, FAA, NSF with "Coming Soon" or placeholder treatment
- Partnership benefits and collaboration opportunities overview
- Contact CTA for partnership inquiries

**Contact Page (src/app/contact/page.tsx)**
- Accessible form with proper labels, fieldsets, and ARIA attributes
- Required fields: Name, Email, Subject (dropdown), Message
- Client-side validation with immediate feedback; server-side validation required before processing
- Form error states with specific field-level messages
- Email capture integration point (implementation detail deferred)
- Spam protection via honeypot field (no external dependencies)

**Blog/News Framework (src/app/blog/)**
- MDX-based blog system using @next/mdx or contentlayer
- Blog listing page with card grid showing title, date, excerpt
- Individual post template `[slug]/page.tsx` with author info and share functionality
- Support for categories/tags via frontmatter metadata
- Designed for future student content contributions

**Accessibility (WCAG 2.1 AA Compliance)**
- Semantic HTML throughout: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<button>`
- Keyboard navigation for all interactive elements with visible focus indicators (2px outline minimum)
- Color contrast ratio 4.5:1 minimum for normal text, 3:1 for large text
- Alt text for all images; decorative images use `alt=""`
- Video embeds must include captions (Hall of Fame video requires YouTube captions)
- Skip navigation link: "Skip to main content"
- Focus management for mobile menu and any modals

**SEO Foundation**
- Remove any indexing blocks; verify robots.txt allows crawling
- XML sitemap at /sitemap.xml generated via next-sitemap or App Router sitemap.ts
- Unique meta titles and descriptions per page via Next.js Metadata API
- Open Graph and Twitter Card tags for social sharing
- JSON-LD structured data: EducationalOrganization schema on homepage and about page
- Clean URL structure: /about, /program, /scholarships, /partnerships, /contact, /blog

**Performance Targets (Core Web Vitals)**
- Largest Contentful Paint (LCP): < 2.5 seconds
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms (or Interaction to Next Paint < 200ms)
- Use next/image for all images with proper `sizes` attribute for responsive loading
- Font optimization via next/font to eliminate layout shift from font loading

## Visual Design
No visual mockups provided in `/Users/kevin/Apps/tesa-site/agent-os/specs/2026-01-06-tesa-website-phase1-mvp/planning/visuals/`.

**Brand Guidelines (derived from TESA logo)**
- Logo: tesa_logo.png - circular emblem with gear shape, Earth/Moon, aerospace silhouettes
- Primary color: Deep navy blue (#1a237e) - from logo background
- Secondary color: Royal blue (#3949ab) - from logo background gradient
- Accent color: Gold (#d4a017) - from rope border, use for highlights/CTAs
- Highlight color: Red (#c62828) - from TESA text, use sparingly for emphasis
- Neutral palette: White background (#ffffff), light surface (#f8fafc), dark text (#1e293b)
- Typography: Inter or Montserrat for headings, Inter or Source Sans Pro for body
- Logo usage: Header navigation, favicon, footer, social sharing images
- Dark mode support: Structure CSS variables to support future dark mode (not required Phase 1)

## Existing Code to Leverage

**No existing codebase**
- Project is greenfield; tesa-site directory contains only agent-os folder
- Will initialize new Next.js project using `npx create-next-app@latest`
- Follow Next.js 14+ App Router conventions from Context7 best practices

**Client Asset Location**
- TESA Logo: `/Users/kevin/Apps/tesa-site/tesa_logo.png` (available now)
- Source: `/Users/kevin/Library/CloudStorage/OneDrive-WolffCreative/TESA_Project/`
- Contains ~68 photos, 7 videos, CV/Resume PDF for bio content
- Hall of Fame video (2GB) must be uploaded to YouTube and embedded
- Organize into public/images/about/, public/images/experiences/, public/images/hero/
- Logo to be placed at public/images/tesa_logo.png and generate favicon variants

**Standards Compliance**
- Follow project standards in agent-os/standards/ for accessibility, components, CSS, responsive design
- **Mobile-first is mandatory**: Write base CSS for mobile, add breakpoint modifiers (sm:, md:, lg:) for larger screens
- Use Tailwind CSS utilities; minimize custom CSS
- Touch-friendly tap targets minimum 44x44px
- Test every component on mobile viewport (375px width) before larger sizes

## Out of Scope
- User authentication or login functionality
- Payment processing or e-commerce features
- Student portal or dashboard
- Course enrollment management system
- Database integration or backend API beyond contact form
- Email newsletter service integration (capture only, no sending)
- CMS admin interface for content editing
- Multi-language/internationalization support
- Dark mode toggle (CSS structure ready, UI not implemented)
- Analytics dashboard (GA4 setup deferred to post-deploy)
