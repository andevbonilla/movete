import React from 'react'
import { Dela_Gothic_One } from "@next/font/google";

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const SwimmingCard = ({ sportInfo }: any) => {
    return (

        <div className='swimming-card rounded-lg p-8 text-white mx-[10%] mb-10'>

            <div className='flex flex-col justify-between w-full items-center'>

                <div className='flex w-full justify-between mt-4'>
                    <div className='mr-3'>
                        <h3 className='font-bold'>Best Distance:</h3>
                        <p className={`${delaGothic.className}`}>{sportInfo.distance} {sportInfo.distanceMetric}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Time:</h3>
                        <p className={`${delaGothic.className}`}>{sportInfo.time} {sportInfo.timeMetric}</p>
                    </div>
                </div>

                <div className='flex w-full justify-between mt-4'>
                    <div className='mr-3'>
                        <h3 className='font-bold'>Number of achievements:</h3>
                        <p className={`${delaGothic.className}`}>{sportInfo.totalAchivements}</p>
                    </div>
                </div>

                <div className='flex w-full justify-between mt-4'>
                    <div className='mr-3'>
                        <h3 className='font-bold'>Major achievement:</h3>
                        <p className={`${delaGothic.className} text-xl`}>{sportInfo.bestAchivement}</p>
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

