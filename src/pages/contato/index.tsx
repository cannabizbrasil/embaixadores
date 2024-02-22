import SecaoContato from '@/components/contato/secaoContato'
import { Inter } from 'next/font/google'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })

export default function Dispensarios() {
    return (
        <div>
            <Head>
                <title>Contato Cannamed</title>
                <meta name='description' content='Tratamento com Cannabis Medicinal' />
            </Head>
            <main
                className={` ${inter.className}`}
            >
                <SecaoContato />


            </main>
        </div>
    )
}