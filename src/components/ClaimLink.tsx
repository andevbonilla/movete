"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export const ClaimLink = () => {

    const [linkInput, setlinkInput] = useState("");

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex items-center justify-start bg-white py-3 px-4 text-black rounded mt-4 text-lg'>
                <span className='font-bold'>fitalgo.com/</span>
                <input
                    value={linkInput}
                    onChange={(e) => setlinkInput(e.target.value)}
                    className='w-full'
                    type="text"
                    placeholder={"yourusername"}
                />
            </div>
            <Link href={`/en/auth/register/link?username=${linkInput}`}
                className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>
                {/* {t('get-url')} */}
                Claim your link
            </Link>
        </div>
    )

}
