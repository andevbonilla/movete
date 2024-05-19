import { faDumbbell, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dela_Gothic_One } from '@next/font/google';
import React from 'react';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const AddSport = () => {
    return (
        <div className={`m-3 bg-blue-500 relative h-full w-full px-5 py-6 text-start text-white rounded-md overflow-hidden flex justify-between items-center`}>
            <div>
                <h2 className='font-bold text-lg'>Add your sport:</h2>
                <h3 className={`font-bold text-3xl ${delaGothic.className}`}>stats</h3>
            </div>
            <FontAwesomeIcon icon={faPersonRunning} className='w-[8rem] h-[8rem] absolute right-[-1rem] bottom-[-1rem]' />
        </div>
    )
}