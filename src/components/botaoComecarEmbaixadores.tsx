import Link from 'next/link'

export default function BotaoComecarEmbaixadores() {

    return (
        <div>
            <Link
                href="#formulario"
                className="inline-block rounded-md border border-transparent bg-verde px-8 py-2 text-lg font-medium text-black hover:bg-laranja hover:scale-105 transition duration-500 ease-in-out"

            >
                Quero Começar
            </Link>
        </div>
    )
}