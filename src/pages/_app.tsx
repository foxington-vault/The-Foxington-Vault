import "../styles/globals.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { AppProps } from "next/app"
import type { NextPage } from "next"
import Layout from "../components/Layout"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false

library.add(fas, fab)

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
