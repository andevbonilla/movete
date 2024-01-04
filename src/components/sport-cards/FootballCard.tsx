import React from 'react'
import { NoTeamPhoto } from '../no-file-components/NoTeamPhoto';

import { Dela_Gothic_One } from "@next/font/google";

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const FootballCard = () => {
    return (
        <div className='football-card rounded-lg p-8 text-white mx-[10%] mb-10'>

            <div className='flex flex-col justify-between w-full items-center'>

                <div className='mb-5'>
                    <NoTeamPhoto />
                </div>

                <div>

                    <div>
                        <h2 className={`${delaGothic.className} font-bold text-xl`}>New England Patriots</h2>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Position:</h3>
                            <p className={`${delaGothic.className}`}>Punter</p>
                        </div>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Total yards:</h3>
                            <p className={`${delaGothic.className}`}>18.903</p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div>
                            <h3 className='font-bold'>Total Touchdown pases:</h3>
                            <p className={`${delaGothic.className}`}>163</p>
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
