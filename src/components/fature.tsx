import { CalendarDaysIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, InboxIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BotaoComecarEmbaixadores from './botaoComecarEmbaixadores'

const features = [
    {
        name: 'O que é o programa ?',
        description:
            'Criado para ajudar pessoas que fazem uso da cannabis a comprarem de forma 100% legal, com preço acessível e ainda poderem viver trabalhando com cannabis no Brasil.',
        href: '#',
        number: '01',
        button: 'Agende sua Consulta',
        icon: CalendarDaysIcon,
    },

    {
        name: 'Por que devo participar ?',
        description:
            'É um mercado que vai movimentar x bilhões no Brasil, isso já aconteceu fora daqui e chegou a nossa vez. Poucas pessoas sabem o caminho para e ganhar dinheiro no mercado de cannabis no Brasil de forma legal e nós vamos te ajudar com todas as etapas.',
        href: '#',
        number: '03',
        button: 'Anvisa',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Para quem é ?',
        description:
            'Esse é um programa para pessoas que acreditam na cannabis, no seu potencial medicinal e comercial. Criado para empreendedores, pacientes, influenciadores, ativistas e profissionais da área da saúde.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: ShoppingCartIcon,
    },
]

export default function Fature() {
    return (
        <div className="bg-green-50 py-16 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-800">COMECE AGORA</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Fature mais de R$30.000,00 por mês em um dos mercados que mais cresce no mundo.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Seja embaixador da Loja Cannabis e Inicie a sua Jornada.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col border border-slate-200 hover:bg-green-100 hover:border-green-300 p-10 rounded-lg hover:scale-105 transition duration-700 ease-in-out">

                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-gray-900">
                                    {feature.name}
                                </div>
                                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center py-16">

                    <BotaoComecarEmbaixadores />

                </div>
            </div>
        </div>
    )
}