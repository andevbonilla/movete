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
    )
}
