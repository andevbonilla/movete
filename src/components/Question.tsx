import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Question = () => {
    return (
        <div className='mb-6'>
            <div className='flex justify-between w-full items-center'>
                <h3 className='font-bold text-xl'>question</h3>
                <FontAwesomeIcon icon={faChevronDown} />
                {/* <FontAwesomeIcon icon={faChevronUp} /> */}
            </div>
            <p className='mt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis placeat, mollitia nam suscipit eius illum quibusdam, commodi explicabo, repellat animi? Odio harum ut aliquid optio? Tenetur reprehenderit iusto ex!
            </p>
        </div>
    )
}
