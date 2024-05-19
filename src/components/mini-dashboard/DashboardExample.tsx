import React from 'react'
import { SelectColor } from './SelectColor'
import { CardioProposals } from './CardioProposals'
import { TrainProposals } from './TrainProposals'
import { SocialMedia } from './SocialMedia'
import { PhotoExample } from './PhotoExample'
import { AddGym } from './AddGym'
import { AddSport } from './AddSport'

export const DashboardExample = () => {
    return (
        <div className='w-full relative h-[15rem] overflow-hidden flex justify-center items-center lg:h-[20rem]'>
            <div className='absolute scale-[0.6] sm:scale-[0.8] lg:scale-[1]'>
                <div className='flex'>
                    <div>
                        <div className='flex'>
                            <SelectColor />
                            <CardioProposals />
                            <TrainProposals />
                            <PhotoExample />
                        </div>
                        <div className='flex'>
                            <SocialMedia />
                            <AddGym />
                        </div>
                    </div>
                    <div>
                        <AddSport />
                    </div>
                </div>
            </div>
        </div>
    )
}
