# Next.js ISR Testing

Exploration of various ways ISR reacts / responds to errors and different prop returns. See the `pages` directory for the various tests. Each of the tests are prefixed with `isr-`.

Note that all test results are taken against a production build `npm run build`.

- GH Repo - https://github.com/dapperlabs/nextjs-isr-testing
- Vercel Deployment - https://nextjs-isr-testing.vercel.app

## Development

- `npm ci`
- `npm run dev`

## Context

Incremental Static Regeneration (ISR) is made available in next.js by default. It allows us to create and update static pages _after_ the site is built. We can use static generation on a per-page basis, without needing to rebuild the entire site. The individual pages can be (re)generated on demand.

![ISR Lifecycle](https://vercel.com/_next/image?url=%2Fdocs-proxy%2Fstatic%2Fdocs%2Fisr%2Fregeneration.png&w=1080&q=75)

## Reference Links

- [A Complete Guide To Incremental Static Regeneration (ISR) With Next.js](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/)
- [Incremental Static Regeneration](https://vercel.com/docs/next.js/incremental-static-regeneration)

## Extra Notes

- Client side transitions do not trigger revalidation
- Refreshing on any page in the app triggers revalidation if the revalidation time period has passed
- If I am the one that loads the page and triggers the revalidation, the revalidation will happen in the background but I will see data that’s stale by one revalidation period.
- In local dev, `getStaticProps` runs on every page request. If `getStaticProps` errors, the next.js error overlay view is shown.

## Other Thoughts / Findings

- Look into the combination of SSR + `Cache-Control` header + `stale-while-revalidate` directive. It could be an alternative to ISR in some (all?) cases, and even be implemented now on certain pages. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) and [web.dev](https://web.dev/stale-while-revalidate/) articles.
