import { StatInterface } from '@/interfaces/StatInterface';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const PinkStat = ({ NumReps, ExerciseType, Weight, metric }: StatInterface) => {

    const defineBackColor = (color: string) => {
        console.log(color)
        return `bg-[red-500]`
    }
    return (
        <div className={`flex items-center justify-between mx-8 py-4 px-5 bg-pink-600 rounded-lg mb-5`}>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faDumbbell} className={`mr-4 text-white text-xl`} />
                <div>
                    <h4 className={`font-bold text-white`}>{ExerciseType}</h4>
                    <p className={`text-white`}>Reps: {NumReps}</p>
                </div>
            </div>
            <div>
                <h4 className={`text-white font-extrabold text-lg`}>{Weight} {metric}</h4>
            </div>
        </div>
    )
}