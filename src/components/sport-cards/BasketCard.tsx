import React from 'react'
import { NoTeamPhoto } from '../no-file-components/NoTeamPhoto';

import { Dela_Gothic_One } from "@next/font/google";

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const BasketCard = () => {
    return (
        <div className='basket-card rounded-lg p-8 text-white mx-[10%] mb-10'>

            <div className='flex flex-col justify-between w-full items-center'>

                <div className='mb-5'>
                    <NoTeamPhoto />
                </div>

                <div>

                    <div>
                        <h2 className={`${delaGothic.className} font-bold text-xl`}>Lakers</h2>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-4'>
                            <h3 className='font-bold'>Position:</h3>
                            <p className={`${delaGothic.className}`}>Power Forward</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Points Scored:</h3>
                            <p className={`${delaGothic.className} text-xl`}>10.300</p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Total Triples:</h3>
                            <p className={`${delaGothic.className}`}>596</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>

                <h3 className='font-bold text-lg mt-4 mb-3'>my most outstanding play: </h3>
                <video src="" controls className='w-full h-[6rem]'></video>

            </div>

        </div>
    )
}
