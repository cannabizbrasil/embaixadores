import Link from 'next/link'

export default function BotaoLoginEmbaixadores() {

    return (
        <div>
            <Link
                href="#formulario"
                className="inline-block rounded-md border border-transparent bg-lime-700 px-4 py-2 text-base font-medium text-white hover:bg-lime-900 hover:scale-105 transition duration-500 ease-in-out"

            >
                Acesso Embaixadores
            </Link>
        </div>
    )
}