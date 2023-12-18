import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Dela_Gothic_One } from '@next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Navbar = () => {
    const t = useTranslations('Navbar');
    return (
        <div className='bg-[#001429] flex items-center justify-between px-[10%] pt-8 pb-6 text-white fixed top-0 left-0 w-full'>
            <Link href={"/"} className={`${delaGothic.className} text-2xl`}>Fitalgo</Link>
            <FontAwesomeIcon icon={faBars} width={34} height={34} className='text-white' />
        </div>
    )
};
