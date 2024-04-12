import Image from 'next/image'
import BotaoComecarEmbaixadores from '@/components/botaoComecarEmbaixadores'
import Fature from './fature'



export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden  bg-roxo">
            <div>
                <div className="absolute inset-0 -z-10 ">
                    <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1981.47 1489.28" className="absolute stroke-largo fill-none stroke-laranja "
                        aria-hidden="true">

                        <path className="cls-1" d="M6.23,788.68c60.16,3,147.62,24.59,245.48,58.96,68.91,24.2,172.23,70.42,344.26,199.77,259.16,194.86,242.05,196.71,363.26,273.56,53.88,34.16,251.72,76.03,360,2.89,138.68-93.66,155.13-200.01,153.64-309.54-2.08-152.1-61.17-285.25-49.32-402.52,3.94-39.05,30.34-256.47,217.7-390.05,104.97-74.84,233.29-103.99,328.82-95.24" />
                    </svg>


                </div>


                <div
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#7cda24] to-[#7cda24] opacity-20"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>


                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">

                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">

                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold leading-relaxed text-white sm:text-6xl">
                            EMPREENDA NO MERCADO CANÁBICO DE FORMA 100% LEGAL
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Torne-se embaixador e receba até 10% de comissão sobre suas vendas, descontos exclusivos em nossos produtos, participe de programas de premiações, além de receber todo suporte, treinamento e capacitação sobre o uso medicinal da cannabis e seus benefícios.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <BotaoComecarEmbaixadores />
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Saiba Mais <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <Image
                                src="/pessoa-imagem.png"
                                alt="App screenshot"
                                width={1920}
                                height={1080}
                                className="w-[48rem] rounded-md "
                            />
                        </div>
                    </div>
                </div>
                <Fature />
            </div>
        </div>
    )
}





