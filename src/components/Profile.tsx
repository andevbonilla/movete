"use client"
import React, { useState } from 'react';
import { Stat } from './Stat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ProfileInterface } from '@/interfaces/ProfileInterface';
import { NoUserSVG } from '@/lib/Svgs';
import { NoPhotoBanner } from './NoPhotoBanner';

export const Profile = ({ username, desc, imgUrl, bannerUrl, colorPalette, exercises, socialMedia }: ProfileInterface) => {

    const [colorsPalettes, setColorsPalettes] = useState([
        {
            primary: "#ffffff",
            secondary: "#0092F7",
            texts: "#000",
            userIconColor: "#000"
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
            texts: "#000",
            userIconColor: "#000"
        },
        {
            primary: "#ffffff",
            secondary: "#7203FF",
            texts: "#000",
            userIconColor: "#000"
        },
    ]);


    return (
        <div className={`min-h-[100vh] overflow-y-scroll bg-[${colorsPalettes[colorPalette].primary}] text-[${colorsPalettes[colorPalette].texts}]`}>
            {
                (bannerUrl === "")
                    ? <NoPhotoBanner title={username} />
                    : <img
                        src={`${bannerUrl}`}
                        alt='background image example'
                        className='w-full h-[8rem] rounded-t-2xl'
                    />
            }
            <div className={`flex flex-col items-center justify-center text-center text-[${colorsPalettes[colorPalette].texts}]`}>
                {
                    (imgUrl === "")
                        ? <NoUserSVG classList={"rounded-full -translate-y-12 w-24 h-24"} color="#ffffff" />
                        : <img
                            src={`${imgUrl}`}
                            alt='background image example'
                            className='rounded-full -translate-y-12 w-[6rem] h-[6rem] p-1 bg-white'
                        />
                }
                <h3 className={`-translate-y-12 mt-3 font-bold px-[12%] text-lg text-[${colorsPalettes[colorPalette].texts}]`}>{username}</h3>

                {/* icons of social media */}
                <div className='flex justify-center items-center px-[20%] -translate-y-12 my-3'>

                    {
                        socialMedia.includes("instagram") && <FontAwesomeIcon icon={faInstagram} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                    {
                        socialMedia.includes("website") && <FontAwesomeIcon icon={faGlobe} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                    {
                        socialMedia.includes("facebook") && <FontAwesomeIcon icon={faFacebook} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                    {
                        socialMedia.includes("twich") && <FontAwesomeIcon icon={faTwitch} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                    {
                        socialMedia.includes("youtube") && <FontAwesomeIcon icon={faYoutube} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                    {
                        socialMedia.includes("twitter") && <FontAwesomeIcon icon={faTwitter} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                    {
                        socialMedia.includes("linkedin") && <FontAwesomeIcon icon={faLinkedin} size='2x' width={22} height={22} className={`text-[${colorsPalettes[colorPalette].texts}] px-2`} />
                    }

                </div>

                <p className={`-translate-y-12 mt-1 px-[12%] text-[${colorsPalettes[colorPalette].texts}]`}>{desc}</p>
            </div>
            <div>

                {
                    exercises.map((exer, index) => (
                        <Stat
                            backColor={colorsPalettes[colorPalette].secondary}
                            Weight={exer.weight}
                            ExerciseType={exer.name}
                            NumReps={exer.reps}
                            metric={exer.metric}
                            key={index}
                        />
                    ))
                }

            </div>
        </div>
    )
}