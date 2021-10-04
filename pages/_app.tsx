import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { ContextProvider } from '../components/context/ContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ContextProvider>
       <Component {...pageProps} />
    </ContextProvider>
  )
}
export default MyApp
  