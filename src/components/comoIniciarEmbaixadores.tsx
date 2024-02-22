import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import BotaoComecarEmbaixadores from '@/components/botaoComecarEmbaixadores'

const features = [
    {
        name: 'Faça sua inscrição:',
        description:
            'O primeiro passo para se tornar um Embaixador Loja Cannabis é acessar o site: embaixadores.lojacannabis.com e preencher o formulário com todos os dados solicitados.',
        icon: CloudArrowUpIcon,
        number: '01)',
    },
    {
        name: 'Qualificação:',
        description: 'Após o cadastro nosso time comercial vai entrar em contato com você para marcar um vídeochamada e iniciar o processo de seleção.',
        icon: LockClosedIcon,
        number: '02)',
    },
    {
        name: 'Onboarding:',
        description: 'Ao passar no processo de seleção iniciamos o trabalho de onboard e treinamento com especialistas para preparar com o que há de melhor no mercado.',
        icon: ServerIcon,
        number: '03)',
    },
    {
        name: 'Acompanhamento:',
        description: 'Fazemos o acompanhamento completo do afiliado para instruir e ajudar na implementação da jornada de empreendedorismo no ínicio até a premiação.',
        icon: ServerIcon,
        number: '04)',
    },
]

export default function ComoIniciarEmbaixadores() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-gray-600">COMECE AGORA</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">Como iniciar minha jornada canábica?</p>

                            <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <div className="inline font-semibold text-gray-900">
                                            <div className="absolute left-0 top-1 text-2xl text-green-600">
                                                {feature.number}
                                            </div>
                                            {feature.name}
                                        </div>{' '}
                                        <div className="inline">{feature.description}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center py-16">

                                <BotaoComecarEmbaixadores />

                            </div>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden px-6 pt-8">
                            <div className="mx-auto max-w-2xl ">
                                <Image
                                    src="/embaixadores-loja-cannabis-3.jpg"
                                    alt="Product screenshot"
                                    width={450}
                                    height={500}
                                    className="rounded-tl-4xl rounded-br-4xl mx-auto"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}