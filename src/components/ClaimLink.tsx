"use client"
import React, { useState } from 'react';

export const ClaimLink = ({ placeholderText, buttonText }: any) => {

    const [linkInput, setlinkInput] = useState("");

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex items-center justify-start bg-white py-3 px-4 text-black rounded mt-4 text-lg'>
                <span className='font-bold'>movete.bio/</span>
                <input
                    value={linkInput}
                    onChange={(e) => setlinkInput(e.target.value)}
                    className='w-full'
                    type="text"
                    placeholder={placeholderText}
                />
            </div>
            <a
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/claim-your-link${(linkInput.length > 0) ? `?username=${linkInput}` : ""}`}
                className={`hover:bg-[#00CE74] transition duration-300 bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}
            >
                {buttonText}
            </a>
        </div>
    )

}
