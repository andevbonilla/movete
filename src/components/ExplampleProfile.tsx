"use client"
import Image from 'next/image';
import React from 'react';
import { Stat } from './Stat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Profile } from '@/interfaces/ProfileInterface';
import { NoUserSVG } from '@/lib/Svgs';

export const ExampleProfile = ({ username, desc, imgUrl, bannerUrl, colorPalette, exercises }: Profile) => {

    const colorsPalettes = [
        {
            primary: "#ffffff",
            secondary: "#0092F7",
            texts: "#000000",
            userIconColor: "#000000"
        },
        {
            primary: "#001429",
            secondary: "#00FF8F",
            texts: "#ffffff",
            userIconColor: "#ffffff"
        },
        {
            primary: "#ffffff",
            secondary: "#FF0303",
            texts: "#000000",
            userIconColor: "#000000"
        },
        {
            primary: "#ffffff",
            secondary: "#7203FF",
            texts: "#000000",
            userIconColor: "#000000"
        },
    ]

    return (
        <div className={`min-h-[100vh] overflow-y-scroll bg-[${colorsPalettes[colorPalette].primary}]`}>
            {
                (bannerUrl === "")
                    ? <div className='h-32 rounded-t-lg w-full bg-slate-500'></div>
                    : <Image
                        src={require(`@/assets/${bannerUrl}`)}
                        alt='background image example'
                        className='w-full h-32 rounded-t-2xl'
                        width={200}
                        height={50}
                    />
            }
            <div className={`flex flex-col items-center justify-center text-center text-[${colorsPalettes[colorPalette].texts}]`}>
                {
                    (imgUrl === "")
                        ? <NoUserSVG classList={"rounded-full -translate-y-12 w-24 h-24"} color={colorsPalettes[colorPalette].userIconColor} />
                        : <Image
                            src={require(`@/assets/${bannerUrl}`)}
                            alt='background image example'
                            className='rounded-full -translate-y-12 w-16 h-16'
                            width={100}
                            height={100}
                        />
                }
                <h3 className='-translate-y-12 mt-3 font-bold px-[12%] text-lg'>{username}</h3>
                <div className='flex justify-between px-[20%] -translate-y-12 my-3'>
                    <FontAwesomeIcon icon={faGlobe} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}]`} />
                    <FontAwesomeIcon icon={faInstagram} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] ml-6`} />
                    <FontAwesomeIcon icon={faXTwitter} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] ml-6`} />
                </div>
                <p className='-translate-y-12 mt-1 px-[12%]'>{desc}</p>
            </div>
            <div className='text-black'>

                {
                    exercises.map((exer, index) => (
                        <Stat
                            backColor={colorsPalettes[colorPalette].secondary}
                            Weight={exer.weight}
                            ExerciseType={exer.name}
                            NumReps={exer.reps}
                            key={index}
                        />
                    ))
                }

            </div>
        </div>
    )
}