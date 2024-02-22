import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/hero'
import Fature from '@/components/fature'
import ComoIniciarEmbaixadores from '@/components/comoIniciarEmbaixadores'
import Produtos from '@/components/produtos'
import BeneficiosEmbaixadores from '@/components/beneficiosEmbaixadores'
import Depoimentos from '@/components/depoimentos'
import FormularioEmbaixador from '@/components/formulario'

const inter = Inter({ subsets: ['latin'] })

export default function Embaixadores() {
    return (
        <div>
            <Head>
                <title>Embaixadores</title>
                <meta name='description' content='Tratamento com Cannabis Medicinal' />
            </Head>

            <main
                className={` ${inter.className}`}
            >
                <Hero />
                <Fature />
                <ComoIniciarEmbaixadores />
                <Produtos />
                <BeneficiosEmbaixadores />
                <Depoimentos />
                <FormularioEmbaixador />

            </main>
        </div>
    )
}
