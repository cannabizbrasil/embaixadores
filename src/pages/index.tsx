'use client'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/hero'
import HeroB from '@/components/heroB'
import Fature from '@/components/fature'
import ComoIniciarEmbaixadores from '@/components/comoIniciarEmbaixadores'
import Produtos from '@/components/produtos'
import BeneficiosEmbaixadores from '@/components/beneficiosEmbaixadores'
import Depoimentos from '@/components/depoimentos'
import FormularioEmbaixador from '@/components/formulario'
import CtaEmbaixadores from '@/components/ctaEmbaixadores'
import Comunidade from '@/components/comunidade'

const inter = Inter({ subsets: ['latin'] })

export default function Embaixadores() {
    return (
        <div>


            <main
                className={` ${inter.className}`}
            >

                <HeroB />
                <Fature />
                <CtaEmbaixadores />

                <ComoIniciarEmbaixadores />
                <BeneficiosEmbaixadores />
                <Produtos />

                <Depoimentos />
                <Comunidade />
                <FormularioEmbaixador />

            </main>
        </div>
    )
}
