import Head from 'next/head'
import CONFIG from '@src/config'
import PublicPageHeader from './PublicPageHeader'
import PublicPageFooter from './PublicPageFooter'
// import './PublicPageLayout.css'

const PublicPageLayout = ({ children }) => {
  return (
    <>
      {/* head part starts */}
      <Head
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{CONFIG.SITE_NAME}</title>
        <meta name="description" content={CONFIG.SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* head part ends */}

      {/* body part starts */}
      <div className="public-page-layout">
        <PublicPageHeader />
        <main>{children}</main>
        <PublicPageFooter />
      </div>
      {/* body part ends */}
    </>
  )
}

export default PublicPageLayout
