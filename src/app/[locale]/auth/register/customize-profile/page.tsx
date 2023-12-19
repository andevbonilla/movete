"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Dela_Gothic_One } from '@next/font/google';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

const CustomizePage = () => {

    const router = useRouter();

    const continueUserInfo = () => {
        return;
        // router.push("/en/auth/register");
    };

    return (
        <div className='h-screen flex flex-col items-center p-[10%] overflow-y-scroll'>
            <h1 className={`text-white ${delaGothic.className} text-2xl mt-[3rem]`}>Customization</h1>
            <p className='text-white text-lg text-center mt-4 mb-[3rem]'>All right, now let&apos;s customize your profile.</p>

            <div className='w-full flex flex-col items-start mb-10'>
                <p className='text-white mb-2 text-lg font-bold'>Tell us your name:</p>
                <input type="text" placeholder='Your Name' className='py-3 px-5 text-black w-full rounded' />
            </div>

            <div className='w-full flex flex-col items-start mb-10'>
                <p className='text-white mb-2 text-lg font-bold'>Select the color palette:</p>
                <div className='flex justify-center items-center w-full mt-4'>
                    <div className='rounded-full mr-8 w-8 h-8 bg-red-400'></div>
                    <div className='rounded-full mr-8 w-8 h-8 bg-yellow-400'></div>
                    <div className='rounded-full w-8 h-8 bg-green-400'></div>
                </div>
            </div>

            <button onClick={continueUserInfo} type='button' className={`bg-[#00FF8F] text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>Continue</button>
        </div>
    )
}

export default CustomizePage;