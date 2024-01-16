"use client"
import React, { useState } from 'react';

export const ClaimLink = () => {

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
                    placeholder={"yourusername"}
                />
            </div>
            <a
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/register/claim-your-link${(linkInput.length > 0) ? `?username=${linkInput}` : ""}`}
                className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}
            >
                Claim your link
            </a>
        </div>
    )

}
