import Image from 'next/image'

const products = [
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/foto-1-4.png',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/Meraki-blue_dream_03-800x800-1.jpg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/Meraki-gummies_delta8_02-800x800-1.jpg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/cake-berry-brulee.jpeg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/special-sauce.jpeg',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/white-cbg.jpeg',

    },
]

export default function Produtos() {
    return (
        <div className="bg-green-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-800">O QUE VENDER</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Conheça nossos produtos
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Oleos, cremes, gummies, flores, concentrados, e muito mais.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {products.map((product) => (
                        <div key={product.name}>
                            <Image
                                className="rounded-2xl"
                                src={product.imageUrl}
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
