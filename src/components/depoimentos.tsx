import Image from 'next/image'

const testimonials = [
    {
        body: 'Salve Time Cannabiz!🍁 Só tenho a agradecer por terem aparecido em minha vida. Hoje eu desfruto de uma qualidade de vida que jamais imaginei um dia e poder levar isso para mais pessoas como embaixadora, é muito gratificante. Já fui muito preconceituosa com cannabis e e hoje faço utilização tratando transtornos psicológicos e físicos. O conhecimento liberta!🙏🏼 Tenho uma vida nova e incrível depois de ter conhecido vocês! Gratidão!🙏🏼🍃',
        author: {
            name: 'Gaia',
            handle: 'medicinasdegaia',
            imageUrl:
                '/gaia.jpg',
        },
    },
    {
        body: 'Salve Time Cannabiz!🍁 Só tenho a agradecer por terem aparecido em minha vida. Hoje eu desfruto de uma qualidade de vida que jamais imaginei um dia e poder levar isso para mais pessoas como embaixadora, é muito gratificante. Já fui muito preconceituosa com cannabis e e hoje faço utilização tratando transtornos psicológicos e físicos. O conhecimento liberta!🙏🏼 Tenho uma vida nova e incrível depois de ter conhecido vocês! Gratidão!🙏🏼🍃',
        author: {
            name: 'Gaia',
            handle: 'medicinasdegaia',
            imageUrl:
                '/gaia.jpg',
        },
    },
    {
        body: 'Salve Time Cannabiz!🍁 Só tenho a agradecer por terem aparecido em minha vida. Hoje eu desfruto de uma qualidade de vida que jamais imaginei um dia e poder levar isso para mais pessoas como embaixadora, é muito gratificante. Já fui muito preconceituosa com cannabis e e hoje faço utilização tratando transtornos psicológicos e físicos. O conhecimento liberta!🙏🏼 Tenho uma vida nova e incrível depois de ter conhecido vocês! Gratidão!🙏🏼🍃',
        author: {
            name: 'Gaia',
            handle: 'medicinasdegaia',
            imageUrl:
                '/gaia.jpg',
        },
    },
]



export default function Depoimentos() {
    return (
        <div className="bg-white py-24 sm:py-48">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-roxo">DEPOIMENTOS</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Veja o que dizem nossos embaixadores
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.author.handle} className="flex flex-col items-start justify-between">
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <p className="mt-5 text-lg leading-6 text-gray-600">{testimonial.body}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image src={testimonial.author.imageUrl} alt="" width="100" height="100" className="h-10 w-10 rounded-full bg-gray-100" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <span className="absolute inset-0" />
                                            {testimonial.author.name}
                                        </p>
                                        <p className="text-gray-600">{`@${testimonial.author.handle}`}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
