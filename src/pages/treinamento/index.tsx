
import Selecione from '@/components/home/selecione'
import VideoTreinamento from '@/components/treinamento/videoTreinamento'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Treinamento() {
    return (
        <div>
            <Head>
                <title>Treinamento</title>
                <meta name='description' content='Tratamento com Cannabis Medicinal' />
            </Head>
            <main
                className={` ${inter.className}`}
            >
                <VideoTreinamento />
                <Selecione />

            </main>
        </div>
    )
}
