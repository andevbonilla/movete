import React from 'react'
import { SelectColor } from './SelectColor'
import { CardioProposals } from './CardioProposals'
import { TrainProposals } from './TrainProposals'
import { SocialMedia } from './SocialMedia'

export const DashboardExample = () => {
    return (
        <div className='flex'>
            <div>
                <div className='flex'>
                    <SelectColor />
                    <CardioProposals />
                    <TrainProposals />
                </div>
                <div>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}
