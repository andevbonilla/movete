"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Dela_Gothic_One } from '@next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLanguage, faTimes } from '@fortawesome/free-solid-svg-icons';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Navbar = ({ aboutText, searchText, dashboardText }: any) => {

    const [showSideMenu, setshowSideMenu] = useState(false);
    const [showLanguageMenu, setshowLanguageMenu] = useState(false);

    const openSideMenu = () => {
        setshowSideMenu(true);
    };

    const closeSideMenu = () => {
        setshowSideMenu(false);
    };

    const openLanguageMenu = () => {
        setshowLanguageMenu(true);
    };

    const closeLanguageMenu = () => {
        setshowLanguageMenu(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[1000]">
            <div className='md:px-[20%] bg-black flex items-center justify-between px-[10%] pt-8 pb-6 text-white'>
                <Link href="/" className={`${delaGothic.className} text-2xl`}>Movete</Link>
                <div className='flex items-center'>
                    <button type='button' title='change language' onClick={openLanguageMenu}>
                        <FontAwesomeIcon icon={faLanguage} className='w-10 h-10 cursor-pointer text-white mr-6' />
                    </button>
                    <button type='button' title='open side menu' onClick={openSideMenu}>
                        <FontAwesomeIcon icon={faBars} size='2x' className='text-white openSideMenu cursor-pointer' />
                    </button>
                </div>
            </div>
            {
                showSideMenu && <div className='fixed h-screen w-full top-0 left-0 z-[1001] flex'>
                    <div onClick={closeSideMenu} className='xl:w-3/4 md:w-2/3 bg-black bg-opacity-60 w-1/3 h-screen cursor-pointer'></div>
                    <div className='xl:w-1/4 md:w-1/3 bg-black bg-opacity-60 w-2/3 h-screen'>
                        <div className={`${showSideMenu && "move-animation"} bg-white text-black py-5 px-10 h-full w-full flex flex-col items-start`}>
                            <FontAwesomeIcon onClick={closeSideMenu} icon={faTimes} size='3x' className='openSideMenu my-5 cursor-pointer' />
                            <Link href="/" className={`${delaGothic.className} text-xl my-5`}>
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
            {
                showLanguageMenu && <div className='z-[997] fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-25 flex justify-center items-center'>
                    <div onClick={closeLanguageMenu} className='cursor-pointer z-[998] fixed w-full top-0 bottom-0 left-0'></div>
                    <div className='bg-white p-10 rounded z-[999] overflow-y-scroll lg:overflow-hidden max-h-[80vh]'>
                        <h3 className='font-bold mb-8 text-xl'>Change language</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            <Link href={'/en'} className={`${(location.pathname.startsWith("/en")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                English
                            </Link>
                            <Link href={'/es'} className={`${(location.pathname.startsWith("/es")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Español
                            </Link>
                            <Link href={'/fr'} className={`${(location.pathname.startsWith("/fr")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Français
                            </Link>
                            <Link href={'/zh'} className={`${(location.pathname.startsWith("/zh")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                中文繁體
                            </Link>
                            <Link href={'/ja'} className={`${(location.pathname.startsWith("/ja")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                日本語
                            </Link>
                            <Link href={'/pt'} className={`${(location.pathname.startsWith("/pt")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Português
                            </Link>
                            <Link href={'/hi'} className={`${(location.pathname.startsWith("/hi")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                हिंदी
                            </Link>
                            <Link href={'/ru'} className={`${(location.pathname.startsWith("/ru")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Русский
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
};
