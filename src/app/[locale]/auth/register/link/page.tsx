"use client"
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dela_Gothic_One } from '@next/font/google';
import Link from 'next/link';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

const SetLinkPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const usernameInParams = searchParams.get('username');
    console.log(usernameInParams)

    const [userLink, setUserLink] = useState(usernameInParams ? usernameInParams : "");
    const [error, setError] = useState("");

    const changeLink = (e: any) => {

        const charactersNotValid = ["<", ">", "?", "&", ":", "~", "@", "!", `"`, "[", "]", "(", ")", "'", "|", "/", "+", ".", "*", "%", "#"];
        let sanitizeLink = e.target.value.toString().toLowerCase();

        if (sanitizeLink.length > 40) {
            setError(`the link is too long try another one of less than 40 characters.`);
            return;
        }

        let errorCount = 0;

        for (let i = 0; i < charactersNotValid.length; i++) {
            if (sanitizeLink.includes(charactersNotValid[i])) {
                errorCount++;
                if (errorCount > 0) {
                    setError(`The character ${charactersNotValid[i]} is not allowed.`);
                }
            } else {
                if (errorCount === 0) {
                    setError(``);
                }
            }
        }

        if (sanitizeLink.length === 0) {
            setError(`the name is required.`);
        } else {
            if (errorCount === 0) {
                setError("");
            }
        }

        setUserLink(sanitizeLink);

    }

    const continueUserInfo = () => {
        if (userLink.length <= 0) return;
        if (error.length > 0) return;
        router.push("/en/auth/register/customize-profile");
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center p-[10%]'>
            <h1 className={`text-white ${delaGothic.className} text-2xl`}>Welcome!</h1>
            <p className='text-white text-lg text-center mt-4'>The username you choose can be changed at any time.</p>

            <div className={`${(error.length > 0) ? "border-2 border-red-600 text-red-600" : "text-black"} w-full flex items-center justify-start bg-white py-3 px-4 text-black rounded mt-8 text-lg`}>
                <span className='font-bold'>fitalgo.com/</span>
                <input
                    value={userLink}
                    onChange={changeLink}
                    className={`w-full`}
                    type="text"
                    placeholder={`your username`}
                />
            </div>
            {
                error.length > 0 && <div className='w-full text-start mt-2'>
                    <span className='font-bold text-red-600'>{error}</span>
                </div>
            }


            <button onClick={continueUserInfo} type='button' className={`${((userLink.length <= 0) || (error.length > 0)) ? "opacity-50" : "opacity-100"} bg-[#00FF8F] text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>Continue</button>
            <div className='flex items-center justify-center mx-[10%] text-base mt-6'>
                <p className='text-white font-bold'>Already have an account? <Link className='text-[#00FF8F] ml-1' href={"/en/auth/login"}>Login</Link></p>
            </div>

        </div>
    )
}

export default SetLinkPage;