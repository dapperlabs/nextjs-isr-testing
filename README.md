# ISR Testing

Exploration of various ways ISR reacts / responds to errors and different prop returns. See the `pages` directory for the various tests. Each of the tests are prefixed with `isr-`.

Note that all test results are taken against a production build `npm run build`.



## `isr-1` Results

This page uses a `counter` util function (see `utils/counter`), and a `getStaticProps` function. Each time `getStaticProps` runs, we run `counter` which increments a variable in that function's global scope. When the counter hits `5`, an error is thrown, and not handled.

Results are straightforward. No hiccups. User always sees the page. Will see stale count variable if getStaticProps errors, but the page will not break
