import '@/styles/globals.css'
import { HubspotProvider } from 'next-hubspot';
import type { AppProps } from 'next/app'
import { GoogleTagManager } from '@next/third-parties/google'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <HubspotProvider>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-MCD5JT5P" />
    </HubspotProvider>


  )
}