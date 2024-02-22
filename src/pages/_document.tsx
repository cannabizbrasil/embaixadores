import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManager } from '@next/third-parties/google'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <NavBar />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />

    </Html>
  )
}