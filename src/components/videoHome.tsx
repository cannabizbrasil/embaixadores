'use client'

import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import BotaoComecarEmbaixadores from './botaoComecarEmbaixadores';

export default function VideoHome() {
    return (
        <div className="">
            <div className=" ">
                <div className="mx-auto px-6 max-w-7xl pt-16 ">
                    <div className="overflow-hidden bg-black rounded-3xl shadow-2xl">
                        <CldVideoPlayer
                            id="intro-embaixadores_iy9agh"
                            width="500"
                            height="280"
                            src="https://res.cloudinary.com/dmryqhxwa/video/upload/v1714512633/intro-embaixadores_iy9agh.mp4"
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
                    <div className="flex justify-center py-16">
                        <BotaoComecarEmbaixadores />
                    </div>
                </div>
            </div>
        </div >
    )
}