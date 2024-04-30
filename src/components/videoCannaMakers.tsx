'use client'

import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function VideoCannaMakers() {
    return (
        <div className="bg-verde">
            <div className=" py-12">
                <div className="mx-auto px-6 max-w-7xl py-24 ">
                    <div className="mx-auto max-w-4xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-laranja">CANNAMAKERS</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-roxo sm:text-5xl">
                            Conheça o curso que vai te tornar um mestre da Medicina Cannabica.
                        </p>

                    </div>
                    <div className="overflow-hidden bg-black rounded-3xl shadow-2xl mt-10">
                        <CldVideoPlayer
                            id="embaixadores-italo-chamada_khrm7y"
                            width="500"
                            height="300"
                            src="https://res.cloudinary.com/dmryqhxwa/video/upload/v1714070467/embaixadores-italo-chamada_khrm7y.mp4"
                            colors={{
                                accent: '#871c86', // barrinha que move
                                base: '#ff9201', // barra inferior
                                text: '#00ff01' // icones
                            }}
                            logo={{
                                imageUrl: getCldImageUrl({
                                    src: '/logotipo-embaixadores.png'
                                }),
                                // imageUrl: '<Your Image URL',
                                onClickUrl: 'https://lojacannabis.com'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}