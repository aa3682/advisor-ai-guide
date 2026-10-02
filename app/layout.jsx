import localFont from 'next/font/local'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import NoLastUpdated from './no-last-updated'
import 'nextra-theme-docs/style.css'
import './globals.css'

const REPO_URL = 'https://github.com/aa3682/advisor-ai-guide'

// Outfit (variable, SIL OFL: fonts/OFL.txt) is committed in fonts/ and
// self-hosted by next/font, so no build depends on a font service.
const outfit = localFont({
  src: '../fonts/outfit-latin.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-outfit'
})

export const metadata = {
  title: {
    default: 'The Adoption Path',
    template: '%s – The Adoption Path'
  },
  description: 'An open, plain-English guide to using AI inside a small independent investment advisory practice without creating a compliance problem.'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" className={outfit.variable} suppressHydrationWarning>
      {/* Slate theme: emerald accent #10b981 (hsl 160.1 84.1% 39.4%) on #0f172a.
          The site is dark only, so both theme slots get the slate page. */}
      <Head
        color={{ hue: 160.1, saturation: 84.1, lightness: 39.4 }}
        backgroundColor={{ dark: '#0f172a', light: '#0f172a' }}
      />
      <body>
        <Layout
          navbar={<Navbar logo={<b>AlignFlow · The Adoption Path</b>} projectLink={REPO_URL} />}
          footer={<Footer>{new Date().getFullYear()} © The Adoption Path</Footer>}
          docsRepositoryBase={`${REPO_URL}/blob/main`}
          pageMap={pageMap}
          darkMode={false}
          lastUpdated={<NoLastUpdated />}
          nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
