import Document, { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

class GhostDocument extends Document {
  // TODO: get page title and description
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    const t = 'Ghost Security - Supernatural application security'
    const d =
      'Ghost is a venture backed, product-led startup building the new standard in application security for the modern enterprise.'
    return (
      <Html className="h-full antialiased" lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: modeScript }} />
          <link rel="shortcut icon" type="image/jpg" href="/favicon.png" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link
            rel="alternate"
            type="application/rss+xml"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
          />
          <link
            rel="alternate"
            type="application/feed+json"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
          />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
          <meta property="og:title" content={t} />
          <meta property="og:description" content={d} />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-7cf941b68.png`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Ghost Security" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ghostsecurityhq" />
          <meta name="twitter:title" content={t} />
          <meta name="twitter:description" content={d} />
          <meta
            name="twitter:image"
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-7cf941b68-twitter.png`}
          />
        </Head>
        <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/21900111.js"
          ></script>
        </body>
      </Html>
    )
  }
}

export default GhostDocument
