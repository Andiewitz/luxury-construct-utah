
# SEO Strategy & Implementation Documentation
**Project:** Luxury Concrete And Landscaping LLC dba Luxury Construction  
**Domain:** `tecontractorsinutah.com`  
**Location:** Salt Lake City, UT 84109

This document outlines the Search Engine Optimization strategies, technical implementations, and keyword targets integrated into the application.

---

## 1. Keyword Strategy

The site targets high-value, high-intent queries specific to the Salt Lake City market, focusing on specialized services (Heated Driveways) and general high-ticket construction (Foundations, Stamped Concrete).

### Primary Keywords (High Priority)
*Targeting the homepage H1, Title Tags, and Meta Descriptions.*
- **Heated Driveway Systems Salt Lake City** (Unique Selling Point)
- **Concrete Contractors Salt Lake City**
- **Stamped Concrete Salt Lake City**
- **Concrete Foundation Contractors Utah**
- **Luxury Landscaping Utah**

### Secondary Keywords
*Targeting Service Cards and Supporting Content.*
- Pickleball Court Builders Utah
- Custom Basketball Court Construction
- Retaining Wall Contractors South Salt Lake
- Garage Construction Utah
- Concrete Walkways & Sidewalks
- Home Remodeling & Renovation

### Long-Tail & Intent Keywords
*Embedded in Service Descriptions and Tags.*
- "How much does a heated driveway cost in Utah" (implied via content)
- "Stamped concrete patio contractors 84109"
- "Concrete walkout basement construction"
- "Decorative concrete contractors near me"

---

## 2. Technical SEO Implementation

### A. "Server-Side" Visibility (Pre-Rendering)
Although this is a React Single Page Application (SPA), critical SEO data is **hardcoded directly into `index.html`**. 
*   **Why?** Search engine crawlers (Googlebot, Bingbot) see the Title, Description, and Schema Markup *immediately* upon the initial HTTP request, without needing to execute JavaScript.

### B. Meta Tags (`index.html`)
-   **Title Tag:** Optimized for local intent (`Luxury Construction - Heated Driveways, Stamped Concrete & Foundations Salt Lake City`).
-   **Meta Description:** Compelling ad-copy style summary including phone number and key services (155 characters).
-   **Canonical URL:** Prevents duplicate content issues (`https://tecontractorsinutah.com`).
-   **Open Graph & Twitter Cards:** Rich social sharing previews with branded images and descriptions.

### C. Structured Data (Schema.org)
We implement multiple types of JSON-LD structured data to help Google understand the page content.

1.  **LocalBusiness / GeneralContractor Schema** (`index.html` & `Contact.tsx`)
    *   Defines the business name, DBA ("Luxury Construction"), official address, phone number, logo, and price range.
    *   Links the brand to the specific GeoCoordinates (Latitude: 40.7077, Longitude: -111.8155).
2.  **ItemList / Offer Schema** (`Services.tsx`)
    *   Marks up the specific services offered.
    *   Defines the "AreaServed" as Salt Lake City.
    *   Helps eligible rich snippets for services in search results.
3.  **HowTo Schema** (`Process.tsx`)
    *   Marks up the "Our Process" section as a step-by-step guide.
    *   Includes steps: Consultation -> Proposal -> Design -> Execution -> Inspection.
4.  **BreadcrumbList Schema** (`Home.tsx`)
    *   Defines the site hierarchy.

---

## 3. On-Page Optimization & Content

### Semantic HTML
*   **Heading Hierarchy:** Strict `<h1>` (Hero), `<h2>` (Section Headers), `<h3>` (Card Titles) structure.
*   **Lists:** Usage of `<ol>` for the Process section and `<ul>` for service tags.
*   **Navigation:** Semantic `<nav>` and `<footer>` elements.

### Image Optimization (`Services.tsx`)
*   **Responsive Images (`srcset`):** The browser downloads different image sizes (400w, 800w, 1200w) based on the device width.
*   **Format:** Google CDN images are requested with `-rw` flag for **WebP** format.
*   **Lazy Loading:** `loading="lazy"` and `decoding="async"` prevents off-screen images from blocking the initial page load.
*   **Alt Text:** All images feature descriptive, keyword-rich alt text (e.g., *"Heated concrete driveway installation in Salt Lake City during winter"*).

### Accessibility (UX/SEO overlap)
*   **Skip Link:** A hidden "Skip to main content" link is the first element in the DOM, allowing screen readers to bypass navigation.
*   **Contrast:** High contrast text colors (Sage Green / White on Dark Backgrounds) ensure readability.

---

## 4. Files & Configuration

### `public/robots.txt`
Allows all user agents to crawl the site and points to the Sitemap.

### `public/sitemap.xml`
Lists the primary URL and update frequency to assist crawlers.

### `vercel.json`
Configures SPA routing (Rewrites) to ensure deep links works and 404s are handled correctly by the React Router, preventing "Soft 404s" on the server level.

---

## 5. Next Steps for Growth

1.  **Blog Integration:** Create a `/blog` subdirectory to target the "Question-Based Keywords" (e.g., "Best concrete for Utah winters").
2.  **Backlink Building:** Register the NAP (Name, Address, Phone) on local directories (Yelp, KSL, Angi) exactly as it appears in the Schema.
3.  **Google Business Profile:** Ensure the GMB profile matches the Schema data 100%.
