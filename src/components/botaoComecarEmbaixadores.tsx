import Link from 'next/link'

export default function BotaoComecarEmbaixadores() {

    return (
        <div>
            <Link
                href="#formulario"
                className="inline-block rounded-md border border-transparent bg-green-800 px-4 py-2 text-base font-medium text-white hover:bg-green-900 hover:scale-105 transition duration-500 ease-in-out"

            >
                Quero Começar
            </Link>
        </div>
    )
}