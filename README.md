
# Luxury Construct & Landscaping - High-Performance Landing Page

A premium, high-performance landing page designed for **Luxury Concrete And Landscaping LLC dba Luxury Construction**, serving Salt Lake City, UT. 

This project combines high-end aesthetics (Parallax 3D effects, Glassmorphism) with rigorous **Technical SEO** strategies to rank for competitive keywords like "Heated Driveways" and "Stamped Concrete".

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Utility-first, Responsive)
- **Routing**: React Router DOM (v6)
- **Animation**: Custom RequestAnimationFrame loops (No heavy animation libraries) for 60fps performance.

## ✨ Key Features

### 1. 3D Parallax Hero Section
- Custom SVG Isometric Cubes.
- Physics-based mouse tracking + Scroll-away animation.
- Optimized using `requestAnimationFrame` and CSS Transforms (GPU acceleration) to ensure zero layout thrashing.

### 2. "Bento Box" Services Grid
- Responsive Grid layout that shifts from a single column (Mobile) to a complex mosaic (Desktop).
- **Image Optimization**: Uses `srcset` and dynamic `sizes` attributes to serve 400w images to mobile and 800w/1200w to desktop, reducing bandwidth.

### 3. Interactive Process Timeline
- A "Draw-on-scroll" vertical line animation that tracks the user's viewport progress.
- Physically connects the timeline nodes as the user reads.

### 4. Google/Yelp Style Testimonials
- Auto-scrolling carousel with "Read More" functionality.
- Mimics Google Reviews UI for high social trust.

---

## 🔍 SEO Strategy & Implementation

We have implemented a **"Server-Side" Visibility Strategy** within a Client-Side App.

### Keyword Targeting
**Primary**: Heated Driveway Systems Salt Lake City, Stamped Concrete, Foundation Contractors.
**Secondary**: Pickleball Courts, Garage Construction, Retaining Walls.

### Technical Implementation (`index.html`)
Even though this is a React App, critical SEO data is **hardcoded** into the HTML entry point. Bots see this immediately:
1.  **Meta Tags**: Title, Description, and Keywords customized for SLC/Utah.
2.  **JSON-LD Schema**:
    -   `LocalBusiness`: Links official DBA name, Address, Phone, and GeoCoordinates.
    -   `Offer` (Services): Lists specific services and service areas.
    -   `HowTo` (Process): Marks up the timeline as a step-by-step guide.
3.  **Open Graph**: Branded social sharing cards.

---

## 🛠️ Setup & Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install
```

### Development Server
```bash
# Start local server at http://localhost:5173
npm run dev
```

### Production Build
```bash
# Create optimized production build in /dist
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

- `/components`: UI Sections (Hero, Services, Contact, etc.)
- `/public`: Static assets (robots.txt, sitemap.xml)
- `index.html`: SEO Entry point & Font loading
- `tailwind.config.js`: Design tokens (Colors, Fonts, Animations)

## 📄 License
All rights reserved © Luxury Concrete And Landscaping LLC.
