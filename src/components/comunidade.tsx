import Image from 'next/image'

export default function Comunidade() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-32 sm:py-48 lg:py-96 lg:px-8">
            <Image
                src="/comunidade.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width="1920"
                height="1080"
            />
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-verde sm:text-6xl">Conheça nossa Comunidade</h2>
                <p className="text-xl mt-6 tracking-tight text-white">Nossa Comunidade existe para cultivar e disseminar  a cultura canábica, difundir nossas marcas com autenticidade e oferecer nossos produtos à base de Cannabis de alta qualidade.</p>
                <p className="text-xl mt-6 tracking-tight text-white">
                    Estamos aqui para criar conexões significativas, educar e inspirar, promovendo não apenas nossos produtos, mas também um estilo de vida saudável e equilibrado.
                </p>
            </div>
        </div>
    )
}
