import React from 'react';
import { Dela_Gothic_One } from "@next/font/google";
import { Question } from './Question';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Fqas = () => {
    return (
        <div className='px-[10%] text-white mt-6 mb-12'>

            <h2 className={`text-2xl mb-6 ${delaGothic.className}`}>
                FQAs
            </h2>

            <Question />
            <Question />
            <Question />
            <Question />

        </div>
    )
}
