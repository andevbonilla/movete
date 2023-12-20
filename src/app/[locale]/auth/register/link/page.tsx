"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Dela_Gothic_One } from '@next/font/google';
import Link from 'next/link';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

const SetLinkPage = () => {

    const router = useRouter();

    const continueUserInfo = () => {
        router.push("/en/auth/register");
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center p-[10%]'>
            <h1 className={`text-white ${delaGothic.className} text-2xl`}>Welcome!</h1>
            <p className='text-white text-lg text-center mt-4'>The username you choose can be changed at any time.</p>
            <div className='w-full flex items-center justify-start bg-white py-3 px-4 text-black rounded mt-8 text-lg'>
                <span className='font-bold'>fitalgo.com/</span>
                <input className='w-full' type="text" placeholder={`your username`} />
            </div>
            <button onClick={continueUserInfo} type='button' className={`bg-[#00FF8F] text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>Continue</button>
            <div className='flex items-center justify-center mx-[10%] text-base mt-6'>
                <p className='text-white font-bold'>Already have an account? <Link className='text-[#00FF8F] ml-1' href={"/en/auth/login"}>Login</Link></p>
            </div>

        </div>
    )
}

export default SetLinkPage;