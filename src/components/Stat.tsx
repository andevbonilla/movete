import { StatInterface } from '@/interfaces/StatInterface';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Stat = ({ backColor }: StatInterface) => {
    return (
        <div className={`flex items-center justify-between mx-8 py-4 px-5 bg-[${backColor}] rounded-lg mb-5`}>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faDumbbell} className='mr-4' />
                <div>
                    <h4 className='font-bold'>Squat</h4>
                    <p>Reps: 3</p>
                </div>
            </div>
            <div>
                <h4 className=' font-extrabold text-lg'>200 kg</h4>
            </div>
        </div>
    )
}
