import React from 'react'

export const SelectColor = () => {
    return (
        <div className='w-full m-3 p-6 bg-white bg-opacity-20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] webkit-backdrop-blur-[5px] border border-solid border-[rgba(255,255,255,0.3)]'>
            < h3 className='mb-4 font-bold' > Select stats color</h3 >
            <div className='flex'>
                <div className='bg-red-500 w-10 h-10 rounded-full mr-2'></div>
                <div className='bg-purple-700 w-10 h-10 rounded-full mr-2'></div>
                <div className='bg-blue-500 w-10 h-10 rounded-full mr-2'></div>
                <div className='bg-[#00FF8F] w-10 h-10 rounded-full'></div>
            </div>
        </div>
    )
}
