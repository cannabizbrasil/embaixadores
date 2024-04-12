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
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-laranja">DEPOIMENTOS</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Veja o que dizem nossos clientes
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <Image className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" width="200" height="200" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
