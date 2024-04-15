'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BotaoLoginEmbaixadores from './botaoLoginEmbaixadores'


const navigation = [
    { name: 'Seja um Embaixador', href: '/' },
    { name: 'Influenciadores', href: 'https://influenciadores.lojacannabis.com' },
    { name: 'Seja um Dispensário', href: 'https://dispensarios.lojacannabis.com' },
    { name: 'Treinamento', href: '/treinamento' },
    { name: 'Contato', href: '/contato' },
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <header className="absolute bg-gray-50 inset-x-0 top-0">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Top">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">CannaMed Medicinal</span>
                            <div>
                                <Image
                                    className="h-20 w-auto"
                                    src="/logotipo-embaixadores.png"
                                    alt="Embaixadores loja cannabis logo"
                                    width={400}
                                    height={62}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Abrir Menu Principal</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-md font-semibold leading-6 text-green-700 hover:text-green-900 hover:scale-110 transition duration-500 ease-in-out">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
                        <BotaoLoginEmbaixadores />
                    </div>
                </nav>


                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">CannaMed</span>
                                <Image
                                    className="h-20 w-auto"
                                    src="/logotipo-embaixadores.png"
                                    alt="Embaixadores LojaCannabis Logo"
                                    width={234.5}
                                    height={62}
                                    priority
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-green-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Fechar Menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-700 hover:bg-gray-200"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 gap-y-2">
                                    <BotaoLoginEmbaixadores />
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}