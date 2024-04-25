import Image from 'next/image'
import BotaoComecarEmbaixadores from '@/components/botaoComecarEmbaixadores'
import Fature from './fature'
import NavBar from './navbar'
import VideoHome from './videoHome'



export default function HeroB() {
    return (
        <div className="relative isolate overflow-hidden bg-roxo">
            <div>
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center -z-10 mt-[40vh] lg:mt-0">
                    <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1480" className="absolute stroke-largo fill-none stroke-laranja w-full h-full"
                        aria-hidden="true">
                        <path d="M0,668.12c60.84,0,148.83,24.79,247.5,59.45,69.48,24.4,173.65,71,347.09,201.41,261.29,196.46,244.04,198.33,366.25,275.81,54.32,34.44,253.79,76.66,362.96,2.91,139.82-94.43,156.41-201.66,154.9-312.09-2.1-153.35-61.67-287.6-49.73-405.83,3.97-39.37,30.59-258.58,219.49-393.26C1754.31,21.07,1882.7.5,1980,.5" />
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

                <NavBar />

                <div className="mx-auto max-w-7xl px-6 pb-24  sm:pb-32 lg:flex lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-3xl lg:mx-0 pt-24 lg:max-w-3xl lg:flex-shrink-0 lg:pt-8">

                        <h1 className="text-5xl font-bold text-white sm:text-6xl">
                            EMPREENDA NO MERCADO <span className="text-verde">CANÁBICO DE FORMA 100% LEGAL</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-white">
                            Torne-se embaixador e receba comissão sobre suas vendas, descontos exclusivos em nossos produtos, treinamento e capacitação.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <BotaoComecarEmbaixadores />
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Saiba Mais <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                </div>
                <VideoHome />

            </div>
        </div>
    )
}





