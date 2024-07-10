"use client"
import Link from 'next/link';
import React from 'react';

import { Dela_Gothic_One } from '@next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'next/navigation';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Footer = ({
    title,
    header1,
    linkAbout,
    linkContact,
    linkTerms,
    linkPrivacy,
    header2,
    copyright }: any) => {

    const params = useParams();

    return (
        <footer className='md:px-[20%] text-white px-[10%] mt-32'>

            <div className='flex items-center justify-start'>
                <Link href={"/"} className={`${delaGothic.className} text-3xl my-3`}>{title}</Link>
            </div>

            <div className='flex items-center justify-start mt-6 mb-10'>
                <a
                    href="https://www.instagram.com/movete.me"
                    target="_blank"
                    className={`text-lm`}
                    title='instagram link'
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" className='mr-12' />
                </a>
                <a
                    href="https://www.youtube.com/@movete_latam"
                    target="_blank"
                    className={`text-lm`}
                    title='youtube link'
                >
                    <FontAwesomeIcon icon={faYoutube} size="2x" className='mr-12' />
                </a>
                <a
                    href="https://www.tiktok.com/@movete.me"
                    target="_blank"
                    className={`text-lm`}
                    title='tiktok link'
                >
                    <FontAwesomeIcon icon={faTiktok} size="2x" className='mr-12' />
                </a>
                <a
                    href="https://www.linkedin.com/company/movete-latam"
                    target="_blank"
                    className={`text-lm`}
                    title='linkedIn link'
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>

            <div className='flex sm:flex-row flex-col'>
                <div className='sm:mr-14'>
                    <h3 className={`${delaGothic.className} text-lg mt-4 mb-2`}>{header1}</h3>
                    <div className='flex flex-col items-start justify-start'>
                        <Link href={"/"} className={`text-lg mt-3`}>{linkAbout}</Link>
                        <Link href={`/${params.locale}/terms-of-use`} className={`text-lg mt-3`}>{linkTerms}</Link>
                        <Link href={`/${params.locale}/privacy`} className={`text-lg mt-3`}>{linkPrivacy}</Link>
                    </div>
                </div>

                <div className='md:mt-0 mt-8'>
                    <h3 className={`${delaGothic.className} text-lg mt-4 mb-2`}>{header2}</h3>
                    <div className='flex flex-col items-start justify-start'>
                        <Link href={`/${params.locale}/#fqas`} className={`text-lg mt-3`}>FQAs</Link>
                        <Link href={`/${params.locale}/contact`} className={`text-lg mt-3`}>{linkContact}</Link>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center my-5 mt-3'>
                <p className='text-opacity-25 my-4'>{copyright}</p>
            </div>

        </footer>
    )
}
