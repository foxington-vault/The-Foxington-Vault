import "../styles/globals.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { AppProps } from "next/app"
import type { NextPage } from "next"
import Layout from "@/components/Base/Layout"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

export default function ArchiverApp({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
