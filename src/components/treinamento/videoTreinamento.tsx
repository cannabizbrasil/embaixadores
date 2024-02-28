'use client'

import ReactPlayer from 'react-player'


export default function VideoTreinamento() {
    return (
        <div className="bg-green-500 ">
            <div className="max-w-7xl pt-48 pb-24">
                <div className="grid justify-items-center">

                    <div>
                        <ReactPlayer

                            url='https://youtu.be/CDDwsaUOKZY'
                            width={1024}
                            height={576}
                        />

                    </div>
                </div>
            </div>
        </div>


    )
}