import "../styles/globals.css"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import { ReactNode } from "react"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
