import "../styles/globals.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { AppProps } from "next/app"
import type { NextPage } from "next"
import Layout from "@/components/Base/Layout"
import { config } from "@fortawesome/fontawesome-svg-core"
import Head from "next/head"

config.autoAddCss = false

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

export default function ArchiverApp({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
