# Media Integration Plan

## Overview
Integrate images and videos from Diallo's media folder into the TESA website. Media will be distributed across existing pages rather than creating a dedicated gallery page.

**Source Location:** `/Users/kevin/Library/CloudStorage/OneDrive-WolffCreative/TESA_Project`

---

## Available Media Assets

### Pictures (~60+ images)
| Category | Examples |
|----------|----------|
| Space Camp Hall of Fame | Jacket photo, ceremony images |
| Shades of Blue Events | Speaking, with attendees, with students (Nov 2025) |
| M.A.R.S. Mission | Mission patch/artwork, spacesuit photos |
| Teaching/Classroom | Various dated photos (2019-2025) |
| Naval/Military | Pilot cockpit, aviation imagery |

### Videos (7 videos)
| File | Size | Notes |
|------|------|-------|
| Space Camp Hall of Fame 2025 | 2GB | **Upload to YouTube** - too large for direct hosting |
| Meeting in PCEE | 148MB | Classroom/teaching content |
| 20221013_103853.mp4 | 12MB | Teaching clip |
| 20221013_103507.mp4 | 10MB | Teaching clip |
| 20221020_105755.mp4 | 9.2MB | Teaching clip |
| 20221020_105734.mp4 | 8.7MB | Teaching clip |
| 20230302_135406.mp4 | 7MB | Teaching clip |

---

## Integration Plan by Page

### 1. Homepage - "TESA in Action" Section
**Location:** Between existing sections (after TrustSignals or before Testimonials)

**Content:** 3-4 impactful photos showing:
- Teaching/classroom in action
- Space experience (spacesuit or Hall of Fame)
- Community engagement (Shades of Blue event)

**Design:** Simple responsive grid, lightweight section

---

### 2. Program Page - Teaching Photos
**Location:** Integrate into existing sections or add "Program in Action" subsection

**Content:**
- Classroom instruction photos
- Students working on projects
- Hands-on learning moments

**Purpose:** Show parents what the actual learning experience looks like

---

### 3. Partnerships Page - Shades of Blue Photos
**Location:** Within or after CurrentPartners section

**Content:**
- D Wallace Speaker Shades of Blue Ocean City 11_1_2025.JPG
- Shades of Blue Ocean City D Wallace and Attendees Pic 11_1_2025.JPG
- Shades of Blue Ocencity D Wallace and YESS WE CAN Student 11_1_2025.JPG

**Purpose:** Demonstrate active community engagement with partners

---

### 4. About Page - Hall of Fame Video Only
**Location:** Replace VideoPlaceholder in SpaceExperience section

**Content:**
- YouTube embed of "Diallo Wallace - Space Camp Hall of Fame 2025" video

**Note:** Keep existing content as-is to avoid page bloat

---

## Technical Requirements

### Image Optimization
- Resize large images before adding to `/public/images/`
- Target max width: 1920px for hero/full-width, 800px for cards
- Use WebP format where possible
- Optimize with Next.js Image component

### Video Hosting
- Upload Hall of Fame video to YouTube (unlisted or public)
- Update VideoPlaceholder component with YouTube embed
- Consider YouTube embeds for smaller teaching clips if needed

### File Organization
```
/public/images/
├── homepage/
│   └── tesa-in-action/
├── program/
│   └── classroom/
├── partnerships/
│   └── shades-of-blue/
└── experiences/  (existing)
```

---

## Implementation Order

1. [x] Copy and optimize selected images to `/public/images/`
2. [x] Homepage: Create "TESA in Action" section
3. [x] Program Page: Add teaching photos
4. [x] Partnerships Page: Add Shades of Blue photos
5. [x] About Page: Add YouTube Hall of Fame video embed (component ready)
6. [ ] Test responsive behavior on all pages
7. [ ] Commit and merge

## Completed Components

### New Components Created:
- `src/components/homepage/TESAInAction.tsx` - 4-image grid with hover effects
- `src/components/program/ProgramInAction.tsx` - 3-image classroom gallery
- `src/components/partnerships/CommunityEngagement.tsx` - Shades of Blue photos

### Updated Components:
- `src/components/ui/VideoPlaceholder.tsx` - Now supports YouTube embed with click-to-play

### Image Files Added:
```
/public/images/
├── homepage/tesa-in-action/
│   ├── spacesuit.jpg (202KB)
│   ├── hall-of-fame-jacket.jpg (163KB)
│   ├── elite-week-event.jpg (253KB)
│   └── classroom-instruction.jpg (146KB)
├── program/classroom/
│   ├── student-project-work.jpg (147KB)
│   ├── hands-on-learning.jpg (356KB)
│   └── classroom-collaboration.jpg (197KB)
└── partnerships/shades-of-blue/
    ├── speaker-presentation.jpg (214KB)
    ├── with-attendees.jpg (266KB)
    └── with-student.jpg (204KB)
```

## Pending: YouTube Video

When ready to add the Hall of Fame video:
1. Upload "Diallo Wallace - Space Camp Hall of Fame 2025.mp4" to YouTube
2. Get the video ID from the URL (the part after `v=`)
3. Update `src/components/about/SpaceExperience.tsx`:
   ```tsx
   <VideoPlaceholder
     title="Space Camp Hall of Fame Induction"
     videoId="YOUR_VIDEO_ID_HERE"  // Add YouTube video ID
     aspectRatio="16/9"
   />
   ```

---

## Notes
- User will upload videos to YouTube and provide links
- Keep About page content as-is (already comprehensive)
- No dedicated Media Gallery page - distribute across existing pages
- Focus on images that support each page's narrative
