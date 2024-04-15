import Image from 'next/image'

const products = [
    {
        id: '1',
        name: 'COMESTIVEIS',
        imageUrl: '/comestiveis.webp',

    },
    {
        id: '2',
        name: 'EXTRAÇÕES',
        imageUrl: '/extracoes.webp',

    },
    {
        id: '3',
        name: 'ÓLEOS',
        imageUrl: '/oleos.webp',

    },
    {
        id: '4',
        name: 'TÓPICOS',
        imageUrl: '/topicos.webp',

    },

]

export default function Produtos() {
    return (
        <div className="bg-roxo py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-white">O QUE VOCÊ VAI VENDER</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        CONHEÇA NOSSOS PRODUTOS
                    </p>
                    <p className="mt-6 text-lg leading-8 text-laranja">
                        Extrações, Tópicos, Óleos, Comestíveis e mais
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    {products.map((product) => (
                        <div key={product.id}>
                            <Image
                                className="rounded-2xl"
                                src={product.imageUrl}
                                width={400}
                                height={400}
                                alt=""
                            />
                            <div className="text-lg font-bold text-laranja text-center">{product.name}</div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
