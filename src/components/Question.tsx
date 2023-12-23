"use client"
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Question = ({ title, answer }: any) => {

    const [showQuestion, setShowQuestion] = useState(false);


    return (
        <div className='mb-6'>
            <div onClick={() => setShowQuestion(!showQuestion)} className='flex justify-between w-full items-center'>
                <h3 className='font-bold text-xl'>{title}</h3>
                {
                    !showQuestion && <FontAwesomeIcon icon={faChevronDown} />
                }
                {
                    showQuestion && <FontAwesomeIcon icon={faChevronUp} />
                }
            </div>
            {
                showQuestion && <p className='mt-4'>
                    {answer}
                </p>
            }
        </div>
    )
}
