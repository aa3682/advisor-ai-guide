import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const REPO_URL = 'https://github.com/aa3682/advisor-ai-guide'

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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>The Adoption Path</b>} projectLink={REPO_URL} />}
          footer={<Footer>{new Date().getFullYear()} © The Adoption Path</Footer>}
          docsRepositoryBase={`${REPO_URL}/blob/main`}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
