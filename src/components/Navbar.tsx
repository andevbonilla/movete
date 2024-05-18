"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Dela_Gothic_One } from '@next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Navbar = ({ aboutText, searchText, dashboardText }: any) => {

    const [showSideMenu, setshowSideMenu] = useState(false);

    const openSideMenu = () => {
        setshowSideMenu(true);
    }

    const closeSideMenu = () => {
        setshowSideMenu(false);
    }

    return (
        <nav className='z-[998]'>
            <div className='md:px-[20%] bg-black flex items-center justify-between px-[10%] pt-8 pb-6 text-white fixed top-0 left-0 w-full'>
                <Link href={"/"} className={`${delaGothic.className} text-2xl`}>Movete</Link>
                <FontAwesomeIcon onClick={openSideMenu} icon={faBars} size='2x' className='text-white openSideMenu cursor-pointer' />
            </div>
            {
                showSideMenu && <div className='fixed h-screen w-full top-0 left-0 z-[999] flex'>

                    <div onClick={closeSideMenu} className='xl:w-3/4 md:w-2/3 bg-black bg-opacity-60 w-1/3 h-screen cursor-pointer'></div>

                    <div className='xl:w-1/4 md:w-1/3 bg-black bg-opacity-60 w-2/3 h-screen'>
                        <div className={`${showSideMenu && "move-animation"} bg-white text-black py-5 px-10 h-full w-full flex flex-col items-start`}>

                            <FontAwesomeIcon onClick={closeSideMenu} icon={faTimes} size='3x' className='openSideMenu my-5 cursor-pointer' />

                            <Link href={"/"} className={`${delaGothic.className} text-xl my-5`}>
                                {aboutText}
                            </Link>
                            <a href={`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/`} className={`${delaGothic.className} text-xl my-5`}>
                                {searchText}
                            </a>
                            <a href={`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/dashboard`} className={`${delaGothic.className} text-xl my-5`}>
                                {dashboardText}
                            </a>

                        </div>
                    </div>

                </div>
            }

        </nav>
    )
};
