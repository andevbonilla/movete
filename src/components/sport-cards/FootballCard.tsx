import React from 'react'
import { NoTeamPhoto } from '../no-file-components/NoTeamPhoto'

export const FootballCard = () => {
    return (
        <div className='football-card rounded-lg p-8 text-white mx-[10%] mb-10'>

            <div className='flex flex-col justify-between w-full items-center'>

                <div className='mb-5'>
                    <NoTeamPhoto />
                </div>

                <div>

                    <div>
                        <h2 className='font-bold text-xl'>Real Valencianos</h2>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div>
                            <h3 className='font-bold'>Num:</h3>
                            <p>3</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Num:</h3>
                            <p>3</p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-4'>
                        <div>
                            <h3 className='font-bold'>Num:</h3>
                            <p>3</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Num:</h3>
                            <p>3</p>
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
