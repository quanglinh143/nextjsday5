import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import "../components/header/style.css"
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
