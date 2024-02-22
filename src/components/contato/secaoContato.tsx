import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from "next/link"
import HubspotContactForm from '@/components/contato/hubspotContatoForm'

export default function SecaoContato() {
    return (

        <div className="relative isolate bg-white">
            <div>
                <Image className="h-32 w-full object-cover lg:h-64" src="/fundo-site.jpg" width="1920" height="1080" alt="" />
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidiven bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-green-700">Contato</h2>

                        <div className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Endereço</span>
                                    <BuildingOffice2Icon className="h-7 w-6 text-green-700" />
                                </div>
                                <div>
                                    <Link className="hover:text-gray-900 hover:font-semibold" href="#">
                                        <p>Shcgn 708 bloco G loja 07, Asa Norte</p>
                                        <p>Brasíla – DF</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon className="h-7 w-6 text-green-700" />
                                </div>
                                <div>
                                    <Link className="hover:text-gray-900 hover:font-semibold" href="https://wa.me/5561999071919">
                                        +55 (61) 99907-1919
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon className="h-7 w-6 text-green-700" />
                                </div>
                                <div>
                                    <Link className="hover:text-gray-900 hover:font-semibold" href="mailto:contato@cannamed.com,br">
                                        contato@cannamed.com.br
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <HubspotContactForm />
                    </div>
                </div>
            </div>
        </div >
    )
}