import React from 'react';
import { Dela_Gothic_One } from "@next/font/google";
import { Question } from './Question';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Fqas = () => {

    const fqasI18n = useTranslations('FQAs');

    return (
        <div className='md:px-[20%] xl:px-[33%] px-[10%] text-white mt-32'>

            <h2 className={`text-2xl mb-10 text-center ${delaGothic.className}`}>
                FQAs
            </h2>

            <Question
                title={fqasI18n("titleQuestion1")}
            >
                <p className='mt-4 px-2'>{fqasI18n("contentQuestion1")}</p>
            </Question>

            <Question
                title={fqasI18n("titleQuestion2")}
            >
                <div className='px-2'>
                    <h3 className='text-xl font-bold mt-4 mb-3'>{fqasI18n("subtitleQuestion2")}</h3>
                    <ul>
                        <li className='mb-3 opacity-80'><span className='font-bold opacity-100'>1.</span> {fqasI18n("step1Question2")} <Link target='_BLANK' className='text-blue-400 font-bold opacity-100' href={`${`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/claim-your-link`}`}>{fqasI18n("linkStep1Question2")}</Link></li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>2.</span> {fqasI18n("step2Question2")}
                        </li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>3.</span> {fqasI18n("step3Question2")}
                        </li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>4.</span> {fqasI18n("step4Question2")}
                        </li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>5.</span> {fqasI18n("step5Question2")}
                        </li>
                    </ul>
                </div>
            </Question>

            <Question
                title={fqasI18n("titleQuestion3")}
            >
                <p className='mt-4 px-2'>
                    {fqasI18n("contentQuestion3")} <Link target='_BLANK' className='text-blue-400 font-bold opacity-100' href={`${`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/claim-your-link`}`}>{fqasI18n("linkQuestion3")}</Link>.
                </p>
            </Question >

        </div>
    )
}
