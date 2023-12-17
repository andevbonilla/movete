import Image from 'next/image'
import React from 'react'

export const Stat = () => {
    return (
        <div className='flex items-center justify-between mx-8 py-4 px-5 bg-yellow-300 rounded-lg mb-5'>
            <div className='flex items-center'>
                <Image
                    src={require('@/assets/svgs/twitter-boxed-svgrepo-com.svg')}
                    alt='twitter svg'
                    className='mr-4'
                    width={25}
                    height={25}
                />
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
