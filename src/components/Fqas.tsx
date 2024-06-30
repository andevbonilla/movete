import React from 'react';
import { Dela_Gothic_One } from "@next/font/google";
import { Question } from './Question';
import Link from 'next/link';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export const Fqas = () => {
    return (
        <div className='md:px-[20%] xl:px-[33%] px-[10%] text-white mt-32'>

            <h2 className={`text-2xl mb-10 text-center ${delaGothic.className}`}>
                FQAs
            </h2>

            <Question
                title={"What is movete?"}
            >
                <p className='mt-4 px-2'>Movete is a tool that allows you to create a profile quickly, where you can show all your achievements and progress in the gym or in sports. Through a link that you can share on all your social networks, even on Tinder, to make you even more successful!</p>
            </Question>

            <Question
                title={"How can I create a Movete profile?"}
            >
                <div className='px-2'>
                    <h3 className='text-xl font-bold mt-4 mb-3'>In these simple steps you can have the link that shows how strong you are.</h3>
                    <ul>
                        <li className='mb-3 opacity-80'><span className='font-bold opacity-100'>1.</span> Click on the following link to create an account: <Link target='_BLANK' className='text-blue-400 font-bold opacity-100' href={`${`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/claim-your-link`}`}>Create Account</Link></li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>2.</span> Choose a unique name to identify yourself. Don't worry too much about it—you can change it at any time.
                        </li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>3.</span> If the name is available, you just need to register. You can do this with Google or by creating a password.
                        </li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>4.</span> With this, your profile will be created. It's as easy as that!
                        </li>
                        <li className='mb-3 opacity-80'>
                            <span className='font-bold opacity-100'>5.</span> Now, click on the blue button that says "EDIT PROFILE." There, you can add your sports achievements, change the color palette, add links to your social networks, update your profile picture, write a description, and more.
                        </li>
                    </ul>
                </div>
            </Question>

            <Question
                title={"Does Movete have any cost?"}
            >
                <p className='mt-4 px-2'>
                    Movete is completely free to use. We earn money through the sale of sporting goods at our store, which helps us keep the tool free for everyone. You can check out the store in the following link: <Link target='_BLANK' className='text-blue-400 font-bold opacity-100' href={`${`${process.env.NEXT_PUBLIC_DASHBOARD_LINK}/claim-your-link`}`}>Movete Store</Link>.
                </p>
            </Question >

        </div>
    )
}
