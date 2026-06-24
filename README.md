# Proptech Feed

A real estate social feed UI built with Next.js 16, Tailwind CSS, and TypeScript. Designed to mimic a property-focused social platform where users can browse listings, general updates, and requests from agents, developers, and individuals.

## Features

- **Feed** — Infinite-scrolling post feed with mock data (500+ posts). Supports property listings, general posts, and requests
- **Post Cards** — Each card shows user info, listing type badge, category badge, location, media (images/video), likes, comments, and bookmarks
- **Media Carousel** — Multi-image/video support with prev/next navigation and dot indicators
- **Stories** — Horizontally scrollable story avatars with left/right scroll controls
- **Feed Composer** — Post creation UI with tabs (Property, General, Request), textarea, location tag, and post button
- **Filters sidebar** — Quick-access links (Messages, Boosts, Saved, Communities) and filter dropdowns (Location, Listing Type, Budget, User Type)
- **Trends sidebar** — Trending locations, hot requests, and top communities panels
- **Navbar** — Fixed top nav with route-aware active link highlighting
- **Layout** — Navbar is fixed; only the feed column scrolls; sidebars stay pinned

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v3](https://tailwindcss.com) with a custom design token config
- [React Hook Form](https://react-hook-form.com)
- Custom local fonts: OpenRunde & SF Rounded

## Project Structure

```
src/
├── app/
│   ├── (public_pages)/
│   │   ├── _components/     # All page-level UI components
│   │   ├── layout.tsx        # Fixed navbar + scrollable main
│   │   └── page.tsx          # Three-column grid layout
│   └── layout.tsx            # Root layout with font setup
├── components/               # Shared primitives (Button, Textarea, Wrapper…)
├── icons/                    # Custom SVG icon components
├── styles/
│   ├── fonts/                # Local woff2 font files
│   └── globals.css
├── types/                    # Shared TypeScript interfaces (Post, Story, MediaItem…)
└── utils/
    ├── index.ts              # cn() helper, formatDate
    └── mock-data.ts          # 500+ generated mock posts and stories
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Design Tokens

Colors, font sizes, and shadows are defined in `tailwind.config.ts`. All UI components use only the tokens defined there — no arbitrary color values.
