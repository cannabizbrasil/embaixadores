import { CalendarDaysIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, InboxIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const features = [
    {
        name: 'Embaixador',
        description:
            'Pessoas fisicas que querem ganhar um extra trabalhando com cannabis medicinal',
        href: '/embaixadores',
        number: '01',
        button: 'Quero ser um Embaixador',
        icon: CalendarDaysIcon,
    },

    {
        name: 'Dispensario',
        description:
            'Empresas que querer faturar mais revendendo produtos de cannabis',
        href: '/dispensarios',
        number: '03',
        button: 'Quero ser um Dispensario',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Influenciador',
        description:
            'Pessoas com mais de 10.000 seguidores em redes sociais que querem divulgar a cannabis e ganhar comissões por vendas com seu cupom',
        href: 'influenciadores',
        number: '04',
        button: 'Quero divulgar a Marca',
        icon: ShoppingCartIcon,
    },
]

export default function Selecione() {
    return (
        <div className="bg-green-50 py-16 sm:py-16" id="selecione">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-800">COMECE AGORA</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Fature mais de R$30.000,00 por mês em um dos mercados que mais cresce no mundo.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Escolha o tipo que melhor se adequa a você.
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
                                    <div className="mt-6">
                                        <Link
                                            href={feature.href}
                                            className="inline-block rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white hover:bg-green-900"
                                            target="_blank"
                                        >
                                            {feature.button}
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}