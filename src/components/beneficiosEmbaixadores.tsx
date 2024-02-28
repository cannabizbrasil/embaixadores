import { FingerPrintIcon, ComputerDesktopIcon, BriefcaseIcon, AcademicCapIcon, TrophyIcon, TicketIcon, SwatchIcon, HeartIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Estrutura completa de portfólio de produtos para venda',
        description:
            'Estrutura completa de portfólio de produtos para venda',
        icon: SwatchIcon,
    },
    {
        name: 'Treinamento com 4 encontros e acompanhamento do Líder dos Embaixadores',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Suporte para acolhimento do paciente para início de tratamento',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: HeartIcon,
    },
    {
        name: 'Acesso a plataforma de Embaixadores para gerenciamento de comissões',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Acesso a conteúdo, eventos e promoções exclusivas da empresa',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Cupom de desconto para você e para seus clientes (Consultas e Produtos)',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: TicketIcon,
    },
    {
        name: 'Kit de boas vindas: Flyers, uniformes (boné, camisa), adesivo com cupom e desconto de 30% nos produtos para uso pessoal',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: ArrowRightEndOnRectangleIcon,
    },
    {
        name: 'Premiações para os melhores embaixadores mensalmente',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: TrophyIcon,
    },
]

export default function BeneficiosEmbaixadores() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-600">SEJA UM EMBAIXADOR</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
                        Quais são os benefícios ?
                    </p>

                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <div className="text-base font-bold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
