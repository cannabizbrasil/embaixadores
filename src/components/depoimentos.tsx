import Image from 'next/image'

const testimonials = [
    {
        body:
            (<>
                Ser um embaixador cannabis é uma missão por uma causa!
                <br /><br />
                Eu sempre acreditei muito no poder medicinal e terapêutico da cannabis em minha vida, e quando o grupo cannabis apareceu na minha caminhada eu enxerguei uma forma extremamente importante de divulgar esse potencial terapêutico da cannabis com mais legitimidade e autoridade de forma que você ter uma vasta gama de produtos todos c exames laboratoriais, com produtos de extrema qualidade, procedência e acompanhamento médico ao seu tratamento ela a melhor oportunidade de se adotar um tratamento legalizado é monitorado no Brasil era p min naquele momento uma “luz no fim do túnel” para o início de um trabalho, tratamento é uma causa de saúde e bem estar mais atualizada possível, hoje em dia todos na minha casa fazem o uso medicinal seja eu e minha esposa c todas as gamas de produtos e minha mãe com o óleo de massagem para fisioterapia para diminuir suas dores musculares… <br /><br />
                Para min ser embaixador cannabis é o maior ativismo cannabico SÉRIO que já pude fazer pela educação e avanço cannabico de qualidade e seriedade que já fiz na vida !
            </>),
        author: {
            name: 'Weslley Batista',
            handle: 'Bacharel direito / produtor artístico e executivo',
            imageUrl:
                '/weslley-batista.jpg',
        },
    },
    {
        body:
            (<>
                Salve Time Cannabiz!🍁
                <br /><br />
                Só tenho a agradecer por terem aparecido em minha vida. Hoje eu desfruto de uma qualidade de vida que jamais imaginei um dia e poder levar isso para mais pessoas como embaixadora, é muito gratificante. Já fui muito preconceituosa com cannabis e e hoje faço utilização tratando transtornos psicológicos e físicos. O conhecimento liberta!🙏🏼
                <br /><br />
                Tenho uma vida nova e incrível depois de ter conhecido vocês! Gratidão!🙏🏼🍃
            </>),
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
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.author.handle} className="flex flex-col items-start justify-between">
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <p className="mt-5 text-lg italic leading-6 text-gray-600">{testimonial.body}</p>
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