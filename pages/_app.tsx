import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/fonts.css';
import '../styles/cm.css';
import '../styles/style.min.css';
import '../styles/toc.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
