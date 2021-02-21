
import { AppProps } from 'next/app';
import '../global-styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
