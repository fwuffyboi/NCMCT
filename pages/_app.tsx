import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
