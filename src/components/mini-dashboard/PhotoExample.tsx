import Image from 'next/image'
import React from 'react'

export const PhotoExample = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <Image
                src={require('../../assets/pedro.png')}
                alt='Pedro example photo'
                width={180}
                height={180}
                className='rounded-full p-2'
            />
        </div>
    )
}
