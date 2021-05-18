export default function Home() {
  return (
    <div>
      <h1>
        Next.js ISR Tests
      </h1>
      <p>Exploration of various ways ISR reacts / responds to errors and different prop returns. See the <code>pages</code> directory for the various tests. Each of the tests are prefixed with <code>isr-</code>.</p>
      <p>Note that all test results are taken against a production build <code>npm run build</code>.</p>
      <ul>
      <li>GH Repo - <a href="https://github.com/dapperlabs/nextjs-isr-testing" target="_blank">https://github.com/dapperlabs/nextjs-isr-testing</a></li>
      <li>Vercel Deployment - <a href="https://nextjs-isr-testing.vercel.app" target="_blank">https://nextjs-isr-testing.vercel.app</a></li>
      </ul>
      <h2 id="development">Development</h2>
      <ul>
      <li><code>npm ci</code></li>
      <li><code>npm run dev</code></li>
      </ul>
      <h2 id="context">Context</h2>
      <p>Incremental Static Regeneration (ISR) is made available in next.js by default. It allows us to create and update static pages <em>after</em> the site is built. We can use static generation on a per-page basis, without needing to rebuild the entire site. The individual pages can be (re)generated on demand.</p>
      <p>
        <img src="https://vercel.com/_next/image?url=%2Fdocs-proxy%2Fstatic%2Fdocs%2Fisr%2Fregeneration.png&amp;w=1080&amp;q=75" alt="ISR Lifecycle" />
      </p>
      <p>
        ISR works in tandem with two static generation features from next.js:
      </p>
      <ul>
        <li>
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation" target="_blank">
            <code>getStaticProps</code>
          </a>
          – If you export an async function called getStaticProps from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation" target="_blank">
            <code>getStaticPaths</code>
          </a>
          – If a page has dynamic routes and uses getStaticProps it needs to define a list of paths that have to be rendered to HTML at build time. If you export an async function called getStaticPaths from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
        </li>
      </ul>
      <h2 id="reference-links">Reference Links</h2>
      <ul>
      <li><a href="https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/" target="_blank">A Complete Guide To Incremental Static Regeneration (ISR) With Next.js</a></li>
      <li><a href="https://vercel.com/docs/next.js/incremental-static-regeneration" target="_blank">Incremental Static Regeneration</a></li>
      </ul>
      <h2 id="extra-notes">Extra Notes</h2>
      <ul>
      <li>Client side transitions do not trigger revalidation</li>
      <li>However next.js link prefetching does have some impact on ISR. From their docs – Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch = false. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.</li>
      <li>Refreshing on any page in the app triggers revalidation if the revalidation time period has passed</li>
      <li>If I am the one that loads the page and triggers the revalidation, the revalidation will happen in the background but I will see data that’s stale by one revalidation period.</li>
      <li>In local dev, <code>getStaticProps</code> runs on every page request. If <code>getStaticProps</code> errors, the next.js error overlay view is shown.</li>
      </ul>
      <h2 id="other-thoughts-findings">Other Thoughts / Findings</h2>
      <ul>
      <li>Look into the combination of SSR + <code>Cache-Control</code> header + <code>stale-while-revalidate</code> directive. It could be an alternative to ISR in some (all?) cases, and even be implemented now on certain pages. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control" target="_blank">MDN</a> and <a href="https://web.dev/stale-while-revalidate/" target="_blank">web.dev</a> articles.</li>
      </ul>
    </div>
  )
}
