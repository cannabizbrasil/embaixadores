'use client'

import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function VideoHome() {
    return (
        <div className="">
            <div className=" ">
                <div className="mx-auto px-6 max-w-7xl py-16 ">
                    <div className="overflow-hidden bg-black rounded-3xl shadow-2xl">
                        <CldVideoPlayer
                            id="embaixadores-italo-chamada_khrm7y"
                            width="500"
                            height="300"
                            src="https://res.cloudinary.com/dmryqhxwa/video/upload/v1714070467/embaixadores-italo-chamada_khrm7y.mp4"
                            colors={{
                                accent: '#84caeb', // barrinha que move
                                base: '#8aef70', // barra inferior
                                text: '#FFFFFF' // icones
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