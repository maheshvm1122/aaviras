# AAVIRA — Premium Saree Store

A luxury saree storefront built with Next.js, TypeScript, Tailwind CSS, React Three Fiber, Drei, Zustand and a mock Stripe checkout flow.

## Product-owner review build

- Editorial Kanjivaram-led homepage with premium hero and CTA hierarchy
- New Arrivals, Trending Kanjivaram, Pattu, Silk, Cotton, Banarasi, Fancy, Designer and Party Wear discovery
- Local product imagery so the storefront does not depend on hotlinked external image URLs
- Responsive product cards with badges, ratings, pricing, wishlist affordance and 3D discovery cue
- Product detail page with gallery, colour variants, detailed description, care information and 3D drape viewer
- Cart and checkout flow with quantity management, shipping threshold and mock payment selection
- Mobile navigation and responsive layouts
- 3D cloth viewer with orbit rotation, pan, zoom, auto-rotation, silk material and zari border
- Framer Motion dependency remains pinned with a matching motion-dom version; application animations use stable CSS transitions to avoid the previously reported runtime import mismatch

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment

Copy `.env.example` to `.env.local` when using MongoDB. The app works with its local product catalog without MongoDB.

## Image note

The included product/hero artwork was generated specifically for this prototype. Replace it with licensed commercial product photography before launch.
# aavira
