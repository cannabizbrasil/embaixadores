import Image from 'next/image'
import BotaoComecarEmbaixadores from '@/components/botaoComecarEmbaixadores'

export default function Hero() {


    return (
        <div className="bg-white">

            <div>
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <div className="flex">
                        </div>
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-green-700 sm:text-6xl">
                            Empreenda no mercado canábico de forma legal
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Torne-se embaixador e receba até 15% de comissão sobre suas vendas, descontos exclusivos em nossos produtos, participe de programas de premiações, além de receber todo suporte, treinamento e capacitação sobre o uso medicinal da cannabis e seus benefícios.


                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <BotaoComecarEmbaixadores />

                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                        <Image

                            width={616}
                            height={684}
                            src="/folha-intro.png" alt="" />

                    </div>
                </div>
            </div>
        </div >
    )
}
