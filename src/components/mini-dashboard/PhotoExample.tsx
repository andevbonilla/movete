import Image from 'next/image'
import React from 'react'

export const PhotoExample = () => {
    return (
        <Image
            src={require('../../assets/pedro.png')}
            alt='Pedro example photo'
            width={180}
            height={180}
            className='rounded-full p-2'
        />
    )
}
