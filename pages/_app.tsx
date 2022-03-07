import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)
  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
