import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import BotaoComecarEmbaixadores from '@/components/botaoComecarEmbaixadores'

const features = [
    {
        name: 'Cannamakers Curso:',
        description:
            'O primeiro passo para se tornar um embaixador Loja Cannabis é completar nosso curso de formação de Embaixadores.',
        icon: CloudArrowUpIcon,
        number: '01)',
    },
    {
        name: 'Qualificação e Contrato:',
        description: 'Após a formação no curso é necessário realizar a entrevista ou live com o coordenador dos embaixadores.',
        icon: LockClosedIcon,
        number: '02)',
    },
    {
        name: 'Onboarding:',
        description: 'Ao passar no processo de seleção iniciamos o trabalho de onboarding e treinamento para preparar com o que há de melhor no mercado.',
        icon: ServerIcon,
        number: '03)',
    },
    {
        name: 'Contrato e Cupom:',
        description: 'Criação de contrato com jurídico, ativação dos perfis e contas no sistema.',
        icon: ServerIcon,
        number: '04)',
    },
    {
        name: 'Treinamento e Acompanhamento:',
        description: 'Fazemos o acompanhamento completo do embaixador para instruir e ajudar na implementação da jornada de empreendedorismo no início até a premiação.',
        icon: ServerIcon,
        number: '05)',
    },
]





export default function ComoIniciarEmbaixadores() {
    return (

        <div className="relative isolate overflow-hidden bg-laranja py-24 lg:py-44">
            <div>
                <div className="absolute inset-0  -z-10 ">
                    <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 1480" className="stroke-medio fill-none stroke-verde "
                        aria-hidden="true">
                        <path d="M498.47,1176.28c0-64.04-27.57-118.26-88.23-161.27-43.33-30.72-92.38-21.58-149.18-10.99-39.85,7.43-81.06,15.11-121.73,7.53-49.8-9.29-87.94-38.99-116.58-90.79-14.98-27.09-22.47-55.46-22.26-84.31.19-25.55,6.19-51.21,18.34-78.42,20.43-45.75,54.87-88.26,91.33-133.26,89.62-110.62,174.26-215.1,74.16-373.89-27.29-43.29-14.53-75.86-4.49-91.41,20.62-31.96,59.72-49.33,132.55-71.02,37.09-11.04,91.84-43.65,91.84-88.44" />
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-roxo">COMECE AGORA</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl"> INICIE SUA JORNADA EMPREENDEDORA</p>
                            <p className="mt-6 text-xl leading-7 text-white">
                                Como parceiros, os participantes têm acesso a descontos exclusivos em nossos produtos, além de participar de programas de treinamento e capacitação sobre o uso medicinal da Cannabis e seus benefícios.
                            </p>
                            <p className="mt-6 text-xl leading-7 text-white">
                                Eles são representantes da marca e têm a responsabilidade de difundir a missão e os valores da Loja Cannabis em sua comunidade.
                            </p>
                            <div className="flex justify-center py-16">
                                <BotaoComecarEmbaixadores />
                            </div>
                        </div>

                        <div className="col-span-2 grid grid-cols-1 lg:ml-10 gap-x-8 gap-y-8 text-base leading-7 text-gray-600 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name} className="bg-roxo rounded-2xl shadow-sm hover:shadow-2xl p-6 text-white  hover:text-verde hover:scale-103">
                                    <div className="relative pl-14 ">
                                        <div className="font-semibold">
                                            <feature.icon className="absolute left-0 top-1 h-7 w-7 " aria-hidden="true" />
                                            <div className="text-white text-xl">
                                                {feature.name}
                                            </div>
                                        </div>
                                        <div className="mt-2 text-white">{feature.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}