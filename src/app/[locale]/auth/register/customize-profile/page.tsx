"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Dela_Gothic_One } from '@next/font/google';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <>

            <div className='h-screen flex flex-col items-center p-[10%] overflow-y-scroll relative'>

                <button type='button' className='fixed mx-[15%] bottom-0 left-0 right-0 mb-8 bg-[#00FF8F] text-white font-bold text-xl rounded-full py-3 px-6'>
                    <FontAwesomeIcon icon={faEye} className='mr-3' />
                    Preview Profile
                </button>

                <h1 className={`text-white ${delaGothic.className} text-2xl mt-[3rem]`}>Customization</h1>
                <p className='text-white text-lg text-center mt-4 mb-[3rem]'>All right, now let&apos;s customize your profile.</p>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Tell us your name:</p>
                    <input type="text" placeholder='Your Name' className='py-3 px-5 text-black w-full rounded' />
                </div>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Select the color palette:</p>
                    <div className='flex justify-center items-center w-full mt-4'>

                        <div className='flex items-center rotate-45 border-2 border-white rounded-full'>
                            <div className='bg-[#ffffff] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#0092F7] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </div>

                        <div className='flex items-center rotate-45 ml-10 border-2 border-white rounded-full'>
                            <div className='bg-[#001429] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#00FF8F] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </div>

                        <div className='flex items-center rotate-45 ml-10 border-2 border-white rounded-full'>
                            <div className='bg-[#ffffff] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#FF0303] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </div>

                        <div className='flex items-center rotate-45 ml-10 border-2 border-white rounded-full'>
                            <div className='bg-[#ffffff] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#7203FF] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </div>

                    </div>
                </div>

                <button onClick={continueUserInfo} type='button' className={`bg-[#00FF8F] text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>Continue</button>

            </div>
        </>
    )
}

export default CustomizePage;