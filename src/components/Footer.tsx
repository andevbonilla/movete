import Link from 'next/link';
import React from 'react';

import { Dela_Gothic_One } from '@next/font/google';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faSquareXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Footer = () => {
    return (
        <footer className='text-white px-[10%]'>

            <div className='flex items-center justify-start'>
                <Link href={"/"} className={`${delaGothic.className} text-3xl my-3`}>Fitalgo</Link>
            </div>

            <div className='flex items-center justify-start mt-6 mb-10'>
                <Link href={"/"} className={`text-lm`} title='instagram link'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className='mr-12' />
                </Link>
                <Link href={"/"} className={`text-lm`} title='twitter link'>
                    <FontAwesomeIcon icon={faSquareXTwitter} size="2x" className='mr-12' />
                </Link>
                <Link href={"/"} className={`text-lm`} title='tiktok link'>
                    <FontAwesomeIcon icon={faTiktok} size="2x" className='mr-12' />
                </Link>
                <Link href={"/"} className={`text-lm`} title='linkedIn link'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
            </div>

            <div>
                <h3 className={`${delaGothic.className} text-lg mt-4 mb-2`}>Enterprise</h3>
                <div className='flex flex-col items-start justify-start'>
                    <Link href={"/"} className={`text-lg mt-3`}>About</Link>
                    <Link href={"/"} className={`text-lg mt-3`}>Jobs</Link>
                    <Link href={"/"} className={`text-lg mt-3`}>Blog</Link>
                </div>
            </div>

            <div>
                <h3 className={`${delaGothic.className} text-lg mt-4 mb-2`}>Help</h3>
                <div className='flex flex-col items-start justify-start'>
                    <Link href={"/"} className={`text-lg mt-3`}>FQAs</Link>
                    <Link href={"/"} className={`text-lg mt-3`}>Contact</Link>
                    <Link href={"/"} className={`text-lg mt-3`}>Support</Link>
                </div>
            </div>

            <div className='flex justify-center items-center my-5'>
                <p className='text-opacity-25 my-4'>Fitalgo © All rights reserved.</p>
            </div>

        </footer>
    )
}