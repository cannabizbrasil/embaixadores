import { CalendarDaysIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, GlobeAltIcon, HandRaisedIcon, HeartIcon, InboxIcon, MapIcon, ScaleIcon, ShoppingCartIcon, TrashIcon, UserGroupIcon, UserIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BotaoComecarEmbaixadores from './botaoComecarEmbaixadores'

const features = [
    {
        name: 'Empreendedores',
        description:
            'Criado para ajudar pessoas que fazem uso da cannabis a comprarem de forma 100% legal, com preço acessível e ainda poderem viver trabalhando com cannabis no Brasil.',
        href: '#',
        number: '01',
        button: 'Agende sua Consulta',
        icon: UserGroupIcon,
    },

    {
        name: 'Pacientes',
        description:
            'É um mercado que vai movimentar x bilhões no Brasil, isso já aconteceu fora daqui e chegou a nossa vez. Poucas pessoas sabem o caminho para e ganhar dinheiro no mercado de cannabis no Brasil de forma legal e nós vamos te ajudar com todas as etapas.',
        href: '#',
        number: '03',
        button: 'Anvisa',
        icon: HeartIcon,
    },
    {
        name: 'Influenciadores',
        description:
            'Esse é um programa para pessoas que acreditam na cannabis, no seu potencial medicinal e comercial. Criado para empreendedores, pacientes, influenciadores, ativistas e profissionais da área da saúde.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: UserPlusIcon,
    },
    {
        name: 'Ativistas',
        description:
            'Esse é um programa para pessoas que acreditam na cannabis, no seu potencial medicinal e comercial. Criado para empreendedores, pacientes, influenciadores, ativistas e profissionais da área da saúde.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: GlobeAltIcon,
    },
    {
        name: 'Profissionais da saúde',
        description:
            'Esse é um programa para pessoas que acreditam na cannabis, no seu potencial medicinal e comercial. Criado para empreendedores, pacientes, influenciadores, ativistas e profissionais da área da saúde.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: HandRaisedIcon,
    },
    {
        name: 'Advogados',
        description:
            'Esse é um programa para pessoas que acreditam na cannabis, no seu potencial medicinal e comercial. Criado para empreendedores, pacientes, influenciadores, ativistas e profissionais da área da saúde.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: ScaleIcon,
    },
]

export default function Fature() {
    return (
        <div className="py-16 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-azul">COMECE AGORA</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Trazemos uma oportunidade única para quem sempre pensou em <span className="text-verde">empreender no mercado de saúde, qualidade e Cannabis</span>.
                    </p>
                    <p className="mt-6 text-2xl leading-8 text-white">
                        Poucas empresas brasileiras sabem o caminho 100% legal para empreender no mercado de Cannabis. Nosso programa de embaixadores é para pessoas que acreditam na cannabis, no seu potencial medicinal e comercial.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:gap-y-16 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col bg-laranja p-6 rounded-2xl ">
                                <div className="mb-6 flex -mt-16 h-16 w-16 mx-auto items-center justify-center rounded-full bg-roxo ring ring-laranja">
                                    <feature.icon className="h-10 w-10 text-verde" />
                                </div>
                                <div className="flex justify-center gap-x-3 text-3xl font-semibold leading-7 text-gray-900">
                                    {feature.name}
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
