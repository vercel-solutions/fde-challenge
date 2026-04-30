# kw — Vercel Professional Services Challenge

Welcome. This is a minimal storefront our customer recently handed off to the Professional Services team. The codebase is intentionally tiny — focus on the three issues below.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## What the customer needs

### 1. The page is slow

Our customer launched this storefront yesterday. Analytics show the product grid takes up to 3 seconds to appear. It's a plain product page so it should feel instant. Find the cause and fix it.

### 2. A/B title experiments

Marketing wants to A/B test product copy. Each product in `public/data.json` already carries four title variants (`default`, `a`, `b`, `c`). Roll out personalization so each visitor sees one variant consistently on repeat visits — without losing the speed gains from #1.

### 3. Try it on with AI

Some shoppers asked to see how our gear looks on them. Add an upload button to the grid. After a shopper uploads a photo (you can use `public/dom.jpeg` for testing), regenerate each product image so it's worn by the uploaded person.

Use AI SDK + Vercel AI Gateway with the `google/gemini-2.5-flash-image-preview` image model. We'll provide an `AI_GATEWAY_API_KEY` at the interview.
