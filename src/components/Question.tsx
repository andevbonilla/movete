"use client"
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Question = ({ title, children }: any) => {

    const [showQuestion, setShowQuestion] = useState(false);


    return (
        <div className='mb-6'>
            <div onClick={() => setShowQuestion(!showQuestion)} className='hover:bg-opacity-30 transition duration-300 py-3 px-5 rounded-lg flex justify-between w-full items-center cursor-pointer bg-white bg-opacity-20'>
                <h3 className='font-bold text-xl'>{title}</h3>
                {
                    !showQuestion && <FontAwesomeIcon icon={faChevronDown} />
                }
                {
                    showQuestion && <FontAwesomeIcon icon={faChevronUp} />
                }
            </div>
            {
                showQuestion &&
                <>
                    {children}
                </>
            }
        </div>
    )
}
