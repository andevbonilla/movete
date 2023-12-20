import React from 'react';
import { Dela_Gothic_One } from '@next/font/google';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const NoPhotoBanner = ({ title }: any) => {
    return (
        <div className={`${delaGothic.className} h-[8rem] w-full bg-gradient-to-r from-green-500 to-yellow-300 flex items-center justify-center`}>
            <h2 className='text-xl text-white'>{title}</h2>
        </div>
    )
}
