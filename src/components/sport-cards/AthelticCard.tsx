import React from 'react'
import { NoTeamPhoto } from '../no-file-components/NoTeamPhoto';

import { Dela_Gothic_One } from "@next/font/google";

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const AthleticCard = () => {
    return (
        <div className='atletism-card rounded-lg p-8 text-white mx-[10%] mb-10'>

            <div className='flex flex-col justify-between w-full items-center'>

                <div className='mb-5'>
                    <NoTeamPhoto />
                </div>

                <div>

                    <div>
                        <h2 className={`${delaGothic.className} font-bold text-xl`}>Real Valencianos</h2>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Medals:</h3>
                            <p className={`${delaGothic.className}`}>16</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Marathons:</h3>
                            <p className={`${delaGothic.className}`}>7</p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Max. speed:</h3>
                            <p className={`${delaGothic.className} text-xl`}>32 km/h</p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Max. distance:</h3>
                            <p className={`${delaGothic.className} text-xl`}>15 km</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>

                <h3 className='font-bold text-lg mt-4 mb-3'>My best video:</h3>
                <video src="" controls className='w-full h-[6rem]'></video>

            </div>

        </div>
    )
}
