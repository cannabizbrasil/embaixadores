import Image from 'next/image'

const depoimentos = [
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/depoimento-1.jpg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/depoimento-2.jpeg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/depoimento-3.jpeg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/depoimento-4.jpeg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/depoimento-5.jpeg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/depoimento-6.jpeg',

    },
]

export default function Depoimentos() {
    return (
        <div className="bg-green-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-800">DEPOIMENTOS</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Veja o que dizem nossos clientes
                    </p>

                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {depoimentos.map((depoimento) => (
                        <div key={depoimento.name}>
                            <Image
                                className="rounded-2xl"
                                src={depoimento.imageUrl}
                                width={400}
                                height={400}
                                alt=""
                            />

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
