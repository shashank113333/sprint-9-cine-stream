# Engineering Prompt & Architectural Log - Sprint 09 (Track A: Frontend Specialist)

## Engineer Details
- **Name:** Shashank Vishwakarma
- **Track:** Track A - Frontend Architecture (Next.js 15, SSR, & SEO Optimization)
- **Project:** Next.js Migration (Cine-Stream SPA Upgrade)

---

## Architectural Decisions & Prompts Log

### 1. Next.js 15 App Router Initialization (P0)
- **Objective:** Deprecate `react-router-dom` and Client-Side Routing in favor of Next.js file-based App Router.
- **Implementation:** 
  - Converted routes to native file structure: `app/page.js` (Home), `app/movie/[id]/page.js` (Dynamic Media Details), `app/favorites/page.js` (Watchlist).
  - Configured `next.config.mjs` with remote image patterns (`image.tmdb.org`, `m.media-amazon.com`).

### 2. Server vs. Client Component Isolation (P1)
- **Objective:** Hydrate initial dataset directly on Node server without `useEffect` and isolate interactivity using `"use client";`.
- **Implementation:**
  - `app/page.js` (Server Component): Directly executes `await fetchPopularMovies(1)` on the server for immediate HTML hydration.
  - `src/components/HomeClient.jsx`, `Navbar.jsx`, `MovieCard.jsx`, `SearchBar.jsx` (Client Components): Marked with `"use client";` to isolate browser state, debounced manual search, local storage favorites, and DOM event listeners.

### 3. Dynamic SSR & SEO Metadata Injection (P2)
- **Objective:** Dynamic routing `/movie/[id]` with server-rendered metadata injection (`<title>`, `<meta name="description">`).
- **Implementation:**
  - Implemented `export async function generateMetadata({ params })` in `app/movie/[id]/page.js`.
  - Server fetches media payload by ID and injects dynamic titles (e.g., `Inception (2010) | Cine-Stream`) and synopsis into document head for search engine crawlers.

---

## Technical Verification
- Built locally via `npm run build` with zero SSR hydration mismatches.
- Verified dynamic SEO metadata tags via page source inspection.
