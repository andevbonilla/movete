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
        <div className='md:px-[20%] xl:px-[33%] px-[10%] text-white mt-32'>

            <h2 className={`text-2xl mb-10 text-center ${delaGothic.className}`}>
                FQAs
            </h2>

            <Question title={"How can I download the Movete app?"} answer={"lorenkcjsjek iehkjhdfjk dsab sdjkafb jksadbfjkhsbdaf jk sd f"} />
            <Question title={"How can I create a Movete profile?"} answer={"lorenkcjsjek iehkjhdfjk dsab sdjkafb jksadbfjkhsbdaf jk sd f"} />
            <Question title={"How can I delete a profile with Movete?"} answer={"lorenkcjsjek iehkjhdfjk dsab sdjkafb jksadbfjkhsbdaf jk sd f"} />

        </div>
    )
}
