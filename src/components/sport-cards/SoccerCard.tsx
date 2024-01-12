import React from 'react'
import { NoTeamPhoto } from '../no-file-components/NoTeamPhoto';

import { Dela_Gothic_One } from "@next/font/google";
import { SoccerCardInterface } from '@/interfaces/SportCardsInterfaces';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const SoccerCard = ({ sportInfo }: { sportInfo: SoccerCardInterface }) => {
    return (
        <div className='soccer-card rounded-lg p-8 text-white mx-[10%] mb-10'>

            <div className='flex flex-col justify-between w-full items-center'>

                <div className='mb-5'>

                    {
                        sportInfo.teamLogo === ""
                            ? <NoTeamPhoto />
                            : <img src={sportInfo.teamLogo} alt='Team Logo Image' className='w-[9rem] h-[9rem]' />
                    }

                </div>

                <div>

                    <div>
                        <h2 className={`${delaGothic.className} font-bold text-xl`}>{(sportInfo.teamName === "") ? "No team" : sportInfo.teamName}</h2>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Position:</h3>
                            <p className={`${delaGothic.className}`}>{sportInfo.position}</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Total Goals:</h3>
                            <p className={`${delaGothic.className} text-2xl`}>{sportInfo.goals}</p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div className='mr-3'>
                            <h3 className='font-bold'>Total Attendances:</h3>
                            <p className={`${delaGothic.className}`}>{sportInfo.attendances}</p>
                        </div>
                    </div>

                </div>
            </div>


            {
                (sportInfo.bestVideo !== "") && <div>

                    <h3 className='font-bold text-lg mt-8 mb-3'>Best video of my career: </h3>
                    {

                    }
                    <video src={sportInfo.bestVideo} controls className='w-full h-[6rem]'></video>

                </div>
            }

        </div>
    )
}
