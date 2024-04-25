import '@/styles/globals.css'
import { HubspotProvider } from 'next-hubspot';
import type { AppProps } from 'next/app'
import { GoogleTagManager } from '@next/third-parties/google'
import Head from 'next/head'


import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Embaixadores Loja Cannabis</title>
        <meta name="description" content="Trazemos uma oportunidade única para quem sempre pensou em empreender no mercado de saúde, qualidade de vida e Cannabis." />
        <meta property="image" content="/embaixadores2.jpg" />
        <meta property="og:title" content="Embaixadores Loja Cannabis" />
        <meta property="og:description" content="Trazemos uma oportunidade única para quem sempre pensou em empreender no mercado de saúde, qualidade de vida e Cannabis." />
        <meta property="og:image" content="/embaixadores2.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="embaixadores.lojacannabis.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Embaixadores Loja Cannabis" />
        <meta name="twitter:description" content="Trazemos uma oportunidade única para quem sempre pensou em empreender no mercado de saúde, qualidade de vida e Cannabis." />
        <meta name="twitter:image" content="/embaixadores2.jpg" />
      </Head>
      <main className={`${poppins.className}`}>
        <HubspotProvider>
          <Component {...pageProps} />
          <GoogleTagManager gtmId="GTM-MCD5JT5P" />
        </HubspotProvider>
      </main>
    </>

  )
}